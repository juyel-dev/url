/**
 * Analytics Types and Interfaces
 * Defines data structures for click tracking, statistics, and user engagement metrics
 */

/**
 * Individual click event recorded for analytics
 * Captured when a shortened link is accessed
 */
export interface ClickEvent {
  /** Unique ID for this click event */
  id: string

  /** Link that was clicked */
  linkId: string

  /** Slug of the clicked link */
  slug: string

  /** When the click occurred (ISO 8601) */
  timestamp: string

  /** ISO 8601 date for grouping clicks by day */
  date: string

  /** Client IP address if captured */
  clientIp?: string

  /** User agent string from the request */
  userAgent?: string

  /** HTTP referrer header */
  referrer?: string

  /** Inferred geographic location from IP */
  location?: GeoLocation

  /** Parsed browser information */
  browser?: BrowserInfo

  /** Parsed device information */
  device?: DeviceInfo

  /** Whether this was a bot/crawler request */
  isBot: boolean

  /** Additional metadata */
  metadata?: Record<string, unknown>
}

/**
 * Geographic location information inferred from IP
 */
export interface GeoLocation {
  /** ISO 3166-1 alpha-2 country code */
  countryCode: string

  /** Full country name */
  countryName: string

  /** State or region if available */
  region?: string

  /** City if available */
  city?: string

  /** Latitude coordinate */
  latitude?: number

  /** Longitude coordinate */
  longitude?: number

  /** Timezone identifier */
  timezone?: string

  /** Confidence score of geolocation (0-100) */
  confidence: number
}

/**
 * Parsed browser information from user agent
 */
export interface BrowserInfo {
  /** Browser name (Chrome, Firefox, Safari, etc.) */
  name: string

  /** Browser version */
  version: string

  /** Browser engine (Blink, Gecko, WebKit, etc.) */
  engine: string

  /** Major version for grouping */
  majorVersion: string

  /** Whether this is a mobile browser */
  isMobile: boolean
}

/**
 * Parsed device information from user agent
 */
export interface DeviceInfo {
  /** Device type (desktop, mobile, tablet) */
  type: 'desktop' | 'mobile' | 'tablet' | 'unknown'

  /** Device manufacturer if known */
  manufacturer?: string

  /** Operating system name */
  os: string

  /** Operating system version */
  osVersion: string

  /** Major OS version for grouping */
  osVersionMajor: string

  /** Whether this is a touch-enabled device */
  isTouchEnabled: boolean
}

/**
 * Aggregated analytics for a specific link
 * Computed summary statistics across all clicks
 */
export interface LinkAnalytics {
  /** Link ID this analytics applies to */
  linkId: string

  /** Slug of the link */
  slug: string

  /** Total number of clicks */
  totalClicks: number

  /** First click timestamp */
  firstClickAt: string | null

  /** Last click timestamp */
  lastClickedAt: string | null

  /** Number of unique IP addresses */
  uniqueVisitors: number

  /** Click-through rate calculation metadata */
  ctr?: number

  /** Geographic distribution of clicks */
  geoDistribution: Map<string, number>

  /** Browser distribution */
  browserDistribution: Map<string, number>

  /** Device type distribution */
  deviceDistribution: Map<string, number>

  /** Operating system distribution */
  osDistribution: Map<string, number>

  /** Top referring domains */
  topReferrers: Array<{
    referrer: string
    clicks: number
    percentage: number
  }>

  /** Daily click trend */
  dailyClicks: Array<{
    date: string
    clicks: number
  }>

  /** Hourly click distribution for current day */
  hourlyClicks?: Array<{
    hour: number
    clicks: number
  }>

  /** Whether the last click data is recent */
  isRecentlyActive: boolean

  /** Last timestamp when analytics were updated */
  lastUpdatedAt: string
}

/**
 * Time series analytics data for trend analysis
 */
export interface TimeSeriesAnalytics {
  /** Link ID being analyzed */
  linkId: string

  /** Slug being analyzed */
  slug: string

  /** Analysis time period */
  period: TimePeriod

  /** Data points in the time series */
  dataPoints: Array<{
    timestamp: string
    clicks: number
    uniqueVisitors: number
    averageTimeOnPage?: number
  }>

  /** Overall statistics for the period */
  statistics: {
    totalClicks: number
    averageClicksPerDay: number
    peakClickCount: number
    peakClickTime: string
    trend: 'increasing' | 'decreasing' | 'stable'
    trendPercentage: number
  }

  /** Comparison with previous period */
  comparison?: {
    previousPeriodClicks: number
    percentageChange: number
    isImprovement: boolean
  }
}

/**
 * Time period specification for analytics
 */
export interface TimePeriod {
  /** Period type */
  type: 'day' | 'week' | 'month' | 'quarter' | 'year' | 'custom'

  /** Start date (ISO 8601) */
  startDate: string

  /** End date (ISO 8601) */
  endDate: string

  /** Number of days in this period */
  durationDays: number
}

/**
 * Comparison analytics between multiple links
 */
export interface ComparativeAnalytics {
  /** Links being compared */
  links: Array<{
    linkId: string
    slug: string
    totalClicks: number
    uniqueVisitors: number
    lastClickedAt: string | null
  }>

