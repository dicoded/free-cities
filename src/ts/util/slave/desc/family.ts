import { get } from 'svelte/store';

import Actor from '../../../classes/actor/Actor';
import { getActor } from '../util';

import player from '../../../../stores/player.store';
import { actors } from '../../../../stores/actors.store';

const PC = get(player);

// TODO: add text in empty strings
// TODO: add inbreeding coefficients

function listActors(arr: Actor[]): string {
  return arr
    .map((actor) => actor.name.firstLast)
    .toSentence();
}

function actorParent(actor: Actor): string {
  const { He, him } = actor.pronouns;

  if (actor.isChildOf(PC) && actor.isMomDad) return `${He}'s your child; you knocked yourself up and gave birth to ${him}.`;

  if (getActor(actor.father)) return `${He} is was both fathered and mothered by ${getActor(actor.father)}.`;

  return '';
}

function actorFather(actor: Actor): string {
  const { He, his } = actor.pronouns;

  if (actor.father === PC.ID) return `${He}'s your child; you knocked ${his} mother up.`;
  if (getActor(actor.father)) return `${He} was fathered by ${getActor(actor.father)}'s virile dick.`;

  return '';
}

function actorMother(actor: Actor): string {
  const { He, him } = actor.pronouns;

  if (actor.mother === PC.ID) return `${He}'s your child; you gave birth to ${him}.`;
  if (getActor(actor.mother)) return `${He} was born from ${getActor(actor.mother)}'s fertile womb.`;

  return '';
}

function actorTwins(actor: Actor): string {
  const { He } = actor.pronouns;

  const children = get(actors).filter((s) => s.isTwinOf(actor));

  if (children.length > 0) {
    if (children.length > 2) return `${He} shared a cramped womb with ${listActors(children)}.`;
    if (children.length > 1) return `${He} is one of a set of triplets; ${listActors(children)} complete the trio.`;

    return `${He} is twins with ${listActors(children)}.`;
  }

  return '';
}

function actorBrothers(actor: Actor): string {
  const { his } = actor.pronouns;

  const brothers = get(actors).filter((s) => s.isBrotherOf(actor));

  if (brothers.length > 0) {
    if (brothers.length > 1) return `${listActors(brothers)} are ${his} brothers.`;

    return `${listActors(brothers)} is ${his} brother.`;
  }

  return '';
}

function actorSisters(actor: Actor): string {
  const { his } = actor.pronouns;

  const sisters = get(actors).filter((s) => s.isSisterOf(actor));

  if (sisters.length > 0) {
    if (sisters.length > 1) return `${listActors(sisters)} are ${his} sisters.`;

    return `${listActors(sisters)} is ${his} sister.`;
  }

  return '';
}

function actorHalfBrothers(actor: Actor): string {
  const { him } = actor.pronouns;

  const halfBrothers = get(actors).filter((s) => s.isHalfSiblingOf(actor) && s.isBrotherOf(actor));

  if (halfBrothers.length > 0) {
    if (halfBrothers.length > 1) return `${listActors(halfBrothers)} are half-brothers to ${him}.`;

    return `${listActors(halfBrothers)} is a half-brother ${him}.`;
  }

  return '';
}

function actorHalfSisters(actor: Actor): string {
  const { him } = actor.pronouns;

  const halfSisters = get(actors).filter((s) => s.isHalfSiblingOf(actor) && s.isSisterOf(actor));

  if (halfSisters.length > 0) {
    if (halfSisters.length > 1) return `${listActors(halfSisters)} are half-sisters to ${him}.`;

    return `${listActors(halfSisters)} is a half-sister ${him}.`;
  }

  return '';
}

function actorSiblings(actor: Actor): string {
  const text: string[] = [];

  text.push(
    actorTwins(actor),
    actorBrothers(actor),
    actorSisters(actor),
    actorHalfBrothers(actor),
    actorHalfSisters(actor),
  );

  return text.join(' ');
}

function actorChildrenSolo(actor: Actor): string {
  const { He } = actor.pronouns;

  const children = get(actors).filter((a) => a.father === actor.ID && a.mother === actor.ID);

  if (children.length > 2) return `${He} is the sole parent of ${listActors(children)}.`;
  if (children.length > 1) return `${He} is the sole parent of a pair of your slaves: ${listActors(children)}.`;
  if (children.length > 0) return `${He} is the sole parent of a single slave of yours: ${listActors(children)}.`;

  return '';
}

