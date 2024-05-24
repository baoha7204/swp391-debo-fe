import { useState, useEffect, Dispatch, SetStateAction } from "react";

const IS_SERVER = typeof window === "undefined";

export type LocalStorageInitValue<T> = T | (() => T);

function getLocalValue<T>(key: string, initValue: LocalStorageInitValue<T>) {
  const initialValueToUse =
    initValue instanceof Function ? initValue() : initValue;

  if (IS_SERVER) return initialValueToUse;

  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : initialValueToUse;
  } catch (error) {
    console.warn(`Error reading localStorage key “${key}”:`, error);
    return initialValueToUse;
  }
}

function useLocalStorage<T>(
  key: string,
  initValue: LocalStorageInitValue<T>
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(() => getLocalValue(key, initValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
