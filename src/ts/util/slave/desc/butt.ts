import Actor from '../../../classes/actor/Actor';

// TODO:

export default function butt(actor: Actor): string {
  const text: string[] = [];

  if (actor.butt.size < 650) text.push('');

  return text.join(' ');
}
