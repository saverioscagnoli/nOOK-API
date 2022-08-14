import { ICritterHemisphereData, ICritterTime } from "../common";

export interface ISeaCreatureAvailable {
  /** Availability for both northern and southern hemispheres */
  hemisphere_data: ICritterHemisphereData;

  /** Sea C.'s availability infos based on time */
  time: ICritterTime;
}
