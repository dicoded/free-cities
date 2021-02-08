import { ILimb, LimbType } from '../Body';

interface IArms {
  /** Properties pertaining to the body's left arm. */
  left: ILimb;

  /** Properties pertaining to the body's right arm. */
  right: ILimb;
}

export default class Arms implements IArms {
  left: ILimb;

  right: ILimb;

  constructor() {
    this.left = {
      type: LimbType.NORMAL,
    };
    this.right = {
      type: LimbType.NORMAL,
    };
  }
}
