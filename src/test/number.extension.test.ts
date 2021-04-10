import '@extensions/number.extension';

describe('between', () => {
  it('returns a number between two given numbers', () => {
    expect((1).between(1, 5, true)).toBe(true);
    expect((1).between(1, 5)).toBe(true);
    expect((1).between(1, 5, false)).toBe(false);
  });
});

describe('clamp', () => {
  it('clamps a given number within the specified range', () => {
    expect((100).clamp(1, 10)).toBe(10);
    expect((-100).clamp(1, 10)).toBe(1);
  });
});

describe('random', () => {
  it('returns a given amount of numbers between two given numbers', () => {
    expect(Number().random(1, 10)).toBeLessThanOrEqual(10);
    expect(Number().random(1, 10)).toBeGreaterThanOrEqual(1);
  });
});

describe('round', () => {
  it('rounds a given number down to the nearest step', () => {
    expect((9).round(4)).toBe(8);
    expect((21).round(6)).toBe(18);
  });
});

describe('toCentimeters', () => {
  it('converts a given number into centimeters', () => {
    expect((10).toCentimeters()).toBe(25.4);
    expect((-10).toCentimeters()).toBe(-25.4);
  });
});

describe('toInches', () => {
  it('converts a given number into inches', () => {
    expect((25.4).toInches()).toBe(10);
    expect((-25.4).toInches()).toBe(-10);
  });
});

describe('toKilograms', () => {
  it('converts a given number to kilograms', () => {
    expect((22.05).toKilograms()).toBe(10);
    expect((-22.05).toKilograms()).toBe(-10);
  });
});

describe('toPounds', () => {
  it('converts a given number to pounds', () => {
    expect((10).toPounds()).toBe(22.05);
    expect((-10).toPounds()).toBe(-22.05);
  });
});

describe('toWord', () => {
  it('converts a given number into either numbers (\'2\') or words (\'two\')', () => {
    expect((2).toWord()).toBe('two');
    expect((99).toWord()).toBe('ninety-nine');
  });
});

describe('toCash', () => {
  it('formats a given number to display as a currency', () => {
    expect((100).toCash()).toBe('¤100');
    expect((-100).toCash()).toBe('-¤100');
    expect((100_000).toCash()).toBe('¤100,000');
    expect((-100_000).toCash()).toBe('-¤100,000');
  });
});
