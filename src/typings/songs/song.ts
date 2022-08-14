import { ICritterNames } from "../common";

export interface ISong {
  /** Song's id */
  id: number;

  /** Song's name in english */
  name: string;

  /** Song's names in different languages */
  translations: ICritterNames;

  /** Song's biuying and selling prices */
  buy_price: number;
  sell_price: number;

  /** Song's mp3 file */
  mp3: string;

  /** Song's sprite */
  icon: string;
}
