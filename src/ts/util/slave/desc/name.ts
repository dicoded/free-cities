import { name as getFuckdollName } from './fuckdoll';

import Actor from '../../../classes/actor/Actor';
import Slave from '../../../classes/slave/Slave';

const hasSlaveName = (actor: Actor): boolean => actor.name.fullSlave !== '';
const hasBirthName = (actor: Actor): boolean => actor.name.fullBirth !== '';

const didNameChange = (actor: Actor): boolean => hasSlaveName(actor)
  && actor.name.fullSlave !== actor.name.fullBirth;

const didFullNameChange = (actor: Actor): boolean => hasSlaveName(actor)
  && actor.name.fullSlave !== actor.name.fullBirth;

const didFirstNameChange = (actor: Actor): boolean => hasSlaveName(actor)
  && actor.name.slave.first !== actor.name.birth.first;

const didSurnameChange = (actor: Actor): boolean => hasSlaveName(actor)
  && actor.name.slave.last !== actor.name.birth.last;

const isNameLost = (actor: Actor): boolean => !hasBirthName(actor)
  || (didFirstNameChange(actor) && !actor.name.birth.first)
  || (didSurnameChange(actor) && !actor.name.birth.last);

function getOriginalName(actor: Actor): string {
  const { his } = actor.pronouns;
  const lost = ' whatever it was, however, has been lost forever.';

  if (didFullNameChange(actor)) {
    return `${actor.name.full} is not ${his} original full name;${!hasBirthName(actor) ? lost : ''}`;
  }

  if (didFirstNameChange(actor)) {
    return `${actor.name.slave.first} is not ${his} original given name;${!actor.name.birth.first ? lost : ''}`;
  }

  if (didSurnameChange(actor)) {
    return `${actor.name.slave.last} is not ${his} original surname;${!actor.name.birth.last ? lost : ''}`;
  }

  return '';
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

function didSlaveNameChange(slave: Slave): string {
  const { He, he } = slave.pronouns;

  const text: string[] = [];

  text.push(firstNameReaction(slave));

  if (didFirstNameChange(slave) && didSurnameChange(slave)) text.push(`${slave.name.fullBirth}.`);
  else if (didFirstNameChange(slave)) {
    if (slave.name.slave.first.endsWith(slave.name.birth.first)) {
      text.push('just plain');
    }

    text.push(`${slave.name.birth.first}.`);
  } else if (didSurnameChange(slave)) {
    text.push(`${slave.name.birth.last}.`);
  }

  if (!slave.name.slave.last) text.push(`${He} has no surname as a slave, which ${he}`, surnameReaction(slave));

  return text.join(' ');
}

export default function name(actor: Actor): string {
  const { He, he } = actor.pronouns;

  const text: string[] = [];

  if (didNameChange(actor)) {
    if (actor instanceof Slave && actor.isFuckdoll) {
      return getFuckdollName(actor);
    }

    text.push(getOriginalName(actor));

    if (didNameChange(actor) && (actor.name.birth.first || actor.name.birth.last)) {
      if (!isNameLost(actor)) text.push(`${He}`);
      else text.push(`${he}`);

      if (actor instanceof Slave) {
        text.push(didSlaveNameChange(actor));
      } else {
        // TODO:
      }
    }

    return text.join(' ');
  }

  return '';
}
