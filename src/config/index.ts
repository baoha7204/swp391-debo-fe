const publicRuntimeConfig = {
  NODE_ENV: import.meta.env.NODE_ENV || "production",
  API_URL: import.meta.env.VITE_REACT_APP_BASE_URL,
};

export const { NODE_ENV, API_URL } = publicRuntimeConfig;

export const MAX_DONE = 7;

export default publicRuntimeConfig.NODE_ENV;
