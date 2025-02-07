// Chart Data Types
export interface ChartData {
    name: string;
    value: number;
  }
  
  // Stats Card Types
  export interface StatCard {
    name: string;
    value: string | number;
    icon: unknown;
    change: string;
    trend: 'up' | 'down';
  }
  
  // Activity Types
  export interface Activity {
    id: number;
    user: string;
    action: string;
    timestamp: string;
  }
  
  // Navigation Item Type
  export interface NavItem {
    name: string;
    href: string;
    icon: unknown;
  }
  
  // User Profile Type
  export interface UserProfile {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: string;
  }
  
  // Settings Type
  export interface Settings {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
    emailUpdates: boolean;
  }