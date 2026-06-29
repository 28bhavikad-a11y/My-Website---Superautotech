/**
 * Vercel Speed Insights initialization for static HTML site
 * This script loads and initializes Speed Insights tracking
 */
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false // Set to true for development debugging
});
