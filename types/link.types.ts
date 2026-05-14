/**
 * Core Link Types and Interfaces
 * Defines the primary domain model for shortened links and related operations
 */

/**
 * Represents the core shortened link entity
 * Contains all essential information about a shortened URL
 */
export interface ShortenedLink {
  /** Unique identifier for the link, typically a UUID */
  id: string

  /** Original long URL that was shortened */
  originalUrl: string

  /** Shortened slug (e.g., "portfolio", "project-xyz") */
  slug: string

  /** Shortened URL in full form (e.g., "url.vercel.app/portfolio") */
  shortenedUrl: string

  /** Whether this link uses a custom slug provided by user */
  isCustomSlug: boolean

  /** Timestamp when the link was created (ISO 8601) */
  createdAt: string

  /** Timestamp when the link expires (ISO 8601), null if no expiration */
  expiresAt: string | null

  /** Whether this link requires a password to access */
  isPasswordProtected: boolean

  /** Hashed password if protected, undefined otherwise */
  passwordHash?: string

  /** Additional metadata stored as JSON string */
  metadata?: LinkMetadata

  /** Whether the link is currently active */
  isActive: boolean

  /** Number of times this link has been clicked */
  clickCount: number

  /** Timestamp of the last click, null if never clicked */
  lastClickedAt: string | null
}

/**
 * Metadata associated with a link
 * Stores optional user-provided or system-generated information
 */
export interface LinkMetadata {
  /** Custom title or label provided by user */
  title?: string

  /** Custom description of the link's purpose */
  description?: string

  /** Category or tag for organizing links */
  category?: string

  /** Custom tags for filtering and searching */
  tags?: string[]

  /** User-defined notes about the link */
  notes?: string

  /** Geographic region associated with the link */
  region?: string

  /** Custom color code for UI representation */
  colorCode?: string
}

/**
 * Request payload for creating a new shortened link
 * Sent from frontend to GAS backend
 */
export interface CreateLinkRequest {
  /** Original URL to be shortened, must be valid HTTP(S) URL */
  originalUrl: string

  /** Optional custom slug provided by user */
  customSlug?: string

  /** Optional password for protection */
  password?: string

  /** ISO 8601 timestamp for link expiration */
  expiresAt?: string

  /** Additional metadata for the link */
  metadata?: LinkMetadata

  /** Request timestamp for debugging and audit purposes */
  requestedAt?: string

  /** Client-side generated request ID for idempotency */
  requestId?: string
}

/**
 * Response from backend when creating a shortened link
 * Contains the generated link details and operation metadata
 */
export interface CreateLinkResponse {
  /** Whether the operation succeeded */
  success: boolean

  /** The created shortened link object */
  link?: ShortenedLink

  /** Error message if operation failed */
  error?: string

  /** Specific error code for client-side error handling */
  errorCode?: CreateLinkErrorCode

  /** Additional error details or suggestions */
  errorDetails?: string

  /** Server timestamp for synchronization */
  timestamp: string

  /** Unique trace ID for debugging API issues */
  traceId: string
}

/**
 * Enumeration of possible errors during link creation
 * Enables precise client-side error handling and messaging
 */
export enum CreateLinkErrorCode {
  InvalidUrl = 'INVALID_URL',
  SlugAlreadyExists = 'SLUG_ALREADY_EXISTS',
  SlugInvalid = 'SLUG_INVALID',
  PasswordRequired = 'PASSWORD_REQUIRED',
  PasswordTooWeak = 'PASSWORD_TOO_WEAK',
  ExpirationInvalid = 'EXPIRATION_INVALID',
  RateLimitExceeded = 'RATE_LIMIT_EXCEEDED',
  StorageQuotaExceeded = 'STORAGE_QUOTA_EXCEEDED',
  InvalidPassword = 'INVALID_PASSWORD',
  ServerError = 'SERVER_ERROR',
  ValidationError = 'VALIDATION_ERROR',
}

/**
 * Request for checking if a custom slug is available
 */
export interface CheckSlugAvailabilityRequest {
  /** Slug to check for availability */
  slug: string

  /** Request ID for idempotency */
  requestId?: string
}

/**
 * Response indicating slug availability
 */
export interface CheckSlugAvailabilityResponse {
  /** The checked slug */
  slug: string

  /** Whether the slug is available for use */
  isAvailable: boolean

  /** Reason slug is unavailable if applicable */
  reason?: string

  /** Suggestions for alternative slugs if unavailable */
  suggestions?: string[]

  /** Server timestamp */
  timestamp: string
}

/**
 * Request for updating an existing link
 * Allows modification of protected properties
 */
