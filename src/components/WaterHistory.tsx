
import React from 'react';
import { useWaterReminder } from '@/contexts/WaterReminderContext';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Droplet } from 'lucide-react';

const WaterHistory: React.FC = () => {
  const { waterLogs, deleteWaterLog } = useWaterReminder();

  // Group logs by date
  const groupedLogs = waterLogs.reduce((groups, log) => {
    const date = format(new Date(log.timestamp), 'yyyy-MM-dd');
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(log);
    return groups;
  }, {} as Record<string, typeof waterLogs>);

  // Sort dates in descending order
  const sortedDates = Object.keys(groupedLogs).sort((a, b) => {
    return new Date(b).getTime() - new Date(a).getTime();
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Water History</h2>
      
      <ScrollArea className="h-[300px] rounded-md border p-4">
        {sortedDates.length > 0 ? (
          sortedDates.map((date) => {
            const logs = groupedLogs[date];
            const totalForDay = logs.reduce((sum, log) => sum + log.amount, 0);
            
            return (
              <div key={date} className="mb-6 last:mb-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">
                    {format(new Date(date), 'EEEE, MMMM d')}
                  </h3>
                  <span className="text-sm font-medium bg-water/20 text-water-dark px-2 py-1 rounded-full">
                    {totalForDay}ml
                  </span>
                </div>
                
                <div className="space-y-2">
                  {logs
                    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                    .map((log) => (
                      <div 
                        key={log.id} 
                        className="flex items-center justify-between p-2 bg-muted/50 rounded-lg"
                      >
                        <div className="flex items-center">
                          <Droplet className="h-4 w-4 text-water mr-2" />
                          <span>{log.amount}ml</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-muted-foreground mr-3">
                            {format(new Date(log.timestamp), 'h:mm a')}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteWaterLog(log.id)}
                            className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                          >
                            ×
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
            <Droplet className="h-8 w-8 mb-2 text-water/50" />
            <p>No logs yet. Start drinking water!</p>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default WaterHistory;
