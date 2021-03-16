import Actor from '../../../classes/actor/Actor';

import { RivalryType } from '../../../classes/actor/Rivalry';
import { getActor } from '../../../util/slave/util';

export default function rivalry(actor: Actor): string {
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
