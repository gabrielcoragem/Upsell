(function () {
  var match = location.pathname.match(/^\/([sw])\/([a-f0-9]{16})(\/discount)?\/?$/);
  var discounts = {
    's/4c5277c05d2c7ac9': '7d8723d4260f4cc9',
    'w/01941d1656d6904e': 'cf7832638df3668c'
  };
  var origin = match ? (match[1] === 'w' ? 'https://pay.neurodyneprotocol.com' : 'https://checkout.kashpay.com') : 'https://checkout.kashpay.com.br';
  var discount = Boolean(match && match[3]);
  var token = match ? (discount ? discounts[match[1] + '/' + match[2]] : match[2]) : 'aa1b0ed2f8cf7970';
  var valid = /^[a-f0-9]{16}$/.test(token || '');
  window.neurodyneFunnel = { origin: origin, link: valid ? origin + '/u/' + token : '', discount: discount, valid: valid };
  if (!valid) return;
  var meta = document.createElement('meta');
  meta.name = 'kashpay-upsell-step';
  meta.content = window.neurodyneFunnel.link;
  document.head.appendChild(meta);
  var script = document.createElement('script');
  script.src = origin + '/scripts/upsell-processor.js';
  script.async = true;
  document.head.appendChild(script);
})();
