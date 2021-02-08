import { name as fuckdollName } from '../fuckdoll';

import Actor from '../../../classes/actor/Actor';
import Slave from '../../../classes/slave/Slave';

export default function name(actor: Actor): string {
  const { He, he, his } = actor.pronouns;

  const text: string[] = [];

  if (actor.name.slave !== actor.name.birth) {
    if (actor instanceof Slave && actor.isFuckdoll) {
      return fuckdollName(actor);
    }

    let nameLoss: number = 0;

    if (actor.name.slave.first !== actor.name.birth.first && actor.name.slave.last !== actor.name.birth.last) {
      text.push(`${actor.name.full} is not ${his} original full name;`);

      if (!actor.name.birth) {
        text.push('whatever it was, however, has been lost forever..');
        nameLoss = 1;
      }
    } else if (actor.name.slave.first !== actor.name.birth.first) {
      text.push(`${actor.name.slave.first} is not ${his} original given name;`);

      if (!actor.name.birth.first) {
        text.push('whatever it was, however, has been lost forever.');
        nameLoss = 1;
      }
    } else if (actor.name.slave.last !== actor.name.birth.last) {
      text.push(`${actor.name.slave.last} is not ${his} original surname;`);

      if (!actor.name.birth.last) {
        text.push('whatever it was, however, has been lost forever.');
        nameLoss = 1;
      }
    }

    if (actor.name.birth.first || actor.name.birth.last) {
      if (nameLoss) text.push(`${He}`);
      else text.push(`${he}`);

      if (actor instanceof Slave) {
        if (actor.devotion > 95) {
          text.push(`adores ${his} slave name and affects to have forgotten that ${he} was ever called`);
        } else if (actor.devotion > 50) {
          text.push(`uses ${his} slave name automatically and gives no sign that ${he} was ever called`);
        } else if (actor.devotion > 20) {
          text.push(`uses ${his} slave name despite once being known as`);
        } else if (actor.devotion >= -20) {
          text.push(`uses ${his} slave name hesitantly since ${he} was once called`);
        } else if (actor.devotion >= -50) {
          text.push(`uses ${his} slave name with resentment since ${he} prefers ${his} original name,`);
        } else {
          text.push(`uses ${his} slave name only when constantly punished, since ${he} feels ${his} real name is`);
        }

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

        if (!actor.name.slave.last) text.push(`${He} has no surname as a slave, which ${he}`);

        if (actor.devotion > 95) text.push('loves.');
        else if (actor.devotion > 50) text.push('likes');
        else if (actor.name.birth.last === '') text.push('is indifferent to.');
        else if (actor.devotion > 20) text.push('accepts');
        else if (actor.devotion >= -20) text.push('tolerates.');
        else if (actor.devotion >= -50) text.push('resents.');
        else text.push('hates.');
      }
    }
  }

  return text.join(' ');
}
