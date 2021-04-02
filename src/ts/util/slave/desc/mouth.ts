import { get } from 'svelte/store';

import Actor from '../../../classes/actor/Actor';

import pc from '../../../../stores/player.store';

const PC = get(pc);

function lips(actor: Actor): string {
  const { He, his } = actor.pronouns;

  if (actor.lips.size <= 10) return `${He} has thin, unattractive lips.`;
  if (actor.lips.size <= 20) return `${He} has normal lips.`;
  if (actor.lips.size <= 40) return `${He} has full, attractive lips.`;
  if (actor.lips.size <= 70) return `${He} has plump, beestung lips.`;
  if (actor.lips.size <= 95) return `${He} has huge, obviously augmented lips.`;

  return `${He} has a facepussy: ${his} lips are so huge that they're always a bit parted in the middle, forming a moist, inviting hole${PC.penis ? ' for cock' : ''}.`;
}

export default function mouth(actor: Actor): string {
  const text: string[] = [];

  text.push(lips(actor));

  return text.join(' ');
}
