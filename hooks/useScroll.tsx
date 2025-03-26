import { useEffect } from 'react';

type ScrollCallback = () => void;

interface UseScrollOptions {
  callback: ScrollCallback;
  enabled?: boolean;
  passive?: boolean;
}

export const useScroll = ({ callback, enabled = true, passive = true }: UseScrollOptions) => {
  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      callback();
    };

    window.addEventListener('scroll', handleScroll, { passive });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback, enabled, passive]);
}; 