import Arms from './Arms';
import Belly from './Belly';
import Chest from './Chest';
import Face from '../face/Face';
import Hair from './Hairs';
import Shoulders from './Shoulders';

interface IUpperBody {
  /** Properties pertaining to the body's hair. */
  hair: Hair;

  /** Properties pertaining to the body's face. */
  face: Face;

  /** Properties pertaining to the body's shoulders. */
  shoulders: Shoulders;

  /** Properties pertaining to the body's chest. */
  chest: Chest;

  /** Properties pertaining to the body's belly. */
  belly: Belly;

  /** Properties pertaining to the body's arms. */
  arms: Arms;
}

/** Anything on the body waist-up. */
export default class UpperBody implements IUpperBody {
  hair: Hair;

  face: Face;

  shoulders: Shoulders;

  chest: Chest;

  belly: Belly;

  arms: Arms;

  constructor() {
    this.hair = new Hair();
    this.face = new Face();
    this.shoulders = new Shoulders();
    this.chest = new Chest();
    this.belly = new Belly();
    this.arms = new Arms();
  }
}
