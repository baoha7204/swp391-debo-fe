import useLocalStorage, { LocalStorageInitValue } from "./useLocalStorage";

const useToggle = (key: string, initValue: LocalStorageInitValue<boolean>) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const toggle = (value?: boolean) => {
    setValue((prev) => (typeof value === "boolean" ? value : !prev));
  };

  return [value, toggle];
};

export default useToggle;
