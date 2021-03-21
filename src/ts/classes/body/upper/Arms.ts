import { ILimb, LimbType } from '../Body';

interface IArms {
  /** Properties pertaining to the body's left arm. */
  left: ILimb | null;

  /** Properties pertaining to the body's right arm. */
  right: ILimb | null;
}

export default class Arms implements IArms {
  left: ILimb | null;

  right: ILimb | null;

  constructor() {
    this.left = {
      type: LimbType.NORMAL,
    };
    this.right = {
      type: LimbType.NORMAL,
    };
  }
}
