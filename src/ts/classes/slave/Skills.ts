interface ISkills {
  /** The slave's skill at various sexual acts. */
  sex: {
    /** How skilled the slave is at anal sex.
     *
     * | **Range** | **Description** |
     * |----------:|:----------------|
     * | *0 - 10*  | Unskilled       |
     * | *11 - 30* | Basic skills    |
     * | *31 - 60* | Skilled         |
     * | *61 - 99* | Expert          |
     * | *100+*    | Master          |
     */
    anal: number;

    /** How skilled the slave is at mammary sex.
     *
     * | **Range** | **Description** |
     * |----------:|:----------------|
     * | *0 - 10*  | Unskilled       |
     * | *11 - 30* | Basic skills    |
     * | *31 - 60* | Skilled         |
     * | *61 - 99* | Expert          |
     * | *100+*    | Master          |
     */
    mammary: number;

    /** How skilled the slave is at oral sex.
     *
     * | **Range** | **Description** |
     * |----------:|:----------------|
     * | *0 - 10*  | Unskilled       |
     * | *11 - 30* | Basic skills    |
     * | *31 - 60* | Skilled         |
     * | *61 - 99* | Expert          |
     * | *100+*    | Master          |
     */
    oral: number;

    /** How skilled the slave is at penetrative sex.
     *
     * | **Range** | **Description** |
     * |----------:|:----------------|
     * | *0 - 10*  | Unskilled       |
     * | *11 - 30* | Basic skills    |
     * | *31 - 60* | Skilled         |
     * | *61 - 99* | Expert          |
     * | *100+*    | Master          |
     */
    penetrative: number;

    /** How skilled the slave is at vaginal sex.
     *
     * | **Range** | **Description** |
     * |----------:|:----------------|
     * | *0 - 10*  | Unskilled       |
     * | *11 - 30* | Basic skills    |
     * | *31 - 60* | Skilled         |
     * | *61 - 99* | Expert          |
     * | *100+*    | Master          |
     */
    vaginal: number;
  }

  /** How skilled the slave is at combat.
     *
     * | **Range** | **Description** |
     * |----------:|:----------------|
     * | *0 - 10*  | Unskilled       |
     * | *11 - 30* | Basic skills    |
     * | *31 - 60* | Skilled         |
     * | *61 - 99* | Expert          |
     * | *100+*    | Master          |
     */
  combat: number;

  /** How skilled the slave is at entertainment.
     *
     * | **Range** | **Description** |
     * |----------:|:----------------|
     * | *0 - 10*  | Unskilled       |
     * | *11 - 30* | Basic skills    |
     * | *31 - 60* | Skilled         |
     * | *61 - 99* | Expert          |
     * | *100+*    | Master          |
     */
  entertainment: number;

  /** How skilled the slave is at whoring.
     *
     * | **Range** | **Description** |
     * |----------:|:----------------|
     * | *0 - 10*  | Unskilled       |
     * | *11 - 30* | Basic skills    |
     * | *31 - 60* | Skilled         |
     * | *61 - 99* | Expert          |
     * | *100+*    | Master          |
     */
  whoring: number;

  /**
   * The slave's skill at various roles.
   *
   * Default maxes out at `200`.
   */
  role: {
    // TODO: combine dairy and farm?
    /** The slave's skill at various leadership roles. */
    head: {
      /** How skilled the slave is at running a brothel. */
      brothel: number;

      /** How skilled the slave is at running a clinic. */
      clinic: number;

      /** How skilled the slave is at running a nightclub. */
      club: number;

      /** How skilled the slave is at running a dairy. */
      dairy: number;

      /**
       * How skilled the slave is at running a dungeon.
       *
       * TODO: move this into documentation
       *
       * A dungeon differs from a prison in that where a prison is made for criminals to serve out their sentence, a
       * dungeon is meant to break the spirits and wills of those deemed "out of line".
       */
      dungeon: number;

      /** How skilled the slave is at running a farm. */
      farm: number;

      /** How skilled the slave is at leading all your other slaves. */
      manager: number;

      /** How skilled the slave is at running a nursery. */
      nursery: number;

      /** How skilled the slave is at running a school. */
      school: number;

      /** How skilled the slave is at running a spa. */
      spa: number;
    }

    /** How skilled the slave is at being a spa attendant. */
    attendant: number;

    /** How skilled the slave is at being a bodyguard. */
    bodyguard: number;

    /** How skilled the slave is at being an entertainer. */
    entertainer: number;

    /** How skilled the slave is at being a farmhand. */
    farmhand: number;

    /** How skilled the slave is at being a dungeon guard. */
    guard: number;

    /** How skilled the slave is at being a milkmaid. */
    milkmaid: number; // TODO: not too happy with the name of this

    /** How skilled the slave is at being a nanny. */
    nanny: number;

    /** How skilled the slave is at being a nurse. */
    nurse: number;

    /** How skilled the slave is at recruiting new slaves. */
    recruiter: number;

    /** How skilled the slave is at being a servant. */
    servant: number;

    /** How skilled the slave is at being a schoolteacher. */
    teacher: number;

    /** How skilled the slave is at being a prostitute. */
    whore: number;
  }
}

export default class Skills implements ISkills {
  sex: {
    anal: number;
    mammary: number;
    oral: number;
    penetrative: number;
    vaginal: number;
  }

  combat: number;

  entertainment: number;

  whoring: number;

  role: {
    head: {
      brothel: number;

      clinic: number;

      club: number;

      dairy: number;

      dungeon: number;

      farm: number;

      manager: number;

      nursery: number;

      school: number;

      spa: number;
    }

    attendant: number;

    bodyguard: number;

    entertainer: number;

    farmhand: number;

    guard: number;

    milkmaid: number;

    nanny: number;

    nurse: number;

    recruiter: number;

    servant: number;

    teacher: number;

    whore: number;
  }

  constructor() {
    this.sex = {
      anal: 0,
      mammary: 0,
      oral: 0,
      penetrative: 0,
      vaginal: 0,
    };

    this.combat = 0;
    this.entertainment = 0;
    this.whoring = 0;

    this.role = {
      head: {
        brothel: 0,
        clinic: 0,
        club: 0,
        dairy: 0,
        dungeon: 0,
        farm: 0,
        manager: 0,
        nursery: 0,
        school: 0,
        spa: 0,
      },

      attendant: 0,
      bodyguard: 0,
      entertainer: 0,
      farmhand: 0,
      guard: 0,
      milkmaid: 0,
      nanny: 0,
      nurse: 0,
      recruiter: 0,
      servant: 0,
      teacher: 0,
      whore: 0,
    };
  }

  // TODO: add getters
}
