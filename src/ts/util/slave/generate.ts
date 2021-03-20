import { get } from 'svelte/store';

import Name from '../../classes/actor/Name';
import Personality from '../../classes/actor/Personality';
import Quirks from '../../classes/actor/quirks/Quirks';
import Flaws from '../../classes/actor/flaws/Flaws';
import Fetish, { FetishType } from '../../classes/actor/Fetish';
import Attraction from '../../classes/actor/Attraction';

import SexualQuirks from '../../classes/actor/quirks/Sexual';
import BehavioralQuirks from '../../classes/actor/quirks/Behavioral';
import SexualFlaws from '../../classes/actor/flaws/Sexual';
import BehavioralFlaws from '../../classes/actor/flaws/Behavioral';

import Eyes from '../../classes/body/face/Eyes';
import Ears, { EarShape } from '../../classes/body/face/Ears';
import Nose from '../../classes/body/face/Nose';
import Mouth, { LipSize, TeethType } from '../../classes/body/face/Mouth';
import Face, { FaceShape } from '../../classes/body/face/Face';

import Hair from '../../classes/body/upper/Hairs';
import Shoulders, { ShouldersType } from '../../classes/body/upper/Shoulders';
import Chest from '../../classes/body/upper/Chest';
import Belly from '../../classes/body/upper/Belly';

import Waist from '../../classes/body/lower/Waist';
import Hips from '../../classes/body/lower/Hips';
import Crotch from '../../classes/body/lower/crotch/Crotch';
import Penis from '../../classes/body/lower/crotch/Penis';
import Vagina from '../../classes/body/lower/crotch/Vagina';
import Butt from '../../classes/body/lower/Butt';
import Legs from '../../classes/body/lower/Legs';

import Abstract, { Sex, Genes, Race } from '../../classes/body/nonphysical/Nonphysical';
import Age from '../../classes/body/nonphysical/Age';
import Skin from '../../classes/body/nonphysical/skin/Skin';
import Scars, { Scarring } from '../../classes/body/nonphysical/skin/Scars';
import Markings, { MarkingsType } from '../../classes/body/nonphysical/skin/Markings';
import Health, { MajorInjury, MinorInjury } from '../../classes/body/nonphysical/Health';
import Genetics from '../../classes/body/nonphysical/Genetics';
import Counter from '../../classes/body/nonphysical/counter/Counter';

import Actor from '../../classes/actor/Actor';
import Upper from '../../classes/body/upper/UpperBody';
import Lower from '../../classes/body/lower/LowerBody';
import Slave from '../../classes/slave/Slave';

import { entityID, min, max } from '../../../stores/global.store';
import see from '../../../stores/see.store';

import {
  SkinColor, HairColor, EyeColor, BaseColor,
} from '../color';
import nationalities from '../../../data/nationalities/nationality';
import { getMeanHeight } from '../../../data/nationalities/heights';

const races: string[] = [
  'Amerindian',
  'Asian',
  'black',
  'Indo-Aryan',
  'Latin American',
  'Malay',
  'Middle Eastern',
  'mixed race',
  'Pacific Islander',
  'Semitic',
  'Southern European',
  'white',
];

const hairColors: HairColor[][] = [
  [ // Amerindian
    HairColor.BLACK,
  ],
  [ // Asian
    HairColor.BLACK,
  ],
  [ // black
    HairColor.BLACK,
  ],
  [ // Indo-Aryan
    HairColor.BLACK,
  ],
  [ // Latin American
    HairColor.BLACK,
    HairColor.BROWN,
  ],
  [ // Malay
    HairColor.BLACK,
  ],
  [ // Middle Eastern
    HairColor.BLACK,
  ],
  [ // mixed race
    HairColor.BLACK,
    HairColor.BROWN,
  ],
  [ // Pacific Islander
    HairColor.BLACK,
    HairColor.BROWN,
  ],
  [ // Semitic
    HairColor.BLACK,
    HairColor.BROWN,
  ],
  [ // Southern European
    HairColor.BLACK,
    HairColor.BROWN,
    HairColor.BLOND,
  ],
  [ // white
    HairColor.BLACK,
    HairColor.BROWN,
    HairColor.BLOND,
    HairColor.RED,
  ],
];

