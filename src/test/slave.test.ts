// TODO: these tests could probably use some expanding

import Hair from '@classes/body/upper/Hairs';
import Eyes from '@classes/body/face/Eyes';
import Ears from '@classes/body/face/Ears';
import Nose from '@classes/body/face/Nose';
import Mouth from '@classes/body/face/Mouth';
import Face from '@classes/body/face/Face';
import Shoulders from '@classes/body/upper/Shoulders';
import Chest from '@classes/body/upper/Chest';
import Belly from '@classes/body/upper/Belly';

import Waist from '@classes/body/lower/Waist';
import Hips from '@classes/body/lower/Hips';
import Crotch from '@classes/body/lower/crotch/Crotch';
import Butt from '@classes/body/lower/Butt';
import Legs from '@classes/body/lower/Legs';

import Skin from '@classes/body/nonphysical/skin/Skin';
import Scarring from '@classes/body/nonphysical/skin/Scars';
import Markings from '@classes/body/nonphysical/skin/Markings';
import Health from '@classes/body/nonphysical/Health';
import Genetics from '@classes/body/nonphysical/Genetics';
import Counter from '@classes/body/nonphysical/counter/Counter';
import Personality from '@classes/actor/Personality';

import Abstract, { Sex } from '@classes/body/nonphysical/Nonphysical';
import Upper from '@classes/body/upper/UpperBody';
import Lower from '@classes/body/lower/LowerBody';
import Slave from '@classes/slave/Slave';

import '@extensions/array.extension';

import {
  generateID,
  generateSex,
  generateGenes,
  generateGenetics,
  generateName,
  generateIntelligence,
  generateHair,
  generateEyes,
  generateEars,
  generateNose,
  generateMouth,
  generateFace,
  generateShoulders,
  generateChest,
  generateBelly,
  generateWaist,
  generateHips,
  generateCrotch,
  generateButt,
  generateLegs,
  generateRace,
  generateScarring,
  generateMarkings,
  generateSkin,
  generateNationality,
  generateAge,
  generateHealth,
  generateWeight,
  generateHeight,
  generateMuscles,
  generateCounter,
  generatePersonality,
  generateAbstract,
  generateUpper,
  generateLower,
  generateSlave,
} from '@util/slave/generate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /** Use when you want to ensure a value is a boolean. */
      toBeBoolean(): R;
    }
  }
}

expect.extend({
  toBeBoolean(received) {
    return typeof received === 'boolean' ? {
      message: () => `expected ${received} to be boolean`,
      pass: true,
    } : {
      message: () => `expected ${received} to be boolean`,
      pass: false,
    };
  },
});

describe('generateID', () => {
  it('returns a unique ID', () => {
    expect(generateID()).toBeGreaterThan(0);
    expect(generateID()).not.toBe(generateID()); // a generated ID should never be the same as an existing ID
  });
});

describe('generateName', () => {
  it('returns a new name based on the given body\'s sex', () => {
    expect(generateName(new Slave()).full).toBeDefined();
  });
});

describe('generateIntelligence', () => {
  it('returns a new intelligence value', () => {
    expect(generateIntelligence()).toBeDefined();
  });
});

describe('generateSex', () => {
  it('returns either male or female', () => {
    expect(generateSex()).toBeTruthy();
  });
});

describe('generateGenes', () => {
  it('returns one of a selection of genes', () => {
    expect(generateGenes(new Slave())).toBeTruthy();
  });
});

describe('generateGenetics', () => {
  it('returns a new genetics instance', () => {
    expect(generateGenetics(new Slave())).toBeInstanceOf(Genetics);
  });
});

describe('generateHair', () => {
  it('returns a hair instance based on the given body\'s properties', () => {
    expect(generateHair(new Slave())).toBeInstanceOf(Hair);
    expect(generateHair(new Slave()).main.color).toBeTruthy();
    expect(generateHair(new Slave()).pubic.length).toBeGreaterThanOrEqual(0);
    expect(generateHair(new Slave()).body.original).toBeTruthy();
    expect(generateHair(new Slave()).eyebrows.style).toBeTruthy();
    expect(generateHair(new Slave()).armpits.length).toBeGreaterThanOrEqual(0);
  });
});

