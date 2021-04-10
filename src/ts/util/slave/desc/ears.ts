import Actor from '../../../classes/actor/Actor';
import { Earwear } from '../../../classes/actor/Accessories';
import { EarShape } from '../../../classes/body/face/Ears';

function getNoEars(actor: Actor): string {
  const { He, his } = actor.pronouns;

  if (actor.accessories.earwear === null) {
    return `${He} has small unsightly holes on the sides of ${his} head.`;
  }

  const text: string[] = [];

  text.push(`The sides of ${his} head are smooth where ${his} ears should be, but upon closer inspection it is revealed that`);

  if (actor.accessories.earwear === Earwear.HEARING_AIDS) {
    text.push(`${his} ear canals are fitted with hearing aids capped with a skin-matching sheet to obscure the hole.`);
  } else {
    text.push(`${his} ear canals are filled with plugs with skin-matching caps.`);
  }

  return text.join(' ');
}

function getEarShape(actor: Actor): string {
  const {
    He, His, he, him,
  } = actor.pronouns;

  if (actor.ears.both?.shape === null) return getNoEars(actor);
  if (actor.ears.both?.shape === EarShape.DAMAGED) return `${His} outer ears have been severely damaged.`;
  if (actor.ears.both?.shape === EarShape.POINTY) return `${His} small, ${['elfin', 'leaf-shaped', 'pointed'].random()} ears are quite cute and give ${him} an exotic appearance.`;
  if (actor.ears.both?.shape === EarShape.ELVEN) return `${He} has long, thin elven ears that ${[`tend to droop when ${he} is relaxed or sad`, `tend to waggle up and down when ${he} is excited`, 'twitch at the slightest touch'].random()}.`;
  if (actor.ears.both?.shape === EarShape.USHI) return `${He} has long, floppy cow ears.`;

  return `${He} has perfectly ordinary ears.`;
}

function getHearing(actor: Actor): string {
  const { his } = actor.pronouns;

  if (actor.ears.both?.deaf && actor.ears.both.shape === null) return `which is fitting due to ${his} lack of ears.`;

  return `but this isn't obvious just by looking at ${his} ears.`;
}

// TODO: add support for just one ear
export default function ears(actor: Actor): string {
  const text: string[] = [];

  const { He, His } = actor.pronouns;

  text.push(getEarShape(actor));

  if (actor.ears.both?.deaf || actor.ears.both?.hardOfHearing) {
    if (actor.ears.both?.deaf) text.push(`${He} is completely deaf,`);
    else if (actor.ears.both?.hardOfHearing) text.push(`${His} hearing is noticeably impaired,`);

    text.push(getHearing(actor));
  }

  return text.join(' ');
}
