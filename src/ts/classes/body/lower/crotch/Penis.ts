import Testicles from './Testicles';

interface IPenis {
  /**
   * The length of the body's penis, in centimeters.
   *
   * | **Range** | **Size**      |
   * |----------:|:--------------|
   * | *1-7*     | Tiny          |
   * | *8-11*    | Small         |
   * | *12-14*   | Average       |
   * | *15-18*   | Big           |
   * | *19-24*   | Huge          |
   * | *25-30*   | Gigantic      |
   * | *31-36*   | Massive       |
   * | *37-42*   | Titanic       |
   * | *43-50*   | Monstrous     |
   * | *51-60*   | Inhuman       |
   * | *61+*     | Hypertrophied |
   */
  length: number;

  /** The girth of the body's penis, in centimeters.
   *
   * | **Range** | **Size** |
   * |----------:|:---------|
   * | *1-6*     | Skinny   |
   * | *7-10*    | Thin     |
   * | *11-14*   | Average  |
   * | *15-17*   | Thick    |
   * | *18-22*   | Fat      |
   * | *23-26*   | Huge     |
   */
  girth: number;

  /** Properties pertaining to the body's testicles. */
  balls: Testicles;
}

export default class Penis implements IPenis {
  length: number;

  girth: number;

  balls: Testicles;

  constructor() {
    this.length = 13;
    this.girth = 13;
    this.balls = new Testicles();
  }
}
