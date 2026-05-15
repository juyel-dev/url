/**
 * Validation Constants and Rules
 * Centralized validation configurations, regex patterns, and constraint definitions
 * Used by form validation, API validation, and business logic
 */

import { VALIDATION_RULES } from './config'

/**
 * URL validation configuration
 */
export const URL_VALIDATION = {
  /** Minimum URL length */
  MIN_LENGTH: VALIDATION_RULES.MIN_URL_LENGTH,

  /** Maximum URL length */
  MAX_LENGTH: VALIDATION_RULES.MAX_URL_LENGTH,

  /** URL regex pattern for validation */
  PATTERN: VALIDATION_RULES.URL_PATTERN,

  /** Allowed URL protocols */
  ALLOWED_PROTOCOLS: ['http://', 'https://'],

  /** Disallowed URL patterns (spam/malicious) */
  DISALLOWED_PATTERNS: [
    /bit\.ly/i,
    /tinyurl/i,
    /short\.link/i,
    /goo\.gl/i,
    /ow\.ly/i,
  ],

  /** Common URL schemes */
  SCHEMES: {
    HTTP: 'http://',
    HTTPS: 'https://',
  },

  /** Top-level domain validation */
  TLD_PATTERN: /^[a-zA-Z]{2,}$/,

  /** Minimum domain length */
  MIN_DOMAIN_LENGTH: 3,

  /** Maximum domain length */
  MAX_DOMAIN_LENGTH: 253,

  /** Domain label pattern (each part between dots) */
  DOMAIN_LABEL_PATTERN: /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/,

  /** Port number validation */
  PORT_PATTERN: /^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/,

  /** IP address validation (IPv4) */
  IPV4_PATTERN: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,

  /** Path validation */
  PATH_PATTERN: /^\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]*$/,

  /** Query string validation */
  QUERY_PATTERN: /^[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]*$/,

  /** Fragment validation */
  FRAGMENT_PATTERN: /^[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]*$/,
} as const

/**
 * Custom slug validation configuration
 */
export const SLUG_VALIDATION = {
  /** Minimum slug length */
  MIN_LENGTH: VALIDATION_RULES.MIN_SLUG_LENGTH,

  /** Maximum slug length */
  MAX_LENGTH: VALIDATION_RULES.MAX_SLUG_LENGTH,

  /** Slug pattern (alphanumeric and hyphens) */
  PATTERN: VALIDATION_RULES.SLUG_PATTERN,

  /** Reserved slugs that cannot be used */
  RESERVED_SLUGS: [
    'api',
    'admin',
    'settings',
    'auth',
    'login',
    'logout',
    'signup',
    'register',
    'profile',
    'account',
    'dashboard',
    'analytics',
    'help',
    'docs',
    'documentation',
    'terms',
    'privacy',
    'about',
    'contact',
    'support',
    'blog',
    'news',
    'faq',
    'feedback',
    'report',
    'issues',
    'health',
    'status',
    'metrics',
    'static',
    'assets',
    'images',
    'css',
    'js',
    'fonts',
    'downloads',
    'files',
    'upload',
    'download',
    'export',
    'import',
    'sync',
    'webhook',
    'callback',
    'redirect',
    'proxy',
    'cache',
    'cdn',
    'vercel',
    'url',
    'link',
    'shorten',
    'shortened',
  ],

  /** Patterns that look like spam */
  SPAM_PATTERNS: [
    /viagra/i,
    /casino/i,
    /poker/i,
    /lottery/i,
    /xxx/i,
    /porn/i,
    /adult/i,
    /drugs/i,
    /bitcoin/i,
    /crypto/i,
    /forex/i,
    /trade/i,
    /investment/i,
    /loan/i,
    /debt/i,
    /credit/i,
    /weight/i,
    /diet/i,
    /pharma/i,
    /pills/i,
  ],

  /** Patterns that contain inappropriate content */
  INAPPROPRIATE_PATTERNS: [
    /ass/i,
    /shit/i,
    /fuck/i,
    /damn/i,
    /hell/i,
  ],

  /** Maximum number of hyphens allowed */
  MAX_CONSECUTIVE_HYPHENS: 2,

  /** Cannot start or end with hyphen */
  START_END_VALIDATION: true,

  /** Case insensitive matching for duplicates */
  CASE_INSENSITIVE_CHECK: true,
} as const

