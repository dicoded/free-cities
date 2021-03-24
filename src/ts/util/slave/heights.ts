import heights from '../../../data/nationalities/heights.json';

import { Sex, Genes } from '../../classes/body/nonphysical/Nonphysical';

import Actor from '../../classes/actor/Actor';

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

export function getMeanHeightByActor(actor: Actor): number {
  const mean = getMeanHeightBySex(actor.sex).get(actor.nationality) ?? 0;
  const randomMean = Number().gaussian(mean - 10, mean + 10);

  if (actor.genes === Genes.X0) return randomMean * 0.93;
  if (actor.genes === Genes.XXX || actor.genes === Genes.XXY) return randomMean * 1.03;
  if (actor.genes === Genes.XYY) return randomMean * 1.04;

  if (mean === 0) throw new Error(`Error finding mean height for actor with ID ${actor.ID}.`);

  return randomMean;
}

export function getMeanHeightByNationality(nationality: string, sex: Sex): number {
  const mean = getMeanHeightBySex(sex).get(nationality) ?? 0;
  const randomMean = Number().gaussian(mean - 10, mean + 10);

  if (mean === 0) throw new Error(`Error finding mean height for nationality '${nationality}' with sex '${sex}'.`);

  return randomMean;
}
