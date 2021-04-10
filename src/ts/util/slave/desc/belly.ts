import Actor from '@classes/actor/Actor';

import { Sex } from '@classes/body/nonphysical/Nonphysical';

function mpreg(actor: Actor): string {
  const { He, his } = actor.pronouns;

  if (actor.sex === Sex.MALE
    && actor.belly.pregnancy?.known
    && actor.belly.size < 100) {
    return `${He} has a slight curve to ${his} abdomen, unusual for a male slave.`;
  }

  return '';
}

export default function belly(actor: Actor): string {
  const text: string[] = [];

  text.push(mpreg(actor));

  return text.join(' ');
}
