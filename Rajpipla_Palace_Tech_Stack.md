# Rajpipla Palace - Complete Tech Stack Documentation

## 🏗️ Project Overview
**Rajpipla Palace Digital Heritage Platform** - A modern web application dedicated to preserving and showcasing the magnificent heritage of Rajpipla Palace through immersive digital experiences.

---

## 🎯 Core Technologies

### **Frontend Framework**
- **React 18.3.1** - Modern React with concurrent features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 5.4.19** - Lightning-fast build tool and dev server

### **Styling & UI**
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Radix UI** - Headless, accessible UI primitives
- **Lucide React 0.462.0** - Beautiful icon library
- **tailwindcss-animate 1.0.7** - Animation utilities

---

## 🧩 Component Architecture

### **UI Components (shadcn/ui)**
```typescript
// Complete component library
- Accordion, Alert Dialog, Avatar, Badge
- Button, Card, Carousel, Chart
- Checkbox, Dialog, Dropdown Menu
- Form, Input, Label, Navigation Menu
- Popover, Progress, Radio Group
- Select, Sheet, Sidebar, Skeleton
- Slider, Switch, Table, Tabs
- Textarea, Toast, Tooltip, Toggle
```

### **Custom Components**
- `HeroSection.tsx` - Landing page hero
- `Navigation.tsx` - Main navigation
- `ChatInterface.tsx` - AI chatbot interface
- `VirtualTourSection.tsx` - 360° tour component
- `SpiralTimeline.tsx` - Historical timeline
- `FeaturesSection.tsx` - Feature showcase
- `Footer.tsx` - Site footer

---

## 🤖 AI & Machine Learning

### **Google Gemini AI Integration**
- **@google/generative-ai 0.24.1** - Official Gemini SDK
- **Model**: `gemini-1.5-flash` - Fast, efficient AI model
- **Features**:
  - Conversational AI guide
  - Heritage knowledge base
  - Multi-language support
  - Context-aware responses

### **AI Service Architecture**
```typescript
// Gemini Chat Service
class GeminiChatService {
  - sendMessage(userMessage: string)
  - buildConversationContext()
  - getChatHistory()
  - clearHistory()
  - setLanguage(language: string)
}
```

---

## 🎵 Audio & Media

### **Audio Tour System**
- **Multi-language Support**: English, Hindi, Gujarati
- **Audio Files**: MP3 format with professional narration
- **Features**:
  - Volume control and mute
  - Download for offline listening
  - Progress tracking
  - High-quality audio playback

### **Media Assets**
- **Images**: High-resolution palace photos
- **360° Panoramas**: Virtual tour content
- **Audio Files**: Professional narration
- **Icons**: Lucide React icon set

---

## 🗄️ State Management & Data

### **React Query (TanStack Query)**
- **@tanstack/react-query 5.83.0** - Server state management
- **Features**:
  - Caching and synchronization
  - Background updates
  - Optimistic updates
  - Error handling

### **Data Management**
```typescript
// Timeline Data Structure
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'Architecture' | 'Political' | 'Heritage' | 'Recognition' | 'Digital' | 'Technology';
  artifacts: string[];
  significance?: 'high' | 'medium' | 'low';
  location?: string;
}
```

---

## 🎨 Design System

### **Color Palette**
```css
/* Heritage Theme Colors */
--royal-blue: 220 100% 20%;
--heritage-gold: 45 100% 50%;
--warm-terracotta: 15 70% 50%;
--palace-cream: 30 20% 95%;
--stone-gray: 210 10% 40%;
```

### **Typography**
- **Font System**: Tailwind's default font stack
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 compliant

### **Animations**
```css
/* Custom Animations */
- fade-in, slide-up, zoom-in
- title-slide-in, subtitle-slide-in
- buttons-slide-in, stats-slide-in
- float, pulse-slow, fade-in-slow
```

---

## 🛠️ Development Tools

### **Build & Bundling**
- **Vite** - Fast build tool with HMR
- **SWC** - Super-fast TypeScript/JavaScript compiler
- **PostCSS** - CSS processing with autoprefixer

### **Code Quality**
- **ESLint 9.32.0** - Code linting
- **TypeScript ESLint** - TypeScript-specific rules
- **React Hooks ESLint** - React hooks validation
- **React Refresh** - Hot reloading

### **Development Features**
- **Hot Module Replacement (HMR)**
- **TypeScript path mapping** (`@/*` aliases)
- **Component tagging** (lovable-tagger)
- **Development server** on port 8080

---

## 📱 Responsive Design

### **Breakpoints**
```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1400px /* 2X large devices */
```

### **Mobile Optimization**
- Touch-friendly interfaces
- Responsive navigation
- Optimized images
- Fast loading times

---

## 🔧 Configuration Files

### **Vite Configuration**
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), componentTagger()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### **TypeScript Configuration**
```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] },
    "noImplicitAny": false,
    "skipLibCheck": true,
    "allowJs": true
  }
}
```

