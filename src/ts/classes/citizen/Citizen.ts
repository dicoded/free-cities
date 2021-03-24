import { generateID } from '../../util/slave/generate';

import Actor from '../actor/Actor';

enum Class {
  LOWER = 'lower',
  MIDDLE = 'middle',
  UPPER = 'upper',
  ELITE = 'elite',
}

interface ICitizen {
  /** Which societal class the citizen belongs to. */
  class: Class;
}

export default class Citizen extends Actor implements ICitizen {
  class: Class;

  constructor() {
    super(generateID());

    this.class = Class.LOWER;
  }
}
