import React from 'react';
import { motion } from 'motion/react';
import { Apple, Play } from 'lucide-react';
import { DeviceMockup } from './DeviceMockup';
import { cn } from '@/src/lib/utils';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-radial from-green-primary/10 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-radial from-green-primary/5 to-transparent pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-primary/10 border border-green-primary/20 text-green-primary text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-primary animate-pulse" />
          Available on iOS & Android
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8"
        >
          Your health, <br />
          <span className="font-serif italic text-green-primary">beautifully</span> organised
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#F0F7F4]/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Dayvity brings your medications, mood, sleep, nutrition, and daily wellness
          into one calm, intelligent space — so you can focus on feeling good.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
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
        </motion.div>

        {/* Device Mockups with Scroll Animation */}
        <div className="relative flex items-center justify-center gap-8 md:gap-16">
          {/* Pixel Mockup (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: -10 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:block scale-90 -mr-20 origin-bottom"
          >
            <DeviceMockup type="pixel">
              <div className="p-6 h-full flex flex-col gap-4">
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Nutrition Today</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 p-3 rounded-xl">
                    <div className="text-lg font-bold">1,420</div>
                    <div className="text-[10px] text-white/40">kcal</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl">
                    <div className="text-lg font-bold">2,000</div>
                    <div className="text-[10px] text-white/40">goal</div>
                  </div>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-green-primary w-[71%]" />
                </div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest mt-4">AI Insight</div>
                <div className="bg-green-primary/10 border border-green-primary/20 p-4 rounded-xl text-[11px] leading-relaxed">
                  Good protein intake. Consider adding more complex carbs for sustained energy throughout the afternoon.
                </div>
              </div>
            </DeviceMockup>
          </motion.div>

          {/* iPhone Mockup (Center) */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="z-20"
          >
            <DeviceMockup type="iphone" className="scale-105 border-green-primary/20 shadow-green-primary/10">
              <div className="p-6 h-full flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/40 font-medium">Good morning,</div>
                    <div className="text-xl font-bold">Alex 👋</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-primary to-green-dark" />
                </div>

                <div className="relative aspect-square flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/5" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="70.7" className="text-green-primary" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-4xl font-extrabold">75%</div>
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Adherence</div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="bg-green-primary/10 border border-green-primary/20 p-3 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold">Vitamin D</div>
                      <div className="text-[10px] text-white/40">Taken at 8:00 AM</div>
                    </div>
                    <div className="w-6 h-6 rounded-lg overflow-hidden flex items-center justify-center">
                      <img src="/logo.png" alt="" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold">Metformin</div>
                      <div className="text-[10px] text-white/40">Due in 2 hours</div>
                    </div>
                    <div className="w-5 h-5 rounded-full border border-white/20" />
                  </div>
                </div>
              </div>
            </DeviceMockup>
          </motion.div>

          {/* Pixel Mockup (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 10 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:block scale-90 -ml-20 origin-bottom"
          >
            <DeviceMockup type="pixel">
              <div className="p-6 h-full flex flex-col gap-4">
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Mood Trend</div>
                <div className="flex items-end gap-1.5 h-32 mt-4">
                  {[40, 65, 50, 85, 70, 90, 60].map((h, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex-1 rounded-t-sm transition-all duration-1000",
                        h > 80 ? "bg-green-primary" : "bg-green-primary/30"
                      )}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[8px] text-white/40 font-bold uppercase tracking-widest mt-2">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
                <div className="mt-6 flex justify-center gap-2">
                  {['😔', '😐', '😊', '😄', '🤩'].map((e, i) => (
                    <div key={i} className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center text-sm",
                      i === 3 ? "bg-green-primary/20 border border-green-primary/40" : "bg-white/5"
                    )}>
                      {e}
                    </div>
                  ))}
                </div>
              </div>
            </DeviceMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
