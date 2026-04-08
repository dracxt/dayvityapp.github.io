import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const plans = [
  {
    name: "Free",
    price: "0",
    desc: "Everything you need to start building better health habits.",
    features: [
      "Medication reminders",
      "Mood & sleep trackers",
      "Up to 5 daily reminders",
      "Appointments & to-do list",
      "Emergency contacts",
      "CSV health data export"
    ],
    cta: "Get started free",
    featured: false
  },
  {
    name: "Plus",
    price: "2.99",
    desc: "For people serious about their health. AI-powered insights.",
    features: [
      "Everything in Free",
      "AI nutrition analysis",
      "Unlimited daily reminders",
      "PDF health reports",
      "Priority notifications",
      "Advanced weekly charts"
    ],
    cta: "Start 7-day free trial",
    featured: true
  },
  {
    name: "Pro",
    price: "6.99",
    desc: "The complete health companion for total wellness control.",
    features: [
      "Everything in Plus",
      "Dedicated email support",
      "Early access to features",
      "Health insights dashboard",
      "Doctor-ready reports",
      "Shopify nutrition plans",
      "Cloud backup (soon)"
    ],
    cta: "Start 7-day free trial",
    featured: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-linear-to-b from-transparent to-green-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-primary text-sm font-bold uppercase tracking-widest mb-4"
          >
            Plans
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Start free. <br />
            <span className="font-serif italic text-green-primary text-5xl md:text-7xl">Upgrade</span> when you're ready.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#F0F7F4]/60 max-w-2xl mx-auto"
          >
            Every core feature is free forever. Premium unlocks powerful tools for those who want to go deeper.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-8 rounded-[2rem] border transition-all duration-300",
                plan.featured 
                  ? "bg-linear-to-br from-green-primary/10 to-green-primary/5 border-green-primary/40 shadow-2xl shadow-green-primary/10 scale-105 z-10" 
                  : "bg-white/5 border-white/10 hover:border-white/20"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-primary text-ink text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">{plan.name}</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-white">${plan.price.split('.')[0]}</span>
                {plan.price.includes('.') && <span className="text-2xl font-bold text-white">.{plan.price.split('.')[1]}</span>}
                <span className="text-white/40 font-medium">/mo</span>
              </div>
              <p className="text-sm text-[#F0F7F4]/60 mb-8 leading-relaxed">{plan.desc}</p>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#F0F7F4]/80">
                    <Check className="w-4 h-4 text-green-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={cn(
                  "block w-full text-center py-4 rounded-2xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-95",
                  plan.featured
                    ? "bg-linear-to-br from-green-primary to-green-dark text-white shadow-xl shadow-green-primary/20"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                )}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
