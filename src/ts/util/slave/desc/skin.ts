import Actor from '../../../classes/actor/Actor';
import Slave from '../../../classes/slave/Slave';

import nationality from './nationality';

import { getMelaninLevel } from '../../../classes/body/nonphysical/skin/Skin';
import { MarkingsType } from '../../../classes/body/nonphysical/skin/Markings';
import Tan from '../../../classes/body/nonphysical/skin/Tan';

import { HairColor } from '@util/color';

function freckled(actor: Actor): string {
  const attractive = getMelaninLevel(actor.skin.color).between(5, 10) && actor.hair.color === HairColor.RED
    ? ', an attractive combination'
    : '';

  if (actor.skin.freckled) {
    return `${actor.skin.color} and ${actor.markings.face === MarkingsType.HEAVILY_FRECKLED
      ? 'heavily '
      : ''}freckled${attractive}.`;
  }

  return `${actor.skin.color}.`;
}

function tanned(actor: Actor): string {
  const { His } = actor.pronouns;

  if (actor.skin.tan === Tan.SUN) return `${His} skin has been tanned to a natural, healthy-looking tone.`;
  if (actor.skin.tan === Tan.SPRAY) return `${His} skin has been tanned with obvious, garish-looking makeup.`;

  return `${His} skin has been tanned.`;
}

export default function skin(actor: Actor): string {
  const text: string[] = [];

  if (actor instanceof Slave && actor.fuckdoll) {
    text.push(
      'The small areas of visible skin are',
      freckled(actor),
    );

    if (actor.skin.tan) text.push(tanned(actor));

    return text.join(' ');
  }

  text.push(
    nationality(actor),
    freckled(actor),
  );

  if (actor.skin.tan) text.push(tanned(actor));

  return text.join(' ');
}
