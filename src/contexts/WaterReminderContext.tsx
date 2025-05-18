
import React, { createContext, useContext, useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useToast } from '@/components/ui/use-toast';

type ReminderTime = {
  hour: number;
  minute: number;
  formatted: string;
};

type WaterLog = {
  id: string;
  timestamp: Date;
  amount: number; // amount in ml
};

type WaterReminderContextType = {
  waterLogs: WaterLog[];
  dailyGoal: number; // in ml
  reminderTimes: ReminderTime[];
  todayTotal: number;
  percentComplete: number;
  addWaterLog: (amount: number) => void;
  deleteWaterLog: (id: string) => void;
  updateDailyGoal: (goal: number) => void;
  isReminderActive: boolean;
  toggleReminders: () => void;
};

const defaultGoal = 2000; // Default 2L daily goal

// Generate reminder times from 6 AM to 10 PM every 2 hours
const generateReminderTimes = (): ReminderTime[] => {
  const times: ReminderTime[] = [];
  for (let hour = 6; hour <= 22; hour += 2) {
    times.push({
      hour,
      minute: 0,
      formatted: `${hour.toString().padStart(2, '0')}:00`,
    });
  }
  return times;
};

const WaterReminderContext = createContext<WaterReminderContextType | undefined>(undefined);

export const WaterReminderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [waterLogs, setWaterLogs] = useState<WaterLog[]>(() => {
    const saved = localStorage.getItem('waterLogs');
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map((log: any) => ({ 
        ...log, 
        timestamp: new Date(log.timestamp) 
      }));
    }
    return [];
  });
  
  const [dailyGoal, setDailyGoal] = useState<number>(() => {
    const saved = localStorage.getItem('dailyGoal');
    return saved ? parseInt(saved, 10) : defaultGoal;
  });

  const [isReminderActive, setIsReminderActive] = useState<boolean>(() => {
    const saved = localStorage.getItem('isReminderActive');
    return saved ? JSON.parse(saved) : true;
  });

  const reminderTimes = generateReminderTimes();
  const { toast } = useToast();

  // Calculate today's total and percent complete
  const todayWaterLogs = waterLogs.filter(log => {
    const today = new Date();
    const logDate = new Date(log.timestamp);
    return (
      logDate.getDate() === today.getDate() &&
      logDate.getMonth() === today.getMonth() &&
      logDate.getFullYear() === today.getFullYear()
    );
  });

  const todayTotal = todayWaterLogs.reduce((total, log) => total + log.amount, 0);
  const percentComplete = Math.min(Math.round((todayTotal / dailyGoal) * 100), 100);

  // Save to local storage when state changes
  useEffect(() => {
    localStorage.setItem('waterLogs', JSON.stringify(waterLogs));
  }, [waterLogs]);

  useEffect(() => {
    localStorage.setItem('dailyGoal', dailyGoal.toString());
  }, [dailyGoal]);

  useEffect(() => {
    localStorage.setItem('isReminderActive', JSON.stringify(isReminderActive));
  }, [isReminderActive]);

  // Set up reminders
  useEffect(() => {
    if (!isReminderActive) return;

    const checkAndShowReminder = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      reminderTimes.forEach(time => {
        if (time.hour === currentHour && currentMinute === 0) {
          toast({
            title: "Water Reminder",
            description: "It's time to drink some water! 💧",
            duration: 10000,
          });
        }
      });
    };

    // Check every minute
    const intervalId = setInterval(checkAndShowReminder, 60000);

    // Initial check when component mounts
    checkAndShowReminder();

    return () => clearInterval(intervalId);
  }, [isReminderActive, toast]);

  const addWaterLog = (amount: number) => {
    const newLog = {
      id: Date.now().toString(),
      timestamp: new Date(),
      amount,
    };
    setWaterLogs([...waterLogs, newLog]);
  };

  const deleteWaterLog = (id: string) => {
    setWaterLogs(waterLogs.filter(log => log.id !== id));
  };

  const updateDailyGoal = (goal: number) => {
    setDailyGoal(goal);
  };

  const toggleReminders = () => {
    setIsReminderActive(!isReminderActive);
  };

  return (
    <WaterReminderContext.Provider
      value={{
        waterLogs,
        dailyGoal,
        reminderTimes,
        todayTotal,
        percentComplete,
        addWaterLog,
        deleteWaterLog,
        updateDailyGoal,
        isReminderActive,
        toggleReminders,
      }}
    >
      {children}
    </WaterReminderContext.Provider>
  );
};

export const useWaterReminder = () => {
  const context = useContext(WaterReminderContext);
  if (context === undefined) {
    throw new Error('useWaterReminder must be used within a WaterReminderProvider');
  }
  return context;
};