/**
 * Password validation configuration
 */
export const PASSWORD_VALIDATION = {
  /** Minimum password length */
  MIN_LENGTH: VALIDATION_RULES.PASSWORD_MIN_LENGTH,

  /** Maximum password length */
  MAX_LENGTH: VALIDATION_RULES.PASSWORD_MAX_LENGTH,

  /** Password regex pattern */
  PATTERN: /.+/,

  /** Require uppercase letters */
  REQUIRE_UPPERCASE: false,

  /** Require lowercase letters */
  REQUIRE_LOWERCASE: false,

  /** Require numbers */
  REQUIRE_NUMBERS: false,

  /** Require special characters */
  REQUIRE_SPECIAL: false,

  /** Common weak passwords to blacklist */
  BLACKLISTED_PASSWORDS: [
    'password',
    '123456',
    'qwerty',
    'abc123',
    'password123',
    '111111',
    '000000',
    '12345678',
    'iloveyou',
    'trustno1',
    'letmein',
    'welcome',
    'monkey',
    'dragon',
    'master',
    'sunshine',
    'princess',
    'shadow',
    'michael',
    'superman',
    'batman',
    'admin',
    'root',
    'toor',
    'pass',
    'test',
  ],

  /** Entropy check for password strength */
  MIN_ENTROPY_BITS: 20,

  /** Password strength levels */
  STRENGTH_LEVELS: {
    VERY_WEAK: 0,
    WEAK: 20,
    FAIR: 40,
    GOOD: 60,
    STRONG: 80,
    VERY_STRONG: 100,
  },
} as const

/**
 * Email validation configuration
 */
export const EMAIL_VALIDATION = {
  /** Email regex pattern */
  PATTERN: VALIDATION_RULES.EMAIL_PATTERN,

  /** Minimum email length */
  MIN_LENGTH: 5,

  /** Maximum email length */
  MAX_LENGTH: 254,

  /** Local part (before @) max length */
  LOCAL_PART_MAX: 64,

  /** Domain part (after @) max length */
  DOMAIN_MAX: 253,

  /** Disallowed domains (spam email providers) */
  DISALLOWED_DOMAINS: [
    'tempmail.com',
    'throwaway.email',
    'guerrillamail.com',
    'mailinator.com',
    '10minutemail.com',
    'temp-mail.org',
  ],

  /** Allowed email domains for enterprise */
  ALLOWED_DOMAINS: undefined, // undefined = any domain allowed
} as const

/**
 * Date and time validation configuration
 */
export const DATE_VALIDATION = {
  /** ISO 8601 date pattern */
  PATTERN: VALIDATION_RULES.DATE_ISO_PATTERN,

  /** Minimum future date offset in milliseconds */
  MIN_FUTURE_OFFSET_MS: VALIDATION_RULES.MIN_FUTURE_DATE_OFFSET_MS,

  /** Maximum future date offset in milliseconds */
  MAX_FUTURE_OFFSET_MS: VALIDATION_RULES.MAX_FUTURE_DATE_OFFSET_MS,

  /** Timezone requirement */
  REQUIRE_TIMEZONE: false,

  /** Allowed date formats for parsing */
  ALLOWED_FORMATS: [
    'yyyy-MM-dd',
    'yyyy-MM-dd\'T\'HH:mm:ss',
    'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx',
    'dd/MM/yyyy',
    'MM/dd/yyyy',
    'dd-MM-yyyy',
  ],

  /** Date validation precision (milliseconds) */
  PRECISION_MS: 1000,

  /** Leap year validation */
  VALIDATE_LEAP_YEAR: true,
} as const

