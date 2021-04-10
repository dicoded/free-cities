import Actor from '@classes/actor/Actor';

// TODO:

export default function personality(actor: Actor): string {
  const text: string[] = [];

  if (!actor) throw new Error();

  return text.join(' ');
}
