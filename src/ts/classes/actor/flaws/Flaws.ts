import type Behavioral from './Behavioral';
import type Sexual from './Sexual';

interface IFlaws {
  /** Any behavioral flaws the actor has. */
  behavioral: Behavioral | null;

  /** Any sexual flaws the actor has. */
  sexual: Sexual | null;
}

export default class Flaws implements IFlaws {
  behavioral: Behavioral | null;

  sexual: Sexual | null;

  constructor() {
    this.behavioral = null;
    this.sexual = null;
  }
}