const eyeColors: EyeColor[][] = [
  [ // Amerindian
    EyeColor.BROWN,
  ],
  [ // Asian
    EyeColor.BROWN,
  ],
  [ // black
    EyeColor.BROWN,
    EyeColor.AMBER,
  ],
  [ // Indo-Aryan
    EyeColor.BROWN,
  ],
  [ // Latin American
    EyeColor.BROWN,
  ],
  [ // Malay
    EyeColor.BROWN,
  ],
  [ // Middle Eastern
    EyeColor.BROWN,
  ],
  [ // mixed race
    EyeColor.BROWN,
    EyeColor.AMBER,
    EyeColor.GRAY,
  ],
  [ // Pacific Islander
    EyeColor.BROWN,
  ],
  [ // Semitic
    EyeColor.BROWN,
  ],
  [ // Southern European
    EyeColor.BROWN,
    EyeColor.AMBER,
    EyeColor.BLUE,
    EyeColor.GRAY,
  ],
  [ // white
    EyeColor.AMBER,
    EyeColor.BLUE,
    EyeColor.BROWN,
    EyeColor.GRAY,
    EyeColor.GREEN,
  ],
];

const darkSkin: SkinColor[] = [
  SkinColor.PURE_BLACK,
  SkinColor.EBONY,
  SkinColor.BLACK,
  SkinColor.DARK_BROWN,
  SkinColor.BROWN,
  SkinColor.LIGHT_BROWN,
  SkinColor.DARK_BEIGE,
  SkinColor.BEIGE,
  SkinColor.LIGHT_BEIGE,
  SkinColor.DARK,
];

const mediumSkin: SkinColor[] = [
  SkinColor.DARK_OLIVE,
  SkinColor.BRONZE,
  SkinColor.OLIVE,
  SkinColor.TAN,
  SkinColor.LIGHT_OLIVE,
];

const lightSkin: SkinColor[] = [
  SkinColor.LIGHT,
  SkinColor.FAIR,
  SkinColor.VERY_FAIR,
  SkinColor.EXTREMELY_FAIR,
  SkinColor.PALE,
  SkinColor.VERY_PALE,
  SkinColor.EXTREMELY_PALE,
  SkinColor.WHITE,
  SkinColor.IVORY,
  SkinColor.PURE_WHITE,
];

// TODO: could use some adjusting
const skinColors: SkinColor[][] = [
  [ // Amerindian
    ...darkSkin,
    ...mediumSkin,
  ],
  [ // Asian
    ...mediumSkin,
    ...lightSkin,
  ],
  [ // black
    ...darkSkin,
  ],
  [ // Indo-Aryan
    ...darkSkin,
    ...mediumSkin,
    ...lightSkin,
  ],
  [ // Latin American
    ...darkSkin,
    ...mediumSkin,
  ],
  [ // Malay
    ...darkSkin,
    ...mediumSkin,
  ],
  [ // Middle Eastern
    ...darkSkin,
    ...mediumSkin,
    ...lightSkin,
  ],
  [ // mixed race
    ...darkSkin,
    ...mediumSkin,
    ...lightSkin,
  ],
  [ // Pacific Islander
    ...darkSkin,
    ...mediumSkin,
  ],
  [ // Semitic
    ...mediumSkin,
    ...lightSkin,
  ],
  [ // Southern European
    ...mediumSkin,
    ...lightSkin,
  ],
  [ // white
    ...lightSkin,
  ],
];