describe('generateEyes', () => {
  it('returns a new set of eye instances based on the given body\'s race and ethnicity', () => {
    expect(generateEyes(new Slave())).toBeInstanceOf(Eyes);
    expect(generateEyes(new Slave()).left.color.original).toBeTruthy();
    expect(generateEyes(new Slave()).right.nearsighted).toBeBoolean();
    expect(generateEyes(new Slave()).left.blind).toBeBoolean();
    expect(generateEyes(new Slave()).right.type).toBeTruthy();
  });
});

describe('generateEars', () => {
  it('returns a new set of random ears', () => {
    expect(generateEars()).toBeInstanceOf(Ears);
  });
});

describe('generateNose', () => {
  it('returns a new random nose', () => {
    expect(generateNose()).toBeInstanceOf(Nose);
  });
});

describe('generateMouth', () => {
  it('returns a new random mouth', () => {
    expect(generateMouth(new Slave())).toBeInstanceOf(Mouth);
  });
});

describe('generateFace', () => {
  it('returns a face instance based on the given body\'s properties', () => {
    expect(generateFace(new Slave())).toBeInstanceOf(Face);
    expect(generateFace(new Slave()).beauty).toBeGreaterThanOrEqual(-100);
    expect(generateFace(new Slave()).beauty).toBeLessThanOrEqual(100);
  });
});

describe('generateShoulders', () => {
  it('returns a shoulders instance based on the given body\'s properties', () => {
    expect(generateShoulders(new Slave())).toBeInstanceOf(Shoulders);
    expect(generateShoulders(new Slave()).type).toBeTruthy();
  });
});

describe('generateChest', () => {
  it('returns a chest instance based on the given body\'s properties', () => {
    expect(generateChest(new Slave())).toBeInstanceOf(Chest);
    expect(generateChest(new Slave()).size).toBeGreaterThanOrEqual(0);
  });
});

describe('generateBelly', () => {
  it('returns a belly instance based on the given body\'s properties', () => {
    expect(generateBelly(new Slave())).toBeInstanceOf(Belly);
    expect(generateBelly(new Slave()).size).toBeGreaterThanOrEqual(0);
  });
});

describe('generateWaist', () => {
  it('returns a waist instance based on the given body\'s properties', () => {
    expect(generateWaist(new Slave())).toBeInstanceOf(Waist);
    expect(generateWaist(new Slave()).size).toBeGreaterThanOrEqual(-100);
    expect(generateWaist(new Slave()).size).toBeLessThanOrEqual(100);
  });
});

describe('generateHips', () => {
  it('returns a hips instance based on the given body\'s properties', () => {
    expect(generateHips(new Slave())).toBeInstanceOf(Hips);
    expect(generateHips(new Slave()).size).toBeTruthy();
  });
});

describe('generateCrotch', () => {
  it('returns a crotch instance based on the given body\'s properties', () => {
    expect(generateCrotch(new Slave())).toBeInstanceOf(Crotch);
    expect(generateCrotch(new Slave()).anus.capacity).toBeGreaterThanOrEqual(0);
    expect(generateCrotch(new Slave()).anus.prostate).toBeTruthy();
    expect(generateCrotch(new Slave()).anus.virgin).toBeBoolean();
  });
});

describe('generateButt', () => {
  it('returns a butt instance based on the given body\'s properties', () => {
    expect(generateButt(new Slave())).toBeInstanceOf(Butt);
    expect(generateButt(new Slave()).size).toBeGreaterThanOrEqual(0);
  });
});

describe('generateLegs', () => {
  it('returns a legs instance based on the given body\'s properties', () => {
    expect(generateLegs()).toBeInstanceOf(Legs);
    expect(generateLegs().heeled).toBeBoolean();
    expect(generateLegs().left.type).toBeTruthy();
  });
});

