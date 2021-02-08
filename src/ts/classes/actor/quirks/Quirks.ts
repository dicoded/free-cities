import Behavioral from './Behavioral';
import Sexual from './Sexual';

interface IQuirks {
  /** Any behavioral quirks the actor has. */
  behavioral: Behavioral | null;

  /** Any sexual quirks the actor has. */
  sexual: Sexual | null;
}

export default class Quirks implements IQuirks {
  behavioral: Behavioral | null;

  sexual: Sexual | null;

  constructor() {
    this.behavioral = null;
    this.sexual = null;
  }
}