const markingTypes: MarkingsType[] = [
  MarkingsType.BEAUTY_MARK,
  MarkingsType.BIRTHMARK,
  MarkingsType.FRECKLED,
  MarkingsType.HEAVILY_FRECKLED,
];

// TODO: most likely a better way to do this
const behavioralFlaws: BehavioralFlaws[] = [
  BehavioralFlaws.ARROGANT,
  BehavioralFlaws.BITCHY,
  BehavioralFlaws.ODD,
  BehavioralFlaws.ANOREXIC,
  BehavioralFlaws.HATES_MEN,
  BehavioralFlaws.HATES_WOMEN,
  BehavioralFlaws.GLUTTONOUS,
  BehavioralFlaws.DEVOUT,
  BehavioralFlaws.LIBERATED,
];

const sexualFlaws: SexualFlaws[] = [
  SexualFlaws.HATES_ANAL,
  SexualFlaws.HATES_ORAL,
  SexualFlaws.HATES_PENETRATION,
  SexualFlaws.SHAMEFAST,
  SexualFlaws.IDEALISTIC,
  SexualFlaws.REPRESSED,
  SexualFlaws.APATHETIC,
  SexualFlaws.CRUDE,
  SexualFlaws.JUDGEMENTAL,
];

const behavioralQuirks: BehavioralQuirks[] = [
  BehavioralQuirks.CONFIDENT,
  BehavioralQuirks.CUTTING,
  BehavioralQuirks.FUNNY,
  BehavioralQuirks.FITNESS,
  BehavioralQuirks.ADORES_MEN,
  BehavioralQuirks.ADORES_WOMEN,
  BehavioralQuirks.INSECURE,
  BehavioralQuirks.SINFUL,
  BehavioralQuirks.ADVOCATE,
];

const sexualQuirks: SexualQuirks[] = [
  SexualQuirks.PAINAL_QUEEN,
  SexualQuirks.GAGFUCK_QUEEN,
  SexualQuirks.STRUGGLEFUCK_QUEEN,
  SexualQuirks.TEASE,
  SexualQuirks.ROMANTIC,
  SexualQuirks.PERVERTED,
  SexualQuirks.CARING,
  SexualQuirks.UNFLINCHING,
  SexualQuirks.SIZE_QUEEN,
];

const fetishes: FetishType[] = [
  FetishType.BOOBS,
  FetishType.BUTTSLUT,
  FetishType.CUMSLUT,
  FetishType.DOM,
  FetishType.HUMILIATION,
  FetishType.MASOCHIST,
  FetishType.PREGNANCY,
  FetishType.SADIST,
  FetishType.SUBMISSIVE,
];

// Utility functions

function gaussian(minimum: number, maximum: number, skew: number = 1): number {
  return Math.floor(Number().gaussian(minimum, maximum, skew));
}

// Generator functions

export function generateID(): number {
  entityID.update((i) => i + 1);

  return get(entityID);
}

export function generateSex(): Sex {
  if (Number().random(1, 100) < get(see).dicks) {
    return Sex.MALE;
  }

  if (get(see).dicks > 0) {
    const femaleGenCount = 80;

    if (Number().random(1, 100) > femaleGenCount && Number().random(0, 99) < get(see).dicks) {
      return Sex.MALE;
    }

    return Sex.FEMALE;
  }

  return Sex.FEMALE;
}

export function generateGenes(actor: Actor): Genes {
  if (actor.sex === Sex.MALE) {
    if (Number().random(1, 750) === 1) return Genes.XXY;
    if (Number().random(1, 1000) === 1) return Genes.XYY;
    if (Number().random(1, 3500) === 1) return Genes.X0;

    return Genes.XY;
  }

  if (Number().random(1, 1000) === 1) return Genes.XXX;
  if (Number().random(1, 3500) === 1) return Genes.X0;

  return Genes.XX;
}

// TODO: this
export function generateGenetics(): Genetics {
  const genetics = new Genetics();

  return genetics;
}

