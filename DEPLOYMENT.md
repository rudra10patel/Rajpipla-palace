# Deployment Guide

## Overview

This guide provides comprehensive instructions for deploying the Rajpipla Palace Digital Heritage Platform with security and performance optimizations.

## Pre-Deployment Checklist

### 1. Security Configuration
- [ ] Set up environment variables (copy `.env.example` to `.env`)
- [ ] Configure API keys securely
- [ ] Run security audit: `npm run security:audit`
- [ ] Fix any security vulnerabilities: `npm run security:fix`
- [ ] Run type checking: `npm run type-check`
- [ ] Run linting: `npm run lint`

### 2. Build Process
- [ ] Clean previous builds: `npm run clean`
- [ ] Install dependencies: `npm install`
- [ ] Build for production: `npm run build`
- [ ] Test production build: `npm run preview`

## Environment Variables

### Required Variables
```bash
# Google Gemini AI API Key
VITE_GEMINI_API_KEY=your_actual_api_key_here

# Application Configuration
VITE_APP_TITLE=Rajpipla Palace - Digital Heritage Platform
VITE_APP_DESCRIPTION=Experience the magnificent Rajpipla Palace through immersive virtual tours
VITE_APP_URL=https://your-domain.com

# Development Configuration
VITE_DEV_MODE=false
```

### Security Notes
- Never commit `.env` files to version control
- Use different API keys for development and production
- Rotate API keys regularly
- Monitor API key usage

## Deployment Options

### 1. Static Hosting (Recommended)

#### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Configure environment variables in Vercel dashboard
```

#### Netlify Deployment
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist

# Configure environment variables in Netlify dashboard
```

#### GitHub Pages
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
# Configure in repository settings > Pages
```

### 2. Container Deployment

#### Docker Deployment
```dockerfile
# Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Build Docker image
docker build -t rajpipla-palace .

# Run container
docker run -p 80:80 rajpipla-palace
```

### 3. Traditional Hosting

#### Apache Configuration
```apache
# .htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/rajpipla-palace/dist;
    index index.html;

    # Security headers
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Security Configuration

### 1. HTTPS Setup
- Obtain SSL certificate (Let's Encrypt recommended)
- Configure HTTPS redirect
- Enable HSTS headers

### 2. Security Headers
```nginx
# Additional security headers
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://generativelanguage.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://generativelanguage.googleapis.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';" always;
```

### 3. Environment Security
- Use environment-specific API keys
- Implement API key rotation
- Monitor API usage
- Set up rate limiting

## Performance Optimization

### 1. CDN Configuration
- Configure CDN for static assets
- Enable compression
- Set up caching headers
- Use HTTP/2

### 2. Image Optimization
- Compress images before deployment
- Use WebP format where supported
- Implement lazy loading
- Set up responsive images

### 3. Bundle Optimization
- Enable code splitting
- Use tree shaking
- Minimize bundle size
- Implement service worker caching

## Monitoring and Analytics

### 1. Performance Monitoring
- Set up Web Vitals monitoring
- Monitor Core Web Vitals
- Track loading times
- Monitor memory usage

### 2. Error Tracking
- Implement error tracking (Sentry, LogRocket)
- Monitor JavaScript errors
- Track API failures
- Set up alerts

### 3. Analytics
- Configure Google Analytics
- Track user interactions
- Monitor conversion rates
- Analyze user behavior

## Post-Deployment

### 1. Testing
- Test all functionality
- Verify security headers
- Check performance metrics
- Validate accessibility

### 2. Monitoring
- Set up uptime monitoring
- Monitor error rates
- Track performance metrics
- Watch API usage

### 3. Maintenance
- Regular security updates
- Dependency updates
- Performance optimization
- Content updates

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Environment Variable Issues
- Verify `.env` file exists
- Check variable names (must start with `VITE_`)
- Ensure no trailing spaces
- Restart development server

#### API Key Issues
- Verify API key is valid
- Check API key permissions
- Monitor API usage limits
- Test API connectivity

### Performance Issues
- Check bundle size
- Optimize images
- Enable compression
- Use CDN

## Support

For deployment issues:
- Check the troubleshooting section
- Review error logs
- Contact development team
- Consult documentation

---

*This deployment guide is regularly updated to reflect the latest best practices and security requirements.*
