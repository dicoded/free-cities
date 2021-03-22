import Actor from '../../../classes/actor/Actor';
import { Earwear } from '../../../classes/actor/Accessories';
import { EarShape } from '../../../classes/body/face/Ears';

export default function ears(actor: Actor): string {
  const text: string[] = [];

  const {
    He, His, he, him, his,
  } = actor.pronouns;

  if (actor.ears.both?.shape === null) {
    if (actor.accessories.earwear === null) {
      text.push(`${He} has small unsightly holes on the sides of ${his} head.`);
    } else {
      text.push(`The sides of ${his} head are smooth where ${his} ears should be, but upon closer inspection it is revealed that`);

      if (actor.accessories.earwear === Earwear.HEARING_AIDS) {
        text.push(`${his} ear canals are fitted with hearing aids capped with a skin-matching sheet to obscure the hole.`);
      } else {
        text.push(`${his} ear canals are filled with plugs with skin-matching caps.`);
      }
    }
  } else if (actor.ears.both?.shape === EarShape.DAMAGED) {
    text.push(`${His} outer ears have been severely damaged.`);
  } else if (actor.ears.both?.shape === EarShape.NORMAL) {
    text.push(`${He} has perfectly ordinary ears.`);
  } else if (actor.ears.both?.shape === EarShape.POINTY) {
    text.push(`${His} small, ${['elfin', 'leaf-shaped', 'pointed'].random()} ears are quite cute and give ${him} an exotic appearance.`);
  } else if (actor.ears.both?.shape === EarShape.ELVEN) {
    text.push(`${He} has long, thin elven ears that ${[`tend to droop when ${he} is relaxed or sad`, `tend to waggle up and down when ${he} is excited`, 'twitch at the slightest touch'].random()}.`);
  } else if (actor.ears.both?.shape === EarShape.USHI) {
    text.push(`${He} has long, floppy cow ears.`);
  }

  if (actor.ears.both?.deaf) text.push(`${He} is completely deaf,`);
  else if (actor.ears.both?.hardOfHearing) text.push(`${His} hearing is noticeably impaired,`);

  if (actor.ears.both?.deaf && actor.ears.both.shape === null) text.push(`which is fitting due to ${his} lack of ears.`);
  else text.push(`but this isn't obvious just by looking at ${his} ears.`);

  return text.join(' ');
}
