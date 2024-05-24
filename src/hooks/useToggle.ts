import useLocalStorage from "./useLocalStorage";

const useToggle = (key: string, initValue: boolean) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const toggle = (value?: unknown) =>
    setValue((prev) => (typeof value === "boolean" ? value : !prev));

  return [value, toggle] as const;
};

export default useToggle;
