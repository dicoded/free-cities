import Actor from '../actor/Actor';

export enum Career {
  WEALTH = 'idle wealth',
  VENTURE_CAPITALIST = 'venture capitalism',
  PRIVATE_MILITARY = 'private military work',
  SLAVING = 'slaving',
  ENGINEERING = 'arcology engineering',
  SURGERY = 'slave surgery',
  CELEBRITY = 'minor celebrity',
  ESCORT = 'high-class escort;',
  SERVANT = 'servant;',
  GANG_LEADER = 'gang leader;',
  HACKER = 'black hat hacker',
  ARCOLOGY_OWNER = 'arcology owner',
}

export enum Acquisition {
  WEALTH = 'wealth',
  DILIGENCE = 'diligence',
  FORCE = 'force',
  SOCIAL_ENGINEERING = 'social engineering',
  LUCK = 'luck',
}

interface IPlayer {
  /** The player's career before becoming an arcology owner. */
  career: Career;

  /** How the player came to acquire their arcology. */
  acquisition: Acquisition;
}

export default class Player extends Actor implements IPlayer {
  career: Career;

  acquisition: Acquisition;

  constructor() {
    super(-1);

    this.career = Career.ARCOLOGY_OWNER;
    this.acquisition = Acquisition.DILIGENCE;
  }
}
