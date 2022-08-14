export interface ICritterHemisphereData {
  /** From which to which months the critter is available */
  northern_months: string;
  southern_months: string;

  /** The months in which the fish is critter, included in an array */
  northern_months_array: number[];
  southern_months_array: number[];
}
