// @ts-ignore TODO:
interface Number {
  /**
   * Returns whether a number is between two other numbers.
   * @param start The first number.
   * @param stop The second number.
   * @param inclusive Whether or not to include `start` and `stop`.
   */
  between(start: number, stop: number, inclusive?: boolean): boolean;

  /** Clamps a given number between `min` and `max`. */
  clamp(min: number, max: number): number;

  /**
   * Returns a normal distribution with the given `min` and `max`.
   *
   * See http://bit.ly/3o4fXUM for reference.
   */
  gaussian(min?: number, max?: number, skew?: number): number;

  /**
   * Generates two independent Gaussian numbers using the Box-Muller transform.
   *
   * @param {number} [mean] The desired mean.
   * @param {number} [deviation] The standard deviation.
   */
  gaussianPair(mean?: number, deviation?: number): number[];

  /** Returns a random number or `count` numbers between `min` and `max`, inclusive. */
  random(min: number, max: number): number;

  /**
   * Rounds a number down to the nearest `step`.
   * @param step How many numbers to round to.
   *
   * @example
   * let val = 8;
   * val.round(5);  // 10
   */
  round(step: number): number;

  /** Formats the given value to display as a currency. */
  toCash(): string;

  /** Converts the given value to centimeters. */
  toCentimeters(): number;

  /** Converts the given value to inches. */
  toInches(): number;

  /** Converts the given value to kilograms. */
  toKilograms(): number;

  /** Converts the given value to pounds. */
  toPounds(): number;

  /** Converts the given value to either a number ("2") or a word ("two"). */
  toWord(): string;
}

const getOnes = function getOnes(): string[] {
  return [
    'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen',
  ];
};

const getTens = function getTens(): string[] {
  return [
    'ten', 'twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety',
  ];
};

const getScales = function getScales(): string[] {
  return [
    'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion',
    'nonillion', 'decillion',
  ];
};

const isTruthy = (item: any) => !!item;

/** Converts a given number into "chunks" of 0-999 */
const chunk = function chunk(num: number): number[] {
  const thousands: number[] = [];
  let number = num;

  while (number > 0) {
    thousands.push(number % 10);
    number = Math.floor(number / 1000);
  }

  return thousands;
};

const inEnglish = function inEnglish(num: number): string {
  const words: string[] = [];

  if (num === 0) return 'zero';
  if (num < 20) return getOnes()[num - 1];

  if (num < 100) {
    const ones = num % 10;
    const tens = Math.floor(num / 10);

    words.push(getTens()[tens - 1]);
    words.push(inEnglish(ones));

    return words
      .filter(isTruthy)
      .join('-');
  }

  const hundreds = Math.floor(num / 100);

  words.push(inEnglish(hundreds), 'hundred', inEnglish(num % 100));

  return words
    .filter(isTruthy)
    .join(' ');
};

const withCommas = function withCommas(num: number): string {
  return num.toLocaleString();
};

Number.prototype.between = function between(this: number, a: number, b: number, inclusive: boolean = true): boolean {
  const min = Math.min.apply(Math, [a, b]);
  const max = Math.max.apply(Math, [a, b]);
  return inclusive ? this >= min && this <= max : this > min && this < max;
};

Number.prototype.clamp = function clamp(this: number, min: number, max: number): number {
  return Math.min(Math.max(min, this), max);
};

Number.prototype.gaussian = function gaussian(this: number,
  min: number = 0,
  max: number = 0,
  skew: number = 0): number {
  let u = 0;
  let v = 0;

  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = num / 10.0 + 0.5;

  if (num > 1 || num < 0) num = Number().gaussian(min, max, skew);

  num **= skew;
  num *= max - min;
  num += min;

  return num;
};

Number.prototype.gaussianPair = function gaussianPair(this: number, mean: number = 0, deviation: number = 1) {
  const num = Math.sqrt(-2.0 * Math.log(1 - Math.random()));
  const sigma = 2.0 * Math.PI * (1 - Math.random());

  return [num * Math.cos(sigma), num * Math.sin(sigma)].map((val) => val * deviation * mean);
};

Number.prototype.random = function random(this: number, min: number, max: number) {
  function rand() {
    return Math.random() * (max - min + 1) + min;
  }

  return Math.floor(rand());
};

Number.prototype.round = function round(this: number, step: number = 1) {
  if (this - Math.floor(this / step) * step > 5) {
    return Math.ceil(this / step) * step;
  }

  return Math.floor(this / step) * step;
};

Number.prototype.toCash = function toCash(this: number): string {
  if (this < 0) return `-¤${withCommas(Math.abs(this))}`;

  return `¤${withCommas(this)}`;
};

Number.prototype.toCentimeters = function toCentimeters(this: number): number {
  return this * 2.54;
};

Number.prototype.toInches = function toInches(this: number): number {
  return this / 2.54;
};

Number.prototype.toKilograms = function toKilograms(this: number): number {
  return this / 2.205;
};

Number.prototype.toPounds = function toPounds(this: number): number {
  return this * 2.205;
};

Number.prototype.toWord = function toWord(this: number): string {
  return inEnglish(this);
};
