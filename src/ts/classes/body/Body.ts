import Abstract, { Sex } from './nonphysical/Nonphysical';
import Upper from './upper/UpperBody';
import Lower from './lower/LowerBody';

import { FaceShape } from '../body/face/Face';
import {
  VoiceImplant, VoiceType, AccentType, TeethType,
} from '../body/face/Mouth';
import { ShouldersType } from '../body/upper/Shoulders';
import { HipSize } from '../body/lower/Hips';
import { TesticlesType } from '../body/lower/crotch/Testicles';
import { LabiaType } from '../body/lower/crotch/Vagina';

import { formatDate } from '../../util/date';
import { EyeColor } from '../../util/color';

export enum Alteration {
  NARROW = 'narrow',
  EXPAND = 'expand'
}

export enum LimbType {
  NORMAL = 'normal',
  SIMPLE_PROSTHETIC = 'simple prosthetic',
  ADVANCED_SEX = 'advanced sex',
  ADVANCED_BEAUTY = 'advanced beauty',
  ADVANCED_COMBAT = 'advanced combat',
  CYBERNETIC = 'cybernetic',
}

interface IBody {
  /** Properties pertaining to properties of the body that are abstract or nonvisible. */
  abstract: Abstract;

  /** Properties pertaining to anything above the body's waist. */
  upper: Upper;

  /** Properties pertaining to anything below the body's waist. */
  lower: Lower;
}

export interface ILimb {
  /** The type of limb the body has. */
  type: LimbType;
}

/**
 * A basic physical body.
 * Does not contain any mental, emotional, or sexual properties.
 */
export default class Body implements IBody {
  abstract: Abstract;

  upper: Upper;

  lower: Lower;

  constructor() {
    this.abstract = new Abstract();
    this.upper = new Upper();
    this.lower = new Lower();
  }

  // Shorthand Accessors

  get sex() {
    return this.abstract.sex;
  }

  set sex(sex) {
    this.abstract.sex = sex;
  }

  get genes() {
    return this.abstract.genes;
  }

  get genetics() {
    return this.abstract.genetics;
  }

  get race() {
    return this.abstract.race;
  }

  set race(race) {
    this.abstract.race = race;
  }

  get age() {
    return this.abstract.age;
  }

  get birthday(): string {
    return formatDate(new Date(this.age.birthday.year, this.age.birthday.month, this.age.birthday.day));
  }

  get health() {
    return this.abstract.health;
  }

  get weight() {
    return this.abstract.weight;
  }

  get height() {
    return this.abstract.height;
  }

  get muscles() {
    return this.abstract.muscles;
  }

  get hair() {
    return this.upper.hair.main;
  }

  get eyebrows() {
    return this.upper.hair.eyebrows;
  }

  get armpitHair() {
    return this.upper.hair.armpits;
  }

  get bodyHair() {
    return this.upper.hair.body;
  }

  get pubicHair() {
    return this.upper.hair.pubic;
  }

  get face() {
    return this.upper.face;
  }

  get eyes() {
    return this.upper.face.eyes.both
      ?? { left: this.face.eyes.left.color.iris, right: this.face.eyes.right.color.iris };
  }

  set eyes(color: EyeColor | { left: EyeColor, right: EyeColor; }) {
    if (typeof color !== 'object') {
      this.upper.face.eyes.left.color.iris = color;
      this.upper.face.eyes.right.color.iris = color;
    } else {
      this.upper.face.eyes.left.color.iris = color.left;
      this.upper.face.eyes.right.color.iris = color.right;
    }
  }

  get ears() {
    return this.upper.face.ears;
  }

  get nose() {
    return this.upper.face.nose;
  }

  get mouth() {
    return this.upper.face.mouth;
  }

  get lips() {
    return this.upper.face.mouth.lips;
  }

  get voice() {
    return this.upper.face.mouth.throat.voice;
  }

  set voice(voice: {
    type: VoiceType, accent: AccentType, implant: VoiceImplant | null
  }) {
    this.upper.face.mouth.throat.voice = voice;
  }

  get beauty() {
    return this.upper.face.beauty;
  }

  get shoulders() {
    return this.upper.shoulders;
  }

  get chest() {
    return this.upper.chest;
  }

  get belly() {
    return this.upper.belly;
  }

  get waist() {
    return this.lower.waist;
  }

  get hips() {
    return this.lower.hips;
  }

  get penis() {
    return this.lower.crotch.penis;
  }

  set penisLength(length: number) {
    if (this.lower.crotch.penis) this.lower.crotch.penis.length = length;
  }

  set penisGirth(girth: number) {
    if (this.lower.crotch.penis) this.lower.crotch.penis.girth = girth;
  }

  get balls() {
    if (this.lower.crotch.penis) return this.lower.crotch.penis.balls;

    return null;
  }

