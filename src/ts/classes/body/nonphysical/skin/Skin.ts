import { SkinColor } from 'util/color';

import Scars from './Scars';
import Markings from './Markings';

interface ISkin {
  /** The body's skin color. */
  color: SkinColor;

  /** Any scars the body might have. */
  scars: Scars;

  /** Any minor markings on the body's skin. */
  markings: Markings;
}

export default class Skin implements ISkin {
  color: SkinColor;

  scars: Scars;

  markings: Markings;

  constructor() {
    this.color = SkinColor.WHITE;
    this.scars = new Scars();
    this.markings = new Markings();
  }
}
