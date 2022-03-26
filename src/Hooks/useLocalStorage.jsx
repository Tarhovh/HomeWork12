import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    if (defaultValue instanceof Function) return defaultValue();
    try {
      return JSON.parse(item);
    } catch (error) {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
