import Actor from '../../../classes/actor/Actor';

export default function nose(actor: Actor): string {
  const { He, his } = actor.pronouns;

  const text: string[] = [];

  text.push(`${He} has no sense of smell, but this isn't immediately obvious just by looking at ${his} nose.`);

  return text.join(' ');
}
