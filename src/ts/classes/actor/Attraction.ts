interface IAttraction {
  /** How attracted to males the actor is.
   *
   * | **Range** | **Description** |
   * |----------:|:----------------|
   * | *0 - 5*   | Disgusted       |
   * | *6 - 15*  | Turned off      |
   * | *16 - 35* | Not attracted   |
   * | *36 - 65* | Indifferent     |
   * | *66 - 85* | Attracted       |
   * | *86 - 95* | Aroused         |
   * | *96+*     | Passionate      |
   *
   * If both `.male` and `.female` are `> 95`, the actor is omnisexual.
   *
   * If either is `> 95` and `.drive` is `> 95`, the actor is a nymphomaniac.
   */
  male: number;

  /** How attracted to females the actor is.
   *
   * | **Range** | **Description** |
   * |----------:|:----------------|
   * | *0 - 5*   | Disgusted       |
   * | *6 - 15*  | Turned off      |
   * | *16 - 35* | Not attracted   |
   * | *36 - 65* | Indifferent     |
   * | *66 - 85* | Attracted       |
   * | *86 - 95* | Aroused         |
   * | *96+*     | Passionate      |
   *
   * If both `.male` and `.female` are `> 95`, the actor is omnisexual.
   *
   * If either is `> 95` and `.drive` is `> 95`, the actor is a nymphomaniac.
   */
  female: number;

  /** Whether the player knows the actor's attraction types and strengths. */
  known: boolean;
}

export default class Attraction implements IAttraction {
  male: number;

  female: number;

  known: boolean;

  constructor() {
    this.male = 0;
    this.female = 0;
    this.known = false;
  }
}
