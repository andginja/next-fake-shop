import { useState, useEffect } from "react";

export const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, (updater: (value: T) => T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
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
