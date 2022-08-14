import { Endpoints } from "../constants";
import { IArt } from "../typings";
import { BaseClient } from "./base";

export class ArtClient extends BaseClient {
  constructor() {
    super();
  }
  async getArtById(id: number): Promise<IArt> {
    return await this.api({ endpoint: Endpoints.Art, id });
  }
  async getArtByName(name: string): Promise<IArt> {
    return await this.api({ endpoint: Endpoints.Art, name });
  }
  async getArtRenderById(id: number): Promise<string> {
    const req = await this.getArtById(id);
    return req.sprite;
  }
  async getArtRenderByName(name: string): Promise<string> {
    const req = await this.getArtByName(name);
    return req.sprite;
  }
}
