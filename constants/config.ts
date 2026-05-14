/**
 * Application Configuration Constants
 * Centralized configuration for the entire application
 * All values can be overridden via environment variables
 */

/**
 * API Configuration
 */
export const API_CONFIG = {
  /** Google Apps Script deployment endpoint */
  GAS_ENDPOINT: import.meta.env.VITE_GAS_API_ENDPOINT || 'https://script.google.com/macros/d/[DEPLOYMENT_ID]/usercodeapp',

  /** API version for backward compatibility */
  API_VERSION: '1.0.0',

  /** Default request timeout in milliseconds */
  REQUEST_TIMEOUT_MS: 10000,

  /** Maximum number of retry attempts */
  MAX_RETRIES: 3,

  /** Base delay for exponential backoff in milliseconds */
  RETRY_DELAY_MS: 1000,

  /** Whether to use credentials in requests */
  WITH_CREDENTIALS: false,

  /** Whether to use streaming responses */
  STREAMING_ENABLED: false,

  /** Health check interval in milliseconds */
  HEALTH_CHECK_INTERVAL_MS: 60000,
} as const

/**
 * Feature Flags
 */
export const FEATURE_FLAGS = {
  /** Enable custom slug functionality */
  CUSTOM_SLUG_ENABLED: import.meta.env.VITE_ENABLE_CUSTOM_SLUG !== 'false',

  /** Enable password protection */
  PASSWORD_PROTECTION_ENABLED: import.meta.env.VITE_ENABLE_PASSWORD_PROTECTION !== 'false',

  /** Enable expiration date functionality */
  EXPIRATION_ENABLED: import.meta.env.VITE_ENABLE_EXPIRATION_DATE !== 'false',

  /** Enable QR code generation */
  QR_CODE_ENABLED: import.meta.env.VITE_ENABLE_QR_CODE !== 'false',

  /** Enable analytics tracking */
  ANALYTICS_ENABLED: import.meta.env.VITE_ENABLE_ANALYTICS !== 'false',

  /** Enable dark mode */
  DARK_MODE_ENABLED: import.meta.env.VITE_ENABLE_DARK_MODE !== 'false',

  /** Enable dark mode auto-detection */
  DARK_MODE_AUTO: import.meta.env.VITE_DARK_MODE_AUTO !== 'false',

  /** Enable glass morphism effects */
  GLASS_MORPHISM_ENABLED: import.meta.env.VITE_GLASS_MORPHISM_ENABLED !== 'false',

  /** Enable premium features */
  PREMIUM_ENABLED: import.meta.env.VITE_PREMIUM_ENABLED === 'true',

  /** Enable donation feature */
  DONATION_ENABLED: import.meta.env.VITE_DONATION_ENABLED !== 'false',

  /** Enable UPI payments */
  UPI_PAYMENT_ENABLED: import.meta.env.VITE_UPI_PAYMENT_ENABLED !== 'false',
} as const

/**
 * Validation Rules
 */
export const VALIDATION_RULES = {
  /** Minimum URL length */
  MIN_URL_LENGTH: 10,

  /** Maximum URL length */
  MAX_URL_LENGTH: parseInt(import.meta.env.VITE_MAX_URL_LENGTH || '2048', 10),

  /** Minimum slug length */
  MIN_SLUG_LENGTH: parseInt(import.meta.env.VITE_MIN_SLUG_LENGTH || '3', 10),

  /** Maximum slug length */
  MAX_SLUG_LENGTH: parseInt(import.meta.env.VITE_MAX_SLUG_LENGTH || '32', 10),

  /** Slug pattern regex - alphanumeric and hyphens only */
  SLUG_PATTERN: /^[a-zA-Z0-9-_]+$/,

  /** URL regex pattern for validation */
  URL_PATTERN: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/,

  /** Email pattern for validation */
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  /** Minimum password length */
  PASSWORD_MIN_LENGTH: parseInt(import.meta.env.VITE_PASSWORD_MIN_LENGTH || '4', 10),

  /** Maximum password length */
  PASSWORD_MAX_LENGTH: parseInt(import.meta.env.VITE_PASSWORD_MAX_LENGTH || '64', 10),

  /** ISO 8601 date pattern */
  DATE_ISO_PATTERN: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{3})?Z?$/,

  /** Minimum future date offset in milliseconds (1 hour) */
  MIN_FUTURE_DATE_OFFSET_MS: 3600000,

  /** Maximum future date offset in milliseconds (10 years) */
  MAX_FUTURE_DATE_OFFSET_MS: 315360000000,
} as const

/**
 * Rate Limiting Configuration
 */
