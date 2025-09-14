/**
 * Performance optimization utilities for the Rajpipla Palace application
 * Implements best practices for client-side performance
 */

// Image optimization utilities
export class ImageOptimizer {
  /**
   * Lazy load images with intersection observer
   */
  static setupLazyLoading(): void {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  /**
   * Preload critical images
   */
  static preloadCriticalImages(imageUrls: string[]): void {
    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  /**
   * Generate responsive image srcset
   */
  static generateSrcSet(baseUrl: string, sizes: number[]): string {
    return sizes
      .map(size => `${baseUrl}?w=${size} ${size}w`)
      .join(', ');
  }
}

// Bundle optimization utilities
export class BundleOptimizer {
  /**
   * Dynamic import for code splitting
   */
  static async loadComponent<T>(importFn: () => Promise<T>): Promise<T> {
    try {
      return await importFn();
    } catch (error) {
      console.error('Failed to load component:', error);
      throw error;
    }
  }

  /**
   * Prefetch resources for better performance
   */
  static prefetchResource(url: string, type: 'script' | 'style' | 'image' = 'script'): void {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = type;
    link.href = url;
    document.head.appendChild(link);
  }

  /**
   * Debounce function calls
   */
  static debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  /**
   * Throttle function calls
   */
  static throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
}

// Memory management utilities
export class MemoryManager {
  private static cleanupFunctions: (() => void)[] = [];

  /**
   * Register cleanup function
   */
  static registerCleanup(cleanupFn: () => void): void {
    this.cleanupFunctions.push(cleanupFn);
  }

  /**
   * Execute all cleanup functions
   */
  static cleanup(): void {
    this.cleanupFunctions.forEach(fn => {
      try {
        fn();
      } catch (error) {
        console.error('Cleanup error:', error);
      }
    });
    this.cleanupFunctions = [];
  }

  /**
   * Clear large objects from memory
   */
  static clearLargeObjects(): void {
    // Clear any cached data that might be taking up memory
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          if (name.includes('temp') || name.includes('cache')) {
            caches.delete(name);
          }
        });
      });
    }
  }
}

// Performance monitoring
export class PerformanceMonitor {
  private static metrics: Map<string, number> = new Map();

  /**
   * Start performance measurement
   */
  static startMeasure(name: string): void {
    this.metrics.set(name, performance.now());
  }

  /**
   * End performance measurement
   */
  static endMeasure(name: string): number {
    const startTime = this.metrics.get(name);
    if (startTime) {
      const duration = performance.now() - startTime;
      this.metrics.delete(name);
      return duration;
    }
    return 0;
  }

  /**
   * Get Web Vitals metrics
   */
  static getWebVitals(): Promise<any> {
    return new Promise((resolve) => {
      if ('web-vitals' in window) {
        // This would require the web-vitals library
        resolve({});
      } else {
        // Basic performance metrics
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        resolve({
          FCP: navigation?.loadEventEnd - navigation?.fetchStart,
          LCP: 0, // Would need specific measurement
          CLS: 0, // Would need specific measurement
        });
      }
    });
  }

  /**
   * Monitor memory usage
   */
  static getMemoryUsage(): any {
    if ('memory' in performance) {
      return (performance as any).memory;
    }
    return null;
  }
}

// Service Worker utilities
export class ServiceWorkerManager {
  /**
   * Register service worker for caching
   */
  static async registerServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }

  /**
   * Check for updates
   */
  static async checkForUpdates(): Promise<boolean> {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        await registration.update();
        return true;
      }
    }
    return false;
  }
}

// Initialize performance optimizations
export function initializePerformanceOptimizations(): void {
  // Setup lazy loading
  ImageOptimizer.setupLazyLoading();

  // Register cleanup on page unload
  window.addEventListener('beforeunload', MemoryManager.cleanup);

  // Monitor memory usage periodically
  setInterval(() => {
    const memory = PerformanceMonitor.getMemoryUsage();
    if (memory && memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
      MemoryManager.clearLargeObjects();
    }
  }, 30000); // Check every 30 seconds

  // Register service worker
  ServiceWorkerManager.registerServiceWorker();
}
