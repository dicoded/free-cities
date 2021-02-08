interface INose {
  /** Whether the body has a sense of smell. */
  smell: boolean;
}

export default class Nose implements INose {
  smell: boolean;

  constructor() {
    this.smell = true;
  }
}
