import Actor from './Actor';
import '@util/extensions/string.extension';

interface IPronouns {
  /** The actor to whom the pronouns are assigned. */
  actor: Actor;
}

export const Subject = {
  male: 'he',
  female: 'she',
  plural: 'they',
  neuter: 'it',
};

export const Object = {
  male: 'him',
  female: 'her',
  plural: 'them',
  neuter: 'it',
};

export const PossessiveDeterminer = {
  male: 'his',
  female: 'her',
  plural: 'their',
  neuter: 'its',
};

export const PossessivePronoun = {
  male: 'his',
  female: 'hers',
  plural: 'theirs',
  neuter: 'its',
};

export const Reflexive = {
  male: 'himself',
  female: 'herself',
  plural: 'themselves',
  neuter: 'itself',
};

export const Noun = {
  male: 'boy',
  female: 'girl',
  plural: 'toy',
  neuter: 'AI',
};

export default class Pronouns implements IPronouns {
  actor: Actor;

  constructor(actor: Actor) {
    this.actor = actor;
  }

  get subject(): string { return Subject[this.actor.sex]; }

  get object(): string { return Object[this.actor.sex]; }

  get possessive(): string { return PossessiveDeterminer[this.actor.sex]; }

  get possessivePronoun(): string { return PossessivePronoun[this.actor.sex]; }

  get noun(): string { return Noun[this.actor.sex]; }

  get reflexive(): string { return Reflexive[this.actor.sex]; }

  get he(): string { return this.subject; }

  get He(): string { return this.he.capitalize(); }

  get him(): string { return this.object; }

  get Him(): string { return this.him.capitalize(); }

  get his(): string { return this.possessive; }

  get His(): string { return this.his.capitalize(); }

  get himself(): string { return this.reflexive; }

  get Himself(): string { return this.himself.capitalize(); }

  get boy(): string { return this.noun; }

  get she(): string { return this.subject; }

  get She(): string { return this.she.capitalize(); }

  get her(): string { return this.object; }

  get Her(): string { return this.her.capitalize(); }

  get hers(): string { return this.possessive; }

  get Hers(): string { return this.hers.capitalize(); }

  get herself(): string { return this.reflexive; }

  get Herself(): string { return this.herself.capitalize(); }

  get girl(): string { return this.noun; }

  get man(): string { return this.noun === Noun.male ? 'man' : 'woman'; }

  get men(): string { return this.noun === Noun.male ? 'men' : 'women'; }

  get woman(): string { return this.noun === Noun.female ? 'woman' : 'man'; }

  get women(): string { return this.noun === Noun.male ? 'women' : 'men'; }

  get shota(): string { return this.noun === Noun.male ? 'shota' : 'loli'; }

  get loli(): string { return this.noun === Noun.female ? 'loli' : 'shota'; }

  get father(): string { return this.noun === Noun.male ? 'father' : 'mother'; }

  get mother(): string { return this.noun === Noun.female ? 'mother' : 'father'; }

  get son(): string { return this.noun === Noun.male ? 'son' : 'daughter'; }

  get sons(): string { return this.noun === Noun.male ? 'sons' : 'daughters'; }

  get daughter(): string { return this.noun === Noun.female ? 'daughter' : 'son'; }

  get daughters(): string { return this.noun === Noun.female ? 'daughter' : 'sons'; }

  get brother(): string { return this.noun === Noun.male ? 'brother' : 'sister'; }

  get sister(): string { return this.noun === Noun.female ? 'sister' : 'brother'; }

  get husband(): string { return this.noun === Noun.male ? 'husband' : 'wife'; }

  get wife(): string { return this.noun === Noun.female ? 'wife' : 'husband'; }

  get wives(): string { return this.noun === Noun.female ? 'wives' : 'husbands'; }
}

export function getPronouns(actor: Actor) {
  return new Pronouns(actor);
}
