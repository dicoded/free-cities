import { get } from 'svelte/store';

import Actor from '../../../classes/actor/Actor';
import Slave from '../../../classes/slave/Slave';

import { Sex } from '../../../classes/body/nonphysical/Nonphysical';
import { TeethType, VoiceType } from '../../../classes/body/face/Mouth';
import { FaceShape } from '../../../classes/body/face/Face';
import { Piercing } from '../../../classes/actor/Piercings';
import { Tattoo } from '../../../classes/actor/Tattoos';

import pc from '@stores/player.store';

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

function taste(actor: Actor): string {
  const { He, his } = actor.pronouns;

  if (!actor.mouth.taste) return `${He} has no sense of taste, though this isn't immediately obvious just by looking at ${his} tongue.`;

  return '';
}

function getLipPiercings(actor: Actor): string {
  const { He, His } = actor.pronouns;

  if (actor.accessories.piercings?.lips === Piercing.LIGHT) {
    return `${He} has a simple lip piercing.`;
  }
  if (actor.accessories.piercings?.lips === Piercing.HEAVY) {
    return `${His} lips are heavily pierced.`;
  }

  return '';
}

function getLipTribalPatterns(actor: Actor): string {
  const { His, him } = actor.pronouns;

  return `${His} face is tattooed with tribal patterns that make ${him} seem mysterious and exotic.`;
}

function getLipFlowers(actor: Actor): string {
  const { His } = actor.pronouns;

  return `${His} minimal facial tattoos are limited to a cute flower on each cheek.`;
}

function getLipCounting(actor: Actor): string {
  const { his, he } = actor.pronouns;

  if (actor.counter.oral.given.dick === 0) return `There is a horizontal line tattooed across the ${his} cheeks for symbols counting ${his} oral totals to be inscribed under, once ${he} has some.`;
  if (actor.counter.oral.given.dick < 500) return `Tiny dick, pussy, and anus symbols are tattooed all over ${his} cheeks, one for every thing ${he}'s sucked.`;

  return `Tiny dick, pussy, and anus symbols are tattooed all over ${his} face, forehead, and neck, one for every thing ${he}'s sucked.`;
}

function getLipAdvertisements(actor: Actor): string {
  const { His, his } = actor.pronouns;

  return `${His} facial tattoos include 'Facefuck Me' across ${his} forehead, 'Cock' to the left of ${his} mouth, and 'Sucker' to the right of it.`;
}

function getLipRudeWords(actor: Actor): string {
  const { His, his } = actor.pronouns;

  return `${His} facial tattoos include 'Sex Slave' across ${his} forehead, 'Face' to the left of ${his} mouth, and 'Pussy' to the right of it.`;
}

function getLipDegradation(actor: Actor): string {
  const { his } = actor.pronouns;

  return `'${actor instanceof Slave ? actor.title : actor.name.firstLast}' is tattooed across ${his} forehead.`;
}

function getLipAsianArt(actor: Actor): string {
  const { He, his } = actor.pronouns;

  return `${He} has a blossoming cherry tree tattooed on one temple; its pink petals are dappled across ${his} cheeks.`;
}

function getLipBovinePatterns(actor: Actor): string {
  const { His, him } = actor.pronouns;

  return `${His} face is subtly tattooed to give ${him} a somewhat bovine appearance.`;
}

function getLipPermanentMakeup(actor: Actor): string {
  const { His } = actor.pronouns;

  return `${His} normal makeup is difficult to distinguish from the underlying tattoo.`;
}

function getLipSacrilege(actor: Actor): string {
  const { His, him } = actor.pronouns;

  return `${His} face is subtly tattooed to give ${him} a decidedly demonic appearance.`;
}

function getLipSacrament(actor: Actor): string {
  const { His, him } = actor.pronouns;

  return `${His} face is subtly tattooed to give ${him} a decidedly angelic appearance.`;
}

function getLipPossessive(actor: Actor): string {
  const { his } = actor.pronouns;

  return `'Property of ${PC.name.firstLast}' is tattooed across ${his} forehead.`;
}

function getLipPaternalist(actor: Actor): string {
  const { his } = actor.pronouns;

  return `'Beloved ${actor instanceof Slave ? actor.title : actor.name.firstLast}' is tattooed across one of ${his} cheeks.`;
}

