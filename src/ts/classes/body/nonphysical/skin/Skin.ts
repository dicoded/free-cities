import Scars from './Scars';
import Markings from './Markings';
import Tan from './Tan';

import { SkinColor } from '@util/color';

export function getMelaninLevel(color: SkinColor): number {
  const melanin = {
    'pure black': 25,
    ebony: 24,
    black: 23,
    'dark brown': 22,
    brown: 21,
    'light brown': 20,
    'dark beige': 19,
    beige: 18,
    'light beige': 17,
    dark: 16,
    'dark olive': 15,
    bronze: 14,
    olive: 13,
    tan: 12,
    'light olive': 11,
    light: 10,
    fair: 9,
    'very fair': 8,
    'extremely fair': 7,
    pale: 6,
    'very pale': 5,
    'extremely pale': 4,
    white: 3,
    ivory: 2,
    'pure white': 1,
  };

  return melanin[color];
}

interface ISkin {
  /** The body's skin color. */
  color: SkinColor;

  /** Any scars the body might have. */
  scars: Scars;

  /** Any minor markings on the body's skin. */
  markings: Markings;

  /** Any tan the body's skin might have. */
  tan: Tan | null;
}

export default class Skin implements ISkin {
  color: SkinColor;

  scars: Scars;

  markings: Markings;

  tan: Tan | null;

  constructor() {
    this.color = SkinColor.WHITE;
    this.scars = new Scars();
    this.markings = new Markings();
    this.tan = null;
  }

  // TODO: this might need to be reworked
  get freckled() {
    return this.markings.face?.includes('freckled');
  }
}
