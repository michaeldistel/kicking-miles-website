// Component Types
export interface AdventureData {
  title: string;
  url?: string;
  dateRange: string;
  subtitle: string;
  description: string;
  stats: AdventureStats;
  status: AdventureStatus;
  isDisabled?: boolean;
}

export interface AdventureStats {
  distance: string;
  duration: string;
  cities: string;
}

export type AdventureStatus =
  | "complete"
  | "planning"
  | "upcoming"
  | "coming-soon"
  | "in-progress";

export interface StatItem {
  value: string;
  label: string;
}

export interface ImageData {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

export interface WeatherData {
  title?: string;
  description: string;
}

export interface NavigationDay {
  url: string;
  label: string;
}

// Component Props Types
export interface StatsBoxProps {
  stats: StatItem[];
  columns?: number;
}

export interface ImageGalleryProps {
  images: ImageData[];
  columns?: number;
  showCaptions?: boolean;
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  breadcrumbs?: BreadcrumbItem[];
}

export interface TripHeaderProps {
  title: string;
  subtitle?: string;
  dayInfo?: {
    current: number;
    total: number;
  };
  breadcrumbs?: BreadcrumbItem[];
}

export interface ContentBoxProps {
  type?: "quote" | "mood" | "highlight";
  title?: string | null;
}

export interface WeatherBoxProps {
  weather: {
    title?: string;
    description: string;
  };
}

export interface TripCardData {
  url: string;
  title: string;
  date: string;
  meta: string[];
  description: string;
}
