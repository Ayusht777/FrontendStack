import { useState, useEffect } from "react";

export const useIsInViewport = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.5 }
    );
    const currentRefValue = ref.current;
    if (currentRefValue) {
      // this will start observing the ref element
      observer.observe(currentRefValue);
    }

    return () => {
      if (currentRefValue) {
        observer.unobserve(currentRefValue);
      }
    };
  }, [ref]);

  return isVisible;
};
