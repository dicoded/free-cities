import {
  getMeanHeightByActor,
  getMeanHeightByNationality,
  getMeanHeightBySex,
} from '../ts/util/slave/heights';

import Actor from '../ts/classes/actor/Actor';
import { Sex } from '../ts/classes/body/nonphysical/Nonphysical';

describe('getMeanHeightByActor', () => {
  it('returns a height based on the actor\'s sex and genes', () => {
    const actor = new Actor();
    actor.sex = Sex.MALE;
    actor.nationality = 'American';

    expect(getMeanHeightByActor(actor)).toBeGreaterThan(0);
  });
  it('throws an error if the actor has no sex or nationality', () => {
    expect(() => getMeanHeightByActor(new Actor())).toThrow();
  });
});

describe('getMeanHeightByNationality', () => {
  it('returns a height based on the nationality and sex given', () => {
    expect(getMeanHeightByNationality('American', Sex.MALE)).toBeGreaterThan(0);
  });
  it('throws an error if the nationality is not in the database', () => {
    expect(() => getMeanHeightByNationality('', Sex.MALE)).toThrow();
  });
});

// TODO: figure out how to test for a Map
describe('getMeanHeightBySex', () => {
  it('returns a height based on the sex given', () => {
    expect(getMeanHeightBySex(Sex.MALE)).toBeDefined();
  });
});
