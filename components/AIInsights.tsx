import { AIInsights as AIInsightsType } from '@/types/AIInsights';

interface AIInsightsProps {
  insights: AIInsightsType;
}

export default function AIInsights({ insights }: AIInsightsProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">AI Insights</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Common Hooks</h3>
          <div className="space-y-3">
            {insights.commonHooks.map((hook, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">{hook}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top CTAs</h3>
          <div className="space-y-3">
            {insights.topCTAs.map((cta, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">{cta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Recommendations</h3>
        <div className="space-y-3">
          {insights.recommendations.map((rec, index) => (
            <div key={index} className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700">{rec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}