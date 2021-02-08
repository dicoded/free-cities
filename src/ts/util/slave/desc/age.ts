import { get } from 'svelte/store';

import Actor from '../../../classes/actor/Actor';
import Slave from '../../../classes/slave/Slave';

import purchased from '../../../../stores/purchased.store';

function NCS(actor: Actor): string {
  const {
    He, he, him, his, boy,
  } = actor.pronouns;

  const text: string[] = [];

  let ncs: string;

  if (!actor.vagina && !actor.penis) ncs = 'childlike';
  else if (!actor.vagina && actor.penis) ncs = 'shota';
  else if (actor.vagina && !actor.penis) ncs = 'loli';
  else ncs = 'loli/shota';

  text.push(`${He} appears to be ${actor.age.visual} years old and`);

  if (actor.age.actual < 9) {
    text.push(`has induced NCS, meaning ${he} will always have a ${ncs} body, no matter how long ${he} lives.`);
  } else if (actor.age.actual < 13) {
    text.push(`has induced NCS, meaning ${he} will have a ${ncs} body for the rest of ${his} life.`);
  } else if (actor.age.actual < 20) {
    text.push(`still has a teen body for now, but with ${his} NCS, ${he} will eventually regress in age to look like a
      little ${boy} again.`);
  } else {
    text.push(`still has the body of an adult, but ${his} NCS has`);

    if (actor.age.physical - actor.age.actual < 5) {
      text.push(`not really begun to youthen ${his} appearance yet.`);
    } else if (actor.age.physical - actor.age.actual < 10) {
      text.push(`clearly been at work on ${him}, making ${him} appear younger.`);
    } else if (actor.age.physical - actor.age.actual < 20) {
      text.push(`obviously helped take more than a decade off of ${his} age.`);
    } else {
      text.push(`intensely youthened ${him}.`);
    }
  }

  return text.join(' ');
}

function neoteny(actor: Actor): string {
  const {
    He, he, him, his, boy,
  } = actor.pronouns;

  const text: string[] = [];

  let hasNeoteny: boolean = false;

  if (actor.genetics.quirks.neoteny === 2
    && actor.age.physical > actor.age.actual
    && (get(purchased).upgrades.geneticMapping > 0
      || actor.age.physical > actor.age.actual + 5)) {
    if (get(purchased).upgrades.geneticMapping > 0) text.push(`Due to ${his} neotenic qualities,`);
    else text.push('Oddly enough,');

    text.push(`${he} still resembles a young ${boy} of around ${actor.age.visual}.`);

    hasNeoteny = true;
  } else if (actor.age.visual < actor.age.physical - 20 || actor.age.visual > actor.age.physical + 20) {
    text.push(`${He} has undergone radical age therapy that makes ${him} look`);
  } else if (actor.age.visual < actor.age.physical - 10 || actor.age.visual > actor.age.physical + 10) {
    text.push(`${He} has undergone drastic age therapy that makes ${him} look`);
  } else if (actor.age.visual < actor.age.physical - 5 || actor.age.visual > actor.age.physical + 5) {
    text.push(`${He} has undergone noticeable age therapy that makes ${him} look`);
  } else {
    text.push(`For various reasons, ${he} looks`);
  }

  if (!hasNeoteny) {
    if (actor.age.physical > actor.age.visual) {
      if (actor.age.physical < actor.age.visual + 5) text.push(`a slightly younger ${actor.age.visual}.`);
      else if (actor.age.visual < 20) text.push(`like ${he}'s barely an adult.`);
      else if (actor.age.visual < 25) text.push(`barely into ${his} early twenties.`);
      else if (actor.age.visual < 30) text.push(`like ${he}'s still in ${his} twenties.`);
      else if (actor.age.visual < 35) text.push('barely thirty.');
      else if (actor.age.visual < 40) text.push(`still in ${his} thirties.`);
      else if (actor.age.visual < 45) text.push('barely forty.');
      else if (actor.age.visual < 50) text.push(`still in ${his} forties.`);
      else if (actor.age.visual < 55) text.push('barely fifty.');
      else if (actor.age.visual < 60) text.push(`still in ${his} fifties.`);
      else if (actor.age.visual < 65) text.push('barely sixty.');
      else if (actor.age.visual < 70) text.push(`still in ${his} sixties.`);
      else if (actor.age.visual < 75) text.push('barely seventy.');
      else if (actor.age.visual < 80) text.push(`still in ${his} seventies.`);
      else if (actor.age.visual < 85) text.push('barely eighty.');
      else if (actor.age.visual < 90) text.push(`still in ${his} eighties.`);
      else if (actor.age.visual < 95) text.push('barely ninety.');
      else if (actor.age.visual < 100) text.push(`still in ${his} nineties.`);
      else text.push(`a younger ${actor.age.visual}.`);
    } else if (actor.age.physical < actor.age.visual) {
      if (actor.age.physical > actor.age.visual - 5) text.push(`a slightly older ${actor.age.visual}.`);
      else if (actor.age.visual < 20) text.push('like a fresh adult.');
      else if (actor.age.visual < 25) text.push('just over twenty.');
      else if (actor.age.visual < 30) text.push('nearly thirty.');
      else if (actor.age.visual < 35) text.push('just over thirty.');
      else if (actor.age.visual < 40) text.push('nearly forty.');
      else if (actor.age.visual < 45) text.push('just over forty.');
      else if (actor.age.visual < 50) text.push('nearly fifty.');
      else if (actor.age.visual < 55) text.push('just over fifty.');
      else if (actor.age.visual < 60) text.push('nearly sixty.');
      else if (actor.age.visual < 65) text.push('just over sixty.');
      else if (actor.age.visual < 70) text.push('nearly seventy.');
      else if (actor.age.visual < 75) text.push('just over seventy.');
      else if (actor.age.visual < 80) text.push('nearly eighty.');
      else if (actor.age.visual < 85) text.push('just over eighty.');
      else if (actor.age.visual < 90) text.push('nearly ninety.');
      else if (actor.age.visual < 95) text.push('just over ninety.');
      else text.push(`an ancient ${actor.age.visual}.`);
    }
  }

  return text.join(' ');
}