export function generateName(actor: Actor): Name {
  const name = new Name();

  if (actor.sex === Sex.MALE) {
    name.birth.first = 'John';
    name.birth.last = 'Doe';
  } else {
    name.birth.first = 'Jane';
    name.birth.last = 'Doe';
  }

  return name;
}

export function generateIntelligence() {
  const roll = Number().gaussianPair(25, 2.5);
  const average = (roll[0] + roll[1]) / 2;

  return Math.ceil(average).clamp(-100, 100);
}

export function generateEducation(): number {
  return gaussian(0, 30);
}

function getHairLength(actor: Actor) {
  const hair = {
    armpits: 0,
    body: 0,
    main: 0,
    pubic: 0,
  };

  if (actor.sex === Sex.MALE) {
    hair.armpits = Number().random(1, 8);
    hair.body = Number().random(1, 3);
    hair.main = Number().random(0, 20);
    hair.pubic = Number().random(0, 6);
  } else {
    hair.armpits = Number().random(0, 5);
    hair.body = Number().random(0, 2);
    hair.main = Number().random(0, 60);
    hair.pubic = Number().random(0, 6);
  }

  return hair;
}

function getHairColor(actor: Actor): HairColor {
  const index = races.indexOf(actor.race);

  const randomColor = hairColors[index].random();
  const brownOrRandomColor = gaussian(1, 100, 0.75) > 50 ? HairColor.BROWN : randomColor;

  const color = darkSkin.includes(actor.skin.color)
    ? brownOrRandomColor
    : randomColor;

  if (actor.age.physical > 70) {
    return gaussian(1, 100) > 50
      ? HairColor.WHITE
      : [HairColor.GRAY, HairColor.WHITE].random();
  }

  if (actor.age.physical > 30) {
    return gaussian(1, 100) > 100 - actor.age.physical // the older the actor, the higher the chance of gray hair
      ? [HairColor.GRAY, color].random()
      : color;
  }

  return color;
}

export function generateHair(actor: Actor): Hair {
  const hair = new Hair();

  const hairColor: HairColor = getHairColor(actor);

  hair.armpits.original = hairColor;
  hair.body.original = hairColor;
  hair.eyebrows.original = hairColor;
  hair.main.original = hairColor;
  hair.pubic.original = hairColor;

  hair.armpits.length = getHairLength(actor).armpits;
  hair.body.length = getHairLength(actor).body;
  hair.main.length = getHairLength(actor).main;
  hair.pubic.length = getHairLength(actor).pubic;

  return hair;
}

function getEyeColor(actor: Actor): { left: EyeColor, right: EyeColor } {
  const index = races.indexOf(actor.race);

  const randomColor = eyeColors[index].random();
  const brownOrRandomColor = gaussian(1, 100, 0.75) > 50 ? EyeColor.BROWN : randomColor;

  const color = darkSkin.includes(actor.skin.color)
    ? brownOrRandomColor
    : randomColor;

  const colors = {
    left: color,
    right: color,
  };

  if (Number().random(1, 100) === 1) { // 1% chance of heterochromia
    colors.left = eyeColors[index].random();
    colors.right = eyeColors[index].random();
  }

  return colors;
}

export function generateEyes(actor: Actor): Eyes {
  const eyes = new Eyes();

  eyes.left.color.original = getEyeColor(actor).left;
  eyes.right.color.original = getEyeColor(actor).right;

  return eyes;
}

export function generateEars(): Ears {
  const ears = new Ears();

  ears.left.deaf = Number().random(1, 100) <= 2;
  ears.right.deaf = Number().random(1, 100) <= 2;

  ears.left.hardOfHearing = Number().random(1, 100) <= 5;
  ears.right.hardOfHearing = Number().random(1, 100) <= 5;

  if (Number().random(1, 100) === 1) ears.left.shape = EarShape.DAMAGED;
  if (Number().random(1, 100) === 1) ears.right.shape = EarShape.DAMAGED;

  return ears;
}

