import { Endpoints } from "../constants";
import { IVillager } from "../typings";
import { BaseClient } from "./base";

export class VillagerClient extends BaseClient {
  constructor() {
    super();
  }
  async getVillagerById(id: number): Promise<IVillager> {
    return await this.api({ endpoint: Endpoints.Villagers, id });
  }
  async getVillagerByName(name: string): Promise<IVillager> {
    return await this.api({ endpoint: Endpoints.Villagers, name });
  }
  async getVillagerRenderById(id: number): Promise<string> {
    const req = await this.getVillagerById(id);
    return req.sprites.render;
  }
  async getVillagerRenderByName(name: string): Promise<string> {
    const req = await this.getVillagerByName(name);
    return req.sprites.render;
  }
  async getVillagerIconById(id: number): Promise<string> {
    const req = await this.getVillagerById(id);
    return req.sprites.icon;
  }
  async getVillagerIconByName(name: string): Promise<string> {
    const req = await this.getVillagerByName(name);
    return req.sprites.icon;
  }
}
