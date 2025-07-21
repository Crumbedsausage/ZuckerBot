const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");
const { mockAds, mockAIInsights } = require("./services/mockData");
const { generateAIInsights } = require("./services/aiService");

const app = express();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(bodyParser.json());

// API Routes
app.get("/api/search", async (req, res) => {
  try {
    const { q: query, platform = 'all' } = req.query;
    
    if (!query) {
      return res.status(400).json({ error: "Query parameter is required" });
    }

    console.log(`Searching for: ${query} on platform: ${platform}`);
    
    // Filter mock data based on platform
    let ads = mockAds;
    if (platform !== 'all') {
      ads = mockAds.filter(ad => ad.platform === platform);
    }
    
    // Generate AI insights for the search results
    const insights = await generateAIInsights(openai, ads, query);
    
    return res.json({
      ads,
      insights,
      query,
      platform,
      totalResults: ads.length
    });
  } catch (error) {
    console.error('Search error:', error);
    return res.status(500).json({ 
      error: "Failed to search ads",
      details: error.message 
    });
  }
});

app.get("/api/ads/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ad = mockAds.find(ad => ad.id === id);
    
    if (!ad) {
      return res.status(404).json({ error: "Ad not found" });
    }
    
    return res.json(ad);
  } catch (error) {
    console.error('Get ad error:', error);
    return res.status(500).json({ 
      error: "Failed to fetch ad",
      details: error.message 
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    service: "AdIntel API" 
  });
