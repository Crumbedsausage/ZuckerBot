import { Suspense } from 'react';
import AdCard from '@/components/AdCard';
import AIInsights from '@/components/AIInsights';
import { mockAds } from '@/mock/ads';
import { getAIAnalysis } from '@/services/aiAnalysis';

interface ResultsPageProps {
  searchParams: { query?: string };
}

export default function ResultsPage({ searchParams }: ResultsPageProps) {
  const query = searchParams.query || '';
  const aiInsights = getAIAnalysis(mockAds, query);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Search Results for "{query}"
        </h1>
        <p className="text-gray-600">
          Found {mockAds.length} competitor ads
        </p>
      </div>

      <Suspense fallback={
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      }>
        <div className="space-y-8">
          {/* AI Insights Section */}
          <AIInsights insights={aiInsights} />

          {/* Download PDF Button */}
          <div className="flex justify-end">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download PDF</span>
            </button>
          </div>

          {/* Ads Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockAds.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </div>
      </Suspense>
    </div>
  );
}