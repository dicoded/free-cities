interface IFamily {
  /** The ID of the actor's father. Unknown if `0`. */
  father: number;

  /** The ID of the actor's mother. Unknown if `0`. */
  mother: number;

  /** A list of the IDs of the actor's brothers. */
  brothers: Set<number>;

  /** A list of the IDs of the actor's sisters. */
  sisters: Set<number>;

  /** A list of the IDs of the actor's sons. */
  sons: Set<number>;

  /** A list of the IDs of the actor's daughters. */
  daughters: Set<number>;
}

export default class Family implements IFamily {
  father: number;

  mother: number;

  brothers: Set<number>;

  sisters: Set<number>;

  sons: Set<number>;

  daughters: Set<number>;

  constructor() {
    this.father = 0;
    this.mother = 0;
    this.brothers = new Set<number>();
    this.sisters = new Set<number>();
    this.sons = new Set<number>();
    this.daughters = new Set<number>();
  }
}
