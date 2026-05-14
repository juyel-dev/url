/**
 * Application Messages and Text Constants
 * Centralized user-facing text for consistency and localization preparation
 * All messages are grouped by functionality for easy maintenance
 */

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  /** Link shortened successfully */
  LINK_SHORTENED: 'Link shortened successfully!',

  /** Link copied to clipboard */
  LINK_COPIED: 'Copied to clipboard!',

  /** QR code downloaded */
  QR_CODE_DOWNLOADED: 'QR code downloaded successfully!',

  /** Link created */
  LINK_CREATED: 'Your shortened link has been created.',

  /** Custom slug applied */
  CUSTOM_SLUG_APPLIED: 'Custom alias applied successfully!',

  /** Password protection enabled */
  PASSWORD_PROTECTION_ENABLED: 'Password protection enabled.',

  /** Link updated */
  LINK_UPDATED: 'Link updated successfully.',

  /** Link deleted */
  LINK_DELETED: 'Link deleted successfully.',

  /** History cleared */
  HISTORY_CLEARED: 'History cleared successfully.',

  /** Settings saved */
  SETTINGS_SAVED: 'Settings saved successfully.',

  /** Link shared */
  LINK_SHARED: 'Link shared successfully!',

  /** Premium purchase successful */
  PREMIUM_PURCHASED: 'Welcome to Premium! Enjoy advanced features.',

  /** Donation received */
  DONATION_RECEIVED: 'Thank you for your generous donation!',

  /** Password correct */
  PASSWORD_CORRECT: 'Password verified! Redirecting...',
} as const

/**
 * Error messages - general
 */
export const ERROR_MESSAGES = {
  /** Generic error message */
  GENERIC_ERROR: 'Something went wrong. Please try again.',

  /** Network error */
  NETWORK_ERROR: 'Network error. Please check your connection.',

  /** Server error */
  SERVER_ERROR: 'Server error. Please try again later.',

  /** Timeout error */
  TIMEOUT_ERROR: 'Request timed out. Please try again.',

  /** Not found error */
  NOT_FOUND: 'The requested resource was not found.',

  /** Access denied error */
  ACCESS_DENIED: 'Access denied. You do not have permission.',

  /** Storage quota exceeded */
  STORAGE_QUOTA_EXCEEDED: 'Storage quota exceeded. Please clear old entries.',

  /** Offline error */
  OFFLINE: 'You are currently offline. Some features may be unavailable.',

  /** Browser not supported */
  BROWSER_NOT_SUPPORTED: 'Your browser is not supported. Please update.',

  /** Rate limit exceeded */
  RATE_LIMIT_EXCEEDED: 'Too many requests. Please wait before trying again.',
} as const

/**
 * Error messages - URL validation
 */
export const URL_ERROR_MESSAGES = {
  /** URL is required */
  REQUIRED: 'Please enter a URL.',

  /** URL is invalid */
  INVALID: 'Please enter a valid URL (e.g., https://example.com).',

  /** URL is too long */
  TOO_LONG: 'URL is too long. Maximum 2048 characters allowed.',

  /** URL is too short */
  TOO_SHORT: 'URL is too short. Please enter a longer URL.',

  /** URL protocol is missing */
  MISSING_PROTOCOL: 'URL must start with http:// or https://',

  /** URL domain is invalid */
  INVALID_DOMAIN: 'Please enter a valid domain name.',

  /** URL is already shortened */
  ALREADY_SHORTENED: 'This URL is already a shortened link.',

  /** Unsupported URL scheme */
  UNSUPPORTED_SCHEME: 'Only HTTP and HTTPS URLs are supported.',

  /** URL contains invalid characters */
  INVALID_CHARACTERS: 'URL contains invalid characters.',
} as const

/**
 * Error messages - custom slug
 */