export function generateNose(): Nose {
  const nose = new Nose();

  if (Number().random(1, 100) <= 2) nose.smell = false;

  return nose;
}

function getLipSize(actor: Actor): LipSize {
  const lipSizes = [
    LipSize.THIN,
    LipSize.NORMAL,
    LipSize.PRETTY,
    LipSize.PLUSH,
  ];

  return actor.sex === Sex.MALE
    ? lipSizes[gaussian(0, lipSizes.length)]
    : lipSizes[gaussian(0, lipSizes.length, 0.50)];
}

export function generateMouth(actor: Actor): Mouth {
  const mouth = new Mouth();

  const teethTypes = [
    TeethType.NORMAL,
    TeethType.CROOKED,
    TeethType.GAPPED,
  ];

  mouth.lips.color = BaseColor.PINK;
  mouth.lips.size = getLipSize(actor);
  mouth.teeth.color = BaseColor.WHITE;
  mouth.teeth.type = teethTypes[gaussian(0, 3, 2)];
  mouth.throat.capacity = gaussian(1000, 4000, 4).round(200);

  return mouth;
}

export function generateFace(actor: Actor): Face {
  const face = new Face();

  const roll = Number().random(1, 10);

  face.eyes = generateEyes(actor);
  face.ears = generateEars();
  face.nose = generateNose();
  face.mouth = generateMouth(actor);

  if (actor.sex === Sex.MALE) {
    if (roll < 8) face.type = FaceShape.MASCULINE;
    else if (roll === 8) face.type = FaceShape.ANDROGYNOUS;
    else face.type = FaceShape.NORMAL;

    return face;
  }

  if (roll < 2) face.type = FaceShape.ANDROGYNOUS;
  else if (roll < 4) face.type = FaceShape.CUTE;
  else if (roll < 6) face.type = FaceShape.EXOTIC;
  else if (roll < 8) face.type = FaceShape.SENSUAL;
  else face.type = FaceShape.NORMAL;

  return face;
}

export function generateShoulders(actor: Actor): Shoulders {
  const shoulders = new Shoulders();

  const roll = Number().random(1, 10);

  if (actor.sex === Sex.MALE) {
    if (roll < 4) shoulders.type = ShouldersType.VERY_BROAD;
    else if (roll === 4) shoulders.type = ShouldersType.FEMININE;
    else shoulders.type = ShouldersType.BROAD;

    return shoulders;
  }

  if (roll < 4) shoulders.type = ShouldersType.NARROW;
  else if (roll < 6) shoulders.type = ShouldersType.VERY_NARROW;
  else if (roll === 6) shoulders.type = ShouldersType.BROAD;
  else shoulders.type = ShouldersType.FEMININE;

  return shoulders;
}

export function generateChest(actor: Actor): Chest {
  const chest = new Chest();

  if (actor.sex === Sex.MALE) {
    chest.size = Number().random(0, 50);
  } else {
    chest.size = Number().random(200, 750);
  }

  return chest;
}

export function generateBelly(actor: Actor): Belly {
  const belly = new Belly();

  if (actor.sex === Sex.MALE) {
    belly.size = Number().random(0, 50);
  } else {
    belly.size = Number().random(0, 100);
  }

  return belly;
}

export function generateWaist(): Waist {
  const waist = new Waist();

  return waist;
}

export function generateHips(): Hips {
  const hips = new Hips();

  return hips;
}

export function generateCrotch(actor: Actor): Crotch {
  const crotch = new Crotch();

  if (actor.sex === Sex.MALE) {
    crotch.penis = new Penis();
    crotch.vagina = null;
  }
  if (actor.sex === Sex.FEMALE) {
    crotch.vagina = new Vagina();
    crotch.penis = null;
  }

  return crotch;
}

// TODO:
export function generateButt(): Butt {
  const butt = new Butt();

  return butt;
}

