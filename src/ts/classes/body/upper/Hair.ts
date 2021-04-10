import { HairColor } from '@util/color';

export enum HairStyle {
  SHAVED = 'shaved',
  BUZZCUT = 'buzzcut',
  TRIMMED = 'trimmed',
  AFRO = 'afro',
  CORNROWS = 'cornrows',
  BUN = 'bun',
  NEAT = 'neat',
  STRIP = 'strip',
  TAILS = 'tails',
  UP = 'up',
  PONYTAIL = 'ponytail',
  BRAIDED = 'braided',
  DREADLOCKS = 'dreadlocks',
  PERMED = 'permed',
  CURLED = 'curled',
  LUXURIOUS = 'luxurious',
  BALD = 'bald',
  MESSY_BUN = 'messy bun',
  MESSY = 'messy',
}

interface IHair {
  /** The hair's original color. */
  original: HairColor;

  /** The hair's color. */
  color: HairColor;

  /** The hair's length, in centimeters. */
  length: number;

  /** The hair's style. */
  style: HairStyle;
}

export default class Hair implements IHair {
  original: HairColor;

  color: HairColor;

  length: number;

  style: HairStyle;

  constructor() {
    this.original = HairColor.BLACK;
    this.color = HairColor.BLACK;
    this.length = 0;
    this.style = HairStyle.NEAT;
  }
}
