interface IName {
  /** The actor's first name. */
  first: string;

  /** The actor's middle name. */
  middle: string;

  /** The actor's last name. */
  last: string;
}

interface INames {
  /** Properties pertaining to the actor's birth name. */
  birth: IName;

  /** Properties pertaining to the actor's slave name. */
  slave: IName;
}

export default class Name implements INames {
  birth: IName;

  slave: IName;

  constructor() {
    this.birth = {
      first: '',
      middle: '',
      last: '',
    };
    this.slave = {
      first: '',
      middle: '',
      last: '',
    };
  }

  get first(): string {
    return this.slave.first || this.birth.first;
  }

  get middle(): string {
    return this.slave.middle || this.birth.middle;
  }

  get last(): string {
    return this.slave.last || this.birth.last;
  }

  get fullBirth(): string {
    return `${this.first}${this.middle ? ` ${this.middle}` : ''}${this.last ? ` ${this.last}` : ''}`;
  }

  get fullSlave(): string {
    return `${this.first}${this.middle ? ` ${this.middle}` : ''}${this.last ? ` ${this.last}` : ''}`;
  }

  /** Returns the actor's full name. If the actor does not have a slave name, returns the birth name instead. */
  get full(): string {
    return this.fullSlave || this.fullBirth;
  }

  get firstLastSlave(): string {
    return `${this.slave.first}${this.slave.last ? ` ${this.slave.last}` : ''}`;
  }

  get firstLastBirth(): string {
    return `${this.birth.first}${this.birth.last ? ` ${this.birth.last}` : ''}`;
  }

  get firstLast(): string {
    return this.firstLastSlave || this.firstLastBirth;
  }
}
