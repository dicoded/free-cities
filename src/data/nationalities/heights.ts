import heights from './heights.json';

import { Sex, Genes } from '../../ts/classes/body/nonphysical/Nonphysical';

import Actor from '../../ts/classes/actor/Actor';

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

export function getMeanHeightByGenes(actor: Actor): number {
  const mean = getMeanHeightBySex(actor.sex).get(actor.nationality) ?? 0;

  if (actor.genes === Genes.X0) return mean * 0.93;
  if (actor.genes === Genes.XXX || actor.genes === Genes.XXY) return mean * 1.03;
  if (actor.genes === Genes.XYY) return mean * 1.04;

  if (mean === 0) throw new Error(`Error finding mean height for actor with ID ${actor.ID} in getMeanHeightByGenes().`);

  return mean;
}

export function getMeanHeight(nationality: string, sex: Sex, actor: Actor | null): number | undefined {
  if (actor) return getMeanHeightByGenes(actor);

  return getMeanHeightBySex(sex).get(nationality) ?? 0;
}
