
import React, { useState } from 'react';
import { useWaterReminder } from '@/contexts/WaterReminderContext';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Droplet } from 'lucide-react';

const predefinedAmounts = [
  { label: 'Small', value: 200, icon: '💧' },
  { label: 'Medium', value: 350, icon: '💧💧' },
  { label: 'Large', value: 500, icon: '💧💧💧' },
];

const WaterLogger: React.FC = () => {
  const { addWaterLog } = useWaterReminder();
  const [customAmount, setCustomAmount] = useState<number>(250);

  const handlePredefinedAmount = (amount: number) => {
    addWaterLog(amount);
  };

  const handleCustomAmount = () => {
    addWaterLog(customAmount);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Log Water Intake</h2>
      
      {/* Quick add buttons */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {predefinedAmounts.map((option) => (
          <Button
            key={option.label}
            onClick={() => handlePredefinedAmount(option.value)}
            variant="outline"
            className="flex flex-col items-center p-4 h-auto border-2 border-water hover:bg-water/10"
          >
            <span className="text-lg mb-1">{option.icon}</span>
            <span className="font-medium">{option.label}</span>
            <span className="text-sm text-muted-foreground">{option.value}ml</span>
          </Button>
        ))}
      </div>

      {/* Custom amount slider */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Custom Amount</h3>
          <span className="text-muted-foreground">{customAmount}ml</span>
        </div>
        
        <Slider
          value={[customAmount]}
          min={50}
          max={1000}
          step={25}
          onValueChange={(value) => setCustomAmount(value[0])}
          className="py-4"
        />
        
        <Button 
          onClick={handleCustomAmount}
          className="w-full bg-water hover:bg-water-dark"
        >
          <Droplet className="mr-2 h-4 w-4" />
          Add {customAmount}ml
        </Button>
      </div>
    </div>
  );
};

export default WaterLogger;
