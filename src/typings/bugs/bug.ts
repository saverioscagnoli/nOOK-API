import { ICritterNames, ICritterPhrases, ICritterSprites } from "../common";
import { IBugAvailable } from "./available";
import { IBugSellPrices } from "./prices";

export interface IBug {
  /** Bug's ID, based on the encyclopedia */
  id: number;

  /** Bug's name in english */
  name: string;

  /** Bug's names in different languages */
  translations: ICritterNames;

  /** Bug's sell prices, (Tom Nook - Flick) */
  sell_prices: IBugSellPrices;

  /** Bug's availability infos */
  available: IBugAvailable;

  /** Bug's catchphrase when catched and museum's description */
  phrases: ICritterPhrases;

  /** Fish's sprites links */
  sprites: ICritterSprites;
}