describe('generateRace', () => {
  it('returns a race based on the given body\'s properties', () => {
    expect(generateRace(new Slave())).toBeTruthy();
  });
});

describe('generateScarring', () => {
  it('returns a new scars instance with random scars', () => {
    expect(generateScarring()).toBeInstanceOf(Scarring);
  });
});

describe('generateMarkings', () => {
  it('returns a markings instance with random marks', () => {
    expect(generateMarkings(new Slave())).toBeInstanceOf(Markings);
  });
});

describe('generateSkin', () => {
  it('returns a skin instance based on the given body\'s properties', () => {
    expect(generateSkin(new Slave())).toBeInstanceOf(Skin);
    expect(generateSkin(new Slave()).color).toBeTruthy();
  });
});

describe('generateNationality', () => {
  it('returns a nationality based on the given body\'s properties', () => {
    expect(generateNationality(new Slave())).toBeTruthy();
  });
});

describe('generateAge', () => {
  it('returns a random age', () => {
    expect(generateAge().actual).toBeGreaterThan(0);
    expect(generateAge().actual).toBeLessThanOrEqual(100);
  });
});

describe('generateHealth', () => {
  it('returns a random health instance', () => {
    expect(generateHealth()).toBeInstanceOf(Health);
    expect(generateHealth().condition).toBeGreaterThanOrEqual(0);
    expect(generateHealth().condition).toBeLessThanOrEqual(100);
    expect(generateHealth().damage.longTerm).toBeGreaterThanOrEqual(0);
    expect(generateHealth().damage.longTerm).toBeLessThanOrEqual(100);
    expect(generateHealth().damage.shortTerm).toBeGreaterThanOrEqual(0);
    expect(generateHealth().damage.shortTerm).toBeLessThanOrEqual(100);
    expect(generateHealth().fatigue).toBeGreaterThanOrEqual(0);
    expect(generateHealth().fatigue).toBeLessThanOrEqual(100);
    expect(generateHealth().illness).toBeGreaterThanOrEqual(0);
    expect(generateHealth().illness).toBeLessThanOrEqual(100);
  });
});

describe('generateWeight', () => {
  it('returns a random weight', () => {
    expect(generateWeight()).toBeGreaterThan(-100);
  });
});

describe('generateHeight', () => {
  it('returns a random height', () => {
    const slave = new Slave();
    slave.sex = Sex.MALE;
    slave.nationality = 'American';

    expect(generateHeight(slave)).toBeGreaterThan(0);
  });
});

describe('generateMuscles', () => {
  it('returns a random muscles value', () => {
    expect(generateMuscles()).toBeGreaterThan(-100);
    expect(generateMuscles()).toBeLessThanOrEqual(100);
  });
});

describe('generateCounter', () => {
  it('returns a random counter instance based on the given body\'s properties', () => {
    expect(generateCounter(new Slave())).toBeInstanceOf(Counter);
    expect(generateCounter(new Slave()).anal.given.dick).toBeGreaterThanOrEqual(0);
  });
});

describe('generatePersonality', () => {
  it('returns a random personality', () => {
    expect(generatePersonality()).toBeInstanceOf(Personality);
    expect(generatePersonality().type).toBeDefined();
    expect(generatePersonality().extroverted).toBeBoolean();
  });
});

describe('generateAbstract', () => {
  it('returns a new abstract instance based on the given body\'s properties', () => {
    expect(generateAbstract(new Slave())).toBeInstanceOf(Abstract);
  });
});

describe('generateUpper', () => {
  it('returns a new upper body', () => {
    expect(generateUpper(new Slave())).toBeInstanceOf(Upper);
  });
});

describe('generateLower', () => {
  it('returns a new lower body', () => {
    expect(generateLower(new Slave())).toBeInstanceOf(Lower);
  });
});

describe('generateSlave', () => {
  it('creates a new slave instance based on the given body', () => {
    expect(generateSlave()).toBeInstanceOf(Slave);
    expect(generateSlave().mindbroken).toBeBoolean();
  });
});
