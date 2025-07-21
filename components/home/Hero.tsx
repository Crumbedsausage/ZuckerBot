export default function Hero() {
  return (
    <div className="text-center py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Unlock Competitor Ad{' '}
          <span className="text-blue-600">Intelligence</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Search Facebook and TikTok ads, get AI-powered creative insights, 
          and stay ahead of your competition with data-driven intelligence.
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800">
            ✨ AI-Powered
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800">
            📱 Multi-Platform
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800">
            📊 Instant Reports
          </span>
        </div>
      </div>
    </div>
  );
}