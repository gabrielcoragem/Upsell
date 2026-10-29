import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { test } from 'node:test';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';

const routing = readFileSync(new URL('../public/funnel-routes.js', import.meta.url), 'utf8');
const routes = [
  ['/', 'https://checkout.kashpay.com.br', 'aa1b0ed2f8cf7970', false],
  ['/s/4c5277c05d2c7ac9/', 'https://checkout.kashpay.com', '4c5277c05d2c7ac9', false],
  ['/w/01941d1656d6904e/', 'https://pay.neurodyneprotocol.com', '01941d1656d6904e', false],
  ['/s/4c5277c05d2c7ac9/discount/', 'https://checkout.kashpay.com', '7d8723d4260f4cc9', true],
  ['/w/01941d1656d6904e/discount/', 'https://pay.neurodyneprotocol.com', 'cf7832638df3668c', true],
] as const;

for (const [path, origin, token, discount] of routes) {
  test(`correct script and exact step token: ${path}`, () => {
    const dom = new JSDOM('<html><head></head><body></body></html>', { url: 'https://onetimeoffer.neurodyneprotocol.com' + path });
    vm.runInNewContext(routing, { window: dom.window, location: dom.window.location, document: dom.window.document });
    assert.equal((dom.window as any).neurodyneFunnel.link, origin + '/u/' + token);
    assert.equal((dom.window as any).neurodyneFunnel.discount, discount);
    assert.equal(dom.window.document.querySelector('meta')?.getAttribute('content'), origin + '/u/' + token);
    assert.equal(dom.window.document.querySelector('script')?.src, origin + '/scripts/upsell-processor.js');
    dom.window.close();
  });
}

test('an unconfigured discount never falls back to a full-price step', () => {
  const dom = new JSDOM('<html><head></head><body></body></html>', { url: 'https://example.com/s/0000000000000000/discount/' });
  vm.runInNewContext(routing, { window: dom.window, location: dom.window.location, document: dom.window.document });
  assert.equal((dom.window as any).neurodyneFunnel.valid, false);
  assert.equal(dom.window.document.querySelector('script'), null);
  dom.window.close();
});

test('buttons use their own stage; mounting never buys; missing session never buys', async () => {
  const dom = new JSDOM('<html><body><div id="root"></div></body></html>', { url: 'https://example.com/?ks=test-session' });
  const w = dom.window as any;
  Object.assign(globalThis, { window: w, document: w.document, HTMLElement: w.HTMLElement, SVGElement: w.SVGElement, IS_REACT_ACT_ENVIRONMENT: true });
  w.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  w.HTMLDialogElement.prototype.close = function () { this.open = false; };
  const calls: Array<[string, string]> = [];
  w.acceptUpsell = (link: string) => calls.push(['accept', link]);
  w.declineUpsell = (link: string) => calls.push(['decline', link]);
  const { default: App } = await import('../src/App.tsx');
  for (const [path, origin, token, discount] of routes) {
    for (const action of ['accept', 'decline'] as const) {
      calls.length = 0;
      w.neurodyneFunnel = { origin, link: origin + '/u/' + token, discount, valid: true };
      const host = document.createElement('div'); document.body.append(host);
      const root = createRoot(host);
      await act(async () => { root.render(<App />); });
      assert.equal(calls.length, 0, `mount made a payment: ${path}`);
      const selector = discount ? (action === 'accept' ? '.discount-accept' : '.discount-decline') : (action === 'accept' ? 'main button' : 'main a');
      const button = host.querySelector(selector)!;
      await act(async () => { button.dispatchEvent(new w.MouseEvent('click', { bubbles: true, cancelable: true })); button.dispatchEvent(new w.MouseEvent('click', { bubbles: true, cancelable: true })); });
      assert.deepEqual(calls, [[action, origin + '/u/' + token]], `${path}: wrong token or duplicate action`);
      await act(async () => { root.unmount(); }); host.remove();
    }
  }
  calls.length = 0;
  w.history.replaceState(null, '', '/');
  w.neurodyneFunnel = { origin: routes[1][1], link: routes[1][1] + '/u/' + routes[1][2], discount: true, valid: true };
  const root = createRoot(document.getElementById('root')!);
  await act(async () => { root.render(<App />); });
  await act(async () => { document.querySelector('.discount-accept')!.dispatchEvent(new w.MouseEvent('click', { bubbles: true })); });
  assert.equal(calls.length, 0);
  assert.match(document.querySelector('[role="alert"]')!.textContent!, /purchase session/);
  await act(async () => { root.unmount(); });
  dom.window.close();
});
