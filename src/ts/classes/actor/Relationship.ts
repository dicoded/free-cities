export enum RelationshipType {
  /** Married to the player. */
  WIFE,
  /** Emotionally bound to the player. */
  BOUND,
  /** Emotional slut. */
  SLUT,
  /** Friends with the target. */
  FRIENDS,
  /** Best friends with the target. */
  BEST_FRIENDS,
  /** Friend with benefits with the target. */
  FWB,
  /** Lovers with the target. */
  LOVER,
  /** Married to the target. */
  SLAVE_WIFE,
}

interface IRelationship {
  /**
   * The ID of the actor to whom the relationship applies.
   *
   * `0` if none.
   */
  target: number;

  /** The type of relationship. */
  type: RelationshipType;
}

export default class Relationship implements IRelationship {
  target: number;

  type: RelationshipType;

  constructor() {
    this.target = 0;
    this.type = RelationshipType.FRIENDS;
  }
}
