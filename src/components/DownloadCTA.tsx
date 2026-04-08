import React from 'react';
import { motion } from 'motion/react';
import { Apple, Play } from 'lucide-react';

export const DownloadCTA = () => {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-green-primary/10 to-green-primary/5 border border-green-primary/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial from-green-primary/10 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <div className="text-green-primary text-sm font-bold uppercase tracking-widest mb-4">Ready?</div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Start your health journey <br />
              today — <span className="font-serif italic text-green-primary">for free</span>
            </h2>
            <p className="text-lg text-[#F0F7F4]/60 max-w-xl mx-auto mb-12">
              Download Dayvity and spend the next five minutes setting up the health companion you've been looking for.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-linear-to-br from-green-primary to-green-dark text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-green-primary/30 hover:scale-105 active:scale-95 transition-all"
              >
                <Apple className="w-6 h-6 fill-white" />
                App Store
              </a>
              <a
                href="#"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                <Play className="w-6 h-6 fill-white" />
                Google Play
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