function actorChildrenFathered(actor: Actor): string {
  const { He } = actor.pronouns;

  const children = get(actors).filter((a) => a.father === actor.ID && a.mother !== actor.ID);

  if (children.length > 2) return `${He} fathered ${listActors(children)}`;
  if (children.length > 1) return `${He} fathered a pair of your slaves: ${listActors(children)}.`;
  if (children.length > 0) return `${He} fathered a single slave of yours: ${listActors(children)}.`;

  return '';
}

function actorChildrenMothered(actor: Actor): string {
  const { He } = actor.pronouns;

  const children = get(actors).filter((a) => a.father === actor.ID && a.mother !== actor.ID);

  if (children.length > 2) return `${He} gave birth to ${listActors(children)}.`;
  if (children.length > 1) return `${He} gave birth to a pair of your slaves: ${listActors(children)}.`;
  if (children.length > 0) return `${He} gave birth to a single slave of yours: ${listActors(children)}`;

  return '';
}

function actorGrandchildren(actor: Actor): string {
  const { He } = actor.pronouns;

  const grandchildren = get(actors).filter((a) => a.isGrandparentOf(actor));

  if (grandchildren.length > 2) return `${He} has`;
  if (grandchildren.length > 1) return `${He}`;
  if (grandchildren.length > 0) return `${He}`;

  return '';
}

function actorGrandparents(actor: Actor): string {
  const { He, His, his } = actor.pronouns;

  const father = getActor(actor.father);
  const mother = getActor(actor.mother);

  if (actor.isGrandChildOf(PC)) {
    if (actor.isMomDad) {
      if (father?.isMomDad) return `${He} is your grandchild. You impregnated yourself with ${his} sole biological parent.`;
      if (father?.mother === PC.ID) return `${He} is your grandchild. You gave birth to ${his} sole biological parent.`;
      if (father?.father === PC.ID) return `${He} is your grandchild. You fathered ${his} sole biological parent.`;
    }

    if (father?.mother === PC.ID
      && mother?.mother === PC.ID) return `${He} is your grandchild. You gave birth to both of ${his} parents.`;
    if (father?.father === PC.ID
      && mother?.father === PC.ID) return `${He} is your grandchild. You fathered both of ${his} parents.`;
    if (mother?.mother === PC.ID) return `${He} is your grandchild. You gave birth to ${his} mother.`;
    if (father?.mother === PC.ID) return `${He} is your grandchild. You gave birth to ${his} father.`;
    if (mother?.father === PC.ID) return `${He} is your grandchild. You fathered ${his} mother.`;
    if (father?.father === PC.ID) return `${He} is your grandchild. You fathered ${his} father.`;
  }

  if (actor.isMomDad && father?.isMomDad) return `${His} sole grandparent is ${getActor(father.father)}.`;
  if (father !== undefined && mother !== undefined
    && father.father === mother.father) return `${His} sole grandfather is ${getActor(father.father)}.`;
  if (father !== undefined && mother !== undefined
    && father.mother === mother.mother) return `${His} sole grandmother is ${getActor(father.mother)}.`;
  if (father !== undefined
    && father.father) return `${His} paternal grandfather is ${getActor(father.father)?.name.firstLast}`;
  if (mother !== undefined
    && mother.father) return `${His} maternal grandfather is ${getActor(mother.father)?.name.firstLast}`;
  if (father !== undefined
    && father.mother) return `${His} paternal grandmother is ${getActor(father.father)?.name.firstLast}`;
  if (mother !== undefined
    && mother.mother) return `${His} maternal grandmother is ${getActor(mother.father)?.name.firstLast}`;

  return '';
}

function actorPiblings(actor: Actor): string {
  const { He } = actor.pronouns;

  const uncles = get(actors).filter((s) => s.isUncleOf(actor));
  const aunts = get(actors).filter((s) => s.isAuntOf(actor));

  if (uncles.length > 0) {
    if (uncles.length > 2) return `${He} has many uncles: ${listActors(uncles)}.`;
    if (uncles.length > 1) return `${He} has two uncles, ${listActors(uncles)}.`;

    return `${He} has an uncle, ${listActors(uncles)}.`;
  }

  if (aunts.length > 0) {
    if (aunts.length > 2) return `${He} has many aunts: ${listActors(aunts)}.`;
    if (aunts.length > 1) return `${He} has two aunts, ${listActors(aunts)}.`;

    return `${He} has an aunt, ${listActors(aunts)}.`;
  }

  return '';
}

