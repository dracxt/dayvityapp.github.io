import React from 'react';
import { motion } from 'motion/react';
import { Shield, Smartphone, Lock, Trash2 } from 'lucide-react';

const points = [
  {
    icon: Smartphone,
    title: "Stored on your device",
    desc: "All health data lives in a local SQLite database on your phone. Nothing is uploaded to external servers without your explicit action."
  },
  {
    icon: Lock,
    title: "Never sold. Never shared.",
    desc: "We do not sell your data, share it with advertisers, or use it to train AI models. Your information is not our product."
  },
  {
    icon: Trash2,
    title: "You control your exports",
    desc: "Export your data as CSV anytime. Delete your account and all associated data is permanently removed. No dark patterns."
  }
];

export const Privacy = () => {
  return (
    <section id="privacy" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-primary text-sm font-bold uppercase tracking-widest mb-4"
          >
            Built with trust
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8"
          >
            Your health data <br />
            is <span className="font-serif italic text-green-primary">yours</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#F0F7F4]/60 mb-12"
          >
            We built Dayvity on one principle: your most personal data should never leave your control.
          </motion.p>

          <div className="space-y-8">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-green-primary/10 border border-green-primary/20 rounded-2xl flex items-center justify-center text-green-primary">
                  <point.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{point.title}</h3>
                  <p className="text-sm text-[#F0F7F4]/60 leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-[400px] h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-radial from-green-primary/10 to-transparent animate-pulse" />
            <div className="relative w-64 h-80 bg-linear-to-br from-green-primary/10 to-green-primary/5 border border-green-primary/20 rounded-[4rem] flex flex-col items-center justify-center gap-6 shadow-2xl shadow-green-primary/10">
              <Shield className="w-20 h-20 text-green-primary" />
              <div className="text-center">
                <div className="text-2xl font-black text-green-primary tracking-tight">Privacy First</div>
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">Local Storage Only</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