export const SLUG_ERROR_MESSAGES = {
  /** Slug is required */
  REQUIRED: 'Please enter a custom alias.',

  /** Slug is invalid */
  INVALID: 'Alias can only contain letters, numbers, and hyphens.',

  /** Slug is too short */
  TOO_SHORT: 'Alias must be at least 3 characters long.',

  /** Slug is too long */
  TOO_LONG: 'Alias must be 32 characters or less.',

  /** Slug already exists */
  ALREADY_EXISTS: 'This alias is already taken. Try another one.',

  /** Slug contains reserved word */
  RESERVED_WORD: 'This alias is reserved. Please choose another.',

  /** Slug looks like spam */
  LOOKS_LIKE_SPAM: 'This alias looks suspicious. Please choose another.',

  /** Slug contains inappropriate content */
  INAPPROPRIATE: 'This alias contains inappropriate content.',

  /** Daily custom slug limit exceeded */
  DAILY_LIMIT_EXCEEDED: 'You have reached the daily custom alias limit.',
} as const

/**
 * Error messages - password
 */
export const PASSWORD_ERROR_MESSAGES = {
  /** Password is required */
  REQUIRED: 'Please enter a password.',

  /** Password is too short */
  TOO_SHORT: 'Password must be at least 4 characters long.',

  /** Password is too long */
  TOO_LONG: 'Password must be 64 characters or less.',

  /** Password is too weak */
  TOO_WEAK: 'Password is too weak. Use a stronger password.',

  /** Password is incorrect */
  INCORRECT: 'Incorrect password. Please try again.',

  /** Passwords do not match */
  NO_MATCH: 'Passwords do not match.',

  /** Password not provided for protected link */
  NOT_PROVIDED: 'This link is password protected. Please enter the password.',

  /** Password verification failed */
  VERIFICATION_FAILED: 'Password verification failed.',

  /** Password too common */
  TOO_COMMON: 'This password is too common. Please choose a stronger one.',
} as const

/**
 * Error messages - expiration
 */
export const EXPIRATION_ERROR_MESSAGES = {
  /** Expiration date is invalid */
  INVALID: 'Please select a valid expiration date.',

  /** Expiration date is in the past */
  IN_PAST: 'Expiration date must be in the future.',

  /** Expiration date is too soon */
  TOO_SOON: 'Expiration date must be at least 1 hour from now.',

  /** Expiration date is too far */
  TOO_FAR: 'Expiration date cannot be more than 10 years in the future.',

  /** Link has expired */
  LINK_EXPIRED: 'This link has expired and is no longer available.',

  /** Invalid date format */
  INVALID_FORMAT: 'Please use a valid date format (YYYY-MM-DD).',
} as const

/**
 * Validation messages - help text
 */
export const VALIDATION_HELP = {
  /** URL format help */
  URL_FORMAT: 'Format: https://example.com or http://example.com',

  /** Slug format help */
  SLUG_FORMAT: 'Use letters, numbers, and hyphens (e.g., my-link)',

  /** Password strength help */
  PASSWORD_STRENGTH: 'Use at least 4 characters for better security.',

  /** Expiration help */
  EXPIRATION_HELP: 'Link will stop working after this date and time.',

  /** QR code help */
  QR_CODE_HELP: 'Scan this QR code to access the shortened link.',

  /** Analytics help */
  ANALYTICS_HELP: 'Track clicks and visitor information for this link.',

  /** History help */
  HISTORY_HELP: 'View and manage your previously created links.',

  /** Local storage help */
  LOCAL_STORAGE_HELP: 'Links are saved in your browser locally.',
} as const

/**
 * Confirmation messages
 */
export const CONFIRMATION_MESSAGES = {
  /** Confirm delete link */
  DELETE_LINK: 'Are you sure you want to delete this link? This action cannot be undone.',

  /** Confirm clear history */
  CLEAR_HISTORY: 'Are you sure you want to clear all history? This action cannot be undone.',

  /** Confirm leave page with unsaved changes */
  UNSAVED_CHANGES: 'You have unsaved changes. Are you sure you want to leave?',

  /** Confirm password change */
  CHANGE_PASSWORD: 'Changing the password will invalidate existing access attempts.',

  /** Confirm extend expiration */
  EXTEND_EXPIRATION: 'This will extend the link lifetime. Continue?',
} as const

