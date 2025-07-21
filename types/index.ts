export interface Ad {
  id: string;
  platform: 'facebook' | 'tiktok';
  brand: string;
  headline: string;
  description?: string;
  image: string;
  cta?: string;
  dateRange: string;
}

export interface AIInsights {
  commonHooks: string[];
  topCTAs: string[];
  creativeThemes: string[];
  recommendations: string[];
}

export interface SearchParams {
  query: string;
  platform: 'all' | 'facebook' | 'tiktok';
}