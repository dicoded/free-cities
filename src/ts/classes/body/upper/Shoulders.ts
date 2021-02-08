import Alteration from '../Body';

export enum ShouldersType {
  VERY_NARROW = 'very narrow',
  NARROW = 'narrow',
  FEMININE = 'feminine',
  BROAD = 'broad',
  VERY_BROAD = 'very broad',
}

interface IShoulders {
  /** The type of shoulders the body has. */
  type: ShouldersType;

  /** Whether the body has had their shoulders surgically altered and how. */
  alteration: Alteration | null;
}

export default class Shoulder implements IShoulders {
  type: ShouldersType;

  alteration: Alteration | null;

  constructor() {
    this.type = ShouldersType.FEMININE;
    this.alteration = null;
  }
}
