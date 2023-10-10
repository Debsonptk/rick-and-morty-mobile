import axios from 'axios';
import { Config } from 'src/config';

const Api = axios.create({
  baseURL: Config.beseUrl,
});

export default Api;
