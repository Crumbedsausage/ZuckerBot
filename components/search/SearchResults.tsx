'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdCard from './AdCard';
import AIInsights from './AIInsights';
import PDFExport from './PDFExport';
import { mockAds, mockAIInsights } from '@/lib/mockData';
import { Ad, AIInsights as AIInsightsType } from '@/types';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') || '';
  const platform = searchParams?.get('platform') || 'all';
  
  const [ads, setAds] = useState<Ad[]>([]);
  const [insights, setInsights] = useState<AIInsightsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Filter mock data based on platform
      let filteredAds = mockAds;
      if (platform !== 'all') {
        filteredAds = mockAds.filter(ad => ad.platform === platform);
      }
      
      setAds(filteredAds);
      setInsights(mockAIInsights);
      setIsLoading(false);
    };

    if (query) {
      fetchResults();
    }
  }, [query, platform]);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Results for "{query}"
          </h2>
          <p className="text-gray-600 mt-1">
            Found {ads.length} ads {platform !== 'all' && `on ${platform}`}
          </p>
        </div>
        
        {ads.length > 0 && insights && (
          <PDFExport ads={ads} insights={insights} query={query} />
        )}
      </div>

      {insights && <AIInsights insights={insights} />}

      {ads.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ads.map((ad) => (
            <AdCard key={ad.id} ad={ad} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No ads found</h3>
          <p className="text-gray-600">Try searching with different keywords or check all platforms.</p>
        </div>
      )}
    </div>
  );
}