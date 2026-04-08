import React from 'react';
import { cn } from '@/src/lib/utils';

interface DeviceMockupProps {
  type: 'iphone' | 'pixel';
  children: React.ReactNode;
  className?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({ type, children, className }) => {
  if (type === 'iphone') {
    return (
      <div className={cn(
        "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl",
        className
      )}>
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-ink-soft">
          {children}
        </div>
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 w-24 h-6 bg-black rounded-full z-20"></div>
      </div>
    );
  }

  return (
    <div className={cn(
      "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl",
      className
    )}>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-ink-soft">
        {children}
      </div>
      {/* Pixel Punch Hole */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-20"></div>
    </div>
  );
};
