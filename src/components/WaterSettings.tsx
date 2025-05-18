
import React, { useState } from 'react';
import { useWaterReminder } from '@/contexts/WaterReminderContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WaterSettings: React.FC = () => {
  const { dailyGoal, updateDailyGoal, isReminderActive, toggleReminders, reminderTimes } = useWaterReminder();
  const [goalInput, setGoalInput] = useState(dailyGoal.toString());

  const handleGoalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newGoal = parseInt(goalInput, 10);
    if (!isNaN(newGoal) && newGoal > 0) {
      updateDailyGoal(newGoal);
    } else {
      setGoalInput(dailyGoal.toString()); // Reset to current if invalid
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Settings</h2>
      
      <div className="space-y-6">
        {/* Daily Goal Setting */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Daily Water Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGoalSubmit} className="flex space-x-2">
              <Input
                type="number"
                value={goalInput}
                onChange={(e) => setGoalInput(e.target.value)}
                min="500"
                max="5000"
                step="100"
                className="flex-1"
              />
              <span className="flex items-center text-muted-foreground">ml</span>
              <Button type="submit" size="sm">Save</Button>
            </form>
          </CardContent>
        </Card>
        
        {/* Reminder Toggle */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Reminders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notification-toggle">Enable Notifications</Label>
              <Switch
                id="notification-toggle"
                checked={isReminderActive}
                onCheckedChange={toggleReminders}
              />
            </div>
            
            {/* Reminder Times List */}
            <div>
              <Label className="mb-2 block">Reminder Schedule</Label>
              <div className="grid grid-cols-4 gap-2">
                {reminderTimes.map((time) => (
                  <div 
                    key={time.formatted} 
                    className="text-center py-1 px-2 bg-muted rounded-md text-sm"
                  >
                    {time.formatted}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Reminders are scheduled every 2 hours from 6 AM to 10 PM
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WaterSettings;
