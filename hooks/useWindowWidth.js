import { useEffect, useState } from 'react';

export default function useWindowWidth() {
  const [width, setWidth] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 1024) {
        setWidth(1024);
      } else {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', () => setWidth(window.innerWidth));
    }
    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return width;
}
