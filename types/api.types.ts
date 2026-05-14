/**
 * API Types and Interfaces
 * Defines the communication contract between frontend and Google Apps Script backend
 */

/**
 * All possible API actions that the backend supports
 * Used for routing requests to appropriate handlers in GAS
 */
export enum ApiAction {
  /** Create a new shortened link */
  Create = 'CREATE',

  /** Check if a slug is available */
  CheckSlug = 'CHECK_SLUG',

  /** Redirect to original URL (backend returns original URL) */
  Redirect = 'REDIRECT',

  /** Fetch analytics for a link */
  Stats = 'STATS',

  /** Update link properties */
  Update = 'UPDATE',

  /** Delete a link */
  Delete = 'DELETE',

  /** Verify password for protected link */
  VerifyPassword = 'VERIFY_PASSWORD',

  /** Get user's link list */
  GetLinks = 'GET_LINKS',

  /** Perform bulk operations */
  BulkOperation = 'BULK_OPERATION',

  /** Health check endpoint */
  HealthCheck = 'HEALTH_CHECK',
}

/**
 * Generic API request wrapper
 * All requests to backend follow this structure
 */
export interface ApiRequest<T = Record<string, unknown>> {
  /** Action to perform on the backend */
  action: ApiAction

  /** Request payload specific to the action */
  data: T

  /** Optional authentication token */
  token?: string

  /** Request ID for idempotency and tracing */
  requestId: string

  /** Client timestamp for clock skew detection */
  clientTimestamp: string

  /** API version for backward compatibility */
  apiVersion: string
}

/**
 * Generic API response wrapper
 * All responses from backend follow this structure
 */
export interface ApiResponse<T = Record<string, unknown>> {
  /** Whether the request succeeded */
  success: boolean

  /** Response payload, null if operation failed */
  data: T | null

  /** Error message if operation failed */
  error: ApiError | null

  /** Server timestamp */
  timestamp: string

  /** Request ID echo for tracing */
  requestId: string

  /** API version that handled the request */
  apiVersion: string

  /** Trace ID for backend logging and debugging */
  traceId: string

  /** Execution time in milliseconds */
  executionTimeMs: number
}

/**
 * Structured error response
 * Provides detailed error information for client-side handling
 */
export interface ApiError {
  /** Machine-readable error code */
  code: string

  /** Human-readable error message */
  message: string

  /** Additional error details or field-specific errors */
  details?: Record<string, unknown>

  /** HTTP status code that would be returned */
  httpStatus: number

  /** Whether the error is retryable */
  isRetryable: boolean

  /** Suggested retry delay in milliseconds if retryable */
  retryAfterMs?: number

  /** Stack trace in development mode only */
  stackTrace?: string
}

/**
 * Request payload for CREATE action
 */
export interface CreateActionPayload {
  /** Original URL to shorten */
  originalUrl: string

  /** Optional custom slug */
  customSlug?: string

  /** Optional password (plaintext at this point) */
  password?: string

  /** Expiration timestamp if needed */
  expiresAt?: string

  /** Optional metadata */
  metadata?: Record<string, unknown>
}

/**
 * Response payload for CREATE action
 */
export interface CreateActionResponse {
  /** Generated link ID */
  linkId: string

  /** Generated or provided slug */
  slug: string

  /** Full shortened URL */
  shortenedUrl: string

  /** Full QR code data URL */
  qrCodeDataUrl?: string

  /** Creation timestamp */
  createdAt: string

  /** Whether expiration is set */
  hasExpiration: boolean

  /** Whether password protection is enabled */
  isPasswordProtected: boolean
}

/**
 * Request payload for CHECK_SLUG action
 */
export interface CheckSlugActionPayload {
  /** Slug to check */
  slug: string
}

/**
 * Response payload for CHECK_SLUG action
 */
export interface CheckSlugActionResponse {
  /** Whether slug is available */
  isAvailable: boolean

  /** Reason for unavailability if applicable */
  reason?: string

  /** Alternative slug suggestions */
  suggestions?: string[]
}

/**
 * Request payload for REDIRECT action
 */
export interface RedirectActionPayload {
  /** Slug to redirect from */
  slug: string

  /** User-provided password if link is protected */
  password?: string

  /** Client IP for analytics (optional) */
  clientIp?: string

  /** User agent for analytics (optional) */
  userAgent?: string

  /** Referrer for analytics (optional) */
  referrer?: string
}

/**
 * Response payload for REDIRECT action
 */
export interface RedirectActionResponse {
  /** Original URL to redirect to */
  originalUrl: string

  /** Whether this link is password protected */
  isPasswordProtected: boolean

  /** Whether password verification succeeded (if protected) */
  passwordVerified?: boolean

  /** Whether this link has expired */
  isExpired: boolean

  /** Expiration timestamp if applicable */
  expiresAt?: string
}

/**
 * Request payload for STATS action
 */
export interface StatsActionPayload {
  /** Slug to get statistics for */
  slug: string

  /** Include daily breakdown if true */
  includeDailyBreakdown?: boolean

  /** Number of days to include in breakdown */
  daysToInclude?: number
}

/**
 * Response payload for STATS action
 */
export interface StatsActionResponse {
  /** Total clicks for this link */
  totalClicks: number

  /** Creation timestamp */
  createdAt: string

  /** Last click timestamp if available */
  lastClickedAt?: string

  /** Daily click breakdown if requested */
  dailyBreakdown?: Array<{
    date: string
    clicks: number
  }>

