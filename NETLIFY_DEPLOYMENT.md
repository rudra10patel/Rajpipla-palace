# Netlify Deployment Guide for Rajpipla Palace

## 🚀 Quick Deployment Steps

### Method 1: Netlify CLI (Recommended)

#### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify
```bash
netlify login
```

#### Step 3: Build the Project
```bash
npm run build
```

#### Step 4: Deploy to Netlify
```bash
netlify deploy --prod --dir=dist
```

### Method 2: Git Integration (Automatic Deployments)

#### Step 1: Push to GitHub
```bash
git add .
git commit -m "Deploy to Netlify"
git push origin main
```

#### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

#### Step 3: Set Environment Variables
In Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add the following variables:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   VITE_APP_TITLE=Rajpipla Palace - Digital Heritage Platform
   VITE_APP_DESCRIPTION=Experience the magnificent Rajpipla Palace
   VITE_APP_URL=https://your-site-name.netlify.app
   VITE_DEV_MODE=false
   ```

## 🔧 Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Create `.env` file with your API key
- [ ] Test the application locally
- [ ] Run security audit: `npm run security:audit`
- [ ] Run type checking: `npm run type-check`
- [ ] Run linting: `npm run lint`

### 2. Build Process
- [ ] Clean previous builds: `npm run clean`
- [ ] Install dependencies: `npm install`
- [ ] Build for production: `npm run build`
- [ ] Test production build: `npm run preview`

### 3. Remove Debug Components
Before deploying, remove the test component:
```tsx
// Remove from src/pages/AIGuide.tsx:
import { AITest } from "@/components/AITest";

// Remove this section:
{/* AI Test Component - Remove after debugging */}
<div className="mb-8">
  <AITest />
</div>
```

## 📁 Netlify Configuration Files

### netlify.toml
The project includes a `netlify.toml` file with:
- Build configuration
- Redirect rules for SPA
- Security headers
- Caching rules
- Content Security Policy

### _redirects
Includes redirect rules for single-page application routing.

## 🔒 Security Configuration

### Environment Variables
Set these in Netlify dashboard:
```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_APP_TITLE=Rajpipla Palace - Digital Heritage Platform
VITE_APP_DESCRIPTION=Experience the magnificent Rajpipla Palace
VITE_APP_URL=https://your-site-name.netlify.app
VITE_DEV_MODE=false
```

### Security Headers
Automatically configured in `netlify.toml`:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Content Security Policy

## 🚀 Deployment Commands

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Automatic Deployment
```bash
# Push to Git repository
git add .
git commit -m "Deploy to production"
git push origin main
```

## 🔍 Post-Deployment

### 1. Test the Deployment
- [ ] Visit your Netlify URL
- [ ] Test all pages and functionality
- [ ] Verify AI guide is working
- [ ] Check console for errors
- [ ] Test on mobile devices

### 2. Domain Configuration
- [ ] Set up custom domain (optional)
- [ ] Configure SSL certificate
- [ ] Set up redirects if needed

### 3. Monitoring
- [ ] Set up Netlify Analytics
- [ ] Monitor build logs
- [ ] Check for deployment errors
- [ ] Monitor API usage

## 🛠️ Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and rebuild
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Environment Variable Issues
- Verify variables are set in Netlify dashboard
- Check variable names (must start with `VITE_`)
- Ensure no trailing spaces
- Redeploy after changing variables

#### API Key Issues
- Verify API key is valid
- Check API key permissions
- Monitor API usage limits
- Test API connectivity

#### Routing Issues
- Verify `_redirects` file is in `public/` directory
- Check `netlify.toml` redirect rules
- Ensure SPA routing is configured

### Debug Commands
```bash
# Check build locally
npm run build
npm run preview

# Test Netlify CLI
netlify status
netlify logs

# Check environment variables
netlify env:list
```

## 📊 Performance Optimization

### Netlify Features
- **Edge Functions**: For serverless functions
- **Form Handling**: For contact forms
- **Split Testing**: For A/B testing
- **Analytics**: Built-in analytics

### CDN Configuration
- Automatic global CDN
- Image optimization
- Asset compression
- Caching headers

## 🔄 Continuous Deployment

### GitHub Integration
1. Connect repository to Netlify
2. Set up automatic deployments
3. Configure branch settings
4. Set up preview deployments

### Branch Configuration
- **Production**: `main` branch
- **Staging**: `develop` branch
- **Preview**: All other branches

## 📞 Support

### Netlify Resources
- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community](https://community.netlify.com/)
- [Netlify Status](https://www.netlifystatus.com/)

### Project Support
- Check deployment logs in Netlify dashboard
- Review build logs for errors
- Test locally before deploying
- Monitor API usage and limits

---

## 🎯 Quick Start Commands

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login to Netlify
netlify login

# 3. Build and deploy
npm run build
netlify deploy --prod --dir=dist

# 4. Set environment variables in Netlify dashboard
# 5. Test your deployment
```

Your Rajpipla Palace Digital Heritage Platform will be live on Netlify! 🏰✨
