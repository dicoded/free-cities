export enum MajorInjury {
  BROKEN_LEG = 'broken leg',
  BROKEN_ARM = 'broken arm',
}

export enum MinorInjury {
  BLACK_EYE = 'black eye',
  BRUISE = 'bruise',
  SPLIT_LIP = 'split lip',
}

interface IHealth {
  /** The body's overall health, on a scale from 0 to 100. */
  condition: number;

  /** Properties pertaining to the amount of damage the body's body has sustained. */
  damage: {
    /** How much damage the slave has taken recently. */
    shortTerm: number;

    /** How much damage the slave has taken over time. */
    longTerm: number;
  };

  /** The body's current level of exhaustion. */
  fatigue: number;

  /** Whether the body currently has an illness. */
  illness: number;

  /** Properties pertaining to any injuries the body has sustained. */
  injury: {
    /** Any major injuries the body has sustained. */
    major: MajorInjury | null;

    /** Any minor injuries the body has sustained. */
    minor: MinorInjury | null;
  };

  /** The body's overall health (`.condition` - `.damage.shortTerm` - `.damage.longTerm`.) */
  overall: number;
}

export default class Health implements IHealth {
  condition: number;

  damage: {
    shortTerm: number,
    longTerm: number,
  };

  fatigue: number;

  illness: number;

  injury: {
    minor: MinorInjury | null,
    major: MajorInjury | null,
  }

  constructor() {
    this.condition = 50;
    this.damage = {
      shortTerm: 0,
      longTerm: 0,
    };
    this.fatigue = 0;
    this.illness = 0;
    this.injury = {
      minor: null,
      major: null,
    };
  }

  get overall(): number {
    return this.condition - this.damage.shortTerm - this.damage.longTerm;
  }
}
