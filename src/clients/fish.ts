import { Endpoints } from "../constants";
import { IFish } from "../typings/fishes";
import { BaseClient } from "./base";

export class FishingClient extends BaseClient {
  constructor() {
    super();
  }
  async getFishById(id: number): Promise<IFish> {
    return await this.api({ endpoint: Endpoints.Fishes, id });
  }
  async getFishByName(name: string): Promise<IFish> {
    return await this.api({ endpoint: Endpoints.Fishes, name });
  }
  async getFishRenderById(id: number): Promise<string> {
    const req = await this.getFishById(id);
    return req.sprites.render;
  }
  async getFishRenderByName(name: string): Promise<string> {
    const req = await this.getFishByName(name);
    return req.sprites.render;
  }
  async getFishIconById(id: number): Promise<string> {
    const req = await this.getFishById(id);
    return req.sprites.icon;
  }
  async getFishIconByName(name: string): Promise<string> {
    const req = await this.getFishByName(name);
    return req.sprites.icon;
  }
}