export const RATE_LIMITING = {
  /** Maximum requests per minute */
  MAX_REQUESTS_PER_MINUTE: parseInt(import.meta.env.VITE_RATE_LIMIT_REQUESTS_PER_MINUTE || '30', 10),

  /** Maximum custom slugs per day */
  MAX_CUSTOM_SLUGS_PER_DAY: parseInt(import.meta.env.VITE_MAX_CUSTOM_SLUGS_PER_DAY || '100', 10),

  /** Maximum link creations per day */
  MAX_LINKS_PER_DAY: 1000,

  /** Rate limit check interval in milliseconds */
  CHECK_INTERVAL_MS: 60000,

  /** Whether to enable rate limiting */
  ENABLED: true,
} as const

/**
 * Storage Configuration
 */
export const STORAGE_CONFIG = {
  /** localStorage key prefix for namespacing */
  KEY_PREFIX: import.meta.env.VITE_LOCALSTORAGE_KEY_PREFIX || 'url_shortener_',

  /** Maximum number of links to store in localStorage */
  MAX_HISTORY_ITEMS: parseInt(import.meta.env.VITE_MAX_HISTORY_ITEMS || '10', 10),

  /** Storage quota warning threshold percentage */
  QUOTA_WARNING_THRESHOLD: parseInt(import.meta.env.VITE_STORAGE_QUOTA_WARNING_THRESHOLD || '80', 10),

  /** Estimated storage quota in bytes (5MB typical) */
  ESTIMATED_QUOTA_BYTES: 5242880,

  /** Auto-cleanup enabled for old entries */
  AUTO_CLEANUP_ENABLED: true,

  /** Days before auto-cleanup removes entries */
  CLEANUP_DAYS_THRESHOLD: 30,
} as const

/**
 * UI Configuration
 */
export const UI_CONFIG = {
  /** Default animation duration in milliseconds */
  ANIMATION_DURATION_MS: parseInt(import.meta.env.VITE_ANIMATION_DURATION || '300', 10),

  /** Toast notification duration in milliseconds */
  TOAST_DURATION_MS: parseInt(import.meta.env.VITE_TOAST_DURATION || '3000', 10),

  /** Loading animation enabled */
  LOADING_ANIMATION_ENABLED: import.meta.env.VITE_LOADING_ANIMATION_ENABLED !== 'false',

  /** Glass morphism effects enabled */
  GLASS_MORPHISM_ENABLED: import.meta.env.VITE_GLASS_MORPHISM_ENABLED !== 'false',

  /** Modal animation duration in milliseconds */
  MODAL_ANIMATION_MS: 400,

  /** Debounce delay for input validation in milliseconds */
  INPUT_DEBOUNCE_MS: 300,

  /** Debounce delay for search in milliseconds */
  SEARCH_DEBOUNCE_MS: 500,

  /** Transition timing for state changes */
  TRANSITION_DURATION_MS: 250,

  /** Page transition animation duration */
  PAGE_TRANSITION_MS: 300,

  /** Mobile viewport breakpoint in pixels */
  MOBILE_BREAKPOINT_PX: 768,

  /** Tablet viewport breakpoint in pixels */
  TABLET_BREAKPOINT_PX: 1024,
} as const

/**
 * QR Code Configuration
 */
export const QR_CODE_CONFIG = {
  /** QR code size in pixels */
  SIZE_PX: 256,

  /** QR code quiet zone/border in pixels */
  QUIET_ZONE_PX: 2,

  /** QR code error correction level (L, M, Q, H) */
  ERROR_CORRECTION_LEVEL: 'M',

  /** QR code version (1-40, auto for auto-detect) */
  VERSION: 'auto',

  /** QR code color as hex string */
  COLOR: '#000000',

  /** QR code background color as hex string */
  BACKGROUND_COLOR: '#FFFFFF',

  /** Download format (PNG, SVG, PDF) */
  DOWNLOAD_FORMAT: 'png',

  /** Include logo/branding in QR code */
  INCLUDE_LOGO: false,
} as const

/**
 * Analytics Configuration
 */
export const ANALYTICS_CONFIG = {
  /** Enable analytics tracking */
  ENABLED: import.meta.env.VITE_ANALYTICS_ENABLED !== 'false',

  /** CSV cache update interval in milliseconds */
  CSV_UPDATE_INTERVAL_MS: parseInt(import.meta.env.VITE_CSV_CACHE_UPDATE_INTERVAL || '300000', 10),

  /** CSV sync enabled */
  CSV_SYNC_ENABLED: import.meta.env.VITE_CSV_SYNC_ENABLED !== 'false',

  /** Analytics data retention days */
  RETENTION_DAYS: 365,

  /** Real-time analytics update interval in milliseconds */
  REALTIME_UPDATE_INTERVAL_MS: 5000,

  /** Analytics cache duration in milliseconds */
  CACHE_DURATION_MS: 60000,

  /** Maximum analytics records to store locally */
  MAX_LOCAL_RECORDS: 1000,
} as const

/**
 * Security Configuration
 */
