import React from 'react';
import { motion } from 'motion/react';
import { DeviceMockup } from './DeviceMockup';

const steps = [
  {
    num: "1",
    title: "Set up your profile",
    desc: "Add your medications, health goals, and configure your daily reminder times. Takes less than five minutes."
  },
  {
    num: "2",
    title: "Log your day",
    desc: "Mark medications taken, log your mood with a tap, track meals, water, and sleep as your day unfolds."
  },
  {
    num: "3",
    title: "Spot your patterns",
    desc: "Weekly charts and trend lines reveal what's working. Export your data anytime to share with your healthcare provider."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how" className="py-24 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-primary text-sm font-bold uppercase tracking-widest mb-4"
          >
            Simple by design
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12"
          >
            Up and running <br />
            in <span className="font-serif italic text-green-primary">minutes</span>
          </motion.h2>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 py-8 border-b border-white/5 last:border-0"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-green-primary/10 border border-green-primary/20 rounded-xl flex items-center justify-center font-extrabold text-green-primary">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-[#F0F7F4]/60 leading-relaxed text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden lg:flex justify-center"
        >
          <DeviceMockup type="iphone" className="scale-110">
            <div className="p-6 h-full flex flex-col gap-6">
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Weekly Overview</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 p-3 rounded-xl">
                  <div className="text-lg font-bold">6</div>
                  <div className="text-[10px] text-white/40">streak</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl">
                  <div className="text-lg font-bold">91%</div>
                  <div className="text-[10px] text-white/40">adherence</div>
                </div>
              </div>
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest mt-4">Sleep this week</div>
              <div className="flex items-end gap-1.5 h-24">
                {[55, 80, 70, 90, 75, 85, 65].map((h, i) => (
                  <div key={i} className="flex-1 bg-green-primary/30 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest mt-4">Mood Trend</div>
              <div className="flex justify-between">
                {['😐', '😊', '😊', '😄', '😄'].map((e, i) => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-green-primary/20 flex items-center justify-center text-sm">
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </DeviceMockup>
        </motion.div>
      </div>
    </section>
  );
};
