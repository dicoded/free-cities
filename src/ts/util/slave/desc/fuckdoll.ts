import Slave from '@classes/slave/Slave';

import '../../extensions/array.extension';

function shortTermDamage(val: number): string {
  if (val > 100) return 'critically damaged';
  if (val > 70) return 'gravely damaged';
  if (val > 40) return 'seriously damaged';
  if (val > 20) return 'damaged';

  return 'slightly damaged';
}

function longTermDamage(val: number): string {
  if (val > 50) return 'far below benchmark margins';
  if (val > 30) return 'below benchmark margins';
  if (val > 10) return 'barely within benchmark margins';

  return 'just short of the optimal benchmark margins';
}

function illness(val: number): string {
  if (val === 2) return 'affected by a minor illness';
  if (val === 3) return 'affected by an illness';
  if (val === 4) return 'seriously affected by an illness';
  if (val === 5) return 'dangerously affected by an illness';

  return 'slightly affected by a minor illness';
}

function damage(slave: Slave): string {
  const { he } = slave.pronouns;

  const text: string[] = [];
  const arr: string[] = [];

  text.push('Diagnostics also report that');

  if (slave.health.damage.shortTerm) arr.push(`${he} is`, shortTermDamage(slave.health.damage.shortTerm));
  if (slave.health.damage.longTerm) arr.push('projected physical performance falls', longTermDamage(slave.health.damage.longTerm));
  if (slave.health.illness) arr.push(`${he} is`, illness(slave.health.illness));

  text.push(arr.toSentence());

  return text.join(' ');
}

function getHealth(health: number): string {
  if (health < -90) return 'in dangerously poor health';
  if (health < -50) return 'in poor health';
  if (health < -20) return 'unhealthy';
  if (health <= 20) return 'healthy';
  if (health <= 50) return 'very healthy';

  return 'extremely healthy';
}

export function ageAndHealth(slave: Slave): string {
  const { he, his } = slave.pronouns;

  const text: string[] = [];

  text.push(
    `The Fuckdoll gives no external indication of ${his} health or age, but upon query ${his} systems report that ${he} is`,
    getHealth(slave.health.overall),
    `and ${slave.age.actual} years old.`,
  );

  if (slave.health.damage.longTerm > 5
    || slave.health.damage.shortTerm > 5
    || slave.health.illness > 0
  ) {
    text.push(damage(slave));
  }

  return text.join(' ');
}

export function name(slave: Slave): string {
  const { he, his } = slave.pronouns;

  return `${slave.name.full} is not ${his} original name: ${he} was once called ${slave.name.birth.full()}.`;
}
