export enum RivalryType {
  /** Dislikes the target. */
  DISLIKES,
  /** Rivals with the target. */
  RIVAL,
  /** Bitterly hates the target. */
  BITTER,
}

interface IRivalry {
  /**
   * The ID of the actor to whom the rivalry applies.
   *
   * `0` is none.
   */
  target: number;

  /** The type of rivalry. */
  type: RivalryType;
}

export default class Rivalry implements IRivalry {
  target: number

  type: RivalryType;

  constructor() {
    this.target = 0;
    this.type = RivalryType.DISLIKES;
  }
}
