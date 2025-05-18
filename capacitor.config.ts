
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c686f0eaacac4d8db96c04706aaf9ed1',
  appName: 'hydrate-hero-reminder-app',
  webDir: 'dist',
  server: {
    url: 'https://c686f0ea-acac-4d8d-b96c-04706aaf9ed1.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav",
    },
  },
};

export default config;
