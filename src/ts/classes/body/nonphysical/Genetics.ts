import { EyeColor } from '@util/color';

interface IQuirks {
  /**
     * Oversized breasts. Increased growth rate, reduced shrink rate.
     * Breasts try to return to oversized state if reduced.
     */
  macromastia: boolean;

  /**
   * Greatly oversized breasts. Increased growth rate, reduced shrink rate.
   * Breasts try to return to oversized state if reduced.
   *
   * .`macromastia` + `gigantomastia`: Breasts never stop growing. Increased growth rate, no shrink rate. */
  gigantomastia: boolean;

  /** How prone the body is to having twins. Shorter pregnancy recovery rate. */
  fertility: boolean;

  /** How prone the body is to having multiples, much shorter pregnancy recovery rate.
   *
   * `.fertility` + `.hyperFertility`: will have multiples, even shorter pregnancy recovery rate. */
  hyperFertility: boolean;

  /** Pregnancy does not block ovulation; body can become pregnant while pregnant. */
  superfetation: boolean;

  /** Abnormal production of amniotic fluid.
   *
   *  Only affects fetuses.
   */
  polyhydramnios: boolean;

  /**
   * Pleasurable pregnancy and orgasmic birth. Wider hips, looser and wetter vagina.
   * High pregnancy adaptation and low birth damage.
   */
  uterineHypersensitivity: boolean;

  /** Lactation unrelated to pregnancy. */
  galactorrhea: boolean;

  /**
   * Body is abnormally tall.
   *
   * `.gigantism` + `.dwarfism`: body's height is very average.
  */
  gigantism: boolean;

  /**
   * Body is abnormally short.
   *
   * `.gigantism` + `.dwarfism`: body's height is very average.
  */
  dwarfism: boolean;

  /**
   * Body retains childlike characteristics.
   *
   * `.neoteny` * `progeria`: progeria wins
   */
  neoteny: boolean;

  /** Body undergoes rapid aging.
   *
   * `.neoteny` + `.progeria`: progeria wins.
   */
  progeria: boolean;

  /**
   * Body has a flawless face.
   *
   * `.pFace` + `.uFace`: Depends on carrier status, may swing between average and above/below depending.
   */
  pFace: boolean;

  /**
   * Body has a hideous face.
   *
   * `.pFace` + `.uFace`: Depends on carrier status, may swing between average and above/below depending.
   */
  uFace: boolean;

  /** Body has pale skin, white hair and red eyes. */
  albinism: boolean;

  /**
   * Body has mismatched eyes.
   *
   * The eye color stored here is always the left eye.
   */
  heterochromia: boolean | EyeColor;

  /** Body's butt never stops growing. Increased growth rate, reduced shrink rate. */
  rearLipedema: boolean;

  /** Body has (or will have) a large penis. */
  wellHung: boolean;

  /**
   * Body constantly gains weight unless dieting, easier to gain weight.
   *
   * `.wGain` + `.wLoss`: weight gain/loss fluctuates randomly.
   */
  wGain: boolean;

  /**
   * Body constantly loses weight unless gaining, easier to lose weight.
   *
   * `.wGain` + `.wLoss`: weight gain/loss fluctuates randomly.
   */
  wLoss: boolean;

  /**
   * Body constantly gains muscle mass, easier to gain muscle.
   *
   * `.mGain` + `.mLoss`: muscle gain/loss amplified, body loses muscle unless actively building.
   */
  mGain: boolean;

  /**
   * Body constantly loses muscle mass, easier to gain muscle.
   *
   * `.mGain` + `.mLoss`: muscle gain/loss amplified, body loses muscle unless actively building.
   */
  mLoss: boolean;

  /** Body can only ever birth boys. */
  boysOnly: boolean;

  /** Body can only ever birth girls. */
  girlsOnly: boolean;

  /** Body attempts to normalize to an androgynous state. */
  androgyny: boolean;
}

interface IMods {
  /** Whether the body has had NCS induced. */
  NCS: boolean;

  /** Whether the body has undergone elasticity treatment. */
  rapidCellGrowth: boolean;

  /** Whether the body is immortal. */
  immortality: boolean;
}

interface IGenetics {
  /** Properties pertaining to the body's genetic quirks. */
  quirks: IQuirks;
  /** Properties pertaining to the body's genetic mods. */
  mods: IMods;
}

export function getQuirks() {
  return {
    macromastia: false,
    gigantomastia: false,
    fertility: false,
    hyperFertility: false,
    superfetation: false,
    polyhydramnios: false,
    uterineHypersensitivity: false,
    galactorrhea: false,
    gigantism: false,
    dwarfism: false,
    neoteny: false,
    progeria: false,
    pFace: false,
    uFace: false,
    albinism: false,
    heterochromia: false,
    rearLipedema: false,
    wellHung: false,
    wGain: false,
    wLoss: false,
    mGain: false,
    mLoss: false,
    boysOnly: false,
    girlsOnly: false,
    androgyny: false,
  };
}

export function getMods() {
  return {
    NCS: false,
    rapidCellGrowth: false,
    immortality: false,
  };
}

export default class Genetics implements IGenetics {
  quirks: IQuirks;

  mods: IMods

  constructor() {
    this.quirks = getQuirks();
    this.mods = getMods();
  }
}
