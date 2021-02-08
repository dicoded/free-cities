// import { ID } from '../slave/Slave';

export enum Broodmother {
  STANDARD = 'standard',
  BLACK_MARKET = 'Black Market',
  BLACK_MARKET_UPGRADE = 'Black Market upgrade',
}

export enum Fertility {
  FERTILE = 'fertile',
  CONTRACEPTIVES = 'contraceptives',
  STERILE = 'sterile',
  STERILIZED = 'sterilized',
}

  interface IBroodmother {
  /** Whether the actor's broodmother implant is paused. */
  paused: boolean;

  /** The type of broodmother the actor is. */
  type: Broodmother;
}

interface IFertility {
  /** Whether the actor's menstrual cycle is known. */
  known: boolean;

  /** The number of weeks since the actor's last unsafe week.
   *
   * `0` means the current week is the actor's unsafe week.
   */
  peak: number;

  /** How fertile the actor is. */
  type: Fertility;
}

  interface IPregnancy {
  /** Whether the actor is a broodmother and related properties. */
  broodmother: IBroodmother | null;

  /** The number of children. */
  count: number;

  /** Properties pertaining to the actor's fertility. */
  fertility: IFertility;

  /** Whether the actor will go into labor this week. */
  labor: boolean;

  /** Whether the player and the actor both know the actor is pregnant.  */
  known: boolean;

  /** The size of the actor's current pregnancy.
   *
   * | **Threshold** | **Size**                        |
   * |--------------:|:--------------------------------|
   * | *100*         | Bloated                         |
   * | *1,500*        | Early pregnancy                 |
   * | *5,000*        | Obviously pregnant              |
   * | *10,000*       | Very pregnant                   |
   * | *15,000*       | Full term                       |
   * | *30,000*       | Full term twins                 |
   * | *45,000*       | Full term triplets              |
   * | *60,000*       | Full term quads                 |
   * | *75,000*       | Full term quints                |
   * | *90,000*       | Full term sextuplets            |
   * | *105,000*      | Full term septuplets            |
   * | *120,000*      | Full term octuplets             |
   * | *150,000*      | Oversized pregnancy (9+ babies) |
   * | *300,000*      | Hyperpreg state 1 (20+ babies)  |
   * | *450,000*      | Hyperpreg state 2 (30+ babies)  |
   * | *600,000*      | Hyperpreg state 3 (40+ babies)  |
   * | *750,000*      | Hyperpreg state 4 (50+ babies)  |
   */
  size: number;

  /** The ID of the slave that impregnated the actor.
   *
   * | **ID** | **Source**            |
   * |-------:|:----------------------|
   * | *0*    | Unidentifiable        |
   * | *-1*   | PC                    |
   * | *-2*   | Arcology citizen      |
   * | *-3*   | PC's former master    |
   * | *-4*   | Fellow arcology owner |
   * | *-5*   | One of PC's clients   |
   * | *-6*   | Societal Elite        |
   * | *-7*   | Designer baby         |
   * | *-8*   | An animal             |
   * | *-9*   | Futanari Sister       |
   */
  source: number;

  /** The number of weeks into the pregnancy the actor is.
   *
   * | **Range** | **Size**           |
   * |----------:|:-------------------|
   * | *0 - 10*  | Not showing        |
   * | *11 - 20* | Showing            |
   * | *21 - 30* | Obviously pregnant |
   * | *31+*     | Very pregnant      |
   */
  weeks: number;
}

export default class Pregnancy implements IPregnancy {
  broodmother: IBroodmother | null;

  count: number;

  fertility: IFertility;

  labor: boolean;

  known: boolean;

  size: number;

  source: number;

  weeks: number;

  constructor() {
    this.broodmother = null;
    this.count = 1;
    this.fertility = {
      known: false,
      peak: 0,
      type: Fertility.FERTILE,
    };
    this.labor = false;
    this.known = false;
    this.size = 0;
    this.source = 0;
    this.weeks = 0;
  }
}
