export enum Continent {
  NORTH_AMERICA = 'North America',
  SOUTH_AMERICA = 'South America',
  EUROPE = 'Europe',
  AFRICA = 'Africa',
  ASIA = 'Asia',
  AUSTRALIA = 'Australia',
  ANTARCTICA = 'Antarctica',
}

export enum Terrain {
  URBAN = 'urban',
  RURAL = 'rural',
  RAVINE = 'ravine',
  MARINE = 'marine',
  OCEANIC = 'oceanic',
}

export enum Location {
  NORTH_AMERICA = 'North America',
  SOUTH_AMERICA = 'South America',
  BRAZIL = 'Brazil',
  CENTRAL_EUROPE = 'Central Europe',
  WESTERN_EUROPE = 'Western Europe',
  EASTERN_EUROPE = 'Eastern Europe',
  SOUTHERN_EUROPE = 'Southern Europe',
  SCANDINAVIA = 'Scandinavia',
  MIDDLE_EAST = 'the Middle East',
  NORTHERN_AFRICA = 'Northern Africa',
  CENTRAL_AFRICA = 'Central Africa',
  SOUTHERN_AFRICA = 'Southern Africa',
  NORTHERN_ASIA = 'Northern Asia',
  CENTRAL_ASIA = 'Central Asia',
  SOUTHERN_ASIA = 'Southern Asia',
  AUSTRALIA = 'Australia',
}

interface IArcology {
  /** What continent the arcology is located in. */
  continent: Continent;

  /** The number of future societies the arcology can have. */
  futureSocieties: number;

  /** The lingua franca of the arcology. */
  language: string;

  /** The actual location of the arcology. */
  location: Location;

  /** The arcology's name. */
  name: string;

  /** The number of neighbors the arcology has. */
  neighbors: number;

  /** The type of arcology the player targets during setup. */
  target: string;

  /** The type of terrain the arcology is located on. */
  terrain: Terrain;
}

/** A basic arcology. */
export default class Arcology implements IArcology {
  continent: Continent;

  futureSocietiesCount: number;

  language: string;

  location: Location;

  name: string;

  neighbors: number;

  target: string;

  terrain: Terrain;

  constructor(name: string) {
    this.name = name;

    this.continent = Continent.NORTH_AMERICA;
    this.futureSocietiesCount = 1;
    this.language = 'English';
    this.location = Location.NORTH_AMERICA;
    this.neighbors = 1;
    this.target = 'new';
    this.terrain = Terrain.URBAN;
  }

  get futureSocieties(): number {
    return this.futureSocietiesCount;
  }

  set futureSocieties(count: number) {
    this.futureSocietiesCount = count.clamp(1, 7);
  }
}