/**
 * File upload validation
 */
export const FILE_VALIDATION = {
  /** Maximum file size in bytes (5MB) */
  MAX_SIZE_BYTES: 5242880,

  /** Allowed file types */
  ALLOWED_TYPES: [
    'image/png',
    'image/jpeg',
    'image/gif',
    'image/webp',
    'application/pdf',
    'text/csv',
    'application/json',
  ],

  /** Allowed file extensions */
  ALLOWED_EXTENSIONS: [
    'png',
    'jpg',
    'jpeg',
    'gif',
    'webp',
    'pdf',
    'csv',
    'json',
  ],

  /** Block executable files */
  BLOCK_EXECUTABLES: true,

  /** Scan for malware */
  SCAN_FOR_MALWARE: false,
} as const

/**
 * JSON validation configuration
 */
export const JSON_VALIDATION = {
  /** Maximum JSON depth */
  MAX_DEPTH: 10,

  /** Maximum JSON size in bytes */
  MAX_SIZE_BYTES: 1048576, // 1MB

  /** Required properties for link metadata */
  METADATA_REQUIRED_PROPS: [],

  /** Optional properties for link metadata */
  METADATA_OPTIONAL_PROPS: [
    'title',
    'description',
    'category',
    'tags',
    'notes',
    'region',
    'colorCode',
  ],
} as const

/**
 * API request validation
 */
export const API_VALIDATION = {
  /** Maximum request body size in bytes */
  MAX_BODY_SIZE_BYTES: 1048576, // 1MB

  /** Required API headers */
  REQUIRED_HEADERS: [
    'content-type',
  ],

  /** Allowed content types */
  ALLOWED_CONTENT_TYPES: [
    'application/json',
    'application/x-www-form-urlencoded',
  ],

  /** API version regex */
  VERSION_PATTERN: /^\d+\.\d+\.\d+$/,

  /** Request ID regex */
  REQUEST_ID_PATTERN: /^[a-zA-Z0-9-]{20,}$/,

  /** Trace ID regex */
  TRACE_ID_PATTERN: /^[a-zA-Z0-9-]{20,}$/,

  /** Maximum query parameters */
  MAX_QUERY_PARAMS: 50,

  /** Maximum header size */
  MAX_HEADER_SIZE_BYTES: 8192,
} as const

/**
 * Security validation patterns
 */
