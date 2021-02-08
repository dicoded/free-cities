import Slave from '../../classes/slave/Slave';

import '../extensions/array.extension';

function damage(slave: Slave): string {
  const { he } = slave.pronouns;

  const text: string[] = [];
  const arr: string[] = [];

  text.push('Diagnostics also report that');

  if (slave.health.damage.shortTerm > 0) {
    arr.push(`${he} is`);

    if (slave.health.damage.shortTerm > 100) arr.push('critically damaged');
    else if (slave.health.damage.shortTerm > 70) arr.push('gravely damaged');
    else if (slave.health.damage.shortTerm > 40) arr.push('seriously damaged');
    else if (slave.health.damage.shortTerm > 20) arr.push('damaged');
    else arr.push('slightly damaged');
  }

  if (slave.health.damage.longTerm > 0) {
    arr.push('projected physical performance falls');

    if (slave.health.damage.longTerm > 50) arr.push('far below benchmark margins');
    else if (slave.health.damage.longTerm > 30) arr.push('below benchmark margins');
    else if (slave.health.damage.longTerm > 10) arr.push('barely within benchmark margins');
    else arr.push('just short of the optimal benchmark margins');
  }

  if (slave.health.illness > 1) {
    if (slave.health.illness === 2) arr.push('affected by a minor illness');
    if (slave.health.illness === 3) arr.push('affected by an illness');
    if (slave.health.illness === 4) arr.push('seriously affected by an illness');
    if (slave.health.illness === 5) arr.push('dangerously affected by an illness');
  }

  text.push(arr.toSentence());

  return text.join(' ');
}

export function ageAndHealth(slave: Slave): string {
  const { he, his } = slave.pronouns;

  const text: string[] = [];

  text.push(`The Fuckdoll gives no external indication of ${his} health or age, but upon query ${his} systems report
  that ${he} is`);

  if (slave.health.overall < -90) text.push('in dangerously poor health');
  else if (slave.health.overall < -50) text.push('in poor health');
  else if (slave.health.overall < -20) text.push('unhealthy');
  else if (slave.health.overall <= 20) text.push('healthy');
  else if (slave.health.overall <= 50) text.push('very healthy');
  else text.push('extremely healthy');

  text.push(`and ${slave.age.actual} years old.`);

  if (slave.health.damage.longTerm > 5 || slave.health.damage.shortTerm > 5 || slave.health.illness > 0) {
    text.push(damage(slave));
  }

  return text.join(' ');
}

export function name(slave: Slave): string {
  const { he, his } = slave.pronouns;

  return `${slave.name.full} is not ${his} original name: ${he} was once called ${slave.name.birth.full()}.`;
}
