export enum Prostate {
    NORMAL = 'normal',
    OVERSTIMULATED = 'overstimulated',
    HYPERSTIMULATED = 'hyperstimulated',
}

interface IAnus {
  /** How much the anus can take, in cubic centimeters. */
  capacity: number;

  /** Whether the body has a prostate, and what type. */
  prostate: Prostate;

  /** Whether the body's anus is virginal. This does not reset. */
  virgin: boolean;
}

export default class Anus implements IAnus {
    capacity: number;

    prostate: Prostate;

    virgin: boolean;

    constructor() {
      this.capacity = 0;
      this.prostate = Prostate.NORMAL;
      this.virgin = true;
    }
}
