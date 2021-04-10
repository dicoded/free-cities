import Piercings from './Piercings';
import Tattoos from './Tattoos';

export enum Eyewear {
  GLASSES = 'glasses',
  BLURRING_GLASSES = 'blurring glasses',
  CORRECTIVE_GLASSES = 'corrective glasses',
  BLURRING_CONTACTS = 'blurring contacts',
  CORRECTIVE_CONTACTS = 'corrective contacts',
}

export enum Earwear {
  HEARING_AIDS = 'hearing aids',
  MUFFLING_EAR_PLUGS = 'muffling ear plugs',
  DEAFENING_EAR_PLUGS = 'deafening ear plugs',
}

export enum BellyWear {
  SMALL_EMPATHY_BELLY = 'a small empathy belly',
  MEDIUM_EMPATHY_BELLY = 'a medium empathy belly',
  LARGE_EMPATHY_BELLY = 'a large empathy belly',
  HUGE_EMPATHY_BELLY = 'a huge empathy belly',
  CORSET = 'a corset',
  EXTREME_CORSET = 'an extreme corset',
  SUPPORT_BAND = 'a support band',
}

export enum Makeup {
  NONE = 'none',
  MINIMAL = 'minimal',
  LUXURIOUS = 'expensive, luxurious',
  COLOR_COORDINATED_HAIR = 'color-coordinated with hair',
  HEAVY = 'heavy',
  NEON = 'neon',
  COLOR_COORDINATED_NEON = 'color-coordinated neon',
  METALLIC = 'metallic',
  COLOR_COORDINATED_METALLIC = 'color-coordinated metallic',
}

export enum Nails {
  NEAT = 'neatly clipped',
  ELEGANT = 'long and elegant',
  COLOR_COORDINATED_HAIR = 'color-coordinated with hair',
  CLAWS = 'sharp and claw-like',
  GLITTERY = 'bright and glittery',
  VERY_LONG = 'very long and garish',
  NEON = 'neon',
  COLOR_COORDINATED_NEON = 'color-coordinated neon',
  METALLIC = 'metallic',
  COLOR_COORDINATED_METALLIC = 'color-coordinated metallic',
}

interface IClothing {
  /** Any headwear the slave is wearing. */
  head: string | null;

  /** Any chest clothing the slave is wearing. */
  chest: string | null;

  /** Any armwear the slave is wearing. */
  arms: string | null;

  /** Any handwear the slave is wearing. */
  hands: string | null;

  /** Any crotch clothing the slave is wearing. */
  crotch: string | null;

  /** Any legwear the slave is wearing. */
  legs: string | null;

  /** Any footwear the slave is wearing. */
  feet: string | null;
}

interface IAccessories {
  /** Properties pertaining to any clothing the slave is wearing. */
  clothing: IClothing | null;

  /** Any eyewear the slave is wearing. */
  eyewear: Eyewear | null;

  /** Any earwear the slave is wearing. */
  earwear: Earwear | null;

  /** Whether the slave has an implant inside their inner ear. */
  earImplant: boolean;

  /** Properties pertaining to any tattoos the slave has. */
  tattoos: Tattoos | null;

  /** Properties pertaining to any piercings the slave has. */
  piercings: Piercings | null;

  /** Any accessories the slave has on their nipples. */
  nipples: string | null;

  /** Any accessories the slave is wearing on their stomach. */
  bellyWear: BellyWear | null;

  /** The type of makeup the slave is wearing. */
  makeup: Makeup | null;

  /** The way the slave's fingernails are styled. */
  nails: Nails | null;

  // TODO:
  brand: string | null;
}

export default class Accessories implements IAccessories {
  brand: string | null;

  clothing: IClothing | null;

  earImplant: boolean;

  earwear: Earwear | null;

  eyewear: Eyewear | null;

  makeup: Makeup | null;

  nails: Nails | null;

  nipples: string | null;

  bellyWear: BellyWear | null;

  piercings: Piercings | null;

  tattoos: Tattoos | null;

  constructor() {
    this.brand = null;
    this.clothing = null;
    this.earImplant = false;
    this.earwear = null;
    this.eyewear = null;
    this.makeup = null;
    this.nails = null;
    this.nipples = null;
    this.bellyWear = null;
    this.piercings = null;
    this.tattoos = null;
  }
}
