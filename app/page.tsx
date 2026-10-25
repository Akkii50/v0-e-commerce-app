'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, Coffee, CreditCard, LockKeyhole, Minus, Plus, ShieldCheck, Sparkles } from 'lucide-react'

const product = { name: 'The Daily Ritual', price: 24, roast: 'Medium roast · Guatemala + Brazil' }

export default function Page() {
  const [checkout, setCheckout] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [paid, setPaid] = useState(false)

  const total = product.price * quantity

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ee] text-[#241d18] selection:bg-[#c87948]/20">
      <header className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-[-0.02em]" aria-label="Brewed home">
          <span className="flex size-8 items-center justify-center rounded-xl bg-[#241d18] text-[#f7f4ee]"><Coffee className="size-4" /></span>
          <span className="text-[15px]">Brewed<span className="text-[#c87948]">.</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-[12px] font-medium text-[#776b62] md:flex" aria-label="Main navigation">
          <a href="#shop" className="text-[#241d18]">Shop</a><a href="#story">Our story</a><a href="#journal">Journal</a>
        </nav>
        <button onClick={() => setCheckout(true)} className="flex items-center gap-2 rounded-full border border-[#ded7cd] bg-white/60 px-4 py-2 text-[12px] font-semibold transition hover:bg-white" aria-label="Open cart">
          Cart <span className="flex size-5 items-center justify-center rounded-full bg-[#241d18] text-[10px] text-white">{quantity}</span>
        </button>
      </header>

      <section id="top" className="mx-auto grid h-[calc(100vh-64px)] max-w-[1240px] grid-cols-1 gap-4 px-6 pb-6 lg:grid-cols-[1.06fr_.94fr] lg:px-10">
        <div className="relative flex min-h-0 flex-col justify-between overflow-hidden rounded-[28px] bg-[#e9ded0] px-7 py-8 sm:px-12 sm:py-11">
          <div className="relative z-10 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#806d5d]"><Sparkles className="size-3.5" /> Small batch, big feeling</div>
          <div className="relative z-10 max-w-[580px] pb-3">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#b2643b]">Coffee for the curious</p>
            <h1 className="max-w-[610px] text-[clamp(3.5rem,7vw,6.9rem)] font-semibold leading-[.88] tracking-[-0.075em] text-[#241d18]">Make space<br /><span className="text-[#c87948]">for good.</span></h1>
            <p className="mt-7 max-w-[365px] text-[14px] leading-6 text-[#6f6258]">Thoughtful beans, roasted with intent. Your best cup starts here.</p>
            <a href="#shop" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#241d18] px-5 py-3 text-[12px] font-semibold text-white transition hover:bg-[#47352a]">Explore the ritual <ArrowRight className="size-4" /></a>
          </div>
          <div className="absolute -bottom-28 -right-14 size-80 rounded-full border-[32px] border-[#d5c4b2]/70" aria-hidden="true" />
          <div className="absolute bottom-10 right-14 h-32 w-24 rotate-12 rounded-b-[42px] rounded-t-[12px] border-[10px] border-[#a99683]/50" aria-hidden="true" />
        </div>

        <div id="shop" className="grid min-h-0 grid-rows-[1fr_auto] gap-4">
          <article className="relative min-h-0 overflow-hidden rounded-[28px] bg-[#d1b49b] p-7 sm:p-9">
            <div className="relative z-10 flex items-start justify-between"><span className="rounded-full bg-[#f8f1e7]/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#745945]">New release</span><span className="text-[12px] font-semibold text-[#7b604e]">01 / 03</span></div>
            <div className="absolute left-[15%] top-[18%] size-[58%] rounded-full bg-[#b99578]/40 blur-3xl" aria-hidden="true" />
            <div className="absolute left-[25%] top-[22%] z-10 flex h-[57%] w-[45%] rotate-[-8deg] flex-col items-center justify-end rounded-b-[48%] rounded-t-[12%] bg-[#faf6ef] pb-[13%] shadow-[20px_28px_30px_rgba(80,48,29,.16)]" aria-label="Illustration of a cup of coffee">
              <div className="absolute -right-[27%] top-[20%] h-[38%] w-[35%] rounded-r-full border-[14px] border-[#faf6ef]" /><div className="mb-3 h-1 w-16 rounded-full bg-[#e3d7c8]" /><div className="h-1.5 w-9 rounded-full bg-[#d8c5b2]" />
            </div>
            <div className="absolute bottom-7 left-7 right-7 z-20 flex items-end justify-between sm:left-9 sm:right-9"><div><h2 className="text-2xl font-semibold tracking-[-0.04em]">{product.name}</h2><p className="mt-1 text-[11px] text-[#745945]">{product.roast}</p></div><p className="text-xl font-semibold">${product.price}<span className="text-xs font-normal text-[#745945]"> / 12oz</span></p></div>
          </article>
          <div className="flex items-center justify-between rounded-[22px] bg-white/70 px-5 py-4"><div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-full bg-[#eee5da]"><ShieldCheck className="size-4 text-[#b2643b]" /></span><div><p className="text-[12px] font-semibold">Roasted fresh, always</p><p className="text-[10px] text-[#887a70]">Ships within 48 hours</p></div></div><button onClick={() => setCheckout(true)} className="flex items-center gap-2 rounded-full bg-[#c87948] px-5 py-3 text-[12px] font-semibold text-white transition hover:bg-[#a95e34]">Buy now <ArrowRight className="size-4" /></button></div>
        </div>
      </section>

      {checkout && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#241d18]/35 p-4 backdrop-blur-sm"><section className="w-full max-w-[440px] rounded-[28px] bg-[#fbf9f5] p-6 shadow-2xl sm:p-8" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
        {paid ? <div className="flex flex-col items-center py-8 text-center"><span className="mb-5 flex size-14 items-center justify-center rounded-full bg-[#dfe9d8] text-[#4f7048]"><Check className="size-7" /></span><h2 className="text-2xl font-semibold tracking-[-.04em]">You&apos;re all set.</h2><p className="mt-2 max-w-[280px] text-sm leading-6 text-[#776b62]">Your Daily Ritual is on its way. Thanks for keeping good coffee close.</p><button onClick={() => { setPaid(false); setCheckout(false) }} className="mt-7 rounded-full bg-[#241d18] px-5 py-3 text-xs font-semibold text-white">Back to shop</button></div> : <><div className="mb-6 flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#b2643b]">Secure checkout</p><h2 id="checkout-title" className="mt-1 text-2xl font-semibold tracking-[-.04em]">Your ritual, ready.</h2></div><button onClick={() => setCheckout(false)} className="rounded-full p-2 text-[#887a70] hover:bg-[#eee5da]" aria-label="Close checkout"><Minus className="size-4 rotate-45" /></button></div><div className="mb-6 flex items-center justify-between rounded-2xl bg-[#f0e8de] p-4"><div><p className="text-sm font-semibold">{product.name}</p><p className="mt-1 text-[11px] text-[#887a70]">{product.roast}</p></div><div className="flex items-center gap-2"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex size-7 items-center justify-center rounded-full bg-white" aria-label="Decrease quantity"><Minus className="size-3" /></button><span className="w-4 text-center text-xs font-semibold">{quantity}</span><button onClick={() => setQuantity(quantity + 1)} className="flex size-7 items-center justify-center rounded-full bg-white" aria-label="Increase quantity"><Plus className="size-3" /></button></div></div><form onSubmit={(event) => { event.preventDefault(); setPaid(true) }} className="flex flex-col gap-4"><label className="text-[11px] font-semibold text-[#574940]">Email<input required type="email" placeholder="you@example.com" className="mt-1.5 w-full rounded-xl border border-[#ded7cd] bg-white px-3.5 py-3 text-sm outline-none ring-[#c87948] placeholder:text-[#b5aaa0] focus:ring-2" /></label><label className="text-[11px] font-semibold text-[#574940]">Card details<div className="mt-1.5 flex items-center rounded-xl border border-[#ded7cd] bg-white px-3.5 focus-within:ring-2 focus-within:ring-[#c87948]"><CreditCard className="mr-2 size-4 text-[#9b8c80]" /><input required inputMode="numeric" placeholder="1234 1234 1234 1234" className="min-w-0 flex-1 py-3 text-sm outline-none placeholder:text-[#b5aaa0]" /></div></label><div className="grid grid-cols-2 gap-3"><input required placeholder="MM / YY" className="rounded-xl border border-[#ded7cd] bg-white px-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-[#c87948]" /><input required placeholder="CVC" className="rounded-xl border border-[#ded7cd] bg-white px-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-[#c87948]" /></div><div className="mt-2 flex items-center justify-between border-t border-[#e7dfd5] pt-4"><span className="text-sm text-[#776b62]">Total</span><span className="text-xl font-semibold">${total}.00</span></div><button type="submit" className="flex items-center justify-center gap-2 rounded-xl bg-[#241d18] py-3.5 text-sm font-semibold text-white transition hover:bg-[#47352a]">Pay ${total}.00 <LockKeyhole className="size-4" /></button></form><p className="mt-4 text-center text-[10px] text-[#9b8c80]">Demo checkout · Your card will not be charged</p></>}
      </section></div>}
    </main>
  )
}

