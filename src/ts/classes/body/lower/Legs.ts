import { ILimb, LimbType } from '../Body';

interface ILegs {
  /** Properties pertaining to the body's left leg. */
  left: ILimb;

  /** Properties pertaining to the body's right leg. */
  right: ILimb;

  /** Whether the body's Achilles tendons has been clipped. */
  heeled: boolean;
}

export default class Legs implements ILegs {
  left: ILimb;

  right: ILimb;

  heeled: boolean;

  constructor() {
    this.left = {
      type: LimbType.NORMAL,
    };
    this.right = {
      type: LimbType.NORMAL,
    };
    this.heeled = false;
  }
}
