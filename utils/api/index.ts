import axios from "axios";

// Определяем baseURL динамически на основе текущего хоста
const getBaseUrl = () => {
  // Для серверного рендеринга или во время сборки
  if (typeof window === "undefined") {
    return "/api";
  }

  return `${window.location.origin}/api`;
  //return `https://noxer-ai.ru/api`;
  // return "https://yamal-store.ru/api";
};

export const apiInstance = axios.create({
  baseURL: getBaseUrl(),
});

apiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.debug(err);
  }
);

apiInstance.interceptors.response.use(
  (response) => response,
  async (err) => {
    const request = err.config;

    if (err.response?.status === 401 && !request._retry) {
      request._retry = true;
    }

    console.debug(err);
  }
);
