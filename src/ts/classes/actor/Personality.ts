/**
 * An in-depth construct of the slave's personality.
 * 16 total, created from 4 different scales.
 *
 * See https://www.personalitypage.com/html/high-level.html,
 * https://www.16personalities.com/personality-types, and
 * https://www.verywellmind.com/the-myers-briggs-type-indicator-2795583 for more.
 */

export enum Personalities {
  ISTJ = 'ISTJ',
  ISFJ = 'ISFJ',
  INFJ = 'INFJ',
  INTJ = 'INTJ',
  ISTP = 'ISTP',
  ISFP = 'ISFP',
  INFP = 'INFP',
  INTP = 'INTP',
  ESTP = 'ESTP',
  ESFP = 'ESFP',
  ENFP = 'ENFP',
  ENTP = 'ENTP',
  ESTJ = 'ESTJ',
  ESFJ = 'ESFJ',
  ENFJ = 'ENFJ',
  ENTJ = 'ENTJ',
}

interface IPersonality {
  /**
   * How introverted the slave is, on a scale from 0 - 100.
   *
   * Introverts are more comfortable by themselves than with other people, and would generally prefer to be left alone
   * than to spend time in large groups, particularly groups with people they don't know well.
   *
   * Mutually exclusive with `extroversion`. `introversion + extroversion` must equal 100 total.
   */
  introversion: number;

  /**
   * How extroverted the slave is, on a scale from 0 - 100.
   *
   * Extroverts prefer spending time with other people, and are comfortable with meeting new people and making new
   * friends.
   *
   * Mutually exclusive with `introversion`. `extroversion + introversion` must equal 100 total.
   */
  extroversion: number;

  /**
   * How sensory the slave is, on a scale from 0 - 100.
   *
   * Sensory people focus more on the reality of how things are, rather than how they could be. They are typically
   * more detail-oriented and prefer to describe things in a specific, literal way. They will typically approach a
   * task or a problem in a more tactful, pragmatic approach.
   *
   * Mutually exclusive with `intuition`. `sensing + intuition` must equal 100 total.
   */
  sensing: number;

  /**
   * How intuitive the slave is, on a scale from 0 - 100.
   *
   * Intuitive people are more big-picture and imagine how things *could* be, and enjoy ideas and concepts over facts
   * and details. They prefer to describe things in a figurative, poetic sense. They will typically approach a task or
   * a problem in a more abstract way, trying to solve the overarching issue rather than get bogged down with details.
   *
   * Mutually exclusive with `sensing`. `intuition + sensing` must equal 100 total.
   */
  intuition: number;

  /**
   * How rationale-driven the slave is, on a scale from 0 - 100.
   *
   * People with this trait are usually described as more level-headed and impersonal, and typically value justice and
   * fairness. They are more likely to make decisions based on facts rather than their emotions, and enjoy finding the
   * flaws in an argument.
   *
   * Mutually exclusive with `feeling`. `thinking + feeling` must equal 100 total.
   */
  thinking: number;

  /**
   * How emotion-driven the slave is, on a scale from 0 - 100.
   *
   * People with this trait are usually described as warm and empathetic, and typically value harmony and forgiveness.
   * They are more likely to make decisions based on personal values and how their actions affect others, and can
   * often be described as "people-pleasers".
   *
   * Mutually exclusive with `thinking`. `feeling + thinking` must equal 100 total.
   */
  feeling: number;

  /**
   * How judgemental the slave is, on a scale from 0 - 100.
   *
   * People with this trait typically prefer to have a set schedule and rules to follow, and like to have plans made
   * in advance. They typically prefer to have detailed, step-by-step instructions, and prefer to have their options
   * planned out and settled in advance.
   *
   * Mutually exclusive with `perceiving`. `judging + perceiving` must equal 100 total.
   */
  judging: number;

  /**
   * How perceptive the slave is, on a scale from 0 - 100.
   *
   * People with this trait typically prefer to improvise and make things up as they go, and are more spontaneous and
   * enjoy surprises and new situations. They usually see rules and deadlines as more flexible, and prefer to leave
   * their options open and available.
   *
   * Mutually exclusive with `judging`. `perceiving + judging` must equal 100 total.
   */
  perceiving: number;
}

/** Creates a personality type for the slave. */
export default class Personality implements IPersonality {
  introversion: number;

  extroversion: number;

  sensing: number;

  intuition: number;

  thinking: number;

  feeling: number;

  judging: number;

  perceiving: number;

  constructor() {
    this.introversion = 50;
    this.extroversion = 50;
    this.sensing = 50;
    this.intuition = 50;
    this.thinking = 50;
    this.feeling = 50;
    this.judging = 50;
    this.perceiving = 50;
  }

  types: Personalities[][][][] = [
    [
      [
        [Personalities.ISTJ, Personalities.ISTP],
        [Personalities.ISFJ, Personalities.ISFP],
      ],
      [
        [Personalities.INTJ, Personalities.INTP],
        [Personalities.INFJ, Personalities.INFP],
      ],
    ],
    [
      [
        [Personalities.ESTJ, Personalities.ESTP],
        [Personalities.ESFJ, Personalities.ESFP],
      ],
      [
        [Personalities.ENTJ, Personalities.ENTP],
        [Personalities.ENFJ, Personalities.ENFP],
      ],
    ],
  ];

  /** Ensures `x` and `y` both equal 100 exactly. */
  private clamp(x: number, y: number): {a: number, b: number} {
    let a: number = x;
    let b: number = y;

    if (x + y > 100) {
      a -= ((x + y) - 100) / 2;
      b -= ((x + y) - 100) / 2;
    }

    if (x + y < 100) {
      a += ((x + y) - 100) / 2;
      b += ((x + y) - 100) / 2;
    }

    return { a, b };
  }

  private get w(): number {
    if (this.extroverted) {
      return 1;
    }

    return 0;
  }

  private get x(): number {
    if (this.intuitive) {
      return 1;
    }

    return 0;
  }

  private get y(): number {
    if (this.emotional) {
      return 1;
    }

    return 0;
  }

  private get z(): number {
    if (this.perceptive) {
      return 1;
    }

    return 0;
  }

  get type(): Personalities {
    return this.types[this.w][this.x][this.y][this.z];
  }

  get introverted(): boolean {
    const x = this.clamp(this.introversion, this.extroversion);

    return x.a > x.b;
  }

  get extroverted(): boolean {
    const x = this.clamp(this.extroversion, this.introversion);

    return x.a > x.b;
  }

  get sensory(): boolean {
    const x = this.clamp(this.sensing, this.intuition);

    return x.a > x.b;
  }

  get intuitive(): boolean {
    const x = this.clamp(this.intuition, this.sensing);

    return x.a > x.b;
  }

  get thoughtful(): boolean {
    const x = this.clamp(this.thinking, this.feeling);

    return x.a > x.b;
  }

  get emotional(): boolean {
    const x = this.clamp(this.feeling, this.thinking);

    return x.a > x.b;
  }

  get judgmental(): boolean {
    const x = this.clamp(this.judging, this.perceiving);

    return x.a > x.b;
  }

  get perceptive(): boolean {
    const x = this.clamp(this.perceiving, this.judging);

    return x.a > x.b;
  }
}