export const SECURITY_VALIDATION = {
  /** SQL injection patterns */
  SQL_INJECTION_PATTERNS: [
    /(\bunion\b.*\bselect\b)|(\bor\b.*\b1\s*=\s*1)|(\bdrop\b.*\btable\b)/i,
    /(\bselect\b.*\bfrom\b)|(\binsert\b.*\binto\b)|(\bupdate\b.*\bset\b)/i,
    /(\bdelete\b.*\bfrom\b)|(\bexec\b.*\()|(\bexecute\b)/i,
  ],

  /** XSS patterns */
  XSS_PATTERNS: [
    /<script[^>]*>[\s\S]*?<\/script>/gi,
    /on\w+\s*=\s*['"]/gi,
    /javascript:/gi,
    /vbscript:/gi,
  ],

  /** LDAP injection patterns */
  LDAP_PATTERNS: [
    /(\*)|(\()|(\))|(\&)|(\|)/,
  ],

  /** Command injection patterns */
  COMMAND_INJECTION_PATTERNS: [
    /[;&|`$(){}[\]<>\\]/,
  ],

  /** Path traversal patterns */
  PATH_TRAVERSAL_PATTERNS: [
    /\.\.\//,
    /\.\.\\/, 
    /%2e%2e%2f/i,
    /\.\.;/,
  ],

  /** Null byte injection */
  NULL_BYTE_PATTERN: /\0/,

  /** Unicode normalization check */
  UNICODE_CHECK: true,

  /** Case sensitivity check */
  CASE_SENSITIVE_CHECK: true,
} as const

/**
 * Rate limiting validation
 */
export const RATE_LIMIT_VALIDATION = {
  /** Time window for rate limiting (milliseconds) */
  WINDOW_MS: 60000, // 1 minute

  /** Maximum requests per window */
  MAX_REQUESTS: VALIDATION_RULES.RATE_LIMIT_REQUESTS_PER_MINUTE,

  /** Request penalty for suspicious activity */
  PENALTY_MULTIPLIER: 2,

  /** IP-based rate limiting */
  IP_BASED: true,

  /** User-agent based rate limiting */
  USER_AGENT_BASED: false,

  /** Sliding window algorithm */
  SLIDING_WINDOW: true,

  /** Whitelist known services */
  WHITELIST_PATTERNS: [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
  ],
} as const

/**
 * Validation error severity levels
 */
export enum ValidationErrorSeverity {
  /** Validation warning, operation can proceed with caution */
  WARNING = 'warning',

  /** Validation error, operation must not proceed */
  ERROR = 'error',

  /** Critical validation error, potential security issue */
  CRITICAL = 'critical',
}

/**
 * Validation result interface
 */
export interface ValidationResult {
  /** Whether validation passed */
  isValid: boolean

  /** Error message if validation failed */
  error?: string

  /** Error severity level */
  severity?: ValidationErrorSeverity

  /** Additional validation details */
  details?: Record<string, unknown>

  /** Warnings that don't prevent operation */
  warnings?: string[]

  /** Suggestions for fixing the error */
  suggestions?: string[]

  /** Validation rule that failed */
  failedRule?: string

  /** Expected value format */
  expectedFormat?: string
}

/**
 * Complex validation rules combining multiple checks
 */
export const COMPOSITE_VALIDATIONS = {
  /** Full URL validation with all checks */
  URL_COMPLETE: {
    checks: ['format', 'length', 'domain', 'path', 'security'],
    required: true,
  },

  /** Full slug validation with all checks */
  SLUG_COMPLETE: {
    checks: ['format', 'length', 'reserved', 'spam', 'inappropriate'],
    required: true,
  },

  /** Full password validation with strength check */
  PASSWORD_COMPLETE: {
    checks: ['length', 'blacklist', 'entropy', 'pattern'],
    required: true,
  },

  /** Link creation validation */
  LINK_CREATION: {
    checks: ['url_complete', 'slug_complete', 'password_complete', 'expiration'],
    required: true,
  },

  /** Link update validation */
  LINK_UPDATE: {
    checks: ['slug_complete', 'expiration'],
    required: false,
  },
} as const

/**
 * Custom validation functions registry
 */
export const CUSTOM_VALIDATORS = {
  // Can be extended with application-specific validators
  urlIsNotShortened: (url: string): boolean => {
    const shorteners = ['bit.ly', 'tinyurl', 'goo.gl', 'short.link']
    return !shorteners.some(s => url.toLowerCase().includes(s))
  },

  urlIsPublic: (url: string): boolean => {
    const privatePatterns = [
      /localhost/i,
      /127\.0\.0\.1/,
      /192\.168\./,
      /10\./,
      /172\.1[6-9]\.|172\.2[0-9]\.|172\.3[0-1]\./,
      /\.local$/i,
      /\.test$/i,
      /\.invalid$/i,
    ]
    return !privatePatterns.some(p => p.test(url))
  },

  slugIsNotOffensive: (slug: string): boolean => {
    const offensiveWords = [
      'fuck',
      'shit',
      'ass',
      'hell',
      'damn',
      'cunt',
      'bitch',
      'asshole',
      'bastard',
    ]
    return !offensiveWords.some(w => slug.toLowerCase().includes(w))
  },
} as const
