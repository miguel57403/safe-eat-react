const apiBaseURL = process.env.VITE_API_BASE_URL;
const username = process.env.VITE_USERNAME;
const password = process.env.VITE_PASSWORD;
const debugApi = process.env.VITE_DEBUG_API ?? true;

export default {
  username,
  password,
  apiBaseURL,
  debugApi,
};
