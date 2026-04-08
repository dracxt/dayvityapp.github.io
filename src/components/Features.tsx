import React from 'react';
import { motion } from 'motion/react';
import { Pill, Heart, Utensils, Moon, ClipboardList, Share2 } from 'lucide-react';

const features = [
  {
    icon: Pill,
    title: "Medication Reminders",
    desc: "Set up every medication once. Get notified on time, track your adherence ring, and monitor pill counts before you run low.",
    color: "bg-green-primary/10 text-green-primary"
  },
  {
    icon: Heart,
    title: "Mood & Wellness Tracking",
    desc: "Log your mood daily with a tap. See weekly patterns in your emotional wellbeing and spot what days feel consistently better.",
    color: "bg-green-primary/10 text-green-primary"
  },
  {
    icon: Utensils,
    title: "AI Nutrition Analysis",
    desc: "Describe your meals in plain language. Dayvity's AI breaks down your macros, tracks your goals, and suggests improvements.",
    color: "bg-green-primary/10 text-green-primary"
  },
  {
    icon: Moon,
    title: "Sleep & Hydration",
    desc: "Track bedtime, wake time, and daily water intake. Build consistent habits with gentle nudges and weekly trend charts.",
    color: "bg-green-primary/10 text-green-primary"
  },
  {
    icon: ClipboardList,
    title: "Tasks & Appointments",
    desc: "Manage your schedule, to-do list, and recurring health tasks — all with notifications that fire even when the app is closed.",
    color: "bg-green-primary/10 text-green-primary"
  },
  {
    icon: Share2,
    title: "Health Data Export",
    desc: "Export 90 days of your health data as a clean CSV. Share it with your doctor or open it in any spreadsheet app.",
    color: "bg-green-primary/10 text-green-primary"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-primary text-sm font-bold uppercase tracking-widest mb-4"
          >
            Everything you need
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            One app for your <br />
            <span className="font-serif italic text-green-primary text-5xl md:text-7xl">whole</span> health picture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#F0F7F4]/60 max-w-2xl mx-auto"
          >
            No more juggling five different apps. Dayvity brings every pillar of daily health into one focused, private space.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-green-primary/30 hover:bg-green-primary/5 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 ${feature.color}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-[#F0F7F4]/60 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
