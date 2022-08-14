import { ICritterNames } from '../common';

export interface IArt {
  id: number;
  name: string;
  translations: ICritterNames;
  buy_price: number;
  sell_price: number;
  museum_description: string;
  canBeFake: boolean;
  sprite: string;
}
