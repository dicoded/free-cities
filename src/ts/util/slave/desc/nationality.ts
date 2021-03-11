/* eslint-disable max-len */
import Actor from '../../../classes/actor/Actor';

export default function nationality(actor: Actor): string {
  const { He, he, his } = actor.pronouns;

  const text: string[] = [];

  if (actor.nationality === 'slave') text.push(`${He}'s been chattel long enough that slavery is effectively ${his} nationality; ethnically, ${he}'s`);
  else if (actor.nationality === 'Stateless') text.push(`${He} has spent so much time in the Free Cities that their statelessness is effectively ${his} nationality; ethnically, ${he}'s`);
  else if (actor.nationality === 'Zimbabwean') text.push(`${He}'s originally Rhodesian; ethnically, ${he}'s`);
  else if (actor.nationality === 'Vatican') text.push(`${He}'s originally from Vatican City; ethnically, ${he}'s`);
  else text.push(`${He}'s originally ${actor.nationality}; ethnically, ${he}'s`);

  text.push(`${actor.race}, and ${his} skin is`);

  return text.join(' ');
}
