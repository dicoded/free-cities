import type Actor from 'classes/actor/Actor';

export default function eyes(actor: Actor): string {
  const { His, he, his } = actor.pronouns;

  const text: string[] = [];

  if (actor.intelligence > 95) {
    text.push(`${His} ${actor.eyes}-eyed gaze is incisive, quick, cunning;`);

    if (actor.intelligence + actor.education > 120) {
      text.push(`with ${his} education, ${he} is so far beyond brilliant that ${he} is nearly peerless.`);
    } else if (actor.education > 0) {
      text.push(`${he} is both brilliant and`);

      if (actor.education > 15) text.push('well');

      text.push('educated.');
    } else {
      text.push(`${he} is so brilliant that ${his} lack of education is unimportant.`);
    }
  } else if (actor.intelligence > 50) {
    if (actor.intelligence + actor.education > 95) {
      text.push(`${His} ${actor.eyes}-eyed gaze is incisive, quick, cunning; with ${his} education, ${he} can be
      considered brilliant.`);
    } else if (actor.education > 15) {
      text.push(`${His} eyes are ${actor.eyes} are alive with intelligence; ${he} is both highly intelligent and `);

      if (actor.education > 15) text.push('well');

      text.push('educated.');
    } else {
      text.push(`${His} ${actor.eyes} eyes are alive with intelligence; ${he} is so highly intelligent that ${his}`);

      if (actor.education > 0) text.push('meager');
      else text.push('lack of');

      text.push('education is unimportant.');
    }
  } else if (actor.intelligence > 15) {
    text.push(`${His} ${actor.eyes} eyes are`);

    if (actor.intelligence + actor.education > 50) {
      text.push(`alive with intelligence; with ${his} education, ${he} can be considered highly intelligent.`);
    } else if (actor.education > 0) {
      text.push(`clever; ${he} is of above average intelligence and`);

      if (actor.education > 15) text.push('well');

      text.push('educated.');
    } else {
      text.push(`clever; ${he} is of above average intelligence despite being undereducated.`);
    }
  } else if (actor.intelligence >= -15) {
    text.push(`${His} ${actor.eyes} eyes are`);

    if (actor.intelligence + actor.education > 15) {
      text.push(`clever; with ${his} education, ${he} can be considered of above average intelligence.`);
    } else if (actor.education > 0) {
      text.push(`alert; ${he} is of average intelligence due to being`);

      if (actor.education > 15) text.push('well');

      text.push('educated.');
    } else {
      text.push(`alert; ${he} is of average intelligence and is undereducated.`);
    }
  } else if (actor.intelligence >= -50) {
    text.push(`${His} ${actor.eyes} eyes are`);

    if (actor.intelligence + actor.education >= -15) {
      text.push(`alert; with ${his} education, ${he} can be considered of average intelligence.`);
    } else if (actor.education > 0) {
      text.push(`dim; ${he} is of below average intelligence despite having been`);

      if (actor.education > 15) text.push('thoroughly');

      text.push('educated.');
    } else {
      text.push(`dim; ${he} is of below average intelligence and is poorly educated.`);
    }
  } else if (actor.intelligence >= -95) {
    text.push(`${His} ${actor.eyes} eyes are`);

    if (actor.intelligence + actor.education >= -50) {
      text.push(`dim; even with ${his} education, ${he} can only be considered of below average intelligence.`);
    } else if (actor.education > 0) {
      text.push(`dull; ${he} is quite stupid despite having`);

      if (actor.education > 15) text.push('an advanced');
      else text.push('some');

      text.push('education.');
    } else {
      text.push(`dull; ${he} is quite stupid and ignorant.`);
    }
  } else {
    text.push(`${His} ${actor.eyes}-eyed gaze betrays near-total insensibility;`);

    if (actor.intelligence + actor.education >= -95) {
      text.push(`even with ${his} education, ${he} is still really stupid.`);
    } else if (actor.education > 0) {
      text.push(`${he} is a moron, yet somehow still remembers the basics of an education.`);
    } else {
      text.push(`${he} is a moron, and ignorant to boot.`);
    }
  }

  return text.join(' ');
}
