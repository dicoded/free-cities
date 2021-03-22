import Actor from '../actor/Actor';
import Skills from './Skills';
import Job from './assignment';

interface ISlave extends Actor {
  /**
   * How devoted to you the slave is.
   *
   * | **Range**   | **Description** |
   * |------------:|:----------------|
   * | *-96-*      | Hate-filled     |
   * | *-95 - -51* | Hateful         |
   * | *-50 - -21* | Reluctant       |
   * | *-20 - 20*  | Careful         |
   * | *21 - 50*   | Accepting       |
   * | *51 - 95*   | Devoted         |
   * | *96+*       | Worshipful      |
   */
  devotion: number;

  /**
   * How trusting of you the slave is.
   *
   * | **Range**   | **Description**     |
   * |------------:|:--------------------|
   * | *-96-*      | Abjectly terrified  |
   * | *-95 - -51* | Terrified           |
   * | *-50 - -21* | Frightened          |
   * | *-20 - 20*  | Fearful             |
   * | *21 - 50*   | Careful             |
   * | *51 - 95*   | Trusting            |
   * | *96+*       | Profoundly trusting |
   */
  trust: number;

  /** What job the slave is assigned to. */
  assignment: Job;

  /** The career the slave had before becoming a slave. */
  career: string;

  /** Whether the slave is a fuckdoll, and to what degree. */
  fuckdoll: number | false;

  /** Whether the slave is in indentured servitude and how many weeks are remaining if so. */
  indentured: number | false;

  /** Whether the slave is mindbroken. */
  mindbroken: boolean;

  /** How famous the slave is. */
  prestige: number;

  /** Properties pertaining to the slave's skillset. */
  skills: Skills;

  /** During what week you acquired the slave. */
  weekAcquired: number;
}

export default class Slave extends Actor implements ISlave {
  devotion: number;

  trust: number;

  assignment: Job;

  career: string;

  fuckdoll: number | false;

  indentured: number | false;

  mindbroken: boolean;

  prestige: number;

  skills: Skills;

  weekAcquired: number;

  constructor() {
    super();

    this.devotion = 0;
    this.trust = 0;
    this.assignment = Job.CHOICE;
    this.career = '';
    this.fuckdoll = false;
    this.indentured = false;
    this.mindbroken = false;
    this.prestige = 0;
    this.skills = new Skills();
    this.weekAcquired = 0;
  }

  get isMindbroken(): boolean {
    return this.mindbroken;
  }

  get isFuckdoll(): boolean {
    return this.fuckdoll !== false;
  }

  get title(): string {
    return `${this.titlePrefix}${this.titleMain}${this.titleSuffix}`;
  }

  get titleMain(): string {
    if (this.isMale) {
      if (this.isHerm) return Number().random(1, 100) > 50 ? 'futanari' : 'herm';
      if (this.isFuta) return 'futa';
      if (this.isDickGirl) return 'dickgirl';
      if (this.isShemale) return 'shemale';
      if (this.isEunuch) return 'eunuch';
      if (this.isTrap) return 'trap';
      if (this.isTittyBoy) return 'tittyboy';
      if (this.isSissy) return 'sissy';
      if (this.isTwink) return 'twink';
      if (this.isBoyToy) return 'boytoy';
      if (this.isTitan) return 'titan';
      if (this.isMuscleBoy) return 'muscleboy';

      return 'slaveboy';
    }

    if (this.isFemale) {
      if (this.isCuntBoy) return 'cuntboy';
      if (this.isTranny) return 'tranny';
      if (this.isMILF) return 'MILF';
      if (this.isGILF) return 'GILF';
      if (this.isBimbo) return 'bimbo';
      if (this.isHourglass) return 'hourglass';
      if (this.isAmazon) return 'amazon';
      if (this.isPetite) return 'petite';
      if (this.isMuscleGirl) return 'musclegirl';

      return 'slavegirl';
    }

    if (this.isNeuter) return 'neuter';
    if (this.isBallSlave) return 'ballslave';
    if (this.isNull) return 'null';

    return 'slave';
  }

  get titlePrefix(): string {
    if (this.isAlbino) return 'albino ';
    if (this.isLactating) return 'milky ';
    if (this.hasMassiveTits) return 'supermassive-titted ';
    if (this.hasGiantTits) return 'giant-titted ';
    if (this.hasHugeTits) return 'huge-titted ';
    if (this.isBusty) return 'busty ';
    if (this.isWombFilling) return 'womb-filling ';
    if (this.isHung) return 'well-hung ';
    if (this.hasColossalAss) return 'colossal-assed ';
    if (this.hasMassiveAss) return 'massive-ass ';
    if (this.hasFatAss) return 'fat-assed ';
    if (this.isBottomHeavy) return 'bottom-heavy ';
    if (this.isBigBottomed) return 'big-bottomed ';
    if (this.isPregnancyKnown) return 'pregnant ';
    if (this.isBloated) return 'bloated ';
    if (this.isGravid) return 'gravid ';
    if (this.indentured !== false) return 'indentured ';
    if (this.isStatuesque) return 'statuesque ';

    return '';
  }

  get titleSuffix(): string {
    if (this.isCalf) return ' calf';
    if (this.isCow) return ' cow';
    if (this.isFertilityGoddess) return ' fertility goddess';
    if (this.isBroodmother) return ' broodmother';
    if (this.isBreeder) return ' breeder';
    if (this.isFuckdoll) return ' fuckdoll';

    return '';
  }
}
