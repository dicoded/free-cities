import type Actor from 'classes/actor/Actor';

import '../../../util/extensions/array.extension';

function damage(actor: Actor): string {
  const { he } = actor.pronouns;

  const text: string[] = [];
  const arr: string[] = [];

  text.push(`Upon closer inspection, you note that ${he}`);

  if (actor.health.damage.shortTerm >= 100) {
    arr.push(`looks absolutely brutalized and will never be quite the way ${he} was`);
  } else if (actor.health.damage.shortTerm >= 70) {
    arr.push('is gravely injured with assured lasting effects');
  } else if (actor.health.damage.shortTerm >= 40) {
    arr.push('is seriously injured with some lasting effects');
  } else if (actor.health.damage.shortTerm >= 20) {
    arr.push('is injured');
  } else if (actor.health.damage.shortTerm > 5) {
    arr.push('seems to have suffered a minor injury recently');
  }

  if (actor.health.damage.longTerm >= 70) {
    arr.push('is suffering heavily under accumulated permanent health problems');
  } else if (actor.health.damage.longTerm >= 40) {
    arr.push('has some clear permanent health issues');
  } else if (actor.health.damage.longTerm >= 20) {
    arr.push('shows signs of lasting health problems');
  } else if (actor.health.damage.longTerm > 5) {
    arr.push('carries some minor niggles');
  }

  if (actor.health.condition < -80
    && actor.health.damage.shortTerm !== 0
    && actor.health.damage.longTerm !== 0) {
    arr.push(`has been treated so badly ${he} is close to the brink`);
  } else if (actor.health.condition < -50) {
    arr.push('appears to be in terrible condition');
  } else if (actor.health.condition < -20) {
    arr.push('appears to be in poor condition');
  } else if (actor.health.condition < 0) {
    arr.push('could be in better condition');
  }

  text.push(`${arr.toSentence()}.`);

  return text.join(' ');
}

function fatigue(actor: Actor): string {
  const { he } = actor.pronouns;

  if (actor.health.fatigue > 90) return `It seems ${he} is also exhausted.`;
  if (actor.health.fatigue > 60) return `It seems ${he} is also fatigued.`;

  return `It seems ${he} is also tired.`;
}

export default function health(actor: Actor): string {
  const {
    He, he,
  } = actor.pronouns;

  const text: string[] = [];

  if (actor.health.overall < -90) text.push(`${He} is nearly unresponsive and obviously dangerously unhealthy.`);
  else if (actor.health.overall < -50) text.push(`${He} is very unhealthy.`);
  else if (actor.health.overall < -20) text.push(`${He} is unhealthy.`);
  else if (actor.health.overall <= 20) text.push(`${He} is in fair health.`);
  else if (actor.health.overall <= 50) text.push(`${He} seems to be in good health.`);
  else if (actor.health.overall <= 90) text.push(`${He} seems to be in great health.`);
  else text.push(`${He} almost gleams; ${he}'s in the absolute best of health.`);

  if (actor.health.damage.shortTerm > 5 || actor.health.damage.longTerm > 5 || actor.health.condition < 0) {
    text.push(damage(actor));
  }

  if (actor.health.fatigue > 30) text.push(fatigue(actor));

  return text.join(' ');
}

export function healthColor(val: number): string {
  if (val < -90) return 'text-red-700';
  if (val < -50) return 'text-red-500';
  if (val < -20) return 'text-red-300';
  if (val <= 20) return 'text-gray-400';
  if (val <= 50) return 'text-green-300';
  if (val <= 90) return 'text-green-500';
  return 'text-green-700';
}