function getLipTattoos(actor: Actor): string {
  if (actor.accessories.tattoos?.lips === Tattoo.TRIBAL_PATTERNS) return getLipTribalPatterns(actor);
  if (actor.accessories.tattoos?.lips === Tattoo.FLOWERS) return getLipFlowers(actor);
  if (actor.accessories.tattoos?.lips === Tattoo.COUNTING) return getLipCounting(actor);
  if (actor.accessories.tattoos?.lips === Tattoo.ADVERTISEMENTS) return getLipAdvertisements(actor);
  if (actor.accessories.tattoos?.lips === Tattoo.RUDE_WORDS) return getLipRudeWords(actor);
  if (actor.accessories.tattoos?.lips === Tattoo.DEGRADATION) return getLipDegradation(actor);
  if (actor.accessories.tattoos?.lips === Tattoo.ASIAN_ART) return getLipAsianArt(actor);
  if (actor.accessories.tattoos?.lips === Tattoo.BOVINE_PATTERNS) return getLipBovinePatterns(actor);
  if (actor.accessories.tattoos?.lips === Tattoo.MAKEUP) return getLipPermanentMakeup(actor);
  if (actor.accessories.tattoos?.lips === Tattoo.SACRILEGE) return getLipSacrilege(actor);
  if (actor.accessories.tattoos?.lips === Tattoo.SACRAMENT) return getLipSacrament(actor);
  if (actor.accessories.tattoos?.lips === Tattoo.POSSESSIVE) return getLipPossessive(actor);
  if (actor.accessories.tattoos?.lips === Tattoo.PATERNALIST) return getLipPaternalist(actor);

  return '';
}

// function getLipBrands(actor: Actor): string {
// TODO:
// }

// function getLipScars(actor: Actor): string {
// TODO:
// }

function lipMods(actor: Actor): string {
  return [
    getLipPiercings(actor),
    getLipTattoos(actor),
    // getLipBrands(actor),
    // getLipScars(actor),
  ].join(' ');
}

function getTonguePiercings(actor: Actor): string {
  const {
    His, he, him, his,
  } = actor.pronouns;

  if (actor.accessories.piercings?.tongue === Piercing.LIGHT) return `${His} tongue bears a single stud, so oral sex with ${him} is a bit more fun.`;
  if (actor.accessories.piercings?.tongue === Piercing.HEAVY) return `${His} tongue bears a row of studs, offering thorough stimulation to anyone ${he} blows.`;

  if (actor.accessories.piercings?.tongue && actor.hasLisp) return `The piercings make ${his} lisp more pronounced.`;

  return '';
}

// function getTongueBrands(actor: Actor): string {
// TODO:
// }

// function getTongueScars(actor: Actor): string {
// TODO:
// }

function tongueMods(actor: Actor): string {
  return [
    getTonguePiercings(actor),
    // getTongueBrands(actor),
    // getTongueScars(actor),
  ].join(' ');
}

function getVoiceType(actor: Actor): string {
  if (actor.sex === Sex.MALE) {
    if (actor.voice.type === VoiceType.FEMININE) return 'a voice that\'s strangely feminine';
    if (actor.voice.type === VoiceType.HIGH) return 'a ridiculously high voice';

    return 'a deep, manly voice';
  }

  if (actor.voice.type === VoiceType.HIGH) return 'a high, girly voice';
  if (actor.voice.type === VoiceType.DEEP) return 'a deep, unfeminine voice';

  return 'a pretty, feminine voice';
}

function voice(actor: Actor): string {
  const { he } = actor.pronouns;

  return `When ${he} speaks, ${he} does so in ${getVoiceType(actor)}.`;
}

function accent(actor: Actor): string {
  // TODO:

  if (!actor) throw new Error();

  return '';
}

function fuckdoll(slave: Slave): string {
  const { his } = slave.pronouns;

  const text: string[] = [];

  text.push(`Sticking a ${PC.penis ? 'dick' : 'dildo'} into ${his}`);

  if (slave.lips.size > 95) text.push('facepussy');
  else text.push('mouth insert');

  if (slave.fuckdoll <= 45) text.push('mostly results in gagging');
  else text.push('offers its user a selection of delightful face hole massage options.');

  return text.join(' ');
}

export default function mouth(actor: Actor): string {
  const text: string[] = [];

  text.push(
    lips(actor),
    teeth(actor),
    taste(actor),
    lipMods(actor),
    tongueMods(actor),
    voice(actor),
    accent(actor),
  );

  if (actor instanceof Slave && actor.isFuckdoll) text.push(fuckdoll(actor));

  return text.join(' ');
}