export const SECURITY_CONFIG = {
  /** Password hashing algorithm */
  HASH_ALGORITHM: import.meta.env.VITE_HASH_ALGORITHM || 'SHA256',

  /** Content Security Policy enabled */
  CSP_ENABLED: true,

  /** Enable CORS for API requests */
  CORS_ENABLED: true,

  /** Allowed CORS origins */
  CORS_ORIGINS: [
    'https://url.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000',
  ],

  /** HTTPS enforcement */
  HTTPS_ONLY: true,

  /** Secure cookie flag */
  SECURE_COOKIES: true,

  /** SameSite cookie setting */
  SAME_SITE_COOKIES: 'Strict',

  /** X-Frame-Options header value */
  X_FRAME_OPTIONS: 'DENY',

  /** Enable subresource integrity checks */
  SRI_ENABLED: true,
} as const

/**
 * Application Metadata
 */
export const APP_METADATA = {
  /** Application name */
  NAME: import.meta.env.VITE_APP_NAME || 'URL Shortener',

  /** Application version */
  VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',

  /** Application description */
  DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION || 'Production-grade URL shortening platform',

  /** Application URL */
  URL: import.meta.env.VITE_APP_URL || 'https://url.vercel.app',

  /** GitHub repository URL */
  GITHUB_URL: 'https://github.com/juyel-dev/url',

  /** Author name */
  AUTHOR: 'juyel-dev',

  /** License */
  LICENSE: 'MIT',

  /** Support email */
  SUPPORT_EMAIL: 'support@url.vercel.app',

  /** Support documentation URL */
  DOCS_URL: 'https://url.vercel.app/docs',

  /** Privacy policy URL */
  PRIVACY_URL: 'https://url.vercel.app/privacy',

  /** Terms of service URL */
  TERMS_URL: 'https://url.vercel.app/terms',
} as const

/**
 * Monetization Configuration
 */
export const MONETIZATION_CONFIG = {
  /** Premium features enabled */
  PREMIUM_ENABLED: import.meta.env.VITE_PREMIUM_ENABLED === 'true',

  /** Premium subscription price in INR */
  PREMIUM_PRICE_INR: parseInt(import.meta.env.VITE_PREMIUM_PRICE_INR || '99', 10),

  /** UPI payment enabled */
  UPI_PAYMENT_ENABLED: import.meta.env.VITE_UPI_PAYMENT_ENABLED !== 'false',

  /** Razorpay key ID */
  RAZORPAY_KEY_ID: import.meta.env.VITE_RAZORPAY_KEY_ID || '',

  /** Donation enabled */
  DONATION_ENABLED: import.meta.env.VITE_DONATION_ENABLED !== 'false',

  /** Default donation amount in INR */
  DEFAULT_DONATION_INR: 100,

  /** Premium trial duration in days */
  TRIAL_DAYS: 7,
} as const

/**
 * Logging Configuration
 */
export const LOGGING_CONFIG = {
  /** Log level (error, warn, info, debug) */
  LEVEL: import.meta.env.VITE_LOG_LEVEL || 'info',

  /** Enable debug mode */
  DEBUG_MODE: import.meta.env.VITE_DEBUG_MODE === 'true',

  /** Enable Sentry error tracking */
  SENTRY_ENABLED: !!import.meta.env.VITE_SENTRY_DSN,

  /** Sentry DSN URL */
  SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN || '',

  /** Sentry environment */
  SENTRY_ENVIRONMENT: import.meta.env.VITE_SENTRY_ENVIRONMENT || 'development',

  /** Console logs enabled in production */
  CONSOLE_LOGS_ENABLED: import.meta.env.VITE_LOG_LEVEL === 'debug',

  /** Log API requests */
  LOG_API_REQUESTS: true,

  /** Log API responses */
  LOG_API_RESPONSES: import.meta.env.VITE_DEBUG_MODE === 'true',
} as const

/**
 * Development Configuration
 */
export const DEV_CONFIG = {
  /** Development server port */
  DEV_PORT: parseInt(import.meta.env.VITE_DEVELOPMENT_SERVER_PORT || '5173', 10),

  /** Mock API enabled */
  MOCK_API_ENABLED: false,

  /** Use local CSV cache for testing */
  LOCAL_CSV_CACHE: false,

  /** Extended timeouts for debugging */
  EXTENDED_TIMEOUTS: false,

  /** Log all state changes */
  LOG_STATE_CHANGES: false,

  /** Show performance metrics */
  SHOW_PERFORMANCE_METRICS: false,

  /** Enable React strict mode */
  REACT_STRICT_MODE: true,
} as const

/**
 * Export all configuration as a single object
 */
export const CONFIG = {
  API_CONFIG,
  FEATURE_FLAGS,
  VALIDATION_RULES,
  RATE_LIMITING,
  STORAGE_CONFIG,
  UI_CONFIG,
  QR_CODE_CONFIG,
  ANALYTICS_CONFIG,
  SECURITY_CONFIG,
  APP_METADATA,
  MONETIZATION_CONFIG,
  LOGGING_CONFIG,
  DEV_CONFIG,
} as const

/**
 * Type definition for configuration object
 * Enables type-safe configuration access
 */
export type AppConfig = typeof CONFIG
