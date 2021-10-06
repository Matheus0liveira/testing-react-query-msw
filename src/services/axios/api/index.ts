import axios from 'axios';

import { GITHUB_API } from '../../../common/constants';

export const api = axios.create({
  baseURL: GITHUB_API,
});
