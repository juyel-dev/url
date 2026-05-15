/**
 * URL Validation Utilities
 * Pure utility functions for URL validation, parsing, and manipulation
 * No external dependencies, implements validation rules from constants
 */

import { URL_VALIDATION, VALIDATION_RULES, SECURITY_VALIDATION } from '@constants'
import type { ValidationResult } from '@constants/validation'

/**
 * Validates if a string is a valid URL
 * Performs comprehensive checks including format, domain, and security
 * @param url - URL string to validate
 * @returns ValidationResult with validation status and details
 */
export function validateUrl(url: string): ValidationResult {
  // Check for empty input
  if (!url || typeof url !== 'string') {
    return {
      isValid: false,
      error: 'URL is required',
      severity: 'error',
      failedRule: 'required',
    }
  }

  // Trim whitespace
  const trimmedUrl = url.trim()

  // Check minimum length
  if (trimmedUrl.length < URL_VALIDATION.MIN_LENGTH) {
    return {
      isValid: false,
      error: `URL must be at least ${URL_VALIDATION.MIN_LENGTH} characters long`,
      severity: 'error',
      failedRule: 'minLength',
      expectedFormat: `At least ${URL_VALIDATION.MIN_LENGTH} characters`,
    }
  }

  // Check maximum length
  if (trimmedUrl.length > URL_VALIDATION.MAX_LENGTH) {
    return {
      isValid: false,
      error: `URL exceeds maximum length of ${URL_VALIDATION.MAX_LENGTH} characters`,
      severity: 'error',
      failedRule: 'maxLength',
      expectedFormat: `Maximum ${URL_VALIDATION.MAX_LENGTH} characters`,
    }
  }

  // Check if URL already has protocol
  const hasProtocol = URL_VALIDATION.ALLOWED_PROTOCOLS.some(protocol =>
    trimmedUrl.toLowerCase().startsWith(protocol)
  )

  if (!hasProtocol) {
    return {
      isValid: false,
      error: 'URL must start with http:// or https://',
      severity: 'error',
      failedRule: 'protocol',
      suggestions: [`https://${trimmedUrl}`],
      expectedFormat: 'https://example.com',
    }
  }

  // Check URL format with regex
  if (!URL_VALIDATION.PATTERN.test(trimmedUrl)) {
    return {
      isValid: false,
      error: 'Invalid URL format',
      severity: 'error',
      failedRule: 'format',
      expectedFormat: 'https://example.com/path?query=value',
    }
  }

  // Check for disallowed URL patterns (already shortened)
  const isDisallowed = URL_VALIDATION.DISALLOWED_PATTERNS.some(pattern =>
    pattern.test(trimmedUrl)
  )

  if (isDisallowed) {
    return {
      isValid: false,
      error: 'This URL is already a shortened link',
      severity: 'warning',
      failedRule: 'alreadyShortened',
    }
  }

  // Check for security issues
  const securityCheck = checkUrlSecurity(trimmedUrl)
  if (!securityCheck.isValid) {
    return securityCheck
  }

  // Parse URL to validate structure
  try {
    const parsedUrl = new URL(trimmedUrl)

    // Validate domain
    const domainValidation = validateDomain(parsedUrl.hostname)
    if (!domainValidation.isValid) {
      return domainValidation
    }

    // Validate port if present
    if (parsedUrl.port) {
      if (!URL_VALIDATION.PORT_PATTERN.test(parsedUrl.port)) {
        return {
          isValid: false,
          error: 'Invalid port number',
          severity: 'error',
          failedRule: 'port',
          expectedFormat: 'Port between 1 and 65535',
        }
      }
    }

    return {
      isValid: true,
      details: {
        protocol: parsedUrl.protocol,
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || null,
        path: parsedUrl.pathname,
        query: parsedUrl.search,
        fragment: parsedUrl.hash,
      },
    }
  } catch (error) {
    return {
      isValid: false,
      error: 'Failed to parse URL',
      severity: 'error',
      failedRule: 'parse',
    }
  }
}

