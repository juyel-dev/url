/**
 * Type Definitions Barrel Export
 * Aggregates all type definitions for clean imports throughout the application
 * Usage: import { ShortenedLink, ApiResponse } from '@types'
 */

// Link type exports
export type {
  ShortenedLink,
  LinkMetadata,
  CreateLinkRequest,
  CreateLinkResponse,
  CheckSlugAvailabilityRequest,
  CheckSlugAvailabilityResponse,
  UpdateLinkRequest,
  UpdateLinkResponse,
  DeleteLinkRequest,
  DeleteLinkResponse,
  LocalStorageLink,
  LinkFilterOptions,
  BulkLinkOperation,
  BulkLinkOperationResponse,
  LinkStatistics,
} from './link.types'

export {
  CreateLinkErrorCode,
  LinkSortField,
} from './link.types'

// API type exports
export type {
  ApiRequest,
  ApiResponse,
  ApiError,
  CreateActionPayload,
  CreateActionResponse,
  CheckSlugActionPayload,
  CheckSlugActionResponse,
  RedirectActionPayload,
  RedirectActionResponse,
  StatsActionPayload,
  StatsActionResponse,
  UpdateActionPayload,
  UpdateActionResponse,
  DeleteActionPayload,
  DeleteActionResponse,
  VerifyPasswordActionPayload,
  VerifyPasswordActionResponse,
  GetLinksActionPayload,
  GetLinksActionResponse,
  HealthCheckResponse,
  ApiRequestConfig,
  QueuedApiRequest,
} from './api.types'

export {
  ApiAction,
  ApiErrorCode,
} from './api.types'

// Analytics type exports
export type {
  ClickEvent,
  GeoLocation,
  BrowserInfo,
  DeviceInfo,
  LinkAnalytics,
  TimeSeriesAnalytics,
  TimePeriod,
  ComparativeAnalytics,
  EngagementMetrics,
  ExportAnalyticsRequest,
  AnalyticsDashboard,
  RealtimeAnalyticsUpdate,
  AnalyticsQuery,
  AnalyticsCacheMetadata,
} from './analytics.types'

export {
  AnalyticsExportFormat,
} from './analytics.types'
