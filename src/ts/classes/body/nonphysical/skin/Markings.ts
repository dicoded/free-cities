export enum MarkingsType {
  BEAUTY_MARK = 'beauty mark',
  BIRTHMARK = 'birthmark',
  FRECKLED = 'freckled',
  HEAVILY_FRECKLED = 'heavily freckled',
}

// TODO: expand this to include different parts of the body
interface IMarkings {
  /** Any markings on the body's face. */
  face: MarkingsType | null;

  /** Any markings on the body's shoulders. */
  shoulders: MarkingsType | null;

  /** Any markings on the body's chest. */
  chest: MarkingsType | null;

  /** Any markings on the body's belly. */
  belly: MarkingsType | null;

  /** Any markings on the body's crotch. */
  crotch: MarkingsType | null;

  /** Any markings on the body's arms. */
  arms: MarkingsType | null;

  /** Any markings on the body's legs. */
  legs: MarkingsType | null;
}

export default class Markings implements IMarkings {
  face: MarkingsType | null;

  shoulders: MarkingsType | null;

  chest: MarkingsType | null;

  belly: MarkingsType | null;

  crotch: MarkingsType | null;

  arms: MarkingsType | null;

  legs: MarkingsType | null;

  constructor() {
    this.face = null;
    this.shoulders = null;
    this.chest = null;
    this.belly = null;
    this.crotch = null;
    this.arms = null;
    this.legs = null;
  }
}
