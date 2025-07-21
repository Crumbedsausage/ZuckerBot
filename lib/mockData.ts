import { Ad, AIInsights } from '@/types';

export const mockAds: Ad[] = [
  {
    id: '1',
    platform: 'facebook',
    brand: 'Nike',
    headline: 'Just Do It - New Air Max Collection',
    description: 'Step into comfort and style with our latest Air Max sneakers. Free shipping on orders over $75.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    cta: 'Shop Now',
    dateRange: 'Jan 15 - Feb 28, 2024',
  },
  {
    id: '2',
    platform: 'tiktok',
    brand: 'Spotify',
    headline: '3 Months Free Premium',
    description: 'Discover millions of songs, ad-free. Limited time offer for new users.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    cta: 'Try Premium',
    dateRange: 'Feb 1 - Mar 31, 2024',
  },
  {
    id: '3',
    platform: 'facebook',
    brand: 'Samsung',
    headline: 'Galaxy S24 Ultra - Now Available',
    description: 'Experience the future of smartphones with AI-powered features and stunning camera quality.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    cta: 'Pre-order Now',
    dateRange: 'Jan 20 - Feb 15, 2024',
  },
  {
    id: '4',
    platform: 'tiktok',
    brand: 'Duolingo',
    headline: 'Learn Spanish in 15 Minutes a Day',
    description: 'Join millions learning languages with bite-sized lessons that fit your schedule.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    cta: 'Start Learning',
    dateRange: 'Feb 10 - Mar 20, 2024',
  },
  {
    id: '5',
    platform: 'facebook',
    brand: 'HelloFresh',
    headline: '60% Off Your First Box + Free Shipping',
    description: 'Fresh ingredients and easy recipes delivered to your door. Cancel anytime.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    cta: 'Get Cooking',
    dateRange: 'Jan 25 - Feb 25, 2024',
  },
  {
    id: '6',
    platform: 'tiktok',
    brand: 'Airbnb',
    headline: 'Unique Stays, Unforgettable Experiences',
    description: 'Find amazing places to stay around the world. Book your next adventure today.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
    cta: 'Explore Stays',
    dateRange: 'Feb 5 - Mar 15, 2024',
  },
];

export const mockAIInsights: AIInsights = {
  commonHooks: [
    'Limited time offers and urgency',
    'Free trials and introductory pricing',
    'Lifestyle and aspirational messaging',
    'Problem-solution positioning'
  ],
  topCTAs: [
    'Shop Now (34%)',
    'Learn More (22%)',
    'Try Free (18%)',
    'Get Started (12%)',
    'Download (8%)',
    'Sign Up (6%)'
  ],
  creativeThemes: [
    'Product showcases with lifestyle context',
    'User-generated content and testimonials',
    'Bold typography with minimal design',
    'Bright, eye-catching color schemes'
  ],
  recommendations: [
    'Focus on urgency and scarcity in ad copy - 67% of high-performing ads include time-sensitive language',
    'Incorporate user testimonials or social proof elements to build trust and credibility',
    'Test video formats for TikTok campaigns - video ads show 40% higher engagement rates',
    'Use clear, action-oriented CTAs that create immediate response rather than vague language'
  ]
};