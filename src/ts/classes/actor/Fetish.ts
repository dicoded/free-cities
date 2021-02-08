export enum FetishType {
  SUBMISSIVE = 'submissive',
  CUMSLUT = 'cumslut',
  HUMILIATION = 'humiliation',
  BUTTSLUT = 'buttslut',
  BOOBS = 'boobs',
  SADIST = 'sadist',
  MASOCHIST = 'masochist',
  DOM = 'dom',
  PREGNANCY = 'pregnancy',
}

interface IFetish {
  /** The type of fetish the actor has. */
  type: FetishType;

  /** Whether the player knows the actor's fetish. */
  known: boolean;

  /** How strong the actor's fetish is. */
  strength: number;
}

export default class Fetish implements IFetish {
  type: FetishType;

  known: boolean;

  strength: number;

  constructor() {
    this.type = FetishType.BOOBS;
    this.known = false;
    this.strength = 0;
  }
}
