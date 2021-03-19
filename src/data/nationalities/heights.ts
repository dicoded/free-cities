import heights from './heights.json';

import { Sex } from '../../ts/classes/body/nonphysical/Nonphysical';

export const { male, female } = heights;

export function getMeanHeightBySex(sex: Sex): Map<string, number> {
  const maleMeans = new Map();
  const femaleMeans = new Map();

  // FIXME: figure out a better way to do this
  Object.keys(male).forEach((val, i) => {
    maleMeans.set(val, Object.values(male)[i]);
  });
  Object.keys(female).forEach((val, i) => {
    femaleMeans.set(val, Object.values(female)[i]);
  });

  if (sex === Sex.MALE) return maleMeans;

  return femaleMeans;
}

export function getMeanHeight(nationality: string, sex: Sex) {
  if (sex === Sex.MALE) return getMeanHeightBySex(Sex.MALE).get(nationality);

  return getMeanHeightBySex(Sex.FEMALE).get(nationality);
}
