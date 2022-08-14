import { Endpoints } from '../constants';
import { ISeaCreature } from '../typings/sea_creatures';
import { BaseClient } from './base';

export class SeaCreaturesClient extends BaseClient {
  constructor() {
    super();
  }
  async getSeaCreatureById(id: number): Promise<ISeaCreature> {
    return await this.api({ endpoint: Endpoints.SeaCreatures, id });
  }
  async getSeaCreatureByName(name: string): Promise<ISeaCreature> {
    return await this.api({ endpoint: Endpoints.SeaCreatures, name });
  }
  async getSeaCreatureRenderById(id: number): Promise<string> {
    const req = await this.getSeaCreatureById(id);
    return req.sprites.render;
  }
  async getSeaCreatureRenderByName(name: string): Promise<string> {
    const req = await this.getSeaCreatureByName(name);
    return req.sprites.render;
  }
  async getSeaCreatureIconById(id: number): Promise<string> {
    const req = await this.getSeaCreatureById(id);
    return req.sprites.icon;
  }
  async getSeaCreatureIconByName(name: string): Promise<string> {
    const req = await this.getSeaCreatureByName(name);
    return req.sprites.icon;
  }
}
