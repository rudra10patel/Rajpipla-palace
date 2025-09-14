# Security Policy

## Overview

This document outlines the security measures implemented in the Rajpipla Palace Digital Heritage Platform to ensure compliance with best practices and protect against common vulnerabilities.

## Security Measures Implemented

### 1. API Key Protection
- **Environment Variables**: All sensitive API keys are stored in environment variables
- **No Hardcoded Secrets**: Removed all hardcoded API keys from source code
- **Environment Validation**: Added validation for required environment variables
- **Secure Error Handling**: API keys are never exposed in error messages

### 2. Input Sanitization
- **XSS Prevention**: All user inputs are sanitized to prevent cross-site scripting
- **HTML/XML Character Removal**: Potentially harmful characters are stripped
- **Length Limiting**: Input length is limited to prevent buffer overflow attacks
- **Rate Limiting**: API calls are rate-limited to prevent abuse

### 3. Content Security Policy (CSP)
- **Strict CSP Headers**: Implemented comprehensive CSP configuration
- **Script Source Control**: Only trusted sources are allowed for scripts
- **Frame Protection**: X-Frame-Options set to DENY to prevent clickjacking
- **Content Type Protection**: X-Content-Type-Options set to nosniff

### 4. Security Headers
```html
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### 5. Build Security
- **Console Log Removal**: Console logs are removed in production builds
- **Source Map Control**: Source maps are only generated in development
- **Bundle Analysis**: Build process includes security analysis
- **Dependency Auditing**: Regular security audits of dependencies

## Environment Setup

### Required Environment Variables
```bash
# Copy .env.example to .env and fill in your values
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_APP_TITLE=Rajpipla Palace - Digital Heritage Platform
VITE_APP_DESCRIPTION=Experience the magnificent Rajpipla Palace
VITE_APP_URL=https://your-domain.com
```

### Security Commands
```bash
# Run security audit
npm run security:audit

# Fix security vulnerabilities
npm run security:fix

# Type checking
npm run type-check

# Lint with auto-fix
npm run lint:fix
```

## Data Protection

### 1. Client-Side Data
- **No Sensitive Storage**: No sensitive data is stored in localStorage or sessionStorage
- **Memory Management**: Automatic cleanup of large objects to prevent memory leaks
- **Secure ID Generation**: Uses crypto.getRandomValues for secure ID generation

### 2. API Communication
- **HTTPS Only**: All API communications use HTTPS
- **Request Timeout**: API requests have timeout protection
- **Error Sanitization**: Error messages are sanitized to prevent information leakage

### 3. User Input Validation
- **Input Sanitization**: All user inputs are sanitized before processing
- **Length Validation**: Input length is validated and limited
- **Type Validation**: Input types are validated where applicable

## Performance Security

### 1. Resource Optimization
- **Code Splitting**: JavaScript is split into smaller chunks
- **Lazy Loading**: Images and components are loaded on demand
- **Bundle Analysis**: Regular analysis of bundle size and composition

### 2. Memory Management
- **Automatic Cleanup**: Memory cleanup on page unload
- **Memory Monitoring**: Periodic monitoring of memory usage
- **Large Object Clearing**: Automatic clearing of large objects

## Compliance

### 1. Web Standards
- **WCAG 2.1**: Accessibility compliance
- **HTML5**: Valid HTML5 markup
- **CSS3**: Modern CSS with fallbacks
- **ES6+**: Modern JavaScript with TypeScript

### 2. Security Standards
- **OWASP Top 10**: Protection against common vulnerabilities
- **CSP Level 3**: Content Security Policy implementation
- **HTTPS**: Secure communication protocol

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly:

1. **Do not** create a public GitHub issue
2. Email security concerns to: security@rajpipla-palace.com
3. Include detailed information about the vulnerability
4. Allow reasonable time for response before public disclosure

## Security Updates

- **Regular Updates**: Dependencies are updated regularly
- **Security Patches**: Critical security patches are applied immediately
- **Monitoring**: Continuous monitoring for new vulnerabilities

## Best Practices

### For Developers
1. Never commit API keys or secrets to version control
2. Always validate and sanitize user input
3. Use environment variables for configuration
4. Implement proper error handling
5. Follow the principle of least privilege

### For Deployment
1. Use HTTPS in production
2. Set up proper CSP headers
3. Enable security headers
4. Monitor for security issues
5. Keep dependencies updated

## Security Checklist

- [x] API keys moved to environment variables
- [x] Input sanitization implemented
- [x] Security headers configured
- [x] CSP policy implemented
- [x] Rate limiting added
- [x] Error handling secured
- [x] Build process secured
- [x] Dependencies audited
- [x] Memory management implemented
- [x] Performance optimizations applied

## Contact

For security-related questions or concerns, please contact:
- **Security Team**: security@rajpipla-palace.com
- **Development Team**: dev@rajpipla-palace.com

---

*This security policy is regularly reviewed and updated to ensure compliance with the latest security standards and best practices.*