// TODO:
export function generateLegs(): Legs {
  const legs = new Legs();

  return legs;
}

function getRaceFromNationality(nationality: string): Race {
  if (nationalities[0].includes(nationality)) return Race.AMERINDIAN;
  if (nationalities[1].includes(nationality)) return Race.ASIAN;
  if (nationalities[2].includes(nationality)) return Race.LATIN_AMERICAN;
  if (nationalities[3].includes(nationality)) return Race.PACIFIC_ISLANDER;
  if (nationalities[4].includes(nationality)) return Race.MALAY;
  if (nationalities[5].includes(nationality)) return Race.INDO_ARYAN;
  if (nationalities[6].includes(nationality)) return Race.BLACK;
  if (nationalities[7].includes(nationality)) return Race.SOUTHERN_EUROPEAN;
  if (nationalities[8].includes(nationality)) return Race.WHITE;
  if (nationalities[9].includes(nationality)) return Race.SEMITIC;
  if (nationalities[10].includes(nationality)) return Race.MIDDLE_EASTERN;

  return Race.INDO_ARYAN;
}

export function generateRace(actor: Actor): Race {
  if (actor.nationality) {
    return getRaceFromNationality(actor.nationality);
  }

  const roll = Number().random(1, 100);

  if (roll < 5) return Race.AMERINDIAN;
  if (roll < 9) return Race.LATIN_AMERICAN;
  if (roll < 11) return Race.PACIFIC_ISLANDER;
  if (roll < 12) return Race.MALAY;
  if (roll < 14) return Race.INDO_ARYAN;
  if (roll < 17) return Race.BLACK;
  if (roll < 18) return Race.SOUTHERN_EUROPEAN;
  if (roll < 22) return Race.WHITE;
  if (roll < 23) return Race.SEMITIC;
  if (roll < 26) return Race.MIDDLE_EASTERN;
  if (roll < 41) return Race.INDO_ARYAN;

  return Race.ASIAN;
}

export function getScars(): Scarring | null {
  let roll = Number().random(1, 100);

  if (roll <= 5) {
    roll = Number().random(1, 5);

    if (roll === 1) return Number().random(1, 20) === 1 ? Scarring.EXTREME : null;
    if (roll === 2) return Number().random(1, 10) === 1 ? Scarring.HEAVY : null;
    if (roll === 3) return Number().random(1, 5) === 1 ? Scarring.LIGHT : null;

    return Scarring.SOME;
  }

  return null;
}

export function generateScarring(): Scars {
  const scars = new Scars();

  scars.burn = getScars();
  scars.chain = getScars();
  scars.cutting = getScars();
  scars.exotic = getScars();
  scars.generic = getScars();
  scars.menacing = getScars();
  scars.surgical = getScars();
  scars.whip = getScars();

  return scars;
}

function getMarkings(actor: Actor): MarkingsType | null {
  const marking = gaussian(1, 100, 1.5) > 50 ? markingTypes.random() : null;

  if (actor.hair.original === HairColor.RED && lightSkin.includes(actor.skin.color)) {
    return gaussian(1, 100, 0.75) > 50 ? markingTypes[Number().random(2, 3)] : marking;
  }

  return marking;
}

export function generateMarkings(actor: Actor): Markings {
  const markings = new Markings();

  markings.arms = getMarkings(actor);
  markings.belly = getMarkings(actor);
  markings.chest = getMarkings(actor);
  markings.crotch = getMarkings(actor);
  markings.face = getMarkings(actor);
  markings.legs = getMarkings(actor);
  markings.shoulders = getMarkings(actor);

  return markings;
}

function getSkinColor(actor: Actor): SkinColor {
  const index = races.indexOf(actor.race);

  return skinColors[index].random();
}

export function generateSkin(actor: Actor): Skin {
  const skin = new Skin();

  skin.color = getSkinColor(actor);
  skin.markings = generateMarkings(actor);
  skin.scars = generateScarring();

  return skin;
}

