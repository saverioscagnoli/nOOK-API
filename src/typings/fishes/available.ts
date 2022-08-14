import { ICritterHemisphereData } from "../common";
import { ICritterTime } from "../common";

export interface IFishAvailable {
  /** Availability for both northern and southern hemispheres */
  hemisphere_data: ICritterHemisphereData;

  /** Fish's availability infos based on time */
  time: ICritterTime;

  /** Fish's location (Where it can be catched) */
  spot: string;

  /** Fish's rarity */
  rarity: string;
}
