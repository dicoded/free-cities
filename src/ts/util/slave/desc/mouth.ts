import { get } from 'svelte/store';

import Actor from '../../../classes/actor/Actor';
import { TeethType } from '../../../classes/body/face/Mouth';
import { FaceShape } from '../../../classes/body/face/Face';

import pc from '../../../../stores/player.store';

const PC = get(pc);

function lips(actor: Actor): string {
  const { He, his } = actor.pronouns;

  if (actor.lips.size <= 10) return `${He} has thin, unattractive lips.`;
  if (actor.lips.size <= 20) return `${He} has normal lips.`;
  if (actor.lips.size <= 40) return `${He} has full, attractive lips.`;
  if (actor.lips.size <= 70) return `${He} has plump, beestung lips.`;
  if (actor.lips.size <= 95) return `${He} has huge, obviously augmented lips.`;

  return `${He} has a facepussy: ${his} lips are so huge that they're always a bit parted in the middle, forming a moist, inviting hole${PC.penis ? ' for cock' : ''}.`;
}

function getStraightTeeth(actor: Actor): string {
  const { His } = actor.pronouns;

  return `${His} teeth are perfectly normal and straight.`;
}

function getCrookedTeeth(actor: Actor): string {
  const { His, he, his } = actor.pronouns;

  return `${His} teeth are crooked, detracting from ${his} beauty whenever ${he} opens ${his} mouth.`;
}

function getStraighteningBraces(actor: Actor): string {
  const {
    He, his, woman, girl,
  } = actor.pronouns;

  const text: string[] = [];

  text.push(`${He} has braces,`);

  if (actor.age.visual > 35) text.push(`an amusing sight on such a mature ${woman}.`);
  else if ((actor.age.visual > 14) && (actor.age.visual < 18)) text.push(`a cute look on such a young ${girl}.`);
  else text.push(`and occasionally looks preoccupied with discomfort as they straighten ${his} teeth.`);

  return text.join(' ');
}

function getCosmeticBraces(actor: Actor): string {
  const {
    He, his, woman, girl,
  } = actor.pronouns;

  const text: string[] = [];

  text.push(`${He}'s wearing braces despite ${his} straight teeth,`);

  if (actor.age.visual > 35) {
    text.push(`an amusing sight on such a mature ${woman}.`);
  } else if ((actor.age.visual > 14) && (actor.age.visual < 18)) {
    text.push(`a cute look on such a young ${girl}.`);
  } else {
    text.push('just for appearances.');
  }

  return text.join(' ');
}

function getGappedTeeth(actor: Actor): string {
  const { He, him, his } = actor.pronouns;

  const text: string[] = [];

  text.push(`${He} has a prominent gap between ${his} front`);

  if (actor.face.type === FaceShape.CUTE) text.push(`teeth that suits ${his} cute face surprisingly well.`);
  else text.push('teeth.');

  if (actor.canTalk) text.push(`It also leaves ${him} with a slight lisp.`);

  return text.join(' ');
}

function getRemovableTeeth(actor: Actor): string {
  const { His } = actor.pronouns;

  return `${His} teeth have been removed and replaced with high-quality dentures. It's difficult to tell anything's unusual until you take them out for gummy oral sex.`;
}

function getPointyTeeth(actor: Actor): string {
  const { His, he } = actor.pronouns;

  return `${His} teeth have been replaced with realistic implants that mimic the dentition of a carnivore. ${His} smiles are frightening, and ${he} can bare them to become truly terrifying.`;
}

function getFangedTeeth(actor: Actor): string {
  const { His, he } = actor.pronouns;

  return `${His} upper canine teeth have been replaced with realistic implants that mimic fangs. ${His} smiles are frightening, and ${he} can bare them to become truly terrifying.`;
}

function getBabyTeeth(actor: Actor): string {
  const { He, his } = actor.pronouns;

  return `${He} still has ${his} baby teeth.`;
}

function getMixedTeeth(actor: Actor): string {
  const { He, his } = actor.pronouns;

  return `${He} is in the process of replacing ${his} baby teeth.`;
}

function teeth(actor: Actor): string {
  if (actor.mouth.teeth.type === TeethType.CROOKED) return getCrookedTeeth(actor);
  if (actor.mouth.teeth.type === TeethType.STRAIGHTENING_BRACES) return getStraighteningBraces(actor);
  if (actor.mouth.teeth.type === TeethType.COSMETIC_BRACES) return getCosmeticBraces(actor);
  if (actor.mouth.teeth.type === TeethType.GAPPED) return getGappedTeeth(actor);
  if (actor.mouth.teeth.type === TeethType.REMOVABLE) return getRemovableTeeth(actor);
  if (actor.mouth.teeth.type === TeethType.POINTY) return getPointyTeeth(actor);
  if (actor.mouth.teeth.type === TeethType.FANGS) return getFangedTeeth(actor);
  if (actor.mouth.teeth.type === TeethType.BABY) return getBabyTeeth(actor);
  if (actor.mouth.teeth.type === TeethType.MIXED) return getMixedTeeth(actor);

  return getStraightTeeth(actor);
}

export default function mouth(actor: Actor): string {
  const text: string[] = [];

  text.push(lips(actor), teeth(actor));

  return text.join(' ');
}