  get vagina() {
    return this.lower.crotch.vagina;
  }

  set virginal(value: boolean) {
    if (this.lower.crotch.vagina) this.lower.crotch.vagina.isVirgin = value;
  }

  set labiaType(type: LabiaType) {
    if (this.lower.crotch.vagina) this.lower.crotch.vagina.labia = type;
  }

  get ovaries() {
    if (this.lower.crotch.vagina) {
      return this.lower.crotch.vagina.ovaries;
    }

    return null;
  }

  get anus() {
    return this.lower.crotch.anus;
  }

  get butt() {
    return this.lower.butt;
  }

  get arms() {
    return this.upper.arms;
  }

  get legs() {
    return this.lower.legs;
  }

  get skin() {
    return this.abstract.skin;
  }

  get markings() {
    return this.abstract.skin.markings;
  }

  get counter() {
    return this.abstract.counter;
  }

  get BMI() {
    return this.weight / this.height ** 2;
  }

  // Checkers

  get canAchieveErection(): boolean {
    return this.penis !== null && this.penis.length < 31 && this.balls?.type !== TesticlesType.STERILE;
  }

  // TODO:
  get canPenetrate(): boolean {
    return this.canAchieveErection;
  }

  get canDoVaginal(): boolean {
    return this.vagina !== null;
  }

  get canDoAnal(): boolean {
    return this.anus !== null;
  }

  get canSee(): boolean {
    return !(this.upper.face.eyes.left.blind && this.upper.face.eyes.right.blind);
  }

  get canTalk(): boolean {
    return !this.upper.face.mouth.mute;
  }

  get isTrueVirgin() {
    return this.counter.totalGiven === 0 && this.counter.totalReceived === 0;
  }

  get isOralVirgin(): boolean {
    return this.counter.oral.given.total === 0;
  }

  get isVaginalVirgin(): boolean {
    return this.vagina !== null && this.vagina.isVirgin === true;
  }

  get isAnalVirgin(): boolean {
    return this.lower.crotch.anus.virgin === true;
  }

  get isMale(): boolean {
    return this.sex === Sex.MALE && this.penis !== null && this.balls !== null && !this.vagina && !this.ovaries;
  }

  get isFemale(): boolean {
    return this.sex === Sex.FEMALE && !this.penis && !this.balls && this.vagina !== null && this.ovaries !== null;
  }

  get isHerm(): boolean {
    return this.penis !== null
      && this.balls !== null
      && this.vagina !== null
      && this.ovaries !== null
      && this.chest.size > 300;
  }

  get isFuta(): boolean {
    return this.penis !== null && !this.balls && this.vagina !== null && this.ovaries !== null;
  }

  get isDickGirl(): boolean {
    return this.penis !== null && !this.balls && this.vagina !== null && this.ovaries !== null && this.chest.size > 300;
  }

  get isShemale(): boolean {
    return this.penis !== null && this.vagina !== null && !this.ovaries;
  }

  get isEunuch(): boolean {
    return this.penis !== null && !this.balls && !this.vagina && !this.ovaries;
  }

  get isTrap(): boolean {
    return this.isMale
      && this.face.beauty > 10
      && this.hips.size > HipSize.NORMAL
      && this.shoulders.type < ShouldersType.BROAD
      && this.face.type !== FaceShape.MASCULINE;
  }

  get isTittyBoy(): boolean {
    return this.isMale && this.chest.size > 800;
  }

  get isSissy(): boolean {
    if (this.penis && this.balls) {
      return this.penis.length < 12 && this.penis.girth < 11 && this.balls.size < 3;
    }

    return false;
  }

  get isBoyToy(): boolean {
    return this.isMale
      && this.penis !== null
      && this.penis.length > 12
      && this.balls !== null
      && this.balls.size > 2
      && this.height < 160
      && this.muscles < 5
      && this.age.visual < 19;
  }

  get isTwink(): boolean {
    return this.isBoyToy && this.face.type !== FaceShape.MASCULINE;
  }

  get isTitan(): boolean {
    return this.muscles > 95 && this.height > 185;
  }

  get isMuscleBoy(): boolean {
    return this.muscles > 30;
  }

  get isCuntBoy(): boolean {
    return this.isFemale
      && (this.shoulders.type > ShouldersType.FEMININE
        || this.hips.size < HipSize.NORMAL
        || this.face.type === FaceShape.MASCULINE)
      && this.chest.size < 400;
  }

  get isTranny(): boolean {
    return this.sex === Sex.FEMALE && !this.ovaries;
  }

  get isMILF(): boolean {
    return this.isFemale
      && this.weight > 10
      && this.chest.size > 800
      && this.counter.births > 0
      && this.age.physical > 35;
  }

  get isGILF(): boolean {
    return this.isMILF && this.age.physical > 59;
  }

