import { Endpoints } from "../constants";
import { IBug } from "../typings/bugs/bug";
import { BaseClient } from "./base";

export class BugClient extends BaseClient {
  constructor() {
    super();
  }
  async getBugById(id: number): Promise<IBug> {
    return await this.api({ endpoint: Endpoints.Bugs, id });
  }
  async getBugByName(name: string): Promise<IBug> {
    return await this.api({ endpoint: Endpoints.Bugs, name });
  }
  async getBugRenderById(id: number): Promise<string> {
    const req = await this.getBugById(id);
    return req.sprites.render;
  }
  async getBugRenderByName(name: string): Promise<string> {
    const req = await this.getBugByName(name);
    return req.sprites.render;
  }
  async getBugIconById(id: number): Promise<string> {
    const req = await this.getBugById(id);
    return req.sprites.icon;
  }
  async getBugIconByName(name: string): Promise<string> {
    const req = await this.getBugByName(name);
    return req.sprites.icon;
  }
}
