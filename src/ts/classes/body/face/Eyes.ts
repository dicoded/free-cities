import { BaseColor, EyeColor } from '../../../util/color';

export enum EyeType {
  NORMAL = 'normal',
  GLASS = 'glass',
  CYBERNETIC = 'cybernetic',
}

export interface IEye {
  /** Properties pertaining to the eye's color. */
  color: {
    /** The color of the eye's iris. */
    iris: EyeColor;

    /** The original color of the eye's iris, if different than the current color. */
    original: EyeColor;

    /** The color of the eye's pupil. */
    pupil: BaseColor;

    /** The color of the eye's sclera. */
    sclera: BaseColor;
  };

  /** Whether the eye is nearsighted. Mutually exclusive with `blind`. */
  nearsighted: boolean;

  /** Whether the eye is blind. Mutually exclusive with `nearsighted`. */
  blind: boolean;

  /** The type of eye. */
  type: EyeType;
}

interface IEyes {
  /** Properties pertaining to the body's left eye. */
  left: IEye;

  /** Properties pertaining to the body's right eye. */
  right: IEye;

  /** The colors of the body's eyes if both match, `null` otherwise. */
  both: null | EyeColor;
}

export default class Eyes implements IEyes {
  left: IEye;

  right: IEye;

  constructor() {
    this.left = {
      color: {
        iris: EyeColor.BROWN,
        original: EyeColor.BROWN,
        pupil: BaseColor.BLACK,
        sclera: BaseColor.WHITE,
      },
      nearsighted: false,
      blind: false,
      type: EyeType.NORMAL,
    };
    this.right = {
      color: {
        iris: EyeColor.BROWN,
        original: EyeColor.BROWN,
        pupil: BaseColor.BLACK,
        sclera: BaseColor.WHITE,
      },
      nearsighted: false,
      blind: false,
      type: EyeType.NORMAL,
    };
  }

  get both(): EyeColor | null {
    if (this.left.color?.iris === this.right.color?.iris) {
      return this.left.color.iris;
    }

    return null;
  }

  set both(color: EyeColor | null) {
    if (color !== null) {
      this.left.color.iris = color;
      this.right.color.iris = color;
    }
  }
}
