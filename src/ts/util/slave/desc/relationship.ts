import Actor from '../../../classes/actor/Actor';

import { RelationshipType } from '../../../classes/actor/Relationship';
import { getActor } from '../../../util/slave/util';

export default function relationship(actor: Actor): string {
  const { He, his } = actor.pronouns;

  if (actor.relationship.type > RelationshipType.SLUT && actor.closeRelatives > 0) {
    const lover = getActor(actor.relationship.target);

    if (lover !== undefined && actor.relativeTo(lover) !== null) {
      return `${He} is in an incestuous relationship with ${his} ${actor.relativeTo(lover)}, ${lover.name.firstLast}.`;
    }
  }

  return '';
}
