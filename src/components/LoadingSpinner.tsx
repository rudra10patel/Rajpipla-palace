import { useState, useEffect } from "react";
import { Clock, Crown, Scroll } from "lucide-react";

const LoadingSpinner = () => {
  const [loadingText, setLoadingText] = useState("Loading Heritage Timeline...");
  const [dots, setDots] = useState("");

  useEffect(() => {
    const textVariations = [
      "Loading Heritage Timeline...",
      "Preparing 3D Experience...",
      "Loading Historical Data...",
      "Initializing Spiral View...",
      "Almost Ready..."
    ];

    const interval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = textVariations.indexOf(prev);
        return textVariations[(currentIndex + 1) % textVariations.length];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(dotInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* 3D Spinning Spiral */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full loading-spinner" 
                 style={{ animationDuration: '2s' }} />
            
            {/* Middle Ring */}
            <div className="absolute inset-2 border-4 border-transparent border-b-pink-500 border-l-green-500 rounded-full loading-spinner" 
                 style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
            
            {/* Inner Ring */}
            <div className="absolute inset-4 border-4 border-transparent border-t-yellow-500 border-r-orange-500 rounded-full loading-spinner" 
                 style={{ animationDuration: '1s' }} />
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Crown className="w-8 h-8 text-white loading-pulse" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {loadingText}
          </h2>
          <p className="text-gray-300 text-sm">
            Preparing your journey through 100+ years of heritage
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" 
                 style={{ 
                   width: '100%',
                   animation: 'loadingProgress 3s ease-in-out infinite'
                 }} />
          </div>
        </div>

        {/* Loading Stats */}
        <div className="flex justify-center space-x-8 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>12 Historical Eras</span>
          </div>
          <div className="flex items-center space-x-2">
            <Scroll className="w-4 h-4" />
            <span>50+ Artifacts</span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full loading-float"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random()}s`
              }}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default LoadingSpinner;
