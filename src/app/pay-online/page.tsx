"use client";

import { useState } from "react";

export default function PayOnlinePage() {
  const [amount, setAmount] = useState("");
  const convenienceFee = amount ? (parseFloat(amount) * 0.03).toFixed(2) : "0.00";
  const total = amount ? (parseFloat(amount) * 1.03).toFixed(2) : "0.00";

  return (
    <div className="pt-[104px]">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12 hero-enter">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              Billing
            </span>
            <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-extrabold text-on-surface leading-[1.12] tracking-[-0.02em] mb-4">
              Pay Online
            </h1>
            <p className="text-base text-on-surface-variant leading-relaxed max-w-md mx-auto">
              Make a secure payment for your imaging services. A 3% convenience fee applies to all online payments.
            </p>
          </div>

          <div className="hero-enter-delayed space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">First Name *</label>
                <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Last Name *</label>
                <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">Email *</label>
              <input type="email" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">Invoice / Account Number</label>
              <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" placeholder="If applicable" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">Payment Amount *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[15px]">$</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full border border-outline-variant rounded-xl pl-8 pr-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Summary */}
            <div className="rounded-2xl bg-surface-low p-5 ring-1 ring-black/[0.04] space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Payment Amount</span>
                <span className="text-on-surface font-medium">${amount || "0.00"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Convenience Fee (3%)</span>
                <span className="text-on-surface font-medium">${convenienceFee}</span>
              </div>
              <div className="border-t border-outline-variant/50 pt-3 flex justify-between">
                <span className="text-sm font-semibold text-on-surface">Total</span>
                <span className="text-lg font-bold text-primary">${total}</span>
              </div>
            </div>

            {/* Card fields */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">Card Number *</label>
              <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" placeholder="1234 5678 9012 3456" maxLength={19} />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Expiry *</label>
                <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" placeholder="MM / YY" maxLength={7} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">CVV *</label>
                <input type="text" className="w-full border border-outline-variant rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white" placeholder="123" maxLength={4} />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgba(0,61,155,0.18)] hover:bg-primary-container btn-press transition-all duration-200"
            >
              Pay ${total}
            </button>

            <div className="flex items-center justify-center gap-4 text-on-surface-variant">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
              <span className="text-xs">256-bit SSL encrypted</span>
              <span className="text-xs">|</span>
              <span className="text-xs">PCI compliant</span>
            </div>

            <p className="text-xs text-on-surface-variant text-center">
              Prefer to pay by phone? Call <a href="tel:2019685544" className="text-primary font-semibold">(201) 968-5544</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
