import { get } from 'svelte/store';

import eyes from './eyes';
import sexuality from './sexuality';

import Actor from '@classes/actor/Actor';
import Slave from '@classes/slave/Slave';

import player from '@stores/player.store';
import { Sex } from '@classes/body/nonphysical/Nonphysical';

const PC = get(player);

export default function mind(actor: Actor): string {
  const { His, he, his } = actor.pronouns;

  const text: string[] = [];

  text.push(eyes(actor));

  if (actor instanceof Slave && actor.isMindbroken) {
    text.push(`However, ${his} mind is fundamentally broken; everything ${he} experiences will quickly be forgotten.`);
  }

  if (actor instanceof Slave) {
    text.push(
      sexuality(actor),
    );
  }

  if (actor.canSee && actor.attraction.known) {
    if (actor.attraction.female > 85 && PC.chest.size >= 400) text.push(`${His} attraction to women is obvious: ${he} can't seem to stop staring at your breasts.`);
    else if (actor.attraction.male > 85 && PC.penis !== null) text.push(`${His} attraction to men is obvious: ${he} can't seem to stop glancing down at your package.`);
    else if (actor.attraction.male > 85 && PC.sex === Sex.MALE && PC.chest.size < 300) text.push(`${His} attraction to men is obvious: ${he} can't seem to stop checking out your broad chest.`);
  }

  return text.join(' ');
}