/**
 * Loading and waiting messages
 */
export const LOADING_MESSAGES = {
  /** Generic loading message */
  LOADING: 'Loading...',

  /** Creating link message */
  CREATING_LINK: 'Forging your link...',

  /** Checking availability message */
  CHECKING_AVAILABILITY: 'Checking availability...',

  /** Connecting to server message */
  CONNECTING: 'Connecting to servers...',

  /** Almost there message */
  ALMOST_THERE: 'Almost there...',

  /** Generating QR code message */
  GENERATING_QR: 'Generating QR code...',

  /** Fetching analytics message */
  FETCHING_ANALYTICS: 'Fetching analytics...',

  /** Saving settings message */
  SAVING_SETTINGS: 'Saving settings...',

  /** Uploading message */
  UPLOADING: 'Uploading...',

  /** Processing message */
  PROCESSING: 'Processing...',

  /** Syncing message */
  SYNCING: 'Syncing data...',

  /** Delayed response message */
  TAKING_LONGER: 'This is taking longer than usual, but we\'re working on it...',
} as const

/**
 * Information and help messages
 */
export const INFO_MESSAGES = {
  /** Privacy policy info */
  PRIVACY_POLICY: '100% Free • Open Source • No Ads • Privacy Focused',

  /** No tracking info */
  NO_TRACKING: 'We never track or sell your data.',

  /** History saved locally */
  HISTORY_LOCAL: 'Your link history is saved locally in your browser.',

  /** Anonymous usage */
  ANONYMOUS_USAGE: 'No account required. Stay anonymous.',

  /** Free forever */
  FREE_FOREVER: 'Completely free, forever.',

  /** Features info */
  FEATURES_INFO: 'Custom aliases, password protection, expiration dates, and more.',

  /** QR code info */
  QR_CODE_INFO: 'Automatically generated for every shortened link.',

  /** Analytics info */
  ANALYTICS_INFO: 'Track clicks and visitor information in real-time.',

  /** Settings saved locally */
  SETTINGS_LOCAL: 'Your settings are saved locally.',

  /** Link stats public */
  LINK_STATS_PUBLIC: 'Click statistics are publicly available (append + to your link).',

  /** Premium benefits info */
  PREMIUM_BENEFITS: 'Remove ads, advanced analytics, and more.',

  /** Trial available */
  TRIAL_AVAILABLE: '7-day free trial available for Premium.',
} as const

/**
 * Button and action labels
 */
export const ACTION_LABELS = {
  /** Shorten action */
  SHORTEN: 'Shorten',

  /** Create action */
  CREATE: 'Create',

  /** Copy action */
  COPY: 'Copy',

  /** Download action */
  DOWNLOAD: 'Download',

  /** Share action */
  SHARE: 'Share',

  /** Delete action */
  DELETE: 'Delete',

  /** Update action */
  UPDATE: 'Update',

  /** Save action */
  SAVE: 'Save',

  /** Cancel action */
  CANCEL: 'Cancel',

  /** Close action */
  CLOSE: 'Close',

  /** Submit action */
  SUBMIT: 'Submit',

  /** Confirm action */
  CONFIRM: 'Confirm',

  /** Retry action */
  RETRY: 'Retry',

  /** Learn more action */
  LEARN_MORE: 'Learn More',

  /** View all action */
  VIEW_ALL: 'View All',

  /** Clear action */
  CLEAR: 'Clear',

  /** Reset action */
  RESET: 'Reset',

  /** Export action */
  EXPORT: 'Export',

  /** Settings action */
  SETTINGS: 'Settings',

  /** Help action */
  HELP: 'Help',

  /** Donate action */
  DONATE: 'Donate',

  /** Upgrade action */
  UPGRADE: 'Upgrade to Premium',

  /** Sign up action */
  SIGN_UP: 'Sign Up',

  /** Learn more about premium */
  PREMIUM_LEARN_MORE: 'Learn More About Premium',
} as const

