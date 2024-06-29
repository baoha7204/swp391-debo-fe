const publicRuntimeConfig = {
  NODE_ENV: import.meta.env.NODE_ENV || "production",
  API_URL: import.meta.env.VITE_REACT_APP_BASE_URL,
};

export const { NODE_ENV, API_URL } = publicRuntimeConfig;