function actorNiblings(actor: Actor): string {
  const { He } = actor.pronouns;

  const nephews = get(actors).filter((s) => s.isNephewOf(actor));
  const nieces = get(actors).filter((s) => s.isNieceOf(actor));

  if (nephews.length > 0) {
    if (nephews.length > 2) return `${He} has many nephews: ${listActors(nephews)}.`;
    if (nephews.length > 1) return `${He} has two nephews, ${listActors(nephews)}.`;

    return `${He} has a nephew, ${listActors(nephews)}.`;
  }

  if (nieces.length > 0) {
    if (nieces.length > 2) return `${He} has many nieces: ${listActors(nieces)}.`;
    if (nieces.length > 1) return `${He} has two nieces, ${listActors(nieces)}.`;

    return `${He} has a niece, ${listActors(nieces)}.`;
  }

  return '';
}

function actorCousins(actor: Actor): string {
  const { him, his } = actor.pronouns;

  const children = get(actors).filter((s) => s.isCousinOf(actor));

  if (children.length > 0) {
    if (children.length > 1) return `${listActors(children)} are cousins to ${him}.`;

    return `${listActors(children)} is ${his} cousin.`;
  }

  return '';
}

function actorDistantRelatives(actor: Actor): string {
  const text: string[] = [];

  text.push(
    actorGrandchildren(actor),
    actorGrandparents(actor),
    actorPiblings(actor),
    actorNiblings(actor),
    actorCousins(actor),
  );

  return text.join(' ');
}

function playerParent(actor: Actor): string {
  const {
    He, She, she, herself,
  } = actor.pronouns;

  if (PC.isMomDad && PC.isChildOf(actor)) return `${She} is both your mother and father; ${she} impregnated ${herself} with you.`;
  if (actor.ID === PC.father) return `${He} is your father.`;
  if (actor.ID === PC.mother) return `${She} is your mother.`;

  return '';
}

function playerTwins(actor: Actor): string {
  const { He } = actor.pronouns;

  const twins = get(actors).filter((s) => s.isTwinOf(PC) && s.ID !== actor.ID);

  if (actor.isTwinOf(PC)) {
    if (twins.length > 2) return `${He} shared a cramped womb with you, ${listActors(twins)}.`;
    if (twins.length > 1) return `${He} is your twin along with ${listActors(twins)}`;

    return `${He} is your twin.`;
  }

  return '';
}

function playerBrothers(actor: Actor): string {
  const { He } = actor.pronouns;

  const brothers = get(actors).filter((s) => s.isBrotherOf(PC) && s.ID !== actor.ID);

  if (actor.isBrotherOf(PC)) {
    if (brothers.length > 1) return `${He} is your brother, along with ${listActors(brothers)}.`;

    return `${He} is your brother.`;
  }

  return '';
}

function playerSisters(actor: Actor): string {
  const { He } = actor.pronouns;

  const sisters = get(actors).filter((s) => s.isSisterOf(PC) && s.ID !== actor.ID);

  if (actor.isSisterOf(PC)) {
    if (sisters.length > 1) return `${He} is your sister, along with ${listActors(sisters)}.`;

    return `${He} is your sister.`;
  }

  return '';
}

function playerHalfBrothers(actor: Actor): string {
  const { He } = actor.pronouns;

  const halfBrothers = get(actors).filter((s) => s.isHalfSiblingOf(PC) && s.isBrotherOf(PC) && s.ID !== actor.ID);

  if (actor.isHalfSiblingOf(PC) && actor.isBrotherOf(PC)) {
    if (halfBrothers.length > 1) return `${He} is your half-brother, along with ${listActors(halfBrothers)}.`;

    return `${He} is your half-brother.`;
  }

  return '';
}

function playerHalfSisters(actor: Actor): string {
  const { He } = actor.pronouns;

  const halfSisters = get(actors).filter((s) => s.isHalfSiblingOf(PC) && s.isSisterOf(PC) && s.ID !== actor.ID);

  if (actor.isHalfSiblingOf(PC) && actor.isSisterOf(PC)) {
    if (halfSisters.length > 1) return `${He} is your half-sister, along with ${listActors(halfSisters)}.`;

    return `${He} is your half-sister.`;
  }

  return '';
}

