import Butt from './Butt';
import Crotch from './crotch/Crotch';
import Hips from './Hips';
import Legs from './Legs';
import Waist from './Waist';

interface ILowerBody {
  /** Properties pertaining to the body's waist. */
  waist: Waist;

  /** Properties pertaining to the body's hips. */
  hips: Hips;

  /** Properties pertaining to the body's genitalia. */
  crotch: Crotch;

  /** Properties pertaining to the body's butt.' */
  butt: Butt;

  /** Properties pertaining to the body's legs. */
  legs: Legs;
}

/** Anything on the body below the belt. */
export default class LowerBody implements ILowerBody {
  waist: Waist;

  hips: Hips;

  crotch: Crotch;

  butt: Butt;

  legs: Legs;

  constructor() {
    this.waist = new Waist();
    this.hips = new Hips();
    this.crotch = new Crotch();
    this.butt = new Butt();
    this.legs = new Legs();
  }
}
