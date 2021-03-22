export enum EarShape {
  DAMAGED = 'damaged',
  NORMAL = 'normal',
  POINTY = 'pointy',
  ELVEN = 'elven',
  USHI = 'ushi',
}

interface IEar {
  /** The shape of the body's ear. */
  shape: EarShape | null;

  /** Whether the ear is hard-of-hearing. Mutually exclusive with `deaf`. */
  hardOfHearing: boolean;

  /** Whether the ear is deaf. Mutually exclusive with `hardOfHearing`. */
  deaf: boolean;
}

interface IEars {
  /** Properties pertaining to the body's left ear. */
  left: IEar;

  /** Properties pertaining to the body's right ear. */
  right: IEar;
}

export default class Ears implements IEars {
  left: IEar;

  right: IEar;

  constructor() {
    this.left = {
      shape: EarShape.NORMAL,
      hardOfHearing: false,
      deaf: false,
    };
    this.right = {
      shape: EarShape.NORMAL,
      hardOfHearing: false,
      deaf: false,
    };
  }

  get both(): IEar | null {
    if (this.left.shape === this.right.shape
      && this.left.hardOfHearing === this.right.hardOfHearing
      && this.left.deaf === this.right.deaf
    ) return this.left;

    return null;
  }

  set deaf(val: boolean) {
    this.left.deaf = val;
    this.right.deaf = val;

    this.left.hardOfHearing = !val;
    this.right.hardOfHearing = !val;
  }

  get deaf(): boolean {
    return this.left.deaf && this.right.deaf;
  }

  set hardOfHearing(val: boolean) {
    this.left.hardOfHearing = val;
    this.right.hardOfHearing = val;

    this.left.deaf = !val;
    this.right.deaf = !val;
  }

  get hardOfHearing(): boolean {
    return this.left.hardOfHearing && this.right.hardOfHearing;
  }
}