### **Tailwind Configuration**
```typescript
// tailwind.config.ts
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { /* Custom heritage colors */ },
      animation: { /* Custom animations */ },
      keyframes: { /* Custom keyframes */ }
    }
  }
}
```

---

## 🚀 Deployment & Hosting

### **Build Process**
```bash
# Development
npm run dev          # Start dev server on :8080

# Production Build
npm run build        # Build for production
npm run preview      # Preview production build

# Development Build
npm run build:dev    # Build in development mode
```

### **Deployment Options**

#### **Static Hosting (Recommended)**
- **Vercel** - Zero-config deployment
- **Netlify** - Git-based deployment
- **GitHub Pages** - Free static hosting
- **AWS S3 + CloudFront** - Scalable CDN

#### **Container Deployment**
- **Docker** - Containerized deployment
- **Kubernetes** - Orchestrated deployment
- **AWS ECS/Fargate** - Managed containers

#### **Traditional Hosting**
- **Apache/Nginx** - Web server hosting
- **Node.js** - Server-side rendering (if needed)

---

## 📊 Performance Optimization

### **Bundle Optimization**
- **Tree Shaking** - Remove unused code
- **Code Splitting** - Lazy load components
- **Asset Optimization** - Compressed images
- **Gzip Compression** - Reduced file sizes

### **Runtime Performance**
- **React.memo** - Component memoization
- **useCallback/useMemo** - Hook optimization
- **Virtual Scrolling** - Large list optimization
- **Image Lazy Loading** - On-demand loading

---

## 🔒 Security & Privacy

### **Security Measures**
- **HTTPS Only** - Encrypted connections
- **Content Security Policy** - XSS protection
- **API Key Management** - Secure AI integration
- **Input Validation** - Sanitized user inputs

### **Privacy Compliance**
- **GDPR Ready** - European privacy compliance
- **Data Minimization** - Collect only necessary data
- **User Consent** - Clear privacy policies
- **Local Storage** - Client-side data storage

---

## 🌐 Browser Support

### **Modern Browsers**
- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

### **Mobile Browsers**
- **iOS Safari** 14+
- **Chrome Mobile** 90+
- **Samsung Internet** 14+

---

## 📈 Analytics & Monitoring

### **Performance Monitoring**
- **Web Vitals** - Core performance metrics
- **Bundle Analyzer** - Bundle size analysis
- **Lighthouse** - Performance auditing

### **User Analytics**
- **Google Analytics** - User behavior tracking
- **Hotjar** - User interaction heatmaps
- **Custom Events** - Heritage engagement metrics

---

## 🔄 CI/CD Pipeline

### **GitHub Actions (Recommended)**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
```

### **Deployment Stages**
1. **Development** - Local development
2. **Staging** - Pre-production testing
3. **Production** - Live deployment
4. **Monitoring** - Post-deployment monitoring

---

## 🧪 Testing Strategy

### **Testing Tools**
- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Cypress** - End-to-end testing
- **Lighthouse CI** - Performance testing

### **Test Coverage**
- **Unit Tests** - Component logic
- **Integration Tests** - Feature workflows
- **E2E Tests** - User journeys
- **Performance Tests** - Load testing

---

## 📚 Documentation

### **Code Documentation**
- **JSDoc** - Function documentation
- **README.md** - Project overview
- **API Documentation** - Service documentation
- **Component Storybook** - UI component docs

### **User Documentation**
- **User Guide** - How to use the platform
- **Audio Tour Guide** - Tour instructions
- **FAQ** - Common questions
- **Accessibility Guide** - Inclusive design

---

## 🔮 Future Enhancements

### **Planned Features**
- **PWA Support** - Progressive Web App
- **Offline Mode** - Cached content access
- **AR/VR Integration** - Immersive experiences
- **Multi-language UI** - Internationalization
- **Advanced Analytics** - Heritage engagement metrics

### **Technical Improvements**
- **Server-Side Rendering** - Next.js migration
- **GraphQL API** - Efficient data fetching
- **Microservices** - Scalable architecture
- **Edge Computing** - Global performance

---

## 📞 Support & Maintenance

### **Development Team**
- **Frontend Developer** - React/TypeScript expertise
- **UI/UX Designer** - Heritage design specialist
- **Content Manager** - Historical content curation
- **DevOps Engineer** - Deployment and monitoring

### **Maintenance Schedule**
- **Weekly** - Security updates
- **Monthly** - Feature updates
- **Quarterly** - Performance optimization
- **Annually** - Major version upgrades

---

## 🎯 Key Performance Indicators (KPIs)

### **Technical Metrics**
- **Page Load Time** < 3 seconds
- **First Contentful Paint** < 1.5 seconds
- **Largest Contentful Paint** < 2.5 seconds
- **Cumulative Layout Shift** < 0.1

### **User Engagement**
- **Audio Tour Completion Rate** > 70%
- **Virtual Tour Engagement** > 5 minutes
- **AI Chat Interactions** > 3 per session
- **Return Visitor Rate** > 40%

---

*This comprehensive tech stack documentation provides a complete overview of the Rajpipla Palace Digital Heritage Platform's technical architecture, tools, and deployment strategies.*