  /** Comparative metrics */
  comparison: {
    highestClickLink: string
    lowestClickLink: string
    averageClicks: number
    medianClicks: number
    standardDeviation: number
  }

  /** Period of comparison */
  period: TimePeriod

  /** Correlation metrics if applicable */
  correlations?: Record<string, number>
}

/**
 * User engagement metrics
 */
export interface EngagementMetrics {
  /** Link ID */
  linkId: string

  /** Total impressions (link views) */
  impressions: number

  /** Total clicks */
  clicks: number

  /** Click-through rate (clicks / impressions) */
  ctr: number

  /** Bounce rate if available */
  bounceRate?: number

  /** Average session duration in seconds */
  avgSessionDuration?: number

  /** User retention metrics */
  retention: {
    oneTimeVisitors: number
    returningVisitors: number
    frequentVisitors: number // Visited more than 5 times
    churnedVisitors: number // Visited but not recently
  }

  /** Conversion metrics if applicable */
  conversion?: {
    conversions: number
    conversionRate: number
    revenueGenerated?: number
  }
}

/**
 * Export format for analytics data
 */
export enum AnalyticsExportFormat {
  Json = 'json',
  Csv = 'csv',
  Pdf = 'pdf',
  Excel = 'xlsx',
}

/**
 * Request for exporting analytics
 */
export interface ExportAnalyticsRequest {
  /** Link IDs to export analytics for */
  linkIds: string[]

  /** Time period to include */
  period: TimePeriod

  /** Format to export in */
  format: AnalyticsExportFormat

  /** Whether to include all available metrics */
  includeAllMetrics: boolean

  /** Whether to include comparative data */
  includeComparison: boolean

  /** Whether to include geographic data */
  includeGeoData: boolean

  /** Email to send export to if needed */
  recipientEmail?: string
}

/**
 * Analytics dashboard summary
 */
export interface AnalyticsDashboard {
  /** Period covered by this dashboard */
  period: TimePeriod

  /** Key performance indicators */
  kpis: {
    totalClicks: number
    uniqueVisitors: number
    topLink: {
      slug: string
      clicks: number
    }
    latestLink: {
      slug: string
      createdAt: string
    }
  }

  /** Individual link analytics */
  links: LinkAnalytics[]

  /** Overall trends */
  trends: {
    dailyAverageClicks: number
    weeklyGrowthRate: number
    monthlyGrowthRate: number
  }

  /** Geographic insights */
  geoInsights: {
    topCountries: Array<{
      country: string
      clicks: number
      percentage: number
    }>
    topCities?: Array<{
      city: string
      country: string
      clicks: number
    }>
  }

  /** Technology insights */
  techInsights: {
    topBrowsers: Array<{
      browser: string
      percentage: number
    }>
    deviceBreakdown: {
      desktop: number
      mobile: number
      tablet: number
    }
    topOs: Array<{
      os: string
      percentage: number
    }>
  }

  /** Traffic source insights */
  trafficInsights: {
    directTraffic: number
    referredTraffic: number
    searchEngineTraffic: number
    socialTraffic: number
    otherTraffic: number
    topReferrers: Array<{
      domain: string
      clicks: number
    }>
  }

  /** Last update timestamp */
  lastUpdatedAt: string
}

/**
 * Real-time analytics update
 * Sent to frontend for live analytics updates
 */
export interface RealtimeAnalyticsUpdate {
  /** Link that was clicked */
  slug: string

  /** New click count */
  totalClicks: number

  /** New unique visitor count */
  uniqueVisitors: number

  /** Click event details */
  lastClick: {
    timestamp: string
    location?: string
    browser?: string
    device?: string
  }

  /** Whether analytics are being updated in real-time */
  isRealtimeEnabled: boolean

  /** Update timestamp */
  updatedAt: string
}

/**
 * Analytics query parameters
 */
export interface AnalyticsQuery {
  /** Link ID or slug to query */
  linkId: string

  /** Time period */
  period: TimePeriod

  /** Metrics to include */
  metrics: Array<
    | 'clicks'
    | 'uniqueVisitors'
    | 'geography'
    | 'browsers'
    | 'devices'
    | 'referrers'
    | 'engagement'
  >

  /** Grouping granularity */
  groupBy?: 'hour' | 'day' | 'week' | 'month'

  /** Whether to include breakdown by device type */
  breakdownByDevice: boolean

  /** Whether to include breakdown by browser */
  breakdownByBrowser: boolean

  /** Whether to include geographic breakdown */
  breakdownByGeo: boolean

  /** Limit results to this many records */
  limit?: number
}

/**
 * Analytics caching metadata
 */
export interface AnalyticsCacheMetadata {
  /** Link ID being cached */
  linkId: string

  /** Cache creation timestamp */
  cachedAt: string

  /** When cache expires */
  expiresAt: string

  /** Whether cache is fresh */
  isFresh: boolean

  /** Cache source (real-time, database, archived) */
  source: 'realtime' | 'database' | 'archived'

  /** Data freshness in seconds */
  ageSeconds: number
}
