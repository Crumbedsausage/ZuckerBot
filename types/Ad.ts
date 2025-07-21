export interface Ad {
  id: string;
  platform: 'facebook' | 'tiktok';
  brand: string;
  headline: string;
  image: string;
  cta?: string;
}