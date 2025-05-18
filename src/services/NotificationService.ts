
import { LocalNotifications } from '@capacitor/local-notifications';

export class NotificationService {
  static async requestPermissions() {
    const permissionStatus = await LocalNotifications.checkPermissions();
    
    if (permissionStatus.display !== 'granted') {
      return await LocalNotifications.requestPermissions();
    }
    
    return permissionStatus;
  }

  static async scheduleWaterReminders() {
    const permissionStatus = await this.requestPermissions();
    
    if (permissionStatus.display !== 'granted') {
      console.log('Notification permissions not granted');
      return;
    }
    
    // Clear existing notifications
    await LocalNotifications.cancel({ notifications: await (await LocalNotifications.getPending()).notifications });
    
    // Schedule notifications every 2 hours from 6 AM to 10 PM
    const notifications = [];
    const today = new Date();
    today.setHours(6, 0, 0, 0); // Start at 6 AM
    
    for (let hour = 6; hour <= 22; hour += 2) {
      const notificationTime = new Date(today);
      notificationTime.setHours(hour);
      
      // If time has already passed today, schedule for tomorrow
      if (notificationTime.getTime() < Date.now()) {
        notificationTime.setDate(notificationTime.getDate() + 1);
      }
      
      notifications.push({
        id: hour,
        title: 'Hydro Reminder',
        body: "It's time to drink some water! 💧",
        schedule: { at: notificationTime, repeats: true, every: 'day' },
        smallIcon: 'ic_stat_icon_config_sample',
        iconColor: '#488AFF',
      });
    }
    
    await LocalNotifications.schedule({
      notifications,
    });
    
    console.log('Water reminders scheduled successfully');
  }
}