export interface UpdateLinkRequest {
  /** ID of the link to update */
  linkId: string

  /** New expiration timestamp if updating */
  expiresAt?: string

  /** New password hash if updating protection */
  passwordHash?: string

  /** Whether to enable/disable protection */
  isPasswordProtected?: boolean

  /** Updated metadata */
  metadata?: LinkMetadata

  /** Request ID for idempotency */
  requestId?: string
}

/**
 * Response from updating a link
 */
export interface UpdateLinkResponse {
  /** Whether the operation succeeded */
  success: boolean

  /** Updated link object */
  link?: ShortenedLink

  /** Error message if operation failed */
  error?: string

  /** Server timestamp */
  timestamp: string

  /** Trace ID for debugging */
  traceId: string
}

/**
 * Request for deleting a link
 * Removes the link and associated analytics
 */
export interface DeleteLinkRequest {
  /** ID or slug of link to delete */
  linkId: string

  /** Confirmation flag to prevent accidental deletion */
  confirm: boolean

  /** Request ID for idempotency */
  requestId?: string
}

/**
 * Response from deleting a link
 */
export interface DeleteLinkResponse {
  /** Whether the operation succeeded */
  success: boolean

  /** ID of deleted link */
  deletedLinkId?: string

  /** Error message if operation failed */
  error?: string

  /** Server timestamp */
  timestamp: string

  /** Trace ID for debugging */
  traceId: string
}

/**
 * Represents a link in local browser storage
 * May differ from ShortenedLink due to local-only fields
 */
export interface LocalStorageLink extends ShortenedLink {
  /** User's local copy of the original URL (before hashing) */
  localPassword?: string

  /** Timestamp when this entry was last synced with server */
  lastSyncedAt?: string

  /** Whether this link has been synced to the backend */
  isSynced: boolean

  /** Whether this link is pending deletion */
  isPendingDeletion?: boolean
}

/**
 * Filter and search options for link queries
 */
export interface LinkFilterOptions {
  /** Filter by category if specified */
  category?: string

  /** Filter by tags (match any tag) */
  tags?: string[]

  /** Filter by creation date range */
  createdAfter?: string

  /** Filter by creation date range */
  createdBefore?: string

  /** Filter by active/inactive status */
  isActive?: boolean

  /** Filter by password protection status */
  isPasswordProtected?: boolean

  /** Filter by expiration status */
  hasExpired?: boolean

  /** Search in title, description, and notes */
  searchTerm?: string

  /** Sort field for results */
  sortBy?: LinkSortField

  /** Sort direction */
  sortDirection?: 'asc' | 'desc'

  /** Pagination limit */
  limit?: number

  /** Pagination offset */
  offset?: number
}

/**
 * Available fields for sorting links
 */
export enum LinkSortField {
  CreatedAt = 'createdAt',
  ClickCount = 'clickCount',
  LastClicked = 'lastClickedAt',
  ExpiresAt = 'expiresAt',
  Title = 'title',
}

/**
 * Bulk operation request for managing multiple links
 */
export interface BulkLinkOperation {
  /** Operation type to perform */
  operation: 'delete' | 'extend-expiration' | 'update-metadata' | 'change-password'

  /** Link IDs or slugs to operate on */
  linkIds: string[]

  /** Operation-specific parameters */
  params?: Record<string, unknown>

  /** Request ID for idempotency */
  requestId?: string
}

/**
 * Response from bulk operation
 */
export interface BulkLinkOperationResponse {
  /** Whether all operations succeeded */
  success: boolean

  /** Total number of links affected */
  affectedCount: number

  /** Links that failed with reasons */
  failures?: Array<{
    linkId: string
    error: string
  }>

  /** Error message if operation failed */
  error?: string

  /** Server timestamp */
  timestamp: string

  /** Trace ID for debugging */
  traceId: string
}

/**
 * Statistics about the user's link collection
 */
export interface LinkStatistics {
  /** Total number of links created */
  totalLinks: number

  /** Number of active (non-expired) links */
  activeLinks: number

  /** Number of expired links */
  expiredLinks: number

  /** Number of password-protected links */
  protectedLinks: number

  /** Total clicks across all links */
  totalClicks: number

  /** Average clicks per link */
  averageClicksPerLink: number

  /** Most clicked link */
  mostClickedLink?: ShortenedLink

  /** Least clicked link */
  leastClickedLink?: ShortenedLink

  /** Links created in last 7 days */
  linksCreatedLastWeek: number

  /** Links created in last 30 days */
  linksCreatedLastMonth: number
  }
