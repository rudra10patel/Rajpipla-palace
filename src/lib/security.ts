/**
 * Security utilities for the Rajpipla Palace application
 * Implements best practices for client-side security
 */

// Content Security Policy configuration
export const CSP_CONFIG = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "https://generativelanguage.googleapis.com"],
  'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  'font-src': ["'self'", "https://fonts.gstatic.com"],
  'img-src': ["'self'", "data:", "https:"],
  'connect-src': ["'self'", "https://generativelanguage.googleapis.com"],
  'frame-src': ["'none'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
};

// Input sanitization utilities
export class SecurityUtils {
  /**
   * Sanitize user input to prevent XSS attacks
   */
  static sanitizeInput(input: string): string {
    if (typeof input !== 'string') {
      return '';
    }
    
    return input
      .replace(/[<>\"'&]/g, '') // Remove HTML/XML characters
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .trim();
  }

  /**
   * Validate email format
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate URL format
   */
  static isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Rate limiting for API calls
   */
  private static rateLimitMap = new Map<string, { count: number; resetTime: number }>();

  static checkRateLimit(identifier: string, maxRequests: number = 10, windowMs: number = 60000): boolean {
    const now = Date.now();
    const userLimit = this.rateLimitMap.get(identifier);

    if (!userLimit || now > userLimit.resetTime) {
      this.rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
      return true;
    }

    if (userLimit.count >= maxRequests) {
      return false;
    }

    userLimit.count++;
    return true;
  }

  /**
   * Generate secure random ID
   */
  static generateSecureId(): string {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Validate file type for uploads
   */
  static isValidFileType(file: File, allowedTypes: string[]): boolean {
    return allowedTypes.includes(file.type);
  }

  /**
   * Validate file size
   */
  static isValidFileSize(file: File, maxSizeMB: number): boolean {
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    return file.size <= maxSizeBytes;
  }
}

// Environment validation
export class EnvironmentValidator {
  static validateRequiredEnvVars(): void {
    const requiredVars = ['VITE_GEMINI_API_KEY'];
    const missing = requiredVars.filter(varName => !import.meta.env[varName]);
    
    if (missing.length > 0) {
      console.warn('Missing required environment variables:', missing);
    }
  }

  static isProduction(): boolean {
    return import.meta.env.PROD;
  }

  static isDevelopment(): boolean {
    return import.meta.env.DEV;
  }
}

// Error handling with security considerations
export class SecureErrorHandler {
  static handleError(error: unknown, context: string): void {
    // Log error in development, sanitize in production
    if (EnvironmentValidator.isDevelopment()) {
      console.error(`Error in ${context}:`, error);
    } else {
      console.error(`Error in ${context}: An unexpected error occurred`);
    }
  }

  static sanitizeErrorMessage(message: string): string {
    // Remove sensitive information from error messages
    return message
      .replace(/api[_-]?key/gi, '[REDACTED]')
      .replace(/token/gi, '[REDACTED]')
      .replace(/password/gi, '[REDACTED]')
      .replace(/secret/gi, '[REDACTED]');
  }
}
