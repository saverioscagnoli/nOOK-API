import { IFishAvailable } from './available';
import { ICritterNames } from '../common';
import { ICritterPhrases } from '../common';
import { IFishSellPrices } from './prices';
import { ICritterSprites } from '../common';

export interface IFish {
  /** Fish's ID, based on the encyclopedia */
  id: number;

  /** Fish's name in english */
  name: string;

  /** Fish's names in differt languages */
  translations: ICritterNames;

  /** Fish's shadow size in-game */
  shadow_size: number;

  /** Fish's sell prices, (Tom Nook - CJ) */
  sell_prices: IFishSellPrices;

  /** Fish's availability infos */
  available: IFishAvailable;

  /** Fish's catchphrase when catched and museum's description */
  phrases: ICritterPhrases;

  /** Fish's sprites links */
  sprites: ICritterSprites;
}
