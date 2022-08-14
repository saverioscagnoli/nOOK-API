import { ICritterHemisphereData, ICritterTime } from '../common';

export interface IBugAvailable {
  /** Availability for both northern and southern hemispheres */
  hemisphere_data: ICritterHemisphereData;

  /** Bug's availability infos based on time */
  time: ICritterTime;

  /** Bug's location (Where it can be catched) */
  spot: string;

  /** Bug's rarity */
  rarity: string;
}
