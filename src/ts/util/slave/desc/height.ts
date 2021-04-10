import Actor from '@classes/actor/Actor';

import { getMeanHeightByNationality } from '@util/slave/heights';

// TODO: this
export default function height(actor: Actor): string {
  const { his } = actor.pronouns;

  const meanHeight = getMeanHeightByNationality(actor.nationality, actor.sex);
  const atHeight = `at ${actor.height.toInches().toFeet()},`;
  const age = actor.age.physical < 16 ? `for ${his} age ${atHeight}` : atHeight;

  if (actor.height < (meanHeight - 15)) return `is petite ${age}`;
  if (actor.height < (meanHeight - 5)) return `is short ${age}`;
  if (actor.height > (meanHeight + 15)) return `is very tall ${age}`;
  if (actor.height > (meanHeight + 5)) return `is tall ${age}`;

  return `is an average height ${age}`;
}
