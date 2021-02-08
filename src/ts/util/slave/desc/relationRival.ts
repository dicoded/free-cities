import Actor from '../../../classes/actor/Actor';
import { RelationshipType } from '../../../classes/actor/Relationship';
import { RivalryType } from '../../../classes/actor/Rivalry';

import { getActor } from '../../../util/slave/util';

function relative(actor: Actor): string {
  const { He, his } = actor.pronouns;

  if (actor.relationship.type > RelationshipType.SLUT && actor.closeRelatives > 0) {
    const lover = getActor(actor.relationship.target);

    if (lover !== undefined && actor.relativeTo(lover) !== null) {
      return `${He} is in an incestuous relationship with ${his} ${actor.relativeTo(lover)}, ${lover.name.firstLast}.`;
    }
  }

  return '';
}

function rivalry(actor: Actor): string {
  const { He } = actor.pronouns;

  const rival = getActor(actor.rivalry.target);

  if (actor.rivalry.type && rival !== undefined) {
    switch (actor.rivalry.type) {
      case RivalryType.BITTER:
        return `${He} bitterly hates ${rival.name.firstLast}.`;
      case RivalryType.RIVAL:
        return `${He} is ${rival.name.firstLast}'s rival.`;
      default:
        return `${He} dislikes ${rival.name.firstLast}.`;
    }
  }

  return '';
}

export default function relationRival(actor: Actor): string {
  const text: string[] = [];

  text.push(
    relative(actor),
    rivalry(actor),
  );

  return text.join(' ');
}