/**
 * Validates the domain portion of a URL
 * @param domain - Domain name to validate
 * @returns ValidationResult
 */
export function validateDomain(domain: string): ValidationResult {
  if (!domain) {
    return {
      isValid: false,
      error: 'Domain is required',
      severity: 'error',
    }
  }

  // Remove www. prefix for validation
  const domainToCheck = domain.replace(/^www\./, '')

  // Check length
  if (domainToCheck.length < URL_VALIDATION.MIN_DOMAIN_LENGTH) {
    return {
      isValid: false,
      error: 'Domain is too short',
      severity: 'error',
    }
  }

  if (domainToCheck.length > URL_VALIDATION.MAX_DOMAIN_LENGTH) {
    return {
      isValid: false,
      error: 'Domain is too long',
      severity: 'error',
    }
  }

  // Check if domain is IP address
  if (URL_VALIDATION.IPV4_PATTERN.test(domainToCheck)) {
    return {
      isValid: true,
      details: { isIpAddress: true },
    }
  }

  // Validate domain label pattern
  const labels = domainToCheck.split('.')

  if (labels.length < 2) {
    return {
      isValid: false,
      error: 'Domain must have at least one dot (e.g., example.com)',
      severity: 'error',
    }
  }

  // Validate each label
  for (const label of labels) {
    if (!URL_VALIDATION.DOMAIN_LABEL_PATTERN.test(label)) {
      return {
        isValid: false,
        error: `Invalid domain label: "${label}"`,
        severity: 'error',
        failedRule: 'domainLabel',
      }
    }
  }

  // Validate TLD
  const tld = labels[labels.length - 1]
  if (!URL_VALIDATION.TLD_PATTERN.test(tld)) {
    return {
      isValid: false,
      error: `Invalid top-level domain: ".${tld}"`,
      severity: 'error',
      failedRule: 'tld',
    }
  }

  return {
    isValid: true,
    details: {
      domain: domainToCheck,
      labels: labels.length,
      tld: tld,
    },
  }
}

/**
 * Checks URL for security issues
 * @param url - URL to check
 * @returns ValidationResult
 */
export function checkUrlSecurity(url: string): ValidationResult {
  // Check for SQL injection patterns
  for (const pattern of SECURITY_VALIDATION.SQL_INJECTION_PATTERNS) {
    if (pattern.test(url)) {
      return {
        isValid: false,
        error: 'URL contains suspicious patterns',
        severity: 'critical',
        failedRule: 'sqlInjection',
      }
    }
  }

  // Check for XSS patterns
  for (const pattern of SECURITY_VALIDATION.XSS_PATTERNS) {
    if (pattern.test(url)) {
      return {
        isValid: false,
        error: 'URL contains suspicious patterns',
        severity: 'critical',
        failedRule: 'xss',
      }
    }
  }

  // Check for path traversal
  for (const pattern of SECURITY_VALIDATION.PATH_TRAVERSAL_PATTERNS) {
    if (pattern.test(url)) {
      return {
        isValid: false,
        error: 'URL contains suspicious patterns',
        severity: 'critical',
        failedRule: 'pathTraversal',
      }
    }
  }

  // Check for null bytes
  if (SECURITY_VALIDATION.NULL_BYTE_PATTERN.test(url)) {
    return {
      isValid: false,
      error: 'URL contains invalid characters',
      severity: 'critical',
      failedRule: 'nullByte',
    }
  }

  return { isValid: true }
}

/**
 * Adds protocol to URL if missing
 * @param url - URL string
 * @returns URL with protocol
 */
export function addProtocolToUrl(url: string): string {
  const trimmed = url.trim()

  // If already has protocol, return as-is
  if (URL_VALIDATION.ALLOWED_PROTOCOLS.some(protocol =>
    trimmed.toLowerCase().startsWith(protocol)
  )) {
    return trimmed
  }

  // Add https:// by default
  return `https://${trimmed}`
}

/**
 * Extracts domain from URL
 * @param url - URL string
 * @returns Domain name or null
 */
