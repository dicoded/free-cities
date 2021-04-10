# Style

This project's code style is based on the [AirBnB style guide](https://github.com/airbnb/javascript), with some minor tweaks.

## Types

- All TypeScript `type`s should end with "Type".

```ts
// bad
type Foo = 'bar';

// good
type FooType = 'bar';
```

## Interfaces

- Interfaces must be prefixed with `I`.

```ts
// bad
interface Foo {
  ...
}

// good
interface IFoo {
  ...
}
```

- All interface properties must have a documentation comment. Comments must use proper grammar and begin with a capital
and end with a period.

```ts
// bad
interface IFoo {
  bar: number;
  baz: boolean;
}

// bad
interface IFoo {
  /** does something */
  bar: number;
  /** does something else */
  baz: boolean;
}

// good
interface IFoo {
  /** Does something. */
  bar: number;

  /** Does something else. */
  baz: boolean;
}
```

## Classes

- TypeScript class file names must be capitalized. All other TypeScript files should be lowercase.
- Class methods should be placed before getters and setters.

```ts
// bad
class Foo {
  get bar() { return };

  baz() { return };
}

// good
class Foo {
  bar() { return };

  get baz() { return };
}

// best
class Foo {
  /** Does something. */
  bar() { return };

  /** Does something else. */
  get baz() { return };
}
```

## Enums

- All enums should be capitalized and exported.

```ts
// bad
enum foo {
  ...
}

// bad
enum Foo {
  ...
}

// bad
export enum foo {
  ...
}

// good
export enum Foo {
  ...
}
```

## Whitespace

- Functions and handlers should have a whitespace or newline immediately after the opening brace and before the closing
brace. Use a newline, unless the function can fit within a single line (120 characters or less).

```ts
// bad
function foo() {return bar};

// good
function foo() { return bar };

// good
function foo() {
  return someRidiculouslyLongValueOrFunctionNameThatNormallyCantFitOnASingleLine;
};
```

## Control Statements

- Always end `switch` statements with a `break` or `return`.

> Why? This is a good habit to get into, and makes it less likely that you forget `break`s or `return`s anywhere else.

```ts
// bad
switch (foo) {
  case bar:
    baz();
    break;
  default:
    qux();
}

// good
switch (foo) {
  case bar:
    baz();
    break;
  default:
    qux();
    break;
}
```

- `if` statements that can fit in a single line and return a value should omit the braces (`{` `}`).

```ts
// bad
if (foo) { return bar };

// good
if (foo) return bar;
```

## Variables

- Each new variable declaration must have its own `const` or `let`. Group `const`s and `let`s together, and leave a
space between the two groups.

```ts
// bad
const foo = 'some value';
const bar = 'some other value';
let baz;

// bad
const foo = 'some value';
let bar;
const baz = 'some other value';

// good
const foo = 'some value';
const bar = 'some other value';

let baz;
```

## Numbers

- Numbers greater than 1,000 should either contain commas (in documentation or text) or underscores as commas (in code).

> Why? This greatly increases readability and makes number errors less likely.

```ts
// bad
/** 1000000 */
const foo = 1000000;

// good
/** 1,000,000 */
const foo = 1_000_000;
```
