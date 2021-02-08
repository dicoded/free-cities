import BellyImplants from './implants/Belly';
import BreastImplants from './implants/Breasts';
import ButtImplants from './implants/Butt';
import CervixImplants from './implants/Cervix';
import LipImplants from './implants/Lips';
import OvariesImplants from './implants/Ovaries';
import WombImplants from './implants/Womb';

export enum ImplantType {
  SILICONE = 'silicone',
  STRING = 'string',
  FILLABLE = 'fillable',
  ADVANCED_FILLABLE = 'advanced fillable',
  HYPERFILLABLE = 'hyperfillable',
}

interface IImplant {
  /** Any properties pertaining to the slave's lip implants. */
  lips: LipImplants;

  /** Any properties pertaining to the slave's breast implants. */
  breasts: BreastImplants;

  /** Any properties pertaining to the slave's belly implants. */
  belly: BellyImplants;

  /** Any properties pertaining to the slave's butt implants. */
  butt: ButtImplants;

  /** Any properties pertaining to the slave's womb implants. */
  womb: WombImplants;

  /** Any properties pertaining to the slave's cervix implants. */
  cervix: CervixImplants;

  /** Any properties pertaining to the slave's ovary implants. */
  ovaries: OvariesImplants;
}

export default class Implant implements IImplant {
  lips: LipImplants;

  breasts: BreastImplants;

  belly: BellyImplants;

  butt: ButtImplants;

  womb: WombImplants;

  cervix: CervixImplants;

  ovaries: OvariesImplants;

  constructor() {
    this.lips = new LipImplants();
    this.breasts = new BreastImplants();
    this.belly = new BellyImplants();
    this.butt = new ButtImplants();
    this.womb = new WombImplants();
    this.cervix = new CervixImplants();
    this.ovaries = new OvariesImplants();
  }
}
