import { ICritterNames, ICritterSprites } from '../common';

export interface IVillager {
  /** Villager's id */
  id: number;

  /** Villager's name in english */
  name: string;

  /** Villager's name in different languages */
  translations: ICritterNames;

  /** Villager's gender (not assumed, Nintendo said it X) ) */
  sex: string;

  /** Villager's personality type */
  personality: string;

  /** Villager's birthday date */
  birthday: string;

  /** Villager's render and icon */
  sprites: ICritterSprites;

  /** Villager's animal species */
  species: string;

  /** Villager's catchphrase */
  catch_phrase: string;

  /** Villager's box color */
  name_color: string;
}
