interface IName {
  /** The actor's first name. */
  first: string;

  /** The actor's middle name. */
  middle: string;

  /** The actor's last name. */
  last: string;

  /** The actor's full name. */
  full: () => string | null;
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
      full(): string | null {
        return `${this.first}${this.middle ? ` ${this.middle}` : ''}${this.last ? ` ${this.last}` : ''}` || null;
      },
    };
    this.slave = {
      first: '',
      middle: '',
      last: '',
      full(): string | null {
        return `${this.first}${this.middle ? ` ${this.middle}` : ''}${this.last ? ` ${this.last}` : ''}` || null;
      },
    };
  }

  get first(): string {
    return this.slave.first ?? this.birth.first;
  }

  get middle(): string {
    return this.slave.middle ?? this.birth.middle;
  }

  get last(): string {
    return this.slave.last ?? this.birth.last;
  }

  /** Returns the actor's full name. If the actor does not have a slave name, returns the birth name instead. */
  get full(): string | null {
    let name: string;

    if (this.slave.first) {
      name = this.slave.first;

      if (this.slave.middle) {
        name += ` ${this.slave.middle}`;
      }
      if (this.slave.last) {
        name += ` ${this.slave.last}`;
      }

      return name || null;
    }

    name = this.birth.first;

    if (this.birth.middle) {
      name += ` ${this.birth.middle}`;
    }
    if (this.birth.last) {
      name += ` ${this.birth.last}`;
    }

    return name || null;
  }

  get firstLast(): string {
    let name: string;

    if (this.slave.first) {
      name = this.slave.first;

      if (this.slave.last) {
        name += ` ${this.slave.last}`;
      }

      return name;
    }

    name = this.birth.first;

    if (this.birth.last) {
      name += ` ${this.birth.last}`;
    }

    return name;
  }
}
