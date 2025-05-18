import React, { createContext, useContext, useState, useEffect } from 'react';
import { NotificationService } from '../services/NotificationService';

// Define the shape of our context state
interface WaterReminderContextData {
  goalAmount: number;
  currentAmount: number;
  percentComplete: number;
  logWater: (amount: number) => void;
  updateGoal: (amount: number) => void;
  waterHistory: Array<{ date: string; amount: number }>;
  reminderInterval: number;
  updateReminderInterval: (hours: number) => void;
}

// Default values
const defaultGoal = 2000; // 2000ml or 2 liters
const defaultReminderInterval = 2; // 2 hours

// Create context with default values
const WaterReminderContext = createContext<WaterReminderContextData>({
  goalAmount: defaultGoal,
  currentAmount: 0,
  percentComplete: 0,
  logWater: () => {},
  updateGoal: () => {},
  waterHistory: [],
  reminderInterval: defaultReminderInterval,
  updateReminderInterval: () => {},
});

interface WaterReminderProviderProps {
  children: React.ReactNode;
}

export const WaterReminderProvider: React.FC<WaterReminderProviderProps> = ({ children }) => {
  // Get today's date as a string
  const getTodayString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  // Initialize state from localStorage or use defaults
  const [goalAmount, setGoalAmount] = useState(() => {
    const saved = localStorage.getItem('hydroReminder_goal');
    return saved ? parseInt(saved, 10) : defaultGoal;
  });
  
  const [currentAmount, setCurrentAmount] = useState(() => {
    const savedData = localStorage.getItem('hydroReminder_today');
    if (savedData) {
      const data = JSON.parse(savedData);
      if (data.date === getTodayString()) {
        return data.amount;
      }
    }
    return 0;
  });

  const [waterHistory, setWaterHistory] = useState<Array<{ date: string; amount: number }>>(() => {
    const saved = localStorage.getItem('hydroReminder_history');
    return saved ? JSON.parse(saved) : [];
  });

  const [reminderInterval, setReminderInterval] = useState(() => {
    const saved = localStorage.getItem('hydroReminder_interval');
    return saved ? parseInt(saved, 10) : defaultReminderInterval;
  });

  // Calculate percentage complete
  const percentComplete = Math.min(Math.round((currentAmount / goalAmount) * 100), 100);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('hydroReminder_goal', goalAmount.toString());
  }, [goalAmount]);

  useEffect(() => {
    localStorage.setItem('hydroReminder_interval', reminderInterval.toString());
    // Schedule notifications when reminder interval changes
    NotificationService.scheduleWaterReminders();
  }, [reminderInterval]);

  useEffect(() => {
    const todayString = getTodayString();
    
    // Save today's data
    localStorage.setItem('hydroReminder_today', JSON.stringify({
      date: todayString,
      amount: currentAmount,
    }));
    
    // Update history for today
    let updatedHistory = [...waterHistory];
    const todayIndex = updatedHistory.findIndex(item => item.date === todayString);
    
    if (todayIndex >= 0) {
      updatedHistory[todayIndex].amount = currentAmount;
    } else {
      updatedHistory.push({ date: todayString, amount: currentAmount });
    }
    
    // Keep only last 30 days
    if (updatedHistory.length > 30) {
      updatedHistory = updatedHistory.slice(-30);
    }
    
    setWaterHistory(updatedHistory);
    localStorage.setItem('hydroReminder_history', JSON.stringify(updatedHistory));
  }, [currentAmount, waterHistory]);

  // Initialize notifications when app first loads
  useEffect(() => {
    NotificationService.scheduleWaterReminders();
  }, []);

  // Log water intake
  const logWater = (amount: number) => {
    setCurrentAmount(prev => prev + amount);
  };

  // Update daily goal
  const updateGoal = (amount: number) => {
    setGoalAmount(amount);
  };

  // Update reminder interval
  const updateReminderInterval = (hours: number) => {
    setReminderInterval(hours);
  };

  return (
    <WaterReminderContext.Provider
      value={{
        goalAmount,
        currentAmount,
        percentComplete,
        logWater,
        updateGoal,
        waterHistory,
        reminderInterval,
        updateReminderInterval,
      }}
    >
      {children}
    </WaterReminderContext.Provider>
  );
};

// Create a hook to use the context
export const useWaterReminder = () => useContext(WaterReminderContext);
