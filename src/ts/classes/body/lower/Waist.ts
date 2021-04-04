interface IWaist {
  /**
   * The size of the body's waist.
   * TODO: redo to take males into account
   *
   * | **Range**   | **Size**     |
   * |------------:|:-------------|
   * | *96+*       | Masculine    |
   * | *95 - 41*   | Ugly         |
   * | *40 - 11*   | Unattractive |
   * | *10 - -10*  | Average      |
   * | *-11 - -40* | Feminine     |
   * | *-40 - -95* | Hourglass    |
   * | *-96-*      | Absurd       |
   */
  size: number;
}

export default class Waist implements IWaist {
  size: number;

  constructor() {
    this.size = 0;
  }
}
