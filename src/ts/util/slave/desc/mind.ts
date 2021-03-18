import { get } from 'svelte/store';

import eyes from './eyes';

import Actor from '../../../classes/actor/Actor';
import Slave from '../../../classes/slave/Slave';

import player from '../../../../stores/player.store';
import { Sex } from '../../../classes/body/nonphysical/Nonphysical';

const PC = get(player);

function getDrive(slave: Slave): string {
  const { He } = slave.pronouns;

  if (slave.drive > 95) return `${He}'s a nymphomaniac.`;
  if (slave.drive > 80) return `${He}'s a sex addict.`;
  if (slave.drive > 60) return `${He} has a powerful appetite for sex.`;
  if (slave.drive > 40) return `${He} has a healthy sex drive.`;
  if (slave.drive > 20) return `${He} has a weak sex drive.`;

  return `${He}'s frigid, with little interest in sex.`;
}

function getMaleAttraction(slave: Slave): string {
  const { He } = slave.pronouns;

  if (slave.attraction.male < 95) {
    if (slave.attraction.female < 95) return `${He}'s omnisexual, and is passionately attracted to nearly everyone.`;

    return `${He}'s passionate about men,`;
  }

  if (slave.attraction.male < 85) return `${He} is aroused by most men,`;
  if (slave.attraction.male < 65) return `${He} finds men attractive,`;
  if (slave.attraction.male < 35) return `${He}'s indifferent to sex with men,`;
  if (slave.attraction.male < 15) return `${He} considers men's bodies a turnoff,`;

  return `${He} finds men sexually disgusting,`;
}

function getPassionate(slave: Slave): string {
  if (slave.attraction.female > 85) return `${getMaleAttraction(slave)} but also thinks most women are hot, too.`;
  if (slave.attraction.female > 65) return `${getMaleAttraction(slave)} but also likes women, too.`;
  if (slave.attraction.female > 35) return `${getMaleAttraction(slave)} but is indifferent to women.`;
  if (slave.attraction.female > 15) return `${getMaleAttraction(slave)} but is unenthusiastic about women.`;
  if (slave.attraction.female > 5) return `${getMaleAttraction(slave)} but is turned off by women.`;

  return `${getMaleAttraction(slave)} but is disgusted by the idea of intimacy with a woman.`;
}

function getArousedBy(slave: Slave): string {
  if (slave.attraction.female > 95) return `${getMaleAttraction(slave)} but is most passionate about women.`;
  if (slave.attraction.female > 85) return `${getMaleAttraction(slave)} and thinks most women are hot, too.`;
  if (slave.attraction.female > 65) return `${getMaleAttraction(slave)} but is indifferent to women.`;
  if (slave.attraction.female > 35) return `${getMaleAttraction(slave)} but is unenthusiastic about women.`;
  if (slave.attraction.female > 15) return `${getMaleAttraction(slave)} and likes women too.`;
  if (slave.attraction.female > 5) return `${getMaleAttraction(slave)} but is turned off by women.`;

  return `${getMaleAttraction(slave)} but is disgusted by the idea of intimacy with a woman.`;
}

function getFindsAttractive(slave: Slave): string {
  if (slave.attraction.female > 95) return `${getMaleAttraction(slave)} but is really passionate about women.`;
  if (slave.attraction.female > 85) return `${getMaleAttraction(slave)} but likes women even more.`;
  if (slave.attraction.female > 65) return `${getMaleAttraction(slave)} and likes women too.`;
  if (slave.attraction.female > 35) return `${getMaleAttraction(slave)} but is indifferent to women.`;
  if (slave.attraction.female > 15) return `${getMaleAttraction(slave)} but is unenthusiastic about women.`;
  if (slave.attraction.female > 5) return `${getMaleAttraction(slave)} but is turned off by women.`;

  return `${getMaleAttraction(slave)} but is disgusted by the idea of intimacy with a woman.`;
}

function getIsIndifferent(slave: Slave): string {
  if (slave.attraction.female > 95) return `${getMaleAttraction(slave)} but is passionate about women.`;
  if (slave.attraction.female > 85) return `${getMaleAttraction(slave)} strongly preferring women.`;
  if (slave.attraction.female > 65) return `${getMaleAttraction(slave)} but is attracted to women.`;
  if (slave.attraction.female > 35) return `${getMaleAttraction(slave)} and feels the same about women, too.`;
  if (slave.attraction.female > 15) return `${getMaleAttraction(slave)} but is actually unenthusiastic about women.`;
  if (slave.attraction.female > 5) return `${getMaleAttraction(slave)} but is turned off by women.`;

  return `${getMaleAttraction(slave)} but is disgusted by the idea of intimacy with a woman.`;
}

function getTurnedOff(slave: Slave): string {
  const { he } = slave.pronouns;

  if (slave.attraction.female > 95) return `${getMaleAttraction(slave)} but is passionate about women.`;
  if (slave.attraction.female > 85) return `${getMaleAttraction(slave)} strongly preferring women.`;
  if (slave.attraction.female > 65) return `${getMaleAttraction(slave)} but is attracted to women.`;
  if (slave.attraction.female > 35) return `${getMaleAttraction(slave)} and ${he} is indifferent to women.`;
  if (slave.attraction.female > 15) return `${getMaleAttraction(slave)} and is unenthusiastic about women.`;

  return `${getMaleAttraction(slave)} and is actually disgusted by women's.`;
}

function getFindsDisgusting(slave: Slave): string {
  const { He, he } = slave.pronouns;

  if (slave.attraction.female > 95) return `${getMaleAttraction(slave)} but is passionate about women.`;
  if (slave.attraction.female > 85) return `${getMaleAttraction(slave)} strongly preferring women.`;
  if (slave.attraction.female > 65) return `${getMaleAttraction(slave)} but is attracted to women.`;
  if (slave.attraction.female > 35) return `${getMaleAttraction(slave)} and ${he} is indifferent to women.`;
  if (slave.attraction.female > 15) return `${getMaleAttraction(slave)} and is unenthusiastic about women.`;
  if (slave.attraction.female > 5) return `${getMaleAttraction(slave)} and has almost as much trouble with women.`;

  return `${He} finds both men's and women's intimate areas quite repulsive, an unfortunate state of affairs!`;
}

function attraction(slave: Slave): string {
  const { his } = slave.pronouns;

  const text: string[] = [];

  if (slave.attraction.known) {
    text.push(getDrive(slave));

    if (slave.attraction.male > 95) text.push(getPassionate(slave));
    else if (slave.attraction.male > 85) text.push(getArousedBy(slave));
    else if (slave.attraction.male > 65) text.push(getFindsAttractive(slave));
    else if (slave.attraction.male > 35) text.push(getIsIndifferent(slave));
    else if (slave.attraction.male > 15) text.push(getTurnedOff(slave));
    else text.push(getFindsDisgusting(slave));

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
