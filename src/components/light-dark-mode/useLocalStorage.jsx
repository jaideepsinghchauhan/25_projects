/**
 * Custom React Hook: useLocalStorage
 *
 * This hook synchronizes a state variable with localStorage.
 * It reads the initial value from localStorage (if available) when the component mounts,
 * and updates localStorage whenever the value changes.
 *
 * Usage:
 * const [value, setValue] = useLocalStorage("key", "defaultValue");
 * we use callback in use state so that expensive compute runs only once during the initial render
 */
import { useEffect, useState } from "react";
export default function useLocalStorage(key, defaultValue = "light") {
  const [value, setValue] = useState(() => {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
