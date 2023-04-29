// src/hooks/useLocalStorageExpiry.js
import { useEffect } from 'react';

const useLocalStorageExpiry = (key, durationInMinutes) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem(key);
    }, durationInMinutes * 60 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [key, durationInMinutes]);
};

export default useLocalStorageExpiry;
