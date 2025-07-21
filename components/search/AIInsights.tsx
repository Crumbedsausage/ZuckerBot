import { AIInsights as AIInsightsType } from '@/types';

interface AIInsightsProps {
  insights: AIInsightsType;
}

export default function AIInsights({ insights }: AIInsightsProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">AI Insights</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Most Common Hooks</h4>
          <ul className="space-y-2">
            {insights.commonHooks.map((hook, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                {hook}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Top CTAs</h4>
          <ul className="space-y-2">
            {insights.topCTAs.map((cta, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                {cta}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Creative Themes</h4>
          <ul className="space-y-2">
            {insights.creativeThemes.map((theme, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                {theme}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Key Recommendations</h4>
          <ul className="space-y-2">
            {insights.recommendations.map((rec, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}