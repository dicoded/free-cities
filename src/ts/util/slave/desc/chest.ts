import Actor from '@classes/actor/Actor';

export default function chest(actor: Actor): string {
  const text: string[] = [];

  if (!actor) throw new Error();

  return text.join(' ');
}
