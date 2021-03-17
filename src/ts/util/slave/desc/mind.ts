import { get } from 'svelte/store';

import eyes from './eyes';

import Actor from '../../../classes/actor/Actor';
import Slave from '../../../classes/slave/Slave';

import player from '../../../../stores/player.store';
import { Sex } from '../../../classes/body/nonphysical/Nonphysical';

const PC = get(player);

function attraction(slave: Slave): string {
  const { He, he, his } = slave.pronouns;

  const text: string[] = [];

  if (slave.attraction.known) {
    if (slave.drive > 95) text.push(`${He}'s a nymphomaniac.`);
    else if (slave.drive > 80) text.push(`${He}'s a sex addict.`);
    else if (slave.drive > 60) text.push(`${He} has a powerful appetite for sex.`);
    else if (slave.drive > 40) text.push(`${He} has a healthy sex drive.`);
    else if (slave.drive > 20) text.push(`${He} has a weak sex drive.`);
    else text.push(`${He}'s frigid, with little interest in sex.`);

    if (slave.attraction.male > 95) {
      if (slave.attraction.female > 95) {
        text.push(`${He}'s omnisexual, and is passionately attracted to nearly everyone.`);
      } else {
        text.push(`${He}'s passionate about men,`);

        if (slave.attraction.female > 85) text.push('but also thinks most women are hot, too.');
        else if (slave.attraction.female > 65) text.push('but also likes women, too.');
        else if (slave.attraction.female > 35) text.push('but is indifferent to women.');
        else if (slave.attraction.female > 15) text.push('but is unenthusiastic about women.');
        else if (slave.attraction.female > 5) text.push('but is turned off by women.');
        else text.push('but is disgusted by the idea of intimacy with a woman.');
      }
    } else if (slave.attraction.male > 85) {
      text.push(`${He} is aroused by most men,`);

      if (slave.attraction.female > 95) text.push('but is most passionate about women.');
      else if (slave.attraction.female > 85) text.push('and thinks most women are hot, too.');
      else if (slave.attraction.female > 65) text.push('but is indifferent to women.');
      else if (slave.attraction.female > 35) text.push('but is unenthusiastic about women.');
      else if (slave.attraction.female > 15) text.push('and likes women too.');
      else if (slave.attraction.female > 5) text.push('but is turned off by women.');
      else text.push('but is disgusted by the idea of intimacy with a woman.');
    } else if (slave.attraction.male > 65) {
      text.push(`${He} finds men attractive,`);

      if (slave.attraction.female > 95) text.push('but is really passionate about women.');
      else if (slave.attraction.female > 85) text.push('but likes women even more.');
      else if (slave.attraction.female > 65) text.push('and likes women too.');
      else if (slave.attraction.female > 35) text.push('but is indifferent to women.');
      else if (slave.attraction.female > 15) text.push('but is unenthusiastic about women.');
      else if (slave.attraction.female > 5) text.push('but is turned off by women.');
      else text.push('but is disgusted by the idea of intimacy with a woman.');
    } else if (slave.attraction.male > 35) {
      text.push(`${He}'s indifferent to sex with men,`);

      if (slave.attraction.female > 95) text.push('but is passionate about women.');
      else if (slave.attraction.female > 85) text.push('strongly preferring women.');
      else if (slave.attraction.female > 65) text.push('but is attracted to women.');
      else if (slave.attraction.female > 35) text.push('and feels the same about women, too.');
      else if (slave.attraction.female > 15) text.push('but is actually unenthusiastic about women.');
      else if (slave.attraction.female > 5) text.push('but is turned off by women.');
      else text.push('but is disgusted by the idea of intimacy with a woman.');
    } else if (slave.attraction.male > 15) {
      text.push(`${He} considers men's bodies a turnoff,`);

      if (slave.attraction.female > 95) text.push('but is passionate about women.');
      else if (slave.attraction.female > 85) text.push('strongly preferring women.');
      else if (slave.attraction.female > 65) text.push('but is attracted to women.');
      else if (slave.attraction.female > 35) text.push(`and ${he} is indifferent to women.`);
      else if (slave.attraction.female > 15) text.push('and is unenthusiastic about women.');
      else text.push('and is actually disgusted by women\'s.');
    } else {
      text.push(`${He} finds men sexually disgusting,`);

      if (slave.attraction.female > 95) text.push('but is passionate about women.');
      else if (slave.attraction.female > 85) text.push('strongly preferring women.');
      else if (slave.attraction.female > 65) text.push('but is attracted to women.');
      else if (slave.attraction.female > 35) text.push(`and ${he} is indifferent to women.`);
      else if (slave.attraction.female > 15) text.push('and is unenthusiastic about women.');
      else if (slave.attraction.female > 5) text.push('and has almost as much trouble with women.');
      else text.push(`${He} finds both men's and women's intimate areas quite repulsive, an unfortunate state of affairs!`);
    }

    return text.join(' ');
  }

  return `You do not understand ${his} sexuality very well.`;
}

export default function mind(actor: Actor): string {
  const { His, he, his } = actor.pronouns;

  const text: string[] = [];

  text.push(eyes(actor));

  if (actor instanceof Slave && actor.isMindbroken) {
    text.push(`However, ${his} mind is fundamentally broken; everything ${he} experiences will quickly be forgotten.`);
  }

  if (actor instanceof Slave) {
    text.push(
      attraction(actor),
    );
  }

  if (actor.canSee && actor.attraction.known) {
    if (actor.attraction.female > 85 && PC.chest.size >= 400) text.push(`${His} attraction to women is obvious: ${he} can't seem to stop staring at your breasts.`);
    else if (actor.attraction.male > 85 && PC.penis !== null) text.push(`${His} attraction to men is obvious: ${he} can't seem to stop glancing down at your package.`);
    else if (actor.attraction.male > 85 && PC.sex === Sex.MALE && PC.chest.size < 300) text.push(`${His} attraction to men is obvious: ${he} can't seem to stop checking out your broad chest.`);
  }

  return text.join(' ');
}
