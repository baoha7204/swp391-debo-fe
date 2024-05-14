const publicRuntimeConfig = {
  NODE_ENV: import.meta.env.NODE_ENV || "production",
  API_URL: import.meta.env.VITE_REACT_APP_BASE_URL,
  LOCAL_STORAGE_TOKEN: import.meta.env.VITE_REACT_APP_TOKEN_NAME,
};

export const { NODE_ENV, API_URL, LOCAL_STORAGE_TOKEN } = publicRuntimeConfig;

export default publicRuntimeConfig.NODE_ENV;