function immortality(actor: Actor): string {
  const { he } = actor.pronouns;

  return `Due to extensive genetic modification, ${he} is essentially immortal and will not die of old age.`;
}

export default function age(actor: Actor): string {
  const {
    He, he, him, his, boy, man,
  } = actor.pronouns;

  const text: string[] = [];

  const birthday: string = actor.age.birthWeek === 51
    ? `; ${his} birthday is next week`
    : `; ${his} birthday is in ${52 - actor.age.birthWeek} weeks`;

  text.push(`${He}`);

  if (actor.age.birthWeek >= 52) {
    text.push(`is going to turn ${actor.age.actual + 1} this week,`);
  } else if (actor.age.actual < 3) {
    text.push('is an infant, only');

    // TODO: add .format function
    if (actor.age.actual < 1) text.push(`${actor.age.weeks} weeks old${birthday}.`);
    else if (actor.age.actual < 2) text.push(`${(1)} year old${birthday}.`);
    else text.push(`${(2)} years old${birthday}.`);
  } else if (actor.age.actual < 5) {
    text.push(`is a toddler, only ${actor.age.actual} years old${birthday}.`);
  } else if (actor.age.actual < 13) {
    text.push(`is a little ${boy}, only ${actor.age.actual} years old${birthday}.`);
  } else if (actor.age.actual < 16) {
    text.push(`is almost a child at ${actor.age.actual} years old${birthday}.`);
  } else if (actor.age.actual < 17) {
    text.push(`is young and fresh at ${actor.age.actual} years old${birthday}.`);
  } else if (actor.age.actual < 18) {
    text.push(`is young, fresh, and nearly ${(18)}${birthday} and people are already beginning to eye ${him}.`);
  } else if (actor.age.actual < 19) {
    if (actor.age.birthWeek === 0) {
      text.push(`just turned ${(18)} this week, which many citizens find especially appealing.`);
    } else if (actor.age.birthWeek < 4) {
      text.push(`only turned ${(18)} this month.`);
    } else {
      text.push(`is ${(18)} years old${birthday}.`);
    }
  } else if (actor.age.actual < 20) {
    text.push(`is in ${his} final year as a teenager at ${(19)}${birthday}.`);
  } else if (actor.age.actual < 26) {
    text.push(`is a young ${man}, ${actor.age.actual} years old${birthday}.`);
  } else if (actor.age.actual < 30) {
    text.push(`is a younger ${man}, ${actor.age.actual} years old${birthday}.`);
  } else if (actor.age.actual < 36) {
    text.push(`is ${actor.age.actual} years old${birthday}.`);
  } else if (actor.age.actual < 40) {
    text.push(`is middle-aged ${actor instanceof Slave
      ? 'for a slave '
      : ''}at ${actor.age.actual} years old${birthday}.`);
  } else if (actor.age.actual < 100) {
    text.push(`is old ${actor instanceof Slave ? 'for a slave ' : ''}and in ${his}`);

    if (actor.age.actual < 50) text.push('forties');
    else if (actor.age.actual < 60) text.push('fifties');
    else if (actor.age.actual < 70) text.push('sixties');
    else if (actor.age.actual < 80) text.push('seventies');
    else if (actor.age.actual < 90) text.push('eighties');
    else if (actor.age.actual < 100) text.push('nineties');

    text.push(`at ${actor.age.actual} years old${birthday}.`);
  } else {
    text.push(`is ancient by any measure, over a century old at ${actor.age.actual} years old${birthday}.`);
  }

  if (actor.age.actual !== actor.age.physical) {
    text.push(`However, ${he} has the body of a ${actor.age.physical}-year-old;`);

    if (actor.genetics.quirks.progeria === 2
      && actor.age.physical > actor.age.actual
      && (get(purchased).upgrades.geneticMapping > 0
        || (actor.age.physical > actor.age.actual + 20))) {
      if (get(purchased).upgrades.geneticMapping > 0) {
        text.push(`not at all surprising, given ${his} medical condition.`);
      } else {
        text.push('a disturbing contrast that suggests a deep medical problem.');
      }
    } else if (actor.age.physical < 18 && actor.age.actual > 18) {
      text.push(`a stark contrast given ${his} maturity.`);
    } else if (actor.age.physical > 18 && actor.age.actual < 18) {
      text.push(`a noticeable difference thanks to ${his} immaturity.`);
    } else if (actor.age.physical < actor.age.actual - 20 || actor.age.physical > actor.age.actual + 20) {
      text.push(`a shocking difference from ${his} actual age.`);
    } else if (actor.age.physical < actor.age.actual - 10 || actor.age.physical > actor.age.actual + 10) {
      text.push(`a noticeable difference from ${his} actual age.`);
    } else if (actor.age.physical < actor.age.actual - 5 || actor.age.physical > actor.age.actual + 5) {
      text.push(`a barely noticeable difference from ${his} actual age.`);
    } else {
      text.push(`though it is hard to tell the difference from ${his} actual age.`);
    }
  }

  if (actor.genetics.mods.NCS) {
    text.push(NCS(actor));
  } else if (actor.age.physical !== actor.age.actual) {
    text.push(neoteny(actor));
  }

  if (actor.genetics.mods.immortality) text.push(immortality(actor));

  return text.join(' ');
}
