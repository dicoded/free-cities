import { get } from 'svelte/store';

import Name from '../../classes/actor/Name';
import Personality from '../../classes/actor/Personality';

import Eyes from '../../classes/body/face/Eyes';
import Ears from '../../classes/body/face/Ears';
import Nose from '../../classes/body/face/Nose';
import Mouth from '../../classes/body/face/Mouth';
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
import Markings from '../../classes/body/nonphysical/skin/Markings';
import Health, { MajorInjury, MinorInjury } from '../../classes/body/nonphysical/Health';
import Genetics from '../../classes/body/nonphysical/Genetics';
import Counter from '../../classes/body/nonphysical/counter/Counter';

import Actor from '../../classes/actor/Actor';
import Upper from '../../classes/body/upper/UpperBody';
import Lower from '../../classes/body/lower/LowerBody';
import Slave from '../../classes/slave/Slave';

import { entityID, min, max } from '../../../stores/global.store';
import see from '../../../stores/see.store';

import { SkinColor, HairColor, EyeColor } from '../color';
import nationalities from '../../../data/nationalities/nationality';

// TODO: add in better range distribution (bell curve?)

// Generator functions

export function generateID(): number {
  const id = get(entityID);

  entityID.update((i) => i + 1);

  return id;
}

export function generateSex(): Sex {
  if (Number().random(0, 99) < get(see).dicks) {
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
    if (Number().random(1, 3500) === 1) return Genes.X0;
    if (Number().random(1, 1000) === 1) return Genes.XYY;
    if (Number().random(1, 750) === 1) return Genes.XXY;

    return Genes.XY;
  }

  if (Number().random(1, 3500) === 1) return Genes.X0;
  if (Number().random(1, 1000) === 1) return Genes.XXX;

  return Genes.XX;
}

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

// TODO: add parameters?
export function generateIntelligence() {
  const mean = 0;
  const minMult = -3.0;
  const maxMult = 3.0;
  const skew = 0.0;
  const spread = 45;
  const minIntelligence = -101;
  const maxIntelligence = 100;

  function skewedGaussian(s: number) {
    const randoms = Number().gaussianPair();

    if (s === 0) {
      return randoms[0];
    }

    const delta = s / Math.sqrt(1 + s * s);
    const result = delta * randoms[0] + Math.sqrt(1 - delta * delta) * randoms[1];

    return randoms[0] >= 0 ? result : -result;
  }

  function multGenerator() {
    let result = skewedGaussian(skew);

    while (result < minMult || result > maxMult) result = skewedGaussian(skew);

    return result;
  }

  function getIntelligence() {
    let result = multGenerator() * spread * mean;

    while (result < minIntelligence || result > maxIntelligence) result = multGenerator() * spread * mean;

    return Math.ceil(result);
  }

  return getIntelligence();
}

// TODO: add in race support
export function generateHair(actor: Actor): Hair {
  const hair = new Hair();
  const roll = Number().random(1, 100);

  let hairColor: HairColor;

  if (roll < 20) {
    hairColor = HairColor.BLACK;
  } else if (roll < 39) {
    hairColor = HairColor.BLOND;
  } else if (roll < 58) {
    hairColor = HairColor.BROWN;
  } else if (roll < 77) {
    hairColor = HairColor.RED;
  } else if (roll < 96) {
    hairColor = HairColor.GRAY;
  } else {
    hairColor = HairColor.WHITE;
  }

  hair.armpits.original = hairColor;
  hair.body.original = hairColor;
  hair.eyebrows.original = hairColor;
  hair.main.original = hairColor;
  hair.pubic.original = hairColor;

  if (actor.sex === Sex.MALE) {
    hair.armpits.length = Number().random(1, 8);
    hair.body.length = Number().random(1, 3);
    hair.main.length = Number().random(0, 20);
    hair.pubic.length = Number().random(0, 6);
  } else {
    hair.armpits.length = Number().random(0, 5);
    hair.body.length = Number().random(0, 2);
    hair.main.length = Number().random(0, 60);
    hair.pubic.length = Number().random(0, 6);
  }

  return hair;
}

export function generateEyes(actor: Actor): Eyes {
  const eyes = new Eyes();

  switch (actor.race) {
    case Race.SOUTHERN_EUROPEAN:
      eyes.left.color.original = EyeColor.GREEN;
      eyes.right.color.original = EyeColor.GREEN;
      break;
    case Race.WHITE:
      eyes.left.color.original = EyeColor.BLUE;
      eyes.right.color.original = EyeColor.BLUE;
      break;
    default:
      eyes.left.color.original = EyeColor.BROWN;
      eyes.right.color.original = EyeColor.BROWN;
      break;
  }

  return eyes;
}

export function generateEars(): Ears {
  const ears = new Ears();

  return ears;
}

export function generateNose(): Nose {
  const nose = new Nose();

  return nose;
}

