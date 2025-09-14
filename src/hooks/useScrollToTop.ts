import { useEffect } from 'react';

export const useScrollToTop = () => {
  useEffect(() => {
    // Set scroll position immediately without any animation
    window.scrollTo(0, 0);
    // Also set document element scroll position
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
};