  /** Geographic distribution if available */
  geoDistribution?: Record<string, number>

  /** Top referrers if available */
  topReferrers?: Array<{
    referrer: string
    clicks: number
  }>

  /** Browser statistics if available */
  browsers?: Record<string, number>
}

/**
 * Request payload for UPDATE action
 */
export interface UpdateActionPayload {
  /** Link ID or slug to update */
  linkId: string

  /** New expiration timestamp if updating */
  expiresAt?: string

  /** New password hash if updating */
  passwordHash?: string

  /** Enable/disable password protection */
  isPasswordProtected?: boolean

  /** Updated metadata */
  metadata?: Record<string, unknown>
}

/**
 * Response payload for UPDATE action
 */
export interface UpdateActionResponse {
  /** Link ID that was updated */
  linkId: string

  /** Fields that were updated */
  updatedFields: string[]

  /** Update timestamp */
  updatedAt: string
}

/**
 * Request payload for DELETE action
 */
export interface DeleteActionPayload {
  /** Link ID or slug to delete */
  linkId: string

  /** Confirmation flag */
  confirm: boolean
}

/**
 * Response payload for DELETE action
 */
export interface DeleteActionResponse {
  /** ID of deleted link */
  deletedLinkId: string

  /** Deletion timestamp */
  deletedAt: string

  /** Analytics data saved before deletion */
  archivedAnalytics?: Record<string, unknown>
}

/**
 * Request payload for VERIFY_PASSWORD action
 */
export interface VerifyPasswordActionPayload {
  /** Slug to verify password for */
  slug: string

  /** Password provided by user */
  password: string
}

/**
 * Response payload for VERIFY_PASSWORD action
 */
export interface VerifyPasswordActionResponse {
  /** Whether password is correct */
  isCorrect: boolean

  /** Session token for authenticated redirect */
  sessionToken?: string

  /** Token expiration timestamp */
  tokenExpiresAt?: string
}

/**
 * Request payload for GET_LINKS action
 */
export interface GetLinksActionPayload {
  /** Filter criteria */
  filters?: Record<string, unknown>

  /** Sort field */
  sortBy?: string

  /** Sort direction */
  sortDirection?: 'asc' | 'desc'

  /** Pagination limit */
  limit: number

  /** Pagination offset */
  offset: number
}

/**
 * Response payload for GET_LINKS action
 */
export interface GetLinksActionResponse {
  /** Array of links matching criteria */
  links: Array<Record<string, unknown>>

  /** Total count of links matching criteria */
  totalCount: number

  /** Has more results available */
  hasMore: boolean

  /** Query execution time in milliseconds */
  queryTimeMs: number
}

/**
 * Health check response
 */
export interface HealthCheckResponse {
  /** Service status */
  status: 'healthy' | 'degraded' | 'unhealthy'

  /** Service name */
  service: string

  /** Current version */
  version: string

  /** Database connection status */
  database: 'connected' | 'disconnected'

  /** Last sync timestamp */
  lastSync: string

  /** Uptime in seconds */
  uptimeSeconds: number
}

/**
 * API error codes for structured error handling
 */
export enum ApiErrorCode {
  // Validation errors (400)
  InvalidUrl = 'INVALID_URL',
  InvalidSlug = 'INVALID_SLUG',
  InvalidPassword = 'INVALID_PASSWORD',
  InvalidExpiration = 'INVALID_EXPIRATION',
  MissingRequiredField = 'MISSING_REQUIRED_FIELD',

  // Conflict errors (409)
  SlugAlreadyExists = 'SLUG_ALREADY_EXISTS',
  LinkAlreadyExists = 'LINK_ALREADY_EXISTS',

  // Authorization errors (401/403)
  Unauthorized = 'UNAUTHORIZED',
  PasswordIncorrect = 'PASSWORD_INCORRECT',
  AccessDenied = 'ACCESS_DENIED',

  // Not found errors (404)
  LinkNotFound = 'LINK_NOT_FOUND',
  SlugNotFound = 'SLUG_NOT_FOUND',

  // Server errors (500)
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  DatabaseError = 'DATABASE_ERROR',
  ServiceUnavailable = 'SERVICE_UNAVAILABLE',

  // Rate limiting (429)
  RateLimitExceeded = 'RATE_LIMIT_EXCEEDED',
  QuotaExceeded = 'QUOTA_EXCEEDED',

  // Client errors
  RequestTimeout = 'REQUEST_TIMEOUT',
  InvalidContentType = 'INVALID_CONTENT_TYPE',
}

/**
 * Configuration for API requests
 */
export interface ApiRequestConfig {
  /** Request timeout in milliseconds */
  timeoutMs: number

  /** Number of retry attempts */
  maxRetries: number

  /** Base delay for exponential backoff in milliseconds */
  retryDelayMs: number

  /** Whether to include credentials */
  withCredentials: boolean

  /** Custom headers to include */
  headers?: Record<string, string>

  /** Whether to use streaming responses */
  streaming: boolean
}

/**
 * API request queue item for managing concurrent requests
 */
export interface QueuedApiRequest {
  /** Unique request ID */
  id: string

  /** API request to execute */
  request: ApiRequest

  /** Promise resolver */
  resolve: (value: ApiResponse) => void

  /** Promise rejecter */
  reject: (reason: unknown) => void

  /** Request creation timestamp */
  createdAt: string

  /** Number of retry attempts */
  retryCount: number

  /** Request priority (higher = earlier) */
  priority: number
  }
