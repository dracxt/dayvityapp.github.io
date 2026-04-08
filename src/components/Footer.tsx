import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Dayvity Logo" 
              className="w-8 h-8 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-lg font-extrabold tracking-tight text-white">Dayvity</span>
          </div>
          <span className="text-xs text-white/20 font-medium">© 2026. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-xs font-medium text-white/40 hover:text-green-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs font-medium text-white/40 hover:text-green-primary transition-colors">Terms of Service</a>
          <a href="mailto:support@dayvity.com" className="text-xs font-medium text-white/40 hover:text-green-primary transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
};
