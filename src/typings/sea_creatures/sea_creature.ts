import { ICritterNames, ICritterPhrases, ICritterSprites } from "../common";
import { ISeaCreatureAvailable } from "./available";

export interface ISeaCreature {
  /** Sea C. ID, based on the encyclopedia */
  id: number;

  /** Sea C.'s name in english */
  name: string;

  /** Sea C.'s names in differt languages */
  translations: ICritterNames;

  /** Sea C.'s shadow size in-game */
  shadow_size: number;

  /** Sea C.'s sell price */
  price: number;

  /** Sea C's moving speed */
  speed: string;

  /** Sea C.'s availability infos */
  available: ISeaCreatureAvailable;

  /** Sea C.'s catchphrase when catched and museum's description */
  phrases: ICritterPhrases;

  /** Sea C.'s sprites links */
  sprites: ICritterSprites;
}
