export enum TesticlesType {
  HUMAN = 'human',
  STERILE = 'sterile',
  DOG = 'dog',
  PIG = 'pig',
  HORSE = 'horse',
  COW = 'cow',
}

interface ITesticles {
  /** The diameter of the body's testicles, in centimeters.
   *
   * | **Range** | **Size**      |
   * |----------:|:--------------|
   * | *1*       | Tiny          |
   * | *2*       | Small         |
   * | *3*       | Average       |
   * | *4*       | Big           |
   * | *5*       | Huge          |
   * | *6*       | Gigantic      |
   * | *7*       | Massive       |
   * | *8*       | Titanic       |
   * | *9*       | Monstrous     |
   * | *10*      | Inhuman       |
   * | *11+*     | Hypertrophied |
   */
  size: number;

  /** The size of the body's scrotum in relation to its testicles.
   *
   * If `size` is greater and `0` and `scrotum` is not, the testes are internal.
   */
  scrotum: number;

  /** The type of testicles the body has. */
  type: TesticlesType;

  /** Whether the body has had a vasectomy. */
  vasectomy: boolean;
}

export default class Testicles implements ITesticles {
  size: number;

  scrotum: number;

  type: TesticlesType;

  vasectomy: false;

  constructor() {
    this.size = 3;
    this.scrotum = 1;
    this.type = TesticlesType.HUMAN;
    this.vasectomy = false;
  }
}
