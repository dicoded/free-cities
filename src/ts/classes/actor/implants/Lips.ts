interface ILipImplants {
  /**
   * How large the body's lip implants are.
   *
   * Added to `.lips` to achieve total.
   */
  size: number | null;
}

export default class LipImplants implements ILipImplants {
  size: number | null;

  constructor() {
    this.size = null;
  }
}
