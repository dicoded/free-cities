interface IQuirks {
  /**
     * Oversized breasts. Increased growth rate, reduced shrink rate.
     * Breasts try to return to oversized state if reduced.
     */
  macromastia: number,

  /**
   * Greatly oversized breasts. Increased growth rate, reduced shrink rate.
   * Breasts try to return to oversized state if reduced.
   *
   * .`macromastia` + `gigantomastia`: Breasts never stop growing. Increased growth rate, no shrink rate. */
  gigantomastia: number,

  /** How prone the body is to having twins. Shorter pregnancy recovery rate. */
  fertility: number,

  /** How prone the body is to having multiples, much shorter pregnancy recovery rate.
   *
   * `.fertility` + `.hyperFertility`: will have multiples, even shorter pregnancy recovery rate. */
  hyperFertility: number,

  /** Pregnancy does not block ovulation; body can become pregnant while pregnant. */
  superfetation: number,

  /** Abnormal production of amniotic fluid.
   *
   *  Only affects fetuses.
   */
  polyhydramnios: number,

  /**
   * Pleasurable pregnancy and orgasmic birth. Wider hips, looser and wetter vagina.
   * High pregnancy adaptation and low birth damage.
   */
  uterineHypersensitivity: number,

  /** Lactation unrelated to pregnancy. */
  galactorrhea: number,

  /**
   * Body is abnormally tall.
   *
   * `.gigantism` + `.dwarfism`: body's height is very average.
  */
  gigantism: number,

  /**
   * Body is abnormally short.
   *
   * `.gigantism` + `.dwarfism`: body's height is very average.
  */
  dwarfism: number,

  /** Body retains childlike characteristics. */
  neoteny: number,

  /** Body undergoes rapid aging.
   *
   * `.neoteny` + `.progeria`: progeria wins. */
  progeria: number,

  /**
   * Body has a flawless face.
   *
   * `.pFace` + `.uFace`: Depends on carrier status, may swing between average and above/below depending.
   */
  pFace: number,

  /**
   * Body has a hideous face.
   *
   * `.pFace` + `.uFace`: Depends on carrier status, may swing between average and above/below depending.
   */
  uFace: number,

  /** Body has pale skin, white hair and red eyes. */
  albinism: number,

  /**
   * Body may have mismatched eyes.
   *
   * The eye color stored here is always the left eye.
   */
  heterochromia: number | string,

  /** Body's butt never stops growing. Increased growth rate, reduced shrink rate. */
  rearLipedema: number,

  /** Body has (or will have) a large penis. */
  wellHung: number,

  /**
   * Body constantly gains weight unless dieting, easier to gain weight.
   *
   * `.wGain` + `.wLoss`: weight gain/loss fluctuates randomly. */
  wGain: number,

  /**
   * Body constantly loses weight unless gaining, easier to lose weight.
   *
   * `.wGain` + `.wLoss`: weight gain/loss fluctuates randomly. */
  wLoss: number,

  /**
   * Body constantly gains muscle mass, easier to gain muscle.
   *
   * `.mGain` + `.mLoss`: muscle gain/loss amplified, body loses muscle unless actively building. */
  mGain: number,

  /**
   * Body constantly loses muscle mass, easier to gain muscle.
   *
   * `.mGain` + `.mLoss`: muscle gain/loss amplified, body loses muscle unless actively building. */
  mLoss: number,

  /** Body can only ever birth girls. */
  girlsOnly: number;

  /** Body attempts to normalize to an androgynous state. */
  androgyny: number,
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

export default class Genetics implements IGenetics {
  quirks: {
    macromastia: number;

    gigantomastia: number;

    fertility: number;

    hyperFertility: number;

    superfetation: number;

    polyhydramnios: number;

    uterineHypersensitivity: number;

    galactorrhea: number;

    gigantism: number;

    dwarfism: number;

    neoteny: number;

    progeria: number;

    pFace: number;

    uFace: number;

    albinism: number;

    heterochromia: number;

    rearLipedema: number;

    wellHung: number;

    wGain: number;

    wLoss: number;

    mGain: number;

    mLoss: number;

    girlsOnly: number;

    androgyny: number;
  }

  mods: {
    NCS: boolean;
    rapidCellGrowth: boolean;
    immortality: boolean;
  }

  constructor() {
    this.quirks = {
      macromastia: 0,
      gigantomastia: 0,
      fertility: 0,
      hyperFertility: 0,
      superfetation: 0,
      polyhydramnios: 0,
      uterineHypersensitivity: 0,
      galactorrhea: 0,
      gigantism: 0,
      dwarfism: 0,
      neoteny: 0,
      progeria: 0,
      pFace: 0,
      uFace: 0,
      albinism: 0,
      heterochromia: 0,
      rearLipedema: 0,
      wellHung: 0,
      wGain: 0,
      wLoss: 0,
      mGain: 0,
      mLoss: 0,
      girlsOnly: 0,
      androgyny: 0,
    };

    this.mods = {
      NCS: false,
      rapidCellGrowth: false,
      immortality: false,
    };
  }
}
