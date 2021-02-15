import type Slave from 'classes/slave/Slave';

import { MarkingsType } from 'classes/body/nonphysical/skin/Markings';

export default function prestige(slave: Slave): string {
  const {
    He, he, his, him,
  } = slave.pronouns;

  const text: string[] = [];

  // TODO: add prestige description

  if (slave.prestige > 0) {
    if (slave.prestige > 2) text.push(`It is extremely prestigious to own ${him}.`);
    else if (slave.prestige > 1) text.push(`It is quite prestigious to own ${him}.`);
    else text.push(`It is fairly prestigious to own ${him}.`);
  }

  // TODO: add porn prestige

  if (slave.prestige > 0 && !slave.fuckdoll && slave.markings.face === MarkingsType.BIRTHMARK) {
    text.push(`${He} has a large, liver-colored birthmark, but since ${he}'s well known, this uniqueness adds to ${his}
    beauty rather than detracting from it.`);
  }

  return text.join(' ');
}
