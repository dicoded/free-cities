export enum Tattoo {
  TRIBAL_PATTERNS = 'tribal patterns',
  FLOWERS = 'flowers',
  SCENES = 'scenes',
  ASIAN_ART = 'Asian art',
  DEGRADATION = 'degradation',
  COUNTING = 'counting',
  ADVERTISEMENTS = 'advertisements',
  RUDE_WORDS = 'rude words',
  BOVINE_PATTERNS = 'bovine patterns',
  SACRAMENT = 'sacrament',
  SACRILEGE = 'Sacrilege',
  POSSESSIVE = 'Possessive',
  PATERNALIST = 'Paternalist',
  MAKEUP = 'permanent makeup',
}

export enum BellyTattoo {
  HEART = 'a heart',
  STAR = 'a star',
  BUTTERFLY = 'a butterfly',
}

interface ITattoos {
  /** Any tattoos on the actor's face. */
  face: Tattoo | null;

  /** Any tattoos on the actor's lips. */
  lips: Tattoo | null;

  /** Any tattoos on the actor's chest. */
  chest: Tattoo | null;

  /** Any tattoos on the actor's butt. */
  butt: Tattoo | null;

  /** Any tattoos on and around the actor's vagina, if present. */
  vagina: Tattoo | null;

  /** Any tattoos on and around the actor's penis, if present. */
  dick: Tattoo | null;

  /** Any tattoos around the actor's anus. */
  anus: Tattoo | null;

  /** Any tattoos on the actor's shoulders. */
  shoulders: Tattoo | null;

  /** Any tattoos on the actor's arms. */
  arms: Tattoo | null;

  /** Any tattoos on the actor's legs. */
  legs: Tattoo | null;

  /** Any tattoos on the actor's back. */
  back: Tattoo | null;

  /** A belly tattoo that is only fully visible when the actor's belly is distended. */
  belly: BellyTattoo | null;

  /** Any tramp stamp the actor has. */
  stamp: Tattoo | null;

  /** Whether the actor has tattoos denoting how many abortions it has had.
   * `null` means no tattoo, numbers denotes count.
   */
  abortion: number | null;

  /** Whether the actor has tattoos denoting how many times it's given birth.
   * `null` means no tattoo, numbers denotes count.
   */
  birth: number | null;
}

export default class Tattoos implements ITattoos {
  face: Tattoo | null;

  lips: Tattoo | null;

  chest: Tattoo | null;

  butt: Tattoo | null;

  vagina: Tattoo | null;

  dick: Tattoo | null;

  anus: Tattoo | null;

  shoulders: Tattoo | null;

  arms: Tattoo | null;

  legs: Tattoo | null;

  back: Tattoo | null;

  belly: BellyTattoo | null;

  stamp: Tattoo | null;

  abortion: number | null;

  birth: number | null;

  constructor() {
    this.face = null;
    this.lips = null;
    this.chest = null;
    this.butt = null;
    this.vagina = null;
    this.dick = null;
    this.anus = null;
    this.shoulders = null;
    this.arms = null;
    this.legs = null;
    this.back = null;
    this.belly = null;
    this.stamp = null;
    this.abortion = null;
    this.birth = null;
  }
}