export function extractDomain(url: string): string | null {
  try {
    const urlObject = new URL(url)
    return urlObject.hostname
  } catch {
    return null
  }
}

/**
 * Extracts path from URL
 * @param url - URL string
 * @returns Path or empty string
 */
export function extractPath(url: string): string {
  try {
    const urlObject = new URL(url)
    return urlObject.pathname + urlObject.search + urlObject.hash
  } catch {
    return ''
  }
}

/**
 * Normalizes URL for consistent comparison
 * @param url - URL to normalize
 * @returns Normalized URL
 */
export function normalizeUrl(url: string): string {
  try {
    const urlObject = new URL(url)

    // Remove trailing slash from pathname
    let pathname = urlObject.pathname
    if (pathname.length > 1 && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1)
    }

    // Reconstruct URL without fragment (hash)
    return `${urlObject.protocol}//${urlObject.hostname}${
      urlObject.port ? `:${urlObject.port}` : ''
    }${pathname}${urlObject.search}`
  } catch {
    return url
  }
}

/**
 * Compares two URLs for equality after normalization
 * @param url1 - First URL
 * @param url2 - Second URL
 * @returns True if URLs are equal after normalization
 */
export function compareUrls(url1: string, url2: string): boolean {
  return normalizeUrl(url1) === normalizeUrl(url2)
}

/**
 * Checks if URL is a valid HTTP(S) URL
 * @param url - URL to check
 * @returns True if valid HTTP(S) URL
 */
export function isValidHttpUrl(url: string): boolean {
  const result = validateUrl(url)
  return result.isValid
}

/**
 * Checks if URL is localhost or private
 * @param url - URL to check
 * @returns True if URL is private/local
 */
export function isPrivateUrl(url: string): boolean {
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

  return privatePatterns.some(pattern => pattern.test(url))
}

/**
 * Checks if URL is public and accessible
 * @param url - URL to check
 * @returns True if URL is likely public
 */
export function isPublicUrl(url: string): boolean {
  return !isPrivateUrl(url)
}

/**
 * Extracts query parameters from URL
 * @param url - URL string
 * @returns Object of query parameters
 */
export function extractQueryParams(url: string): Record<string, string> {
  try {
    const urlObject = new URL(url)
    const params: Record<string, string> = {}

    urlObject.searchParams.forEach((value, key) => {
      params[key] = value
    })

    return params
  } catch {
    return {}
  }
}

/**
 * Validates URL length and returns feedback
 * @param url - URL to check
 * @returns Object with length info and feedback
 */
export function checkUrlLength(url: string): {
  length: number
  remaining: number
  isValid: boolean
  warning: string | null
} {
  const length = url.length
  const remaining = URL_VALIDATION.MAX_LENGTH - length

  return {
    length,
    remaining,
    isValid: length <= URL_VALIDATION.MAX_LENGTH,
    warning: remaining < 100 && remaining > 0 ? 'Approaching URL length limit' : null,
  }
}

/**
 * Checks if URL contains common patterns indicating it's already shortened
 * @param url - URL to check
 * @returns True if URL appears to be shortened
 */
export function isAlreadyShortened(url: string): boolean {
  return URL_VALIDATION.DISALLOWED_PATTERNS.some(pattern => pattern.test(url))
}

/**
 * Suggests URL corrections
 * @param url - URL to analyze
 * @returns Array of suggestions
 */
export function suggestUrlCorrections(url: string): string[] {
  const suggestions: string[] = []

  // Suggest adding protocol
  if (!URL_VALIDATION.ALLOWED_PROTOCOLS.some(p => url.startsWith(p))) {
    suggestions.push(`Add protocol: https://${url}`)
  }

  // Suggest removing www if present
  if (url.includes('www.')) {
    suggestions.push(url.replace('www.', ''))
  }

  // Suggest removing trailing slash
  if (url.endsWith('/') && url.lastIndexOf('/') > 8) {
    suggestions.push(url.slice(0, -1))
  }

  return suggestions
       }
