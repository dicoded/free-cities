import Age from './Age';
import Health from './Health';
import Skin from './skin/Skin'; // technically physical, but doesn't belong in either upper or lower
import Genetics from './Genetics';
import Counter from './counter/Counter';

export enum Sex {
  MALE = 'male',
  FEMALE = 'female',
}

export enum Genes {

  /** Female. */
  XX = 'XX',
  /** Triple X syndrome female. 1/1,000 chance. */
  XXX = 'XXX',
  /** Male. */
  XY = 'XY',
  /** Klinefelter syndrome male. 1/750 chance. */
  XXY = 'XXY',
  /** XYY syndrome male. 1/1,000 chance. */
  XYY = 'XYY',
  /** Turner syndrome. 1/3,500 chance. */
  X0 = 'X0',
}

export enum Race {
  AMERINDIAN = 'Amerindian',
  ASIAN = 'Asian',
  BLACK = 'black',
  INDO_ARYAN = 'Indo-Aryan',
  LATIN_AMERICAN = 'Latin American',
  MALAY = 'Malay',
  MIDDLE_EASTERN = 'Middle Eastern',
  MIXED_RACE = 'mixed race',
  PACIFIC_ISLANDER = 'Pacific Islander',
  SEMITIC = 'Semitic',
  SOUTHERN_EUROPEAN = 'Southern European',
  WHITE = 'white',
}

// some of the below are physical traits, but don't belong in either upper or lower
interface IAbstract {
  /** The body's biological sex. */
  sex: Sex;

  /**
   * The body's chromosomal arrangement.
   *
   * Not to be confused with `.genetics`.
   */
  genes: Genes;

  /**
   * The body's genetic patterns.
   *
   * Not to be confused with `.genes`.
   */
  genetics: Genetics;

  /** The body's race. */
  race: Race;

  /** Properties pertaining to the body's skin. */
  skin: Skin;

  /** Properties pertaining to the body's age. */
  age: Age;

  /** Properties pertaining to the body's health. */
  health: Health;
  // TODO: rework with BMI
  /** The body's weight, in kilograms.
   *
   * | **Range**   | **Description**   |
   * |------------:|:------------------|
   * | *191+*      | Dangerously obese |
   * | *190 - 161* | Super obese       |
   * | *160 - 131* | Obese             |
   * | *130 - 96*  | Fat               |
   * | *95 - 31*   | Overweight        |
   * | *30 - 11*   | Curvy             |
   * | *10 - -10*  | Average           |
   * | *-11 - -30* | Thin              |
   * | *-31 - -95* | Very thin         |
   * | *-96-*      | Emaciated         |
   */
  weight: number;
  // TODO: rework to take sex into account
  /** The body's height, in centimeters.
   *
   * | **Range**   | **Description** |
   * | -----------:|:----------------|
   * | *186+*      | Very tall       |
   * | *170 - 185* | Tall            |
   * | *160 - 169* | Average         |
   * | *150 - 159* | Short           |
   * | *150-*      | Petite          |
   */
  height: number;

  /** The body's level of musculature.
   *
   * | **Range**   | **Description**    |
   * |------------:|:-------------------|
   * | *96+*       | Extremely muscular |
   * | *31 - 95*   | Muscular           |
   * | *6 - 30*    | Toned              |
   * | *-5 - 5*    | None               |
   * | *-30 - -6*  | Weak               |
   * | *-95 - -31* | Very weak          |
   * | *-96-*      | Frail              |
   */
  muscles: number;

  /** Keeps track of the body's counts. */
  counter: Counter;
}

/** Contains traits that are physical, but don't belong elsewhere. */
export default class Abstract implements IAbstract {
  sex: Sex;

  genes: Genes;

  genetics: Genetics;

  race: Race;

  skin: Skin;

  age: Age;

  health: Health;

  weight: number;

  height: number;

  muscles: number;

  counter: Counter;

  constructor() {
    this.sex = Sex.MALE;
    this.genes = Genes.XY;
    this.genetics = new Genetics();
    this.skin = new Skin();
    this.race = Race.WHITE;
    this.age = new Age();
    this.health = new Health();
    this.weight = 0;
    this.height = 165;
    this.muscles = 0;
    this.counter = new Counter();
  }
}
