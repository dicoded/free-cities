import Body from '../body/Body';
import Entity from '../entity/Entity';
import Pronouns from './Pronouns';
import Name from './Name';
import Personality from './Personality';
import Quirks from './quirks/Quirks';
import Flaws from './flaws/Flaws';
import Fetish from './Fetish';
import Attraction from './Attraction';
import Family from './Family';
import Relationship from './Relationship';
import Rivalry from './Rivalry';

import Accessories from '../actor/Accessories';

import { Sex } from '../body/nonphysical/Nonphysical';
import { Piercing } from '../actor/Piercings';

import { getActor } from '@util/slave/util';

interface IActor extends Entity, Body {

  /** Properties pertaining to the actor's name. */
  name: Name;

  /** Any accessories the slave is wearing. */
  accessories: Accessories;

  /** Who the actor is and isn't attracted to. */
  attraction: Attraction;

  /**
   * The actor's sex drive.
   *
   * | **Range** | **Description**    |
   * |----------:|:-------------------|
   * | *0 - 20*  | No sex drive       |
   * | *21 - 40* | Poor sex drive     |
   * | *41 - 60* | Average sex drive  |
   * | *61 - 80* | Good sex drive     |
   * | *81 - 95* | Powerful sex drive |
   * | *96+*     | Nymphomaniac       |
   */
  drive: number;

  /** Any fetish the actor has. */
  fetish: Fetish | null;

  /** Any flaws the actor has. */
  flaws: Flaws;

  /**
   * How intelligent the actor is.
   *
   * | **Range**     | **Description**     |
   * |--------------:|:--------------------|
   * | *-100 - -96* | Borderline retarded |
   * | *-95 - -51*  | Very slow           |
   * | *-50 - -16*  | Slow                |
   * | *-15 - 15*   | Average             |
   * | *16 - 50*    | Smart               |
   * | *51 - 95*    | Very smart          |
   * | *96 - 100*   | Brilliant           |
   */
  intelligence: number;

  /**
   * How much education the actor has had.
   *
   * | **Range**  | **Description** |
   * |-----------:|:----------------|
   * | *0*        | Uneducated      |
   * | *1 - 15*   | Educated        |
   * | *16 - 30*  | Well educated   |
   */
  education: number;

  /** Where the actor is from. */
  nationality: string;

  /** Properties pertaining to the actor's pronouns. */
  pronouns: Pronouns;

  /** A list of the IDs of everyone the actor has had a sexual encounter with. */
  partners: Set<number>

  /** The actor's personality. */
  personality: Personality;

  /** Any quirks the actor has. */
  quirks: Quirks;

  /** Any relationship the actor is in, if any. */
  relationship: Relationship;

  /** Any rivalry the actor is in, if any. */
  rivalry: Rivalry;
}

/** A basic human actor. */
export default class Actor extends Body implements IActor {
  ID: number;

  accessories: Accessories;

  intelligence: number;

  education: number;

  name: Name;

  nationality: string;

  partners: Set<number>

  personality: Personality;

  quirks: Quirks;

  flaws: Flaws;

  fetish: Fetish | null;

  attraction: Attraction;

  drive: number;

  family: Family;

  relationship: Relationship;

  rivalry: Rivalry;

  constructor() {
    super();

    this.ID = 0;
    this.name = new Name();
    this.accessories = new Accessories();
    this.intelligence = 0;
    this.education = 0;
    this.nationality = '';
    this.partners = new Set();
    this.personality = new Personality();
    this.quirks = new Quirks();
    this.flaws = new Flaws();
    this.fetish = null;
    this.attraction = new Attraction();
    this.drive = 50;
    this.family = new Family();
    this.relationship = new Relationship();
    this.rivalry = new Rivalry();
  }

  isChildOf(actor: Actor): boolean {
    return actor.ID === this.father || actor.ID === this.mother;
  }

  isParentOf(actor: Actor): boolean {
    return this.family.sons.has(actor.ID) || this.family.daughters.has(actor.ID);
  }

  isSiblingOf(actor: Actor): boolean {
    return this.siblings.includes(actor.ID) && this.mother === actor.mother && this.father === actor.father;
  }

  isBrotherOf(actor: Actor): boolean {
    return this.isSiblingOf(actor) && this.sex === Sex.MALE;
  }

  isSisterOf(actor: Actor): boolean {
    return this.isSiblingOf(actor) && this.sex === Sex.FEMALE;
  }

  isTwinOf(actor: Actor): boolean {
    return this.age.birthday === actor.age.birthday;
  }

  isHalfSiblingOf(actor: Actor): boolean {
    return (this.father === actor.father && this.mother !== actor.mother)
      || (this.father !== actor.father && this.mother === actor.mother);
  }

  isGrandChildOf(actor: Actor): boolean {
    return actor.children.includes(this.mother || this.father);
  }

  isGrandparentOf(actor: Actor): boolean {
    return this.children.includes(actor.mother || actor.father);
  }

  isPiblingOf(actor: Actor): boolean {
    return (getActor(this.mother)?.siblings.includes(actor.ID) ?? false)
      || (getActor(this.father)?.siblings.includes(actor.ID) ?? false);
  }

