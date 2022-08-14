import { Endpoints } from '../constants';
import { ISong } from '../typings';
import { BaseClient } from './base';

export class SongClient extends BaseClient {
  constructor() {
    super();
  }
  async getSongById(id: number): Promise<ISong> {
    return await this.api({ endpoint: Endpoints.Songs, id });
  }
  async getSongByName(name: string): Promise<ISong> {
    return await this.api({ endpoint: Endpoints.Songs, name });
  }
  async getSongIconById(id: number): Promise<string> {
    const req = await this.getSongById(id);
    return req.icon;
  }
  async getSongIconByName(name: string): Promise<string> {
    const req = await this.getSongByName(name);
    return req.icon;
  }
  async getHourlySongById(id: number): Promise<any> {
    return await this.api({ endpoint: Endpoints.Songs, id });
  }
}
