import { name as fuckdollName } from './fuckdoll';

import Actor from '../../../classes/actor/Actor';
import Slave from '../../../classes/slave/Slave';

const isNameLost = (actor: Actor): boolean => !actor.name.birth.full()
    || (actor.name.slave.first !== actor.name.birth.first && !actor.name.birth.first)
  || (actor.name.slave.last !== actor.name.birth.last && !actor.name.birth.last);

const didNameChange = (actor: Actor): boolean => actor.name.slave.full() !== ''
  && actor.name.slave.full() !== actor.name.birth.full();

function getOriginalName(actor: Actor): string {
  const { his } = actor.pronouns;

  const text: string[] = [];
  const lost = ' whatever it was, however, has been lost forever.';

  if (actor.name.slave.full() !== '' && actor.name.slave.full() !== actor.name.birth.full()) {
    return `${actor.name.full} is not ${his} original full name;${!actor.name.birth.full() ? lost : ''}`;
  }

  if (actor.name.slave.first && actor.name.slave.first !== actor.name.birth.first) {
    return `${actor.name.slave.first} is not ${his} original given name;${!actor.name.birth.first ? lost : ''}`;
  }

  if (actor.name.slave.last && actor.name.slave.last !== actor.name.birth.last) {
    return `${actor.name.slave.last} is not ${his} original surname;${!actor.name.birth.last ? lost : ''}`;
  }

  return text.join(' ');
}

function firstNameReaction(slave: Slave): string {
  const { he, his } = slave.pronouns;

  if (slave.devotion > 95) return `adores ${his} slave name and affects to have forgotten that ${he} was ever called`;
  if (slave.devotion > 50) return `uses ${his} slave name automatically and gives no sign that ${he} was ever called`;
  if (slave.devotion > 20) return `uses ${his} slave name despite once being known as`;
  if (slave.devotion >= -20) return `uses ${his} slave name hesitantly since ${he} was once called`;
  if (slave.devotion >= -50) return `uses ${his} slave name with resentment since ${he} prefers ${his} original name,`;

  return `uses ${his} slave name only when constantly punished, since ${he} feels ${his} real name is`;
}

function surnameReaction(slave: Slave): string {
  if (slave.devotion > 95) return 'loves.';
  if (slave.devotion > 50) return 'likes';
  if (!slave.name.birth.last) return 'is indifferent to.';
  if (slave.devotion > 20) return 'accepts';
  if (slave.devotion >= -20) return 'tolerates.';
  if (slave.devotion >= -50) return 'resents.';

  return 'hates.';
}

export default function name(actor: Actor): string {
  const { He, he } = actor.pronouns;

  const text: string[] = [];

  if (actor.name.slave !== actor.name.birth) {
    if (actor instanceof Slave && actor.isFuckdoll) {
      return fuckdollName(actor);
    }

    text.push(getOriginalName(actor));

    if (didNameChange(actor) && (actor.name.birth.first || actor.name.birth.last)) {
      if (!isNameLost(actor)) text.push(`${He}`);
      else text.push(`${he}`);

      if (actor instanceof Slave) {
        text.push(firstNameReaction(actor));

        if (actor.name.slave.first !== actor.name.birth.first && actor.name.slave.last !== actor.name.birth.last) {
          text.push(`${actor.name.birth.full()}.`);
        } else if (actor.name.slave.first !== actor.name.birth.first) {
          if (actor.name.slave.first.endsWith(actor.name.birth.first)) {
            text.push('just plain');
          }

          text.push(`${actor.name.birth.first}.`);
        } else if (actor.name.slave.last !== actor.name.birth.last) {
          text.push(`${actor.name.birth.last}.`);
        }

        if (!actor.name.slave.last) text.push(`${He} has no surname as a slave, which ${he}`, surnameReaction(actor));
      } else {
        // TODO:
      }
    }
  }

  return text.join(' ');
}