  isAuntOf(actor: Actor): boolean {
    return this.isPiblingOf(actor) && this.sex === Sex.FEMALE;
  }

  isUncleOf(actor: Actor): boolean {
    return this.isPiblingOf(actor) && this.sex === Sex.MALE;
  }

  isNiblingOf(actor: Actor): boolean {
    if (this.siblings.includes(actor.father) || this.siblings.includes(actor.mother)) return true;

    return false;
  }

  isNephewOf(actor: Actor): boolean {
    return this.isNiblingOf(actor) && this.sex === Sex.MALE;
  }

  isNieceOf(actor: Actor): boolean {
    return this.isNiblingOf(actor) && this.sex === Sex.FEMALE;
  }

  isCousinOf(actor: Actor): boolean {
    if (this.father) return getActor(this.father)?.siblings.includes(actor.father || actor.mother) ?? false;
    if (this.mother) return getActor(this.mother)?.siblings.includes(actor.father || actor.mother) ?? false;

    return false;
  }

  addSibling(actor: Actor): void {
    if (actor.sex === Sex.MALE) this.brothers.add(actor.ID);
    else this.sisters.add(actor.ID);
  }

  addChild(actor: Actor): void {
    if (actor.sex === Sex.MALE) this.sons.add(actor.ID);
    else this.daughters.add(actor.ID);
  }

  relativeTo(actor: Actor): string | null {
    if (!actor) return null;

    if (this.isChildOf(actor) && actor.sex === Sex.MALE) return 'son';
    if (this.isChildOf(actor)) return 'daughter';

    if (this.isMomDad) return 'sole parent';
    if (this.father === actor.ID) return 'father';
    if (this.mother === actor.ID) return 'mother';

    if (this.isTwinOf(actor) && actor.sex === Sex.MALE) return 'twin brother';
    if (this.isTwinOf(actor)) return 'twin sister';

    if (this.isSiblingOf(actor) && actor.sex === Sex.MALE) return 'brother';
    if (this.isSiblingOf(actor)) return 'sister';

    if (this.isHalfSiblingOf(actor) && actor.sex === Sex.MALE) return 'half-brother';
    if (this.isHalfSiblingOf(actor)) return 'half-sister';

    if (this.isNiblingOf(actor) && actor.sex === Sex.MALE) return 'uncle';
    if (this.isNiblingOf(actor)) return 'aunt';

    if (this.isPiblingOf(actor) && actor.sex === Sex.MALE) return 'nephew';
    if (this.isPiblingOf(actor)) return 'niece';

    if (this.isCousinOf(actor)) return 'cousin';

    if (this.isGrandChildOf(actor) && actor.sex === Sex.MALE) return 'grandfather';
    if (this.isGrandChildOf(actor)) return 'grandmother';

    if (this.isGrandparentOf(actor) && actor.sex === Sex.MALE) return 'grandson';
    if (this.isGrandparentOf(actor)) return 'granddaughter';

    return null;
  }

  get pronouns(): Pronouns {
    return new Pronouns(this);
  }

  get father(): number {
    return this.family.father;
  }

  set father(ID: number) {
    this.family.father = ID;
  }

  get mother(): number {
    return this.family.mother;
  }

  set mother(ID: number) {
    this.family.mother = ID;
  }

  get brothers(): Set<number> {
    return this.family.brothers;
  }

  get sisters(): Set<number> {
    return this.family.sisters;
  }

  get siblings(): number[] {
    return [...this.brothers, ...this.sisters];
  }

  get sons(): Set<number> {
    return this.family.sons;
  }

  get daughters(): Set<number> {
    return this.family.daughters;
  }

  get children(): number[] {
    return [...this.sons, ...this.daughters];
  }

  get isMomDad(): boolean {
    return this.family.father !== 0
      && this.family.mother !== 0
      && this.family.father === this.family.mother;
  }

  get closeRelatives(): number {
    let count: number = 0;

    if (this.father !== 0) count++;
    if (this.mother !== 0) count++;
    if (this.brothers.size > 0) count += this.brothers.size;
    if (this.sisters.size > 0) count += this.sisters.size;
    if (this.sons.size > 0) count += this.sons.size;
    if (this.daughters.size > 0) count += this.daughters.size;

    return count;
  }

  // TODO:
  // get distantRelatives(): number {
  // }

  // get totalRelatives(): number {
  // }

  get isAsexual(): boolean {
    return this.attraction.male <= 65 && this.attraction.female <= 65;
  }

  get isBisexual(): boolean {
    return this.attraction.male > 65 && this.attraction.female > 65;
  }

  get isGay(): boolean {
    return (this.sex === Sex.MALE && this.attraction.male > 65)
      || (this.sex === Sex.FEMALE && this.attraction.female > 65);
  }

  get hasLisp(): boolean {
    return super.hasLisp
      || (this.accessories.piercings?.lips === Piercing.LIGHT && this.accessories.piercings?.tongue === Piercing.HEAVY)
      || (this.accessories.piercings?.lips === Piercing.HEAVY && this.accessories.piercings?.tongue === Piercing.LIGHT);
  }
}