export function generateNationality(actor: Actor): string {
  const index = races.indexOf(actor.race);

  return nationalities[index].random();
}

export function generateAge(): Age {
  const age = new Age();

  const roll = gaussian(get(min).age, get(max).age, 1.5);

  age.actual = roll;
  age.physical = age.actual;
  age.visual = age.actual;

  return age;
}

export function generateHealth(): Health {
  const health = new Health();

  health.condition = gaussian(50, 100, 0.5);

  health.damage.longTerm = gaussian(0, 20, 2);
  health.damage.shortTerm = gaussian(0, 20, 2);

  health.fatigue = gaussian(0, 25, 2.5);
  health.illness = gaussian(0, 15, 2.5);

  health.injury.major = Number().random(1, 100) <= 2 ? MajorInjury.BROKEN_ARM : null;
  health.injury.minor = Number().random(1, 100) <= 5 ? MinorInjury.BLACK_EYE : null;

  return health;
}

export function generateWeight(): number {
  return gaussian(-50, 150);
}

export function generateHeight(): number {
  return gaussian(140, 190);
}

export function generateMuscles(): number {
  return gaussian(-30, 30);
}

export function generateCounter(actor: Actor): Counter {
  const counter = new Counter();

  const chance = actor.age.actual < 18 ? actor.age.actual : actor.age.actual * 3;

  if (Number().random(1, 100) < chance) return counter;

  if (actor.penis) {
    counter.anal.given.dick = gaussian(0, 20, 2);
    counter.oral.given.dick = gaussian(0, 20, 1.5);

    if (actor.attraction.known) {
      if (actor.attraction.male > 65) {
        counter.anal.received.dick = gaussian(0, 20, 1.5);
        counter.oral.given.dick = gaussian(0, 20, 1.25);
      }

      if (actor.attraction.female > 65) {
        counter.vaginal.given.dick = gaussian(0, 20);
        counter.oral.given.pussy = gaussian(0, 20, 1.5);
      }
    }

    return counter;
  }

  counter.anal.received.dick = gaussian(0, 20, 2);
  counter.oral.received.dick = gaussian(0, 20, 1.25);

  return counter;
}

export function generatePersonality(): Personality {
  const personality = new Personality();

  personality.introversion = Number().random(1, 100);
  personality.sensing = Number().random(1, 100);
  personality.thinking = Number().random(1, 100);
  personality.judging = Number().random(1, 100);

  return personality;
}

export function generateFlaws(): Flaws {
  const flaws = new Flaws();

  if (Number().random(1, 10) === 1) flaws.behavioral = behavioralFlaws.random();
  if (Number().random(1, 10) === 1) flaws.sexual = sexualFlaws.random();

  return flaws;
}

function getBehavioralQuirk(actor: Actor): BehavioralQuirks {
  if (!actor.flaws.behavioral) return behavioralQuirks.random();

  let quirk: BehavioralQuirks = behavioralQuirks.random();

  while (behavioralQuirks.indexOf(quirk) === behavioralFlaws.indexOf(actor.flaws.behavioral)) {
    quirk = behavioralQuirks.random();
  }

  return quirk;
}

function getSexualQuirk(actor: Actor): SexualQuirks {
  if (!actor.flaws.sexual) return sexualQuirks.random();

  let quirk: SexualQuirks = behavioralQuirks.random();

  while (sexualQuirks.indexOf(quirk) === sexualFlaws.indexOf(actor.flaws.sexual)) {
    quirk = sexualQuirks.random();
  }

  return quirk;
}

export function generateQuirks(actor: Actor): Quirks {
  const quirks = new Quirks();

  if (Number().random(1, 20) === 1) quirks.behavioral = getBehavioralQuirk(actor);
  if (Number().random(1, 20) === 1) quirks.sexual = getSexualQuirk(actor);

  return quirks;
}

