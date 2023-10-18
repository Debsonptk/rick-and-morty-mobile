import axios from 'axios';
import { Config } from 'src/config';

const Api = axios.create({
  baseURL: Config.baseUrl,
});

// eslint-disable-next-line arrow-parens
Api.interceptors.request.use(config => {
  return {
    ...config,
    params: {
      ...config.params,
    },
  };
});

export default Api;
