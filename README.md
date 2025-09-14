# Rajpipla Palace - Digital Heritage Platform

A modern web application dedicated to preserving and showcasing the magnificent heritage of Rajpipla Palace through immersive digital experiences.

## 🏰 About

This project serves as a comprehensive digital platform for the Rajpipla Palace, offering visitors and heritage enthusiasts an opportunity to explore centuries of royal history through cutting-edge technology. The platform combines traditional heritage preservation with modern web technologies to create an engaging and educational experience.

## ✨ Features

- **Virtual Tours**: Immersive experiences of palace chambers
- **Digital Archive**: Comprehensive timeline and artifact collection
- **Community Engagement**: User-generated content and story sharing
- **Smart Tourism**: Visit planning and booking system
- **Analytics Dashboard**: Visitor insights and engagement metrics

## 🛠️ Technology Stack

### Frontend Technologies
- **React 18.3.1** with TypeScript 5.8.3
- **Vite 5.4.19** - Lightning-fast build tool
- **Tailwind CSS 3.4.17** - Utility-first styling
- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible UI primitives
- **TanStack Query 5.83.0** - Server state management
- **React Router DOM 6.30.1** - Client-side routing

### AI & External Services
- **Google Gemini AI** - AI-powered chatbot
- **@google/generative-ai 0.24.1** - Official Gemini SDK

### Security & Performance
- **Environment-based configuration** - Secure API key management
- **Input sanitization** - XSS protection
- **Rate limiting** - API abuse prevention
- **Security headers** - Comprehensive CSP implementation
- **Performance optimization** - Code splitting and lazy loading
- **Memory management** - Automatic cleanup and monitoring

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Google Gemini AI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/rajpipla-palace-platform.git
cd rajpipla-palace-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your API key
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:8080`

### Building for Production

```bash
# Run security checks and type checking
npm run prebuild

# Build for production
npm run build

# Preview production build
npm run preview
```

### Security & Quality Checks

```bash
# Run security audit
npm run security:audit

# Fix security vulnerabilities
npm run security:fix

# Type checking
npm run type-check

# Linting with auto-fix
npm run lint:fix
```

## 🔒 Security Features

- **API Key Protection**: Environment-based configuration
- **Input Sanitization**: XSS and injection attack prevention
- **Rate Limiting**: API abuse protection
- **Security Headers**: Comprehensive CSP implementation
- **Error Handling**: Secure error messages without sensitive data
- **Memory Management**: Automatic cleanup and monitoring

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn/ui)
│   ├── HeroSection.tsx # Hero section component
│   ├── ChatInterface.tsx # AI chatbot interface
│   └── VirtualTourSection.tsx # 360° tour component
├── lib/                # Utility libraries
│   ├── gemini.ts      # AI service integration
│   ├── security.ts    # Security utilities
│   ├── performance.ts # Performance optimization
│   └── utils.ts       # General utilities
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── services/          # External service integrations
└── data/              # Static data and configurations
```

## 🎨 Design System

The application uses a custom design system inspired by the royal heritage of Rajpipla Palace:

- **Primary Colors**: Deep maroon and golden yellow
- **Typography**: Clean, readable fonts with royal elegance
- **Components**: Consistent, accessible UI components
- **Animations**: Smooth transitions and micro-interactions

## 📚 Documentation

- **[Security Policy](SECURITY.md)** - Comprehensive security measures and best practices
- **[Deployment Guide](DEPLOYMENT.md)** - Production deployment instructions
- **[Tech Stack Documentation](Rajpipla_Palace_Tech_Stack.md)** - Detailed technical documentation

## 🚀 Deployment

### Quick Deploy Options

#### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

#### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Docker
```bash
docker build -t rajpipla-palace .
docker run -p 80:80 rajpipla-palace
```

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run type-check` - TypeScript type checking
- `npm run security:audit` - Security audit
- `npm run security:fix` - Fix security vulnerabilities
- `npm run clean` - Clean build artifacts

### Code Quality

This project follows strict code quality standards:
- TypeScript for type safety
- ESLint for code quality
- Security best practices
- Performance optimization
- Accessibility compliance (WCAG 2.1)

## 🤝 Contributing

We welcome contributions to improve the platform! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or support, please contact:
- **Email**: info@rajpipla-heritage.com
- **Website**: [Rajpipla Heritage Foundation](https://rajpipla-heritage.com)

## 🙏 Acknowledgments

- Rajpipla Heritage Foundation for providing historical content
- The local community for sharing stories and memories
- Open source contributors who made this project possible

---

*Built with ❤️ for heritage preservation and digital innovation*