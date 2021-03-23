import Actor from '../../../classes/actor/Actor';

// TODO: `actor.eyes` below will need to be reworked to work with multicolored eyes

function getActorBrilliant(actor: Actor): string {
  const { His, he, his } = actor.pronouns;

  const intro = `${His} ${actor.eyes}-eyed gaze is incisive, quick, cunning;`;

  if (actor.intelligence + actor.education > 120) {
    return `${intro} with ${his} education, ${he} is so far beyond brilliant that ${he} is nearly peerless.`;
  }
  if (actor.education > 0) {
    return `${intro} ${he} is both brilliant and ${actor.education > 15 ? 'well' : ''} educated.`;
  }

  return `${intro} ${he} is so brilliant that ${his} lack of education is unimportant.`;
}

function getActorIntelligent(actor: Actor): string {
  const { His, he, his } = actor.pronouns;

  if (actor.intelligence + actor.education > 95) {
    return `${His} ${actor.eyes}-eyed gaze is incisive, quick, cunning; with ${his} education, ${he} can be considered brilliant.`;
  }
  if (actor.education > 15) {
    return `${His} eyes are ${actor.eyes} are alive with intelligence; ${he} is both highly intelligent and ${actor.education > 15 ? 'well' : ''} educated.`;
  }

  return `${His} ${actor.eyes} eyes are alive with intelligence; ${he} is so highly intelligent that ${his} ${actor.education > 0 ? 'meager' : 'lack of'} education is unimportant.`;
}

function getActorClever(actor: Actor): string {
  const { His, he, his } = actor.pronouns;

  const intro = `${His} ${actor.eyes} eyes are`;

  if (actor.intelligence + actor.education > 50) {
    return `${intro} alive with intelligence; with ${his} education, ${he} can be considered highly intelligent.`;
  }
  if (actor.education > 0) {
    return `${intro} clever; ${he} is of above average intelligence and ${actor.education > 15 ? 'well' : ''} educated.`;
  }

  return `${intro} clever; ${he} is of above average intelligence despite being undereducated.`;
}

function getActorAverage(actor: Actor): string {
  const { His, he, his } = actor.pronouns;

  const intro = `${His} ${actor.eyes} eyes are`;

  if (actor.intelligence + actor.education > 15) {
    return `${intro} clever; with ${his} education, ${he} can be considered of above average intelligence.`;
  }
  if (actor.education > 0) {
    return `${intro} alert; ${he} is of average intelligence due to being ${actor.education > 15 ? 'well' : ''} educated.`;
  }

  return `${intro} alert; ${he} is of average intelligence and is undereducated.`;
}

function getActorBelowAverage(actor: Actor): string {
  const { His, he, his } = actor.pronouns;

  const intro = `${His} ${actor.eyes} eyes are`;

  if (actor.intelligence + actor.education >= -15) {
    return `${intro} alert; with ${his} education, ${he} can be considered of average intelligence.`;
  }
  if (actor.education > 0) {
    return `${intro} dim; ${he} is of below average intelligence despite having been ${actor.education > 15 ? 'thoroughly' : ''} educated.`;
  }

  return `${intro} dim; ${he} is of below average intelligence and is poorly educated.`;
}

function getActorStupid(actor: Actor): string {
  const { His, he, his } = actor.pronouns;

  const intro = `${His} ${actor.eyes} eyes are`;

  if (actor.intelligence + actor.education >= -50) {
    return `${intro} dim; even with ${his} education, ${he} can only be considered of below average intelligence.`;
  }
  if (actor.education > 0) {
    return `${intro} dull; ${he} is quite stupid despite having ${actor.education > 15 ? 'an advanced' : 'some'} education.`;
  }

  return `${intro} dull; ${he} is quite stupid and ignorant.`;
}

function getActorMoron(actor: Actor): string {
  const { His, he, his } = actor.pronouns;

  const intro = `${His} ${actor.eyes}-eyed gaze betrays near-total insensibility;`;

  if (actor.intelligence + actor.education >= -95) {
    return `${intro} even with ${his} education, ${he} is still really stupid.`;
  }
  if (actor.education > 0) {
    return `${intro} ${he} is a moron, yet somehow still remembers the basics of an education.`;
  }

  return `${intro} ${he} is a moron, and ignorant to boot.`;
}

export default function eyes(actor: Actor): string {
  if (actor.intelligence > 95) return getActorBrilliant(actor);
  if (actor.intelligence > 50) return getActorIntelligent(actor);
  if (actor.intelligence > 15) return getActorClever(actor);
  if (actor.intelligence >= -15) return getActorAverage(actor);
  if (actor.intelligence >= -50) return getActorBelowAverage(actor);
  if (actor.intelligence >= -95) return getActorStupid(actor);

  return getActorMoron(actor);
}
