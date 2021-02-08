import CountType from './CountType';

interface ICount {
  /** How many times the body has given the act. */
  given: CountType;
  /** How many times the body has received the act. */
  received: CountType;
}

export default class Count implements ICount {
  given: CountType;

  received: CountType;

  constructor() {
    this.given = new CountType();
    this.received = new CountType();
  }
}
