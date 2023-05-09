import { useState, useEffect } from "react";

export const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, (updater: (value: T) => T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  const setValue = (updater: (value: T) => T) => {
    setStoredValue(updater);
  };

  return [storedValue, setValue];
};
