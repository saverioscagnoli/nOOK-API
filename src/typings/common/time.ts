export interface ICritterTime {
  /** From which to which hour the critter is available during the day */
  time_string: string;

  /** The hours in which the critter is available during the day, included in an array */
  time_array: number[];

  /** Booleans that represent the availability of the critter during the day / year */
  all_day: boolean;
  all_year: boolean;
}