function playerSiblings(actor: Actor): string {
  const text: string[] = [];

  text.push(
    playerTwins(actor),
    playerBrothers(actor),
    playerSisters(actor),
    playerHalfBrothers(actor),
    playerHalfSisters(actor),
  );

  return text.join(' ');
}

function playerGrandparents(actor: Actor): string {
  const { He, himself } = actor.pronouns;

  const PCFather = getActor(PC.father);
  const PCMother = getActor(PC.mother);

  if (PC.isMomDad) {
    if (PC.isChildOf(actor) && actor.isMomDad) return `${He} is your sole grandparent. ${He} impregnated ${himself} with your sole parent ${PCFather?.name.first} who in turn impregnated themselves with you.`;
    if (PCFather?.father === actor.ID) return `${He} is your sole grandfather. ${He} fathered to ${PCFather.name.first} who in turn impregnated themselves with you.`;
    if (PCMother?.mother === actor.ID) return `${He} is your sole grandmother. ${He} gave birth to ${PCMother.name.first} who in turn impregnated themselves with you.`;
  }

  if (PCFather?.father === PCMother?.father) return `${He} is your sole grandfather. ${He} fathered both of your parents, ${PCFather?.name.first} and ${PCMother?.name.first}.`;
  if (PCFather?.mother === PCMother?.mother) return `${He} is your sole grandmother. ${He} gave birth to both of your parents, ${PCMother?.name.first} and ${PCFather?.name.first}.`;

  if (PCFather?.father) return `${He} is your paternal grandfather.`;
  if (PCMother?.father) return `${He} is your maternal grandfather.`;
  if (PCFather?.mother) return `${He} is your paternal grandmother.`;
  if (PCMother?.mother) return `${He} is your maternal grandmother.`;

  return '';
}

/** Whether the actor is one of the player's parents' siblings. */
function playerPiblings(actor: Actor): string {
  const { He, She } = actor.pronouns;
  const uncles = get(actors).filter((s) => s.ID !== actor.ID && s.isUncleOf(PC));
  const aunts = get(actors).filter((s) => s.ID !== actor.ID && s.isAuntOf(PC));

  if (actor.isPiblingOf(PC)) {
    if (actor.isUncleOf(PC)) return `${He} is your uncle${uncles.length > 0 ? `, along with ${listActors(uncles)}` : '.'}`;

    return `${She} is your aunt${aunts.length > 0 ? `, along with ${listActors(aunts)}` : '.'}`;
  }

  return '';
}

/** Whether the actor is one of the player's nephews or nieces. */
function playerNiblings(actor: Actor): string {
  const { He, She } = actor.pronouns;

  const nephews = get(actors).filter((s) => s.ID !== actor.ID && s.isNephewOf(PC));
  const nieces = get(actors).filter((s) => s.ID !== actor.ID && s.isNieceOf(PC));

  if (actor.isNiblingOf(PC)) {
    if (actor.isNephewOf(PC)) return `${He} is your nephew${nephews.length > 0 ? `, along with ${listActors(nephews)}` : '.'}`;

    return `${She} is your niece${nieces.length > 0 ? `, along with ${listActors(nieces)}` : '.'}`;
  }

  return '';
}

function playerCousins(actor: Actor): string {
  const { He } = actor.pronouns;

  const cousins = get(actors).filter((s) => s.isCousinOf(PC) && s.ID !== actor.ID);

  if (actor.isCousinOf(PC)) {
    return `${He} is your cousin${cousins.length > 0 ? `, along with ${listActors(cousins)}.` : '.'}`;
  }

  return '';
}

export default function family(actor: Actor): string {
  const text: string[] = [];

  text.push(
    playerParent(actor),
    playerSiblings(actor),
    actorParent(actor),
    actorFather(actor),
    actorMother(actor),
    actorSiblings(actor),
    actorDistantRelatives(actor),

    actorChildrenSolo(actor),
    actorChildrenFathered(actor),
    actorChildrenMothered(actor),

    playerGrandparents(actor),
    playerPiblings(actor),
    playerNiblings(actor),
    playerCousins(actor),
  );

  return text.join(' ');
}
