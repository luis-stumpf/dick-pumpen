import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.luisstumpf.training',
  appName: 'dick pumpen',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
