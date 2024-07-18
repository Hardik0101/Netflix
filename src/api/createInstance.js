import axios from "axios";
import { apiEndpoint } from "./constant";

const createAxiosInstance = (
  customHeaders = {},
  params = {},
  customTimeout = 1000
) => {
  return axios.create({
    baseURL: apiEndpoint.API_BASE_URL,
    timeout: customTimeout,
    headers: {
      Accept: "application/json",
      ...customHeaders,
    },
    params: {
      api_key: apiEndpoint.API_KEY,
      ...params,
    },
  });
};

export default createAxiosInstance;
