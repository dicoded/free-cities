export enum EggsType {
  HUMAN = 'human',
  DOG = 'dog',
  PIG = 'pig',
  HORSE = 'horse',
  COW = 'cow',
}

interface IOvaries {
  /** How old the body's ovaries are. */
  age: number;

  /** The type of eggs the ovaries produce. */
  type: EggsType;
}

export default class Ovaries implements IOvaries {
  age: number;

  type: EggsType;

  constructor() {
    this.age = 0;
    this.type = EggsType.HUMAN;
  }
}
