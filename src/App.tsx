import { CheckCircle2, Sparkles, ShieldCheck, Check, Lock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const UPSELL_LINK = 'https://pay.neurodyneprotocol.com/u/2a346b9bc04857cd';
const CHECKOUT_FALLBACK = 'https://checkout.kashpay.com.br/checkout/checkout-1775860375358';
const THANKYOU_FALLBACK = 'https://www.neurodyneprotocol.com/thank-you';

const handleAcceptUpsell = (e: any) => {
  e.preventDefault();
  const fn = (window as any).acceptUpsell;
  if (typeof fn === 'function') { fn(UPSELL_LINK); return; }
  window.location.href = CHECKOUT_FALLBACK;
};

const handleDeclineUpsell = (e: any) => {
  e.preventDefault();
  const fn = (window as any).declineUpsell;
  if (typeof fn === 'function') { fn(UPSELL_LINK); return; }
  window.location.href = THANKYOU_FALLBACK;
};


export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-emerald-200 selection:text-emerald-900 pb-16 tracking-[0.015em] overflow-x-hidden">
      
      {/* Top Success Banner */}
      <div className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 py-5 px-4 shadow-md">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center justify-center gap-2 mb-3">
            ✅ Your Order Was Successful! Your Neurodyne Protocol Is Ready
          </h1>
          <p className="inline-block bg-white/20 text-white px-6 py-2.5 rounded-full text-base md:text-lg font-bold shadow-sm backdrop-blur-sm border border-white/30">
            You now have full access. Check your email for login details.
          </p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-5 md:px-8 pt-12 md:pt-16">
        
        {/* Attention Grabber */}
        <div className="bg-white border-l-4 border-amber-400 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-r-2xl p-6 md:p-8 mb-16">
          <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed text-center">
            But before you go, please read this short message. <span className="font-bold text-amber-600">It could save you weeks of waiting for results.</span>
          </p>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-[1.2] text-center mb-10 tracking-tight">
          Most People Over 45 Lose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">Up to 80%</span> of the Neurodyne Formula Before It Ever Reaches Their Brain<br/><span className="text-emerald-600 mt-2 block">Here's How to Fix That</span>
        </h2>

        <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed text-gray-700">
          <p>You just made a great decision. The Neurodyne Protocol is in your hands.</p>
          <p>But I have to be honest with you about something.</p>
          <p>Something I wish I could have said in the presentation, but there wasn't enough time.</p>
          <p>It has nothing to do with the formula. <strong className="text-gray-900">The formula works.</strong></p>
          <p>It has to do with your body's ability to actually <strong className="text-gray-900">USE</strong> it.</p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10 md:my-14"></div>

        {/* The Problem Section */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-red-50 p-3 rounded-2xl border border-red-100">
            <Lock className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Here's the Problem
          </h3>
        </div>

        <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed text-gray-700">
          <p>Remember how I explained that the Neurodyne formula is "fat-loving"? That's how it sneaks past the blood-brain barrier and reaches your damaged neurons.</p>
          <p>That part is true. That's the science.</p>
          <p className="font-semibold text-gray-900">But here's what I didn't say:</p>
          <p>That door to your brain? <strong className="text-gray-900">It doesn't stay open all the time.</strong></p>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mt-8">
            <p className="italic text-gray-600">
              Think of it like a locked gate. The formula has the right key. But if the lock is rusty, if your body's fat-burning system is slow because of age, diet, or stress, the key goes in… <strong className="text-gray-900 not-italic">and it just won't turn.</strong>
            </p>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
          What happens next?
        </h3>

        <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed text-gray-700">
          <p>Your body treats those powerful compounds like garbage. It flushes them out. Through your liver. Through your kidneys. <strong className="text-red-500">Gone.</strong></p>
          <p>You did everything right. You prepared the formula. You took it under your tongue. You waited.</p>
          <p className="font-semibold text-gray-900 text-xl md:text-2xl">But most of it never made it to your brain.</p>
          <p>Not because the formula is bad. <strong className="text-gray-900">Because the gate was stuck.</strong></p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10 md:my-14"></div>

        {/* The Difference Section */}
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight">
          This Is Why Some People Feel Results in Days… And Others Wait Weeks
        </h3>

        <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed text-gray-700">
          <p>It's not luck. It's not genetics.</p>
          <p className="font-semibold text-gray-900 text-xl md:text-2xl">It's whether the gate was open or closed when they took the formula.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-400"></div>
              <p className="font-bold text-gray-900 mb-3 text-lg">A young person with a fast metabolism?</p>
              <p className="text-gray-600">Gate wide open. The formula rushes in. They feel sharper in 3 days.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 relative overflow-hidden opacity-90">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-300"></div>
              <p className="font-bold text-gray-900 mb-3 text-lg">Someone over 45 with a slower metabolism?</p>
              <p className="text-gray-600">Gate half-shut. Maybe 20% of the formula gets through. The rest is wasted. They wait 3 weeks. Maybe 4. And they start thinking, "This doesn't work for me."</p>
            </div>
          </div>

          <p className="font-bold text-gray-900 text-xl">But it does work.</p>
          <p>Their body just wasn't ready to let it in.</p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10 md:my-14"></div>

        {/* The Solution Section */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 mb-10 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-emerald-500 rounded-full blur-[80px] opacity-40"></div>
          
          <h3 className="text-2xl md:text-4xl font-bold mb-8 relative z-10">
            There's a Simple Fix<br/>It Takes 5 Minutes
          </h3>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-300 relative z-10">
            <p>We created a short guide called the <strong className="text-white">Neurodyne Accelerator</strong>.</p>
            <p>It shows you 3 simple things to do right before you take your Neurodyne drops.</p>
            <p>That's it. 5 minutes before each dose. No pills. No powders. No equipment. No extra cost.</p>
            <p className="font-semibold text-emerald-300">Just three easy steps using things you probably already have in your kitchen.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          What these 3 steps do:
        </h3>

        <div className="space-y-5 mb-12">
          {[
            { text: `They <strong class="text-gray-900 font-bold">"unlock the gate."</strong> They wake up your body's fat-transport system so it's ready to carry the formula straight to your brain.` },
            { text: `They push the formula through the blood-brain barrier faster, <strong class="text-gray-900 font-bold">in about 2 minutes instead of 10.</strong>` },
            { text: `They make sure almost nothing is wasted. Instead of losing 80% of each dose, <strong class="text-gray-900 font-bold">your body uses nearly all of it.</strong>` }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                <span className="text-white font-bold text-sm">→</span>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{__html: item.text}} />
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          The difference?
        </h3>

        <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed text-gray-700 mb-10">
          <p><strong className="text-red-500">Without the Accelerator:</strong> the formula trickles into your brain slowly. Some days it works. Some days most of it is flushed away. Results take weeks.</p>
          <p><strong className="text-emerald-600">With the Accelerator:</strong> the formula floods into your brain every single time. Consistently. Fully. Results come in days.</p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10 md:my-14"></div>

        {/* Mistakes Section */}
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight text-center">
          It Also Shows You Two Things Most People Get Wrong
        </h3>

        <div className="space-y-12">
          <div className="bg-white border border-rose-100 shadow-[0_8px_30px_rgb(0,0,0,0.05)] rounded-3xl p-8 md:p-10 relative">
            <div className="absolute -top-4 left-8 bg-gradient-to-r from-rose-500 to-red-500 text-white px-5 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase shadow-md">Mistake #1</div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6 mt-2">Taking the formula at the wrong time</h4>
            <div className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>Most people take it whenever they remember. Morning. Afternoon. After lunch. Random.</p>
              <p>But there's one specific window during the day when your blood-brain barrier is most "open", when your body is naturally primed to absorb fat-soluble compounds.</p>
              <p><strong className="text-gray-900">Take it during this window and absorption nearly doubles.</strong></p>
              <p>Take it outside this window and you're fighting your own biology.</p>
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-slate-800 font-medium mt-6">
                The Accelerator shows you exactly when that window is. Down to the hour.
              </div>
            </div>
          </div>

          <div className="bg-white border border-rose-100 shadow-[0_8px_30px_rgb(0,0,0,0.05)] rounded-3xl p-8 md:p-10 relative">
            <div className="absolute -top-4 left-8 bg-gradient-to-r from-rose-500 to-red-500 text-white px-5 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase shadow-md">Mistake #2</div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6 mt-2">Eating the wrong thing before your dose</h4>
            <div className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>Certain foods slam the gate shut for hours. Common foods you eat every day without thinking about it.</p>
              <p>Other foods, simple, cheap, everyday foods, throw the gate wide open.</p>
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-slate-800 font-medium mt-6">
                The Accelerator gives you a one-page cheat sheet. "Eat this before your dose. Avoid that." Simple as making toast.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10 md:my-14"></div>

        {/* Stakes Section */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 -mt-2 md:-mt-4">
          Let's Be Real About What's at Stake
        </h3>

        <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed text-gray-700">
          <p>You're about to start the Neurodyne Protocol. You're going to spend time preparing the formula. You're going to spend money on the ingredients. You're going to measure, mix, and take your drops every day.</p>
          <p>That takes effort. That takes commitment.</p>
          <p className="font-bold text-gray-900 text-xl md:text-2xl mt-10">So ask yourself:</p>
          
          <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-xl mt-8 mb-6 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
            <p className="text-2xl md:text-3xl font-bold leading-tight">
              Do you want 20% of that effort to work? Or 100%?
            </p>
          </div>
          
          <p>Because right now, without preparing the gate, most of what you're taking is being thrown away by your own body.</p>
          <p>Every drop you prepare has a cost. In time. In money. In hope.</p>
          <p className="font-bold text-gray-900 text-xl">The Accelerator makes sure none of it is wasted.</p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10 md:my-14"></div>

        {/* What You Get Section */}
        <div className="bg-gradient-to-b from-emerald-50/50 to-white border-2 border-emerald-500/20 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-emerald-900/5 mb-12 relative">
          <div className="absolute top-0 right-8 bg-emerald-500 text-white px-6 py-2 rounded-b-2xl font-bold tracking-widest text-xs md:text-sm shadow-md">
            INSTANT ACCESS
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 mt-4">
            Here's What You Get
          </h3>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            The <strong className="text-gray-900">Neurodyne Accelerator</strong>, a short, step-by-step guide that shows you:
          </p>

          <div className="space-y-5 mb-10">
            {[
              `3 simple things to do 5 minutes before each dose (using stuff from your kitchen)`,
              `The exact time window to take the formula for maximum absorption`,
              `Which common foods to avoid before your dose (and which ones help)`,
              `How to make sure your body uses nearly 100% of every drop, not 20%`
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-emerald-100 p-1 rounded-full mt-1">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                </div>
                <p className="text-lg md:text-xl text-gray-700">→ {text}</p>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-600 italic font-medium">
            No fluff. No long reading. Open it, follow the steps, done.
          </p>
        </div>

        {/* Price Section */}
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          How Much?
        </h3>

        <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed text-gray-700 text-center">
          <p>If we sold this separately, it would be $997. And it would be worth every cent, because it could literally double or triple the speed of your results.</p>
          <p className="font-bold text-gray-900 text-xl md:text-2xl">But you're not paying $997.</p>
          <p>Because you're seeing this page right now, seconds after your purchase. That tells me you're serious. You're not going to let the protocol sit untouched. You actually want your memory back.</p>
          <p className="font-medium">So today, one time only, on this page only, you can add the Neurodyne Accelerator to your order for just:</p>
          
          <div className="my-10 md:my-12">
            <span className="text-[6rem] md:text-[12rem] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-emerald-500 to-emerald-700 tracking-tighter drop-shadow-md">
              $147
            </span>
          </div>

          <div className="flex flex-col items-center mt-2 mb-10">
            <motion.a 
              href="#" onClick={handleAcceptUpsell}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, y: -4, boxShadow: "0 25px 30px -5px rgba(34, 197, 94, 0.5), 0 10px 15px -3px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-b from-[#22C55E] to-[#16a34a] text-white py-4 md:py-5 px-6 rounded-2xl shadow-[0_0_40px_-10px_rgba(34,197,94,0.6)] flex items-center justify-center gap-4 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-xl md:text-2xl font-extrabold tracking-wide uppercase drop-shadow-sm">YES! Add the Neurodyne Accelerator</span>
              </div>
              <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </motion.a>

            <a href="#" onClick={handleDeclineUpsell} className="mt-8 text-sm md:text-base text-gray-400 hover:text-gray-600 transition-colors max-w-lg text-center underline decoration-gray-300 underline-offset-4">
              No thanks, I'll take the formula without preparing my body and hope my absorption is good enough on its own.
            </a>
          </div>

          <p className="font-bold text-gray-900">One payment. Not a subscription. You get instant access right now, alongside your Neurodyne Protocol.</p>
        </div>

        {/* Guarantee */}
        <div className="flex flex-col items-center text-center bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 md:p-12 my-12 md:my-16">
          <ShieldCheck className="w-16 h-16 text-emerald-500 mb-6" />
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            And just like the Neurodyne Protocol, the Accelerator is covered by a full <strong className="text-gray-900">60-day money-back guarantee.</strong>
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            Try it. Use the 3 steps before your doses. Follow the timing guide.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            If you don't feel a noticeable difference in how fast the protocol kicks in, email us. Full refund. No questions asked. No hassle.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-semibold mb-6">
            You keep the guide. We eat the cost.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">
            There is zero risk.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="flex flex-col items-center mt-12 mb-16">
          <motion.a 
            href="#" onClick={handleAcceptUpsell}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 25px 30px -5px rgba(34, 197, 94, 0.5), 0 10px 15px -3px rgba(34, 197, 94, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-b from-[#22C55E] to-[#16a34a] text-white py-4 md:py-5 px-6 rounded-2xl shadow-[0_0_40px_-10px_rgba(34,197,94,0.6)] flex items-center justify-center gap-4 group cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-xl md:text-2xl font-extrabold tracking-wide uppercase drop-shadow-sm">YES! Add the Neurodyne Accelerator</span>
            </div>
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </motion.a>
          
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 mt-6 text-sm md:text-base text-gray-500 font-medium">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> ✓ Instant access</span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> ✓ One-time payment</span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> ✓ 60-day money-back guarantee</span>
          </div>

          <a href="#" onClick={handleDeclineUpsell} className="mt-10 text-sm md:text-base text-gray-400 hover:text-gray-600 transition-colors max-w-lg text-center underline decoration-gray-300 underline-offset-4">
            No thanks, I'll take the formula without preparing my body and hope my absorption is good enough on its own.
          </a>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10 md:my-14"></div>

        {/* One Last Thing */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          One Last Thing
        </h3>

        <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed text-gray-700 text-center max-w-2xl mx-auto">
          <p>Think about it this way.</p>
          <p>You just invested in the Neurodyne Protocol because you want your mind back. Your memory. Your sharpness. Your independence.</p>
          
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mt-10 mb-8">
            <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">The formula is the engine.</p>
            <p className="text-xl md:text-2xl font-semibold text-emerald-600">The Accelerator is the ignition key.</p>
          </div>
          
          <p>Without it, the engine might start… eventually. After a few tries. After a few weeks.</p>
          <p className="font-bold text-gray-900">With it, you turn the key and the engine roars to life.</p>
          <p className="text-xl md:text-2xl font-bold text-gray-900 mt-10">$147 to make sure the engine starts on the first try.</p>
          <p>You'll know within the first week if it was worth it.</p>
          <p className="font-medium italic mt-6">I think you already know the answer.</p>
        </div>

        {/* CTA 2 */}
        <div className="flex flex-col items-center mt-14 mb-24">
          <motion.a 
            href="#" onClick={handleAcceptUpsell}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 25px 30px -5px rgba(34, 197, 94, 0.5), 0 10px 15px -3px rgba(34, 197, 94, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-b from-[#22C55E] to-[#16a34a] text-white py-4 md:py-5 px-6 rounded-2xl shadow-[0_0_40px_-10px_rgba(34,197,94,0.6)] flex items-center justify-center gap-4 group cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-xl md:text-2xl font-extrabold tracking-wide uppercase drop-shadow-sm">YES, Add the Accelerator</span>
            </div>
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </motion.a>

          <a href="#" onClick={handleDeclineUpsell} className="mt-10 text-sm md:text-base text-gray-400 hover:text-gray-600 transition-colors underline decoration-gray-300 underline-offset-4">
            No thanks, I'll skip this.
          </a>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-200 pt-10 pb-6 text-center">
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-4xl mx-auto">
            © 2026 Neurodyne Protocol. All rights reserved. Results may vary based on individual factors including age, health status, and consistency of use. This product is a digital educational guide and does not constitute medical advice. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult your doctor before starting any new health regimen.
          </p>
        </div>

      </main>
    </div>
  );
}
