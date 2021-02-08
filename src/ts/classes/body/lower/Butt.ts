interface IButt {
  /**
   * The size of the body's butt, in cubic centimeters.
   *
   * | **Threshold** | **Size**        |
   * |--------------:|:----------------|
   * | *0*           | Flat            |
   * | *650*         | Small           |
   * | *800*         | Plump           |
   * | *950*         | Big bubble butt |
   * | *1,200*       | Huge            |
   * | *1,300*       | Enormous        |
   * | *1,400*       | Gigantic        |
   * | *1,550*       | Ridiculous      |
   * | *1,700*       | Immense         |
   * | *1,900*       | Inhuman         |
   */
  size: number;

  /** The type and size of the body's butt implants, if any. */
  implant: number | null;
}

export default class Butt implements IButt {
  size: number;

  implant: number | null;

  constructor() {
    this.size = 850;
    this.implant = null;
  }
}
