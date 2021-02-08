export enum Piercing {
  LIGHT = 'light',
  HEAVY = 'heavy',
}

export enum SmartPiercing {
  LIGHT = 'light',
  HEAVY = 'heavy',
  SMART = 'smart',
}

// TODO: put this to use
export enum SmartPiercingSetting {
  NONE = 'none',
  ALL = 'all',
  DEFAULT = 'no default setting',
  WOMEN = 'women',
  MEN = 'men',
  VANILLA = 'vanilla',
  ORAL = 'oral',
  ANAL = 'anal',
  BOOBS = 'boobs',
  SUBMISSIVE = 'submissive',
  HUMILIATION = 'humiliation',
  PREGNANCY = 'pregnancy',
  DOM = 'dom',
  MASOCHIST = 'masochist',
  SADIST = 'sadist',
}

interface IPiercings {
  /** Any tattoos on the actor's ear. */
  ear: Piercing | null;

  /** Any tattoos on the actor's nose. */
  nose: Piercing | null;

  /** Any tattoos on the actor's eyebrows. */
  eyebrow: Piercing | null;

  /** Any tattoos in the actor's lips. */
  lips: Piercing | null;

  /** Any tattoos on the actor's tongue. */
  tongue: Piercing | null;

  /** Any tattoos on the actor's nipples. */
  nipples: SmartPiercing | null;

  /** Any tattoos on the actor's areolae. */
  areolae: Piercing | null;

  /** Any tattoos on the actor's naval. */
  naval: Piercing | null;

  /** Any tattoos on the actor's labia. */
  vagina: Piercing | null;

  /** Any tattoos on the actor's clit. */
  clit: SmartPiercing | null;

  /** Any tattoos on the actor's dick. */
  dick: Piercing | null;

  /** Any tattoos around the actor's anus. */
  anus: SmartPiercing | null;

  /** Whether the actor has two rows of piercings running up its back. */
  corset: boolean | null;
}

export default class Piercings implements IPiercings {
  ear: Piercing | null;

  nose: Piercing | null;

  eyebrow: Piercing | null;

  lips: Piercing | null;

  tongue: Piercing | null;

  nipples: SmartPiercing | null;

  areolae: Piercing | null;

  naval: Piercing | null;

  vagina: Piercing | null;

  clit: SmartPiercing | null;

  dick: Piercing | null;

  anus: SmartPiercing | null;

  corset: boolean | null;

  constructor() {
    this.ear = null;
    this.nose = null;
    this.eyebrow = null;
    this.lips = null;
    this.tongue = null;
    this.nipples = null;
    this.areolae = null;
    this.naval = null;
    this.vagina = null;
    this.clit = null;
    this.dick = null;
    this.anus = null;
    this.corset = null;
  }
}
