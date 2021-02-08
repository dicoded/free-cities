import Alteration from '../Body';

export enum HipSize {
  VERY_NARROW = 'very narrow',
  NARROW = 'narrow',
  NORMAL = 'normal',
  WIDE = 'wide',
  VERY_WIDE = 'very wide',
  INHUMANLY_WIDE = 'inhumanly wide',
}

interface IHips {
  /**
   * How wide the body's hips are.
   *
   * One of `very narrow`, `narrow`, `normal`, ` wide`, `very wide, or `inhumanly wide`.
   */
  size: HipSize;

  /** Whether the body has had their hips surgically altered and how. */
  alteration: Alteration | null;
}

export default class Hips implements IHips {
  size: HipSize;

  alteration: Alteration | null;

  constructor() {
    this.size = HipSize.NORMAL;
    this.alteration = null;
  }
}
