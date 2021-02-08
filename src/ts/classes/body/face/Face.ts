import Eyes from './Eyes';
import Ears from './Ears';
import Mouth from './Mouth';
import Nose from './Nose';

export enum FaceShape {
  NORMAL = 'normal',
  CUTE = 'cute',
  SENSUAL = 'sensual',
  EXOTIC = 'exotic',
  ANDROGYNOUS = 'androgynous',
  MASCULINE = 'masculine',
}

interface IFace {
  /** Properties pertaining to the body's eyes. */
  eyes: Eyes;

  /** Properties pertaining to the body's ears. */
  ears: Ears;

  /** Properties pertaining to the body's nose. */
  nose: Nose;

  /** Properties pertaining to the body's mouth. */
  mouth: Mouth;

  /**
   * The body's physical facial beauty.
   *
   * | **Range**   | **Description** |
   * |------------:|:----------------|
   * | *-96-*      | Very ugly       |
   * | *-95 - -41* | Ugly            |
   * | *-40 - -11* | Unattractive    |
   * | *-10 - 10*  | Attractive      |
   * | *11 - 40*   | Very pretty     |
   * | *41 - 95*   | Gorgeous        |
   * | *96+*       | Mind blowing    |
   */
  beauty: number;

  /**
   * The type of face the body has.
   *
   * Any values other than the defaults will be treated the same as `"normal"`.
   */
  type: FaceShape;
}

export default class Face implements IFace {
  eyes: Eyes;

  ears: Ears;

  nose: Nose;

  mouth: Mouth;

  beauty: number;

  type: FaceShape;

  constructor() {
    this.eyes = new Eyes();
    this.ears = new Ears();
    this.nose = new Nose();
    this.mouth = new Mouth();
    this.beauty = 0;
    this.type = FaceShape.NORMAL;
  }
}
