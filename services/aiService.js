async function generateAIInsights(openai, ads, query) {
  try {
    // If OpenAI API key is not available, return mock data
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your-openai-api-key-here') {
      console.log('Using mock AI insights - no OpenAI API key configured');
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
    }

    // Prepare ad data for AI analysis
    const adsAnalysis = ads.map(ad => ({
      platform: ad.platform,
      brand: ad.brand,
      headline: ad.headline,
      description: ad.description || '',
      cta: ad.cta || '',
    }));

    const prompt = `
Analyze these competitor ads for the search query "${query}" and provide insights:

${JSON.stringify(adsAnalysis, null, 2)}

Please provide a comprehensive analysis in the following JSON format:
{
  "commonHooks": ["hook1", "hook2", "hook3", "hook4"],
  "topCTAs": ["CTA1 (percentage)", "CTA2 (percentage)", "CTA3 (percentage)", "CTA4 (percentage)", "CTA5 (percentage)", "CTA6 (percentage)"],
  "creativeThemes": ["theme1", "theme2", "theme3", "theme4"],
  "recommendations": ["recommendation1", "recommendation2", "recommendation3", "recommendation4"]
}

Focus on:
1. Common messaging hooks and emotional triggers used
2. Most frequent call-to-action patterns with estimated percentages
3. Visual and creative themes (based on headlines and descriptions)
4. Actionable recommendations for creating competitive ads

Make the analysis specific to the search query and the actual ad content provided.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert digital marketing analyst specializing in competitive ad intelligence. Provide detailed, actionable insights based on ad data analysis."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const response = completion.choices[0].message.content;
    
    // Try to parse JSON response
    try {
      return JSON.parse(response);
    } catch (parseError) {
      console.error('Failed to parse AI response as JSON:', parseError);
      // Return structured fallback data
      return extractInsightsFromText(response);
    }

  } catch (error) {
    console.error('AI insights generation error:', error);
    
    // Return fallback mock insights
    return {
      commonHooks: [
        'Brand-specific messaging patterns',
        'Promotional and discount focus',
        'Lifestyle and benefit-oriented copy',
        'Urgency and action-driven language'
      ],
      topCTAs: [
        'Shop Now (30%)',
        'Learn More (25%)',
        'Get Started (20%)',
        'Try Free (15%)',
        'Sign Up (10%)'
      ],
      creativeThemes: [
        'Product-focused visuals',
        'Lifestyle integration',
        'Clean, modern design',
        'Brand consistency'
      ],
      recommendations: [
        'Analyze successful messaging patterns in your competitive set',
        'Test similar CTA approaches with your brand voice',
        'Consider incorporating lifestyle elements that resonate with your audience',
        'Focus on clear value propositions and benefits'
      ]
    };
  }
}

function extractInsightsFromText(text) {
  // Basic text parsing fallback if JSON parsing fails
  const insights = {
    commonHooks: [],
    topCTAs: [],
    creativeThemes: [],
    recommendations: []
  };

  // Simple extraction patterns - this is a fallback method
  const lines = text.split('\n').filter(line => line.trim());
  
  lines.forEach(line => {
    if (line.includes('hook') || line.includes('Hook')) {
      insights.commonHooks.push(line.replace(/^[-*]\s*/, '').trim());
    } else if (line.includes('CTA') || line.includes('call-to-action')) {
      insights.topCTAs.push(line.replace(/^[-*]\s*/, '').trim());
    } else if (line.includes('theme') || line.includes('creative')) {
      insights.creativeThemes.push(line.replace(/^[-*]\s*/, '').trim());
    } else if (line.includes('recommend') || line.includes('should')) {
      insights.recommendations.push(line.replace(/^[-*]\s*/, '').trim());
    }
  });

  return insights;
}

module.exports = {
  generateAIInsights
};