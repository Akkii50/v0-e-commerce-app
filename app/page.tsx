'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  CreditCard,
  LockKeyhole,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const product = {
  name: 'Aether One',
  eyebrow: 'AETHER / 01',
  tagline: 'Power, made quiet.',
  description: 'A focused desktop for your most ambitious work. Engineered to disappear into your workflow.',
  price: 2499,
}

export default function Page() {
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [paid, setPaid] = useState(false)

  const total = product.price * quantity
  const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-accent/30">
      <header className="mx-auto flex h-16 max-w-[1440px] items-center justify-between border-b border-border/70 px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-[-0.03em]" aria-label="Aether home">
          <span className="flex size-7 items-center justify-center rounded-full bg-foreground text-background"><Sparkles className="size-3.5" /></span>
          AETHER
        </a>
        <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground md:flex" aria-label="Main navigation">
          <a className="text-foreground" href="#product">Product</a>
          <a href="#details">Details</a>
          <a href="#support">Support</a>
        </nav>
        <button onClick={() => setCheckoutOpen(true)} className="flex items-center gap-2 rounded-full border border-border px-3.5 py-2 text-[11px] font-semibold transition hover:bg-muted" aria-label="Open checkout">
          Bag <span className="flex size-5 items-center justify-center rounded-full bg-foreground text-[10px] text-background">{quantity}</span>
        </button>
      </header>

      <section id="product" className="mx-auto grid h-[calc(100vh-64px)] max-w-[1440px] min-h-[480px] grid-cols-1 gap-5 px-6 py-5 lg:grid-cols-[0.93fr_1.07fr] lg:px-10">
        <div className="flex min-h-0 flex-col justify-between rounded-[28px] bg-card p-7 lg:p-10">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span>{product.eyebrow}</span><span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent" /> In stock</span>
          </div>
          <div className="max-w-[520px] pb-3">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Introducing</p>
            <h1 className="max-w-[600px] text-[clamp(3.8rem,7.5vw,8.2rem)] font-semibold leading-[0.84] tracking-[-0.09em]">{product.name}<span className="text-accent">.</span></h1>
            <p className="mt-6 text-2xl font-medium tracking-[-0.04em] text-muted-foreground">{product.tagline}</p>
            <p className="mt-4 max-w-[360px] text-sm leading-6 text-muted-foreground">{product.description}</p>
            <div className="mt-7 flex items-center gap-5">
              <button onClick={() => setCheckoutOpen(true)} className="group inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3.5 text-xs font-semibold text-background transition hover:bg-accent">Buy now <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></button>
              <span className="text-lg font-semibold tracking-[-0.04em]">{money.format(product.price)}</span>
            </div>
          </div>
          <div className="grid max-w-[460px] grid-cols-3 gap-4 border-t border-border pt-5" id="details">
            <div><p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Performance</p><p className="mt-2 text-xs font-semibold">M4 Neural Engine</p></div>
            <div><p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Memory</p><p className="mt-2 text-xs font-semibold">32GB unified</p></div>
            <div><p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Finish</p><p className="mt-2 text-xs font-semibold">Midnight titanium</p></div>
          </div>
        </div>

        <div className="relative min-h-0 overflow-hidden rounded-[28px] bg-[#11151b] p-7 text-white lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(107,143,255,.32),transparent_34%),radial-gradient(circle_at_52%_75%,rgba(32,206,218,.12),transparent_30%)]" />
          <div className="relative z-10 flex items-start justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50"><span>Designed for the next</span><span>02 / 02</span></div>
          <div className="absolute left-1/2 top-[48%] aspect-[1.4/1] w-[73%] -translate-x-1/2 -translate-y-1/2 rounded-[18%] border border-white/20 bg-gradient-to-br from-[#5c6572] via-[#252b35] to-[#0c0f13] shadow-[0_45px_100px_rgba(0,0,0,.75)] rotate-[-7deg]" aria-label="Aether One desktop computer product render">
            <div className="absolute inset-[5%] overflow-hidden rounded-[14%] border border-white/10 bg-[#080b10]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_34%,rgba(90,175,255,.4),transparent_12%),linear-gradient(135deg,#13203b,#090b10_60%)]" /><div className="absolute bottom-[13%] left-[12%] right-[12%] flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.15em] text-white/50"><span>aether os</span><span>01:24</span></div></div>
            <div className="absolute -bottom-[18%] left-[16%] right-[16%] h-[30%] rounded-b-[45%] border-b border-x border-white/20 bg-gradient-to-b from-[#252d39] to-[#0c0f13] shadow-[0_30px_40px_rgba(0,0,0,.45)]" />
          </div>
          <div className="absolute bottom-8 left-7 right-7 z-10 flex items-end justify-between lg:left-10 lg:right-10"><div><p className="text-xs font-semibold">Aether One</p><p className="mt-1 text-[10px] text-white/50">The calmest computer you&apos;ll ever use.</p></div><ShieldCheck className="size-5 text-accent" /></div>
        </div>
      </section>

      {checkoutOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="checkout-title"><section className="w-full max-w-[460px] rounded-[26px] bg-card p-6 text-foreground shadow-2xl sm:p-8">
        {paid ? <div className="flex flex-col items-center py-10 text-center"><span className="mb-5 flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent"><Check className="size-7" /></span><h2 className="text-2xl font-semibold tracking-[-0.04em]">Order confirmed.</h2><p className="mt-2 max-w-[280px] text-sm leading-6 text-muted-foreground">Aether One is reserved for you. We&apos;ll send tracking details to your inbox.</p><button onClick={() => { setPaid(false); setCheckoutOpen(false) }} className="mt-7 rounded-full bg-foreground px-5 py-3 text-xs font-semibold text-background">Back to product</button></div> : <><div className="mb-6 flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Secure checkout</p><h2 id="checkout-title" className="mt-2 text-2xl font-semibold tracking-[-0.05em]">Complete your order</h2></div><button onClick={() => setCheckoutOpen(false)} className="rounded-full p-2 text-muted-foreground hover:bg-muted" aria-label="Close checkout"><X className="size-4" /></button></div><div className="mb-6 flex items-center justify-between rounded-2xl bg-muted p-4"><div><p className="text-sm font-semibold">{product.name}</p><p className="mt-1 text-[11px] text-muted-foreground">Midnight titanium · Qty {quantity}</p></div><div className="flex items-center gap-2"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex size-7 items-center justify-center rounded-full bg-background" aria-label="Decrease quantity"><Minus className="size-3" /></button><span className="w-4 text-center text-xs font-semibold">{quantity}</span><button onClick={() => setQuantity(quantity + 1)} className="flex size-7 items-center justify-center rounded-full bg-background" aria-label="Increase quantity"><Plus className="size-3" /></button></div></div><form onSubmit={(event) => { event.preventDefault(); setPaid(true) }} className="flex flex-col gap-4"><label className="text-[11px] font-semibold">Email address<input required type="email" placeholder="you@example.com" className="mt-2 h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" /></label><label className="text-[11px] font-semibold">Card details<div className="relative mt-2"><CreditCard className="absolute left-3 top-3.5 size-4 text-muted-foreground" /><input required inputMode="numeric" placeholder="1234 1234 1234 1234" className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" /></div></label><div className="grid grid-cols-2 gap-3"><input required placeholder="MM / YY" aria-label="Expiration date" className="h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-accent" /><input required placeholder="CVC" aria-label="CVC" className="h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-accent" /></div><button type="submit" className="mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-foreground text-xs font-semibold text-background transition hover:bg-accent"><LockKeyhole className="size-4" /> Pay {money.format(total)}</button><p className="text-center text-[10px] text-muted-foreground">Demo checkout · Your card details are never stored.</p></form></>}
      </section></div>}
    </main>
  )
}
