
import React from 'react';
import { useWaterReminder } from '@/contexts/WaterReminderContext';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WaterBottle from '@/components/WaterBottle';
import WaterLogger from '@/components/WaterLogger';
import WaterHistory from '@/components/WaterHistory';
import WaterSettings from '@/components/WaterSettings';
import { Droplet } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { todayTotal, dailyGoal } = useWaterReminder();

  return (
    <div className="container max-w-md mx-auto p-4 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center mb-2">Hydro Reminder</h1>
        <p className="text-muted-foreground text-center">Stay hydrated throughout the day</p>
      </header>

      {/* Water Progress Section */}
      <Card className="mb-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold mb-1">Today's Progress</h2>
            <div className="flex items-center justify-center gap-1">
              <Droplet className="h-5 w-5 text-water" />
              <span className="text-lg font-medium">{todayTotal}ml / {dailyGoal}ml</span>
            </div>
          </div>
          
          <WaterBottle />
        </CardContent>
      </Card>

      {/* Tabs for different sections */}
      <Tabs defaultValue="log" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4 w-full">
          <TabsTrigger value="log">Log</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="log" className="mt-0">
          <Card>
            <CardContent className="p-0">
              <WaterLogger />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="mt-0">
          <Card>
            <CardContent className="p-0">
              <WaterHistory />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-0">
          <Card>
            <CardContent className="p-0">
              <WaterSettings />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
