import axios from 'axios';
import { baseUrl } from '../constants';
import { Endpoints } from '../constants/endpoints';

export class BaseClient {
  async api({
    endpoint,
    id,
    name,
  }: {
    endpoint: Endpoints;
    id?: number;
    name?: string;
  }): Promise<any> {
    const fetch = await axios.get(`${baseUrl}${endpoint}/${id || name}.json`);
    return fetch.data;
  }
}
