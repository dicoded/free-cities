import Ovaries from './Ovaries';

export enum LabiaType {
  MINIMAL = 'minimal',
  BIG = 'big',
  HUGE = 'huge',
  DANGLING = 'dangling',
}

interface IVagina {
  /** How much the vagina can take, in cubic centimeters. */
  capacity: number;

  /**
   * How large the body's clitoris is, in centimeters.
   *
   * | **Range** | **Size**            |
   * |----------:|:--------------------|
   * | *1*       | Normal              |
   * | *2*       | Big                 |
   * | *3-4*     | Large               |
   * | *5-6*     | Huge                |
   * | *7-10*    | Enormous            |
   * | *11-15*   | Pseudophallus       |
   * | *16-21*   | Large Pseudophallus |
   * | *22+*     | Gigantic            |
   */
  clitoris: number;

  /** The type of labia the body has. */
  labia: LabiaType;

  /** Properties pertaining to the body's ovaries. */
  ovaries: Ovaries;

  /** Whether the body's vagina is virginal. Can be reset with certain surgeries.
   *
   * Use `.isTrueVirgin` to check whether the body is a true virgin, or `.counter.vaginal` to check whether the body's
   * vagina has ever been used.
   */
  isVirgin: boolean;
}

export default class Vagina implements IVagina {
  capacity: number;

  clitoris: number;

  labia: LabiaType;

  ovaries: Ovaries;

  virgin: boolean;

  constructor() {
    this.capacity = 0;
    this.clitoris = 1;
    this.labia = LabiaType.MINIMAL;
    this.ovaries = new Ovaries();
    this.virgin = true;
  }

  get isVirgin(): boolean {
    return this.virgin;
  }

  set isVirgin(value: boolean) {
    this.virgin = value;
  }
}