/**
 * Placeholder texts
 */
export const PLACEHOLDERS = {
  /** URL input placeholder */
  URL_INPUT: 'https://example.com/very/long/url',

  /** Custom slug placeholder */
  SLUG_INPUT: 'my-custom-link',

  /** Password input placeholder */
  PASSWORD_INPUT: 'Enter password',

  /** Search placeholder */
  SEARCH_INPUT: 'Search links...',

  /** Notes placeholder */
  NOTES_INPUT: 'Add notes about this link...',

  /** Email placeholder */
  EMAIL_INPUT: 'your.email@example.com',
} as const

/**
 * Accessibility and ARIA labels
 */
export const ARIA_LABELS = {
  /** Copy button aria label */
  COPY_BUTTON: 'Copy link to clipboard',

  /** Delete button aria label */
  DELETE_BUTTON: 'Delete this link',

  /** Share button aria label */
  SHARE_BUTTON: 'Share this link',

  /** QR code aria label */
  QR_CODE: 'QR code for this link',

  /** Analytics button aria label */
  ANALYTICS_BUTTON: 'View link analytics',

  /** Menu button aria label */
  MENU_BUTTON: 'Open menu',

  /** Close modal aria label */
  CLOSE_MODAL: 'Close dialog',

  /** Password input aria label */
  PASSWORD_INPUT: 'Enter password for protected link',

  /** Loading spinner aria label */
  LOADING_SPINNER: 'Loading content',

  /** Toast notification aria label */
  TOAST_NOTIFICATION: 'Notification',

  /** Form aria label */
  SHORTENER_FORM: 'URL shortening form',

  /** History list aria label */
  HISTORY_LIST: 'Link history list',
} as const

/**
 * Toast notification messages
 */
export const TOAST_MESSAGES = {
  /** Success toast title */
  SUCCESS: 'Success',

  /** Error toast title */
  ERROR: 'Error',

  /** Warning toast title */
  WARNING: 'Warning',

  /** Info toast title */
  INFO: 'Information',

  /** Copied toast message */
  COPIED: 'Copied to clipboard!',

  /** Deleted toast message */
  DELETED: 'Successfully deleted.',

  /** Saved toast message */
  SAVED: 'Changes saved.',

  /** Shared toast message */
  SHARED: 'Link shared!',

  /** Loading toast message */
  LOADING: 'Processing...',
} as const

/**
 * Date and time format strings
 */
export const DATE_FORMATS = {
  /** ISO 8601 format */
  ISO: 'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx',

  /** Display date format */
  DISPLAY_DATE: 'MMM dd, yyyy',

  /** Display datetime format */
  DISPLAY_DATETIME: 'MMM dd, yyyy HH:mm',

  /** Relative time format (e.g., "2 hours ago") */
  RELATIVE: 'relative',

  /** Full date format */
  FULL: 'EEEE, MMMM dd, yyyy',

  /** Time only format */
  TIME_ONLY: 'HH:mm:ss',

  /** Short time format */
  SHORT_TIME: 'HH:mm',
} as const

/**
 * Password strength labels
 */
export const PASSWORD_STRENGTH = {
  /** Very weak password */
  VERY_WEAK: 'Very Weak',

  /** Weak password */
  WEAK: 'Weak',

  /** Fair password */
  FAIR: 'Fair',

  /** Good password */
  GOOD: 'Good',

  /** Strong password */
  STRONG: 'Strong',

  /** Very strong password */
  VERY_STRONG: 'Very Strong',
} as const

/**
 * Feature tier labels
 */
export const FEATURE_TIERS = {
  /** Free tier */
  FREE: 'Free',

  /** Pro tier */
  PRO: 'Pro',

  /** Premium tier */
  PREMIUM: 'Premium',

  /** Enterprise tier */
  ENTERPRISE: 'Enterprise',
} as const