  get isBimbo(): boolean {
    return this.isFemale && this.lips.size > 41 && this.chest.size > 2000 && this.butt.size > 1200;
  }

  get isHourglass(): boolean {
    return this.isFemale
      && this.hips.size > HipSize.WIDE
      && this.chest.size > 2000
      && this.butt.size > 1200
      && this.waist.size < 50;
  }

  get isAmazon(): boolean {
    return this.isFemale && this.muscles > 95 && this.height > 185;
  }

  get isStatuesque(): boolean {
    return this.muscles < 95 && this.height > 185;
  }

  get isPetite(): boolean {
    return this.chest.size < 800 && this.height < 150;
  }

  get isShortstack(): boolean {
    return this.chest.size > 800 && this.height < 150;
  }

  get isMuscleGirl(): boolean {
    return this.isFemale && this.muscles > 30;
  }

  get isNeuter(): boolean {
    return !this.penis && !this.balls && !this.vagina;
  }

  get isBallSlave(): boolean {
    return !this.penis && this.balls !== null && !this.vagina;
  }

  get isToddler(): boolean {
    return this.age.actual < 3;
  }

  get isBaby(): boolean {
    return this.age.actual < 1;
  }

  get isShota(): boolean {
    return this.age.visual < 13 && this.sex === Sex.MALE;
  }

  get isLoli(): boolean {
    return this.age.visual < 13 && this.sex === Sex.FEMALE;
  }

  get isAlbino(): boolean {
    return this.genetics.quirks.albinism === 2;
  }

  get isLactating(): boolean {
    return this.chest.nipples.lactating;
  }

  get isHyper(): boolean {
    return this.penis !== null
      && this.penis.length > 50
      && this.balls !== null
      && this.balls.size > 9
      && this.chest.size > 12000;
  }

  get isCow(): boolean {
    return this.chest.size > 4000 && this.chest.nipples.lactating;
  }

  get isCalf(): boolean {
    return this.isCow && this.age.physical < 13;
  }

  get hasMassiveTits(): boolean {
    return this.chest.size > 20000;
  }

  get hasGiantTits(): boolean {
    return this.chest.size > 10000;
  }

  get hasHugeTits(): boolean {
    return this.chest.size > 4000;
  }

  get isBusty(): boolean {
    return this.chest.size > 1000;
  }

  get isWombFilling(): boolean {
    return this.penis !== null
      && this.penis.length > 30
      && this.penis.girth > 17
      && this.balls !== null
      && this.balls.size > 5;
  }

  get isHung(): boolean {
    return this.penis !== null && this.penis.length > 30;
  }

  get hasColossalAss(): boolean {
    return this.butt.size > 1900;
  }

  get hasMassiveAss(): boolean {
    return this.butt.size > 1700;
  }

  get hasFatAss(): boolean {
    return this.butt.size > 1400;
  }

  get isBottomHeavy(): boolean {
    return this.butt.size > 1300;
  }

  get isBigBottomed(): boolean {
    return this.butt.size > 1200;
  }

  get isFertilityGoddess(): boolean {
    return this.weight > 10
      && this.weight < 95
      && this.chest.size > 5000
      && this.butt.size > 1400
      && this.hips.size > HipSize.WIDE
      && this.belly.pregnancy !== null
      && this.belly.pregnancy.size > 30000
      && this.counter.births > 10;
  }

  get isBroodmother(): boolean {
    return this.counter.births > 5;
  }

  get isBreeder(): boolean {
    return this.counter.births > 2;
  }

  get isPregnancyKnown(): boolean {
    return this.belly.pregnancy !== null && this.belly.pregnancy.known;
  }

  get isBloated(): boolean {
    return this.belly.fluid > 5000;
  }

  get isGravid(): boolean {
    return this.belly.size > 5000;
  }

  get isNull(): boolean {
    return !this.penis && !this.vagina;
  }

  get isUnderweight(): boolean {
    return this.BMI < 19;
  }

  get isHealthyWeight(): boolean {
    return this.BMI.between(19, 24);
  }

  get isOverweight(): boolean {
    return this.BMI.between(25, 29);
  }

  get isObese(): boolean {
    return this.BMI.between(30, 39);
  }

  get isMorbidlyObese(): boolean {
    return this.BMI > 39;
  }

  get hasAnyArms(): boolean {
    return this.arms.left !== null || this.arms.right !== null;
  }

  get hasAnyLegs(): boolean {
    return this.legs.left !== null || this.legs.right !== null;
  }

  get hasBothArms(): boolean {
    return this.arms.left !== null && this.arms.right !== null;
  }

  get hasBothLegs(): boolean {
    return this.legs.left !== null && this.legs.right !== null;
  }

  get hasLisp(): boolean {
    return this.canTalk
      && (this.lips.size > 70 || this.mouth.teeth.type === TeethType.GAPPED);
  }
}
