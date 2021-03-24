import Actor from '../../../classes/actor/Actor';

// TODO: this
export default function height(actor: Actor): string {
  const text: string[] = [];

  text.push(
    `${(actor.height / 100).toPrecision(2)}m tall.`,
  );

  return text.join(' ');
}
