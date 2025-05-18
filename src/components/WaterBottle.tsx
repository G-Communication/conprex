
import React from 'react';
import { useWaterReminder } from '@/contexts/WaterReminderContext';
import { Droplet } from 'lucide-react';

const WaterBottle: React.FC = () => {
  const { percentComplete } = useWaterReminder();
  
  return (
    <div className="relative w-48 h-64 mx-auto">
      {/* Bottle Outline */}
      <div className="absolute inset-0 bg-white border-4 border-water-dark rounded-3xl overflow-hidden">
        {/* Bottle Neck */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white border-4 border-t-0 border-water-dark rounded-b-lg" />
        
        {/* Water Content */}
        <div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-water-dark via-water to-water-light transition-all duration-1000 ease-in-out"
          style={{ height: `${percentComplete}%` }}
        >
          {/* Animated Wave */}
          <div className="absolute top-0 left-0 right-0 h-6 water-wave animate-wave" />
        </div>
        
        {/* Water Level Percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-3xl font-bold text-water-dark drop-shadow-md">
            {percentComplete}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterBottle;
