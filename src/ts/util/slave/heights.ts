import heights from '@data/nationalities/heights.json';

import { Sex, Genes } from '@classes/body/nonphysical/Nonphysical';

import Body from '@classes/body/Body';
import Actor from '@classes/actor/Actor';

export const { male, female } = heights;

export function getMeanHeightMap(obj: Object): Map<string, number> {
  const map = new Map();
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  keys.forEach((val, i) => {
    map.set(val, values[i]);
  });

  return map;
}

export function getMeanHeightBySex(sex: Sex): Map<string, number> {
  if (sex === Sex.MALE) return getMeanHeightMap(male);

  return getMeanHeightMap(female);
}

export function getMeanHeightByBody(body: Body): number {
  let mean = 170;
  if (body instanceof Actor) mean = getMeanHeightBySex(body.sex).get(body.nationality) ?? 170;

  const randomMean = Number().gaussian(mean - 10, mean + 10);

  if (body.genes === Genes.X0) return randomMean * 0.93;
  if (body.genes === Genes.XXX || body.genes === Genes.XXY) return randomMean * 1.03;
  if (body.genes === Genes.XYY) return randomMean * 1.04;

  return randomMean;
}

export function getMeanHeightByNationality(nationality: string, sex: Sex): number {
  const mean = getMeanHeightBySex(sex).get(nationality) ?? 0;
  const randomMean = Number().gaussian(mean - 10, mean + 10);

  if (mean === 0) throw new Error(`Error finding mean height for nationality '${nationality}' with sex '${sex}'.`);

  return randomMean;
}
