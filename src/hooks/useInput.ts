import useLocalStorage, { LocalStorageInitValue } from "./useLocalStorage";

const useInput = (key: string, initValue: LocalStorageInitValue<string>) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const reset = () => setValue(initValue);

  const attributeObj = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  };

  return [value, reset, attributeObj] as const;
};

export default useInput;
