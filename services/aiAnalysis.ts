import { Ad } from '@/types/Ad';
import { AIInsights } from '@/types/AIInsights';

export function getAIAnalysis(ads: Ad[], query: string): AIInsights {
  // Placeholder function - later will call OpenAI API
  // For now, return static analysis based on the mock data
  
  return {
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
    recommendations: [
      'Focus on urgency and scarcity in ad copy - 67% of high-performing ads include time-sensitive language',
      'Incorporate user testimonials or social proof elements to build trust and credibility',
      'Test video formats for TikTok campaigns - video ads show 40% higher engagement rates',
      'Use clear, action-oriented CTAs that create immediate response rather than vague language'
    ]
  };
}