export function generateFetish(): Fetish | null {
  const fetish = new Fetish();

  if (Number().random(1, 10) > 1) return null;

  fetish.strength = gaussian(1, 100, 2);
  fetish.type = fetishes.random();

  return fetish;
}

function isAsexual(): boolean {
  if (Number().random(1, 100) === 1) return true; // 1% chance of slave being asexual

  return false;
}

function isBisexual(actor: Actor): boolean {
  if (actor.sex === Sex.MALE && Number().random(1, 100) <= 30) return true; // 30% chance of slave being bisexual if gay
  if (Number().random(1, 100) <= 50) return true; // 50% chance of slave being bisexual if lesbian

  return false;
}

function isGay(): boolean {
  if (Number().random(1, 20) === 1) return true; // 5% chance of slave being gay

  return false;
}

const attracted = Number().random(66, 100);
const notAttracted = Number().random(1, 65);

// TODO: could probably be improved
function getMaleAttraction(actor: Actor): {male: number, female: number} {
  if (isAsexual()) return { male: notAttracted, female: notAttracted };

  if (isGay()) {
    if (isBisexual(actor)) return { male: attracted, female: attracted };

    return { male: attracted, female: notAttracted };
  }

  return { male: notAttracted, female: attracted };
}

function getFemaleAttraction(actor: Actor): { male: number, female: number; } {
  if (isAsexual()) return { male: notAttracted, female: notAttracted };

  if (isGay()) {
    if (isBisexual(actor)) return { male: attracted, female: attracted };

    return { male: notAttracted, female: attracted };
  }

  return { male: attracted, female: notAttracted };
}

export function generateAttraction(actor: Actor): Attraction {
  const attraction = new Attraction();

  if (actor.sex === Sex.MALE) {
    attraction.male = getMaleAttraction(actor).male;
    attraction.female = getMaleAttraction(actor).female;

    return attraction;
  }

  attraction.male = getFemaleAttraction(actor).male;
  attraction.female = getFemaleAttraction(actor).female;

  return attraction;
}

export function generateDrive(): number {
  return gaussian(1, 100);
}

export function generateAbstract(actor: Actor): Abstract {
  const abstract = new Abstract();

  abstract.sex = generateSex();
  abstract.genes = generateGenes(actor);
  abstract.genetics = generateGenetics();
  abstract.race = generateRace(actor);
  abstract.skin = generateSkin(actor);
  abstract.age = generateAge();
  abstract.health = generateHealth();
  abstract.weight = generateWeight();
  abstract.height = generateHeight();
  abstract.muscles = generateMuscles();

  return abstract;
}

export function generateUpper(actor: Actor): Upper {
  const upper = new Upper();

  upper.hair = generateHair(actor);
  upper.face = generateFace(actor);
  upper.shoulders = generateShoulders(actor);
  upper.chest = generateChest(actor);
  upper.belly = generateBelly(actor);

  return upper;
}

export function generateLower(actor: Actor): Lower {
  const lower = new Lower();

  lower.crotch = generateCrotch(actor);

  return lower;
}

export function generateSlave(): Slave {
  const slave = new Slave();

  slave.ID = generateID();

  slave.intelligence = generateIntelligence();
  slave.education = generateEducation();
  slave.personality = generatePersonality();
  slave.flaws = generateFlaws();
  slave.fetish = generateFetish();
  slave.drive = generateDrive();

  slave.quirks = generateQuirks(slave);
  slave.attraction = generateAttraction(slave);

  slave.abstract = generateAbstract(slave);
  slave.upper = generateUpper(slave);
  slave.lower = generateLower(slave);

  slave.abstract.counter = generateCounter(slave);

  slave.nationality = generateNationality(slave);

  slave.name = generateName(slave);

  console.log(getMeanHeight(slave.nationality, slave.sex));

  return slave;
}