export function generateMouth(): Mouth {
  const mouth = new Mouth();

  return mouth;
}

export function generateFace(actor: Actor): Face {
  const face = new Face();

  if (actor.sex === Sex.MALE) {
    face.type = FaceShape.MASCULINE;
  } else {
    face.type = FaceShape.NORMAL;
  }

  face.eyes = generateEyes(actor);
  face.ears = generateEars();
  face.nose = generateNose();
  face.mouth = generateMouth();

  return face;
}

// TODO: expand this
export function generateShoulders(actor: Actor): Shoulders {
  const shoulders = new Shoulders();

  if (actor.sex === Sex.MALE) {
    shoulders.type = ShouldersType.BROAD;
  } else {
    shoulders.type = ShouldersType.FEMININE;
  }

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

export function generateButt(): Butt {
  const butt = new Butt();

  return butt;
}

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
  if (roll < 19) return Race.WHITE;
  if (roll < 21) return Race.SEMITIC;
  if (roll < 26) return Race.MIDDLE_EASTERN;
  if (roll < 41) return Race.INDO_ARYAN;

  return Race.ASIAN;
}

export function getScars(): Scarring | null {
  let roll = Number().random(1, 100);

  // TODO: tweak this number
  // TODO: heavier scars have less chance?
  // each scar has a 5% chance of appearing
  if (roll <= 5) {
    roll = Number().random(1, 4);

    switch (roll) {
      case 1:
        return Scarring.EXTREME;
      case 2:
        return Scarring.HEAVY;
      case 3:
        return Scarring.LIGHT;
      default:
        return Scarring.SOME;
    }
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

export function generateMarkings(): Markings {
  const markings = new Markings();

  return markings;
}

// TODO: less verbose way?
export function generateSkin(actor: Actor): Skin {
  const skin = new Skin();

  switch (actor.race) {
    case Race.ASIAN:
      skin.color = SkinColor.VERY_FAIR;
      break;
    case Race.BLACK:
      skin.color = SkinColor.BLACK;
      break;
    case Race.SOUTHERN_EUROPEAN:
      skin.color = SkinColor.WHITE;
      break;
    case Race.INDO_ARYAN:
      skin.color = SkinColor.BRONZE;
      break;
    case Race.MALAY:
      skin.color = SkinColor.OLIVE;
      break;
    case Race.MIXED_RACE:
      skin.color = SkinColor.EBONY;
      break;
    case Race.SEMITIC:
      skin.color = SkinColor.TAN;
      break;
    case Race.WHITE:
      skin.color = SkinColor.FAIR;
      break;
    default:
      skin.color = SkinColor.BROWN;
      break;
  }

  skin.scars = generateScarring();
  skin.markings = generateMarkings();

  return skin;
}

export function generateNationality(actor: Actor): string {
  const index = {
    Amerindian: 0,
    Asian: 1,
    black: 2,
    'Indo-Aryan': 3,
    'Latin American': 4,
    Malay: 5,
    'Middle Eastern': 6,
    'mixed race': 7,
    'Pacific Islander': 8,
    Semitic: 9,
    'Southern European': 10,
    white: 11,
  };

  const race = index[actor.race];

  return nationalities[race].random();
}

export function generateAge(): Age {
  const age = new Age();

  if (get(max).age > 998) {
    max.set({
      age: 42,
    });
  }

  const roll = Number().random(get(min).age, get(max).age);

  age.actual = roll;
  age.physical = age.actual;
  age.visual = age.actual;

  return age;
}

// TODO: go over these numbers again
export function generateHealth(): Health {
  const health = new Health();

  health.condition = Number().random(50, 100);
  health.damage.longTerm = Number().random(0, 20);
  health.damage.shortTerm = Number().random(0, 20);
  health.fatigue = Number().random(0, 25);
  health.illness = Number().random(0, 15);
  // TODO: add more randomization here
  health.injury.major = Number().random(1, 100) < 5 ? MajorInjury.BROKEN_ARM : null;
  health.injury.minor = Number().random(1, 100) < 10 ? MinorInjury.BLACK_EYE : null;

  return health;
}

export function generateWeight(): number {
  return Number().random(-30, 30);
}

export function generateHeight(): number {
  return Number().random(140, 190);
}

export function generateMuscles(): number {
  return Number().random(-30, 30);
}

// TODO: expand this
export function generateCounter(): Counter {
  const counter = new Counter();

  counter.anal.received.dick = Number().random(0, 20);

  return counter;
}

export function generatePersonality(): Personality {
  const personality = new Personality();

  return personality;
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
  abstract.counter = generateCounter();

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

  slave.abstract = generateAbstract(slave);
  slave.upper = generateUpper(slave);
  slave.lower = generateLower(slave);

  slave.nationality = generateNationality(slave);

  slave.name = generateName(slave);

  return slave;
}
