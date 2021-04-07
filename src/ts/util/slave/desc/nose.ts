import Actor from '../../../classes/actor/Actor';

export default function nose(actor: Actor): string {
  const { He, His, his } = actor.pronouns;

  if (!actor.nose.smell) return `${He} has no sense of smell, but this isn't immediately obvious just by looking at ${his} nose.`;

  return `${His} nose is perfectly ordinary.`;
}
