# AdIntel - Competitor Ad Intelligence Platform

AdIntel is a powerful web application that lets users search for competitor ads and view AI-generated summaries of creative trends. Get insights into what's working in your industry and stay ahead of the competition.

## Features

- **Smart Search**: Enter brand names or keywords to find competitor ads
- **AI-Powered Analysis**: Get intelligent summaries of creative trends, common hooks, and top CTAs
- **Multi-Platform Support**: Search across Facebook and TikTok ads
- **Clean Design**: Responsive, minimal UI built with TailwindCSS
- **Export Functionality**: Download PDF reports (coming soon)

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript and TailwindCSS
- **Authentication**: Firebase Auth (email/password)
- **AI Analysis**: OpenAI GPT-4o-mini (placeholder service included)
- **Data**: Mock data for MVP (ready for real API integration)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page with search
│   ├── results/           # Search results page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── AdCard.tsx         # Individual ad display
│   ├── AIInsights.tsx     # AI analysis display
│   └── SearchForm.tsx     # Search input component
├── mock/                  # Mock data
│   └── ads.ts            # Sample ad data
├── services/              # Business logic
│   └── aiAnalysis.ts     # AI analysis service
└── types/                 # TypeScript type definitions
    ├── Ad.ts             # Ad interface
    └── AIInsights.ts     # AI insights interface
```

## Usage

1. **Search**: Enter a brand name or keyword on the home page
2. **View Results**: Browse competitor ads in a clean grid layout
3. **AI Insights**: Review AI-generated analysis of creative trends
4. **Export**: Download PDF reports (feature coming soon)

## Development

### Mock Data

The app currently uses mock data from `mock/ads.ts`. This makes it easy to develop and test without external API dependencies.

### AI Analysis

The `services/aiAnalysis.ts` currently returns placeholder insights. This is where you'll integrate with OpenAI's API for real analysis.

### Adding Real Data

To integrate with real ad platforms:

1. Replace mock data calls in components
2. Implement API clients for Facebook Ad Library and TikTok Creative Center
3. Update the AI analysis service to process real ad data

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For questions and support, please open an issue on GitHub.