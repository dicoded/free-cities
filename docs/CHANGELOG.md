# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.1.5 - 2021-04-10

- Replaced "`../`" paths with "`@`" alias paths

## 0.1.4 - 2021-02-03

### Added

- New `slave` store

### Changed

- Minor typing fixes

## 0.1.3 - 2021-01-25

## Added

- New view for creating custom slaves
- Flaws, quirks, and fetishes
- Many nationalities with many, *many* corresponding names
- New `actor` store
- Family
  - For both slaves and the player
  - Includes many getters for easy condition logic
  - Parents and siblings
  - Children
  - Extended family
    - Grandparents
    - Grandchildren
    - Piblings and niblings (aunts/uncles and their children, respectively)
    - Cousins
- Intelligence and education stats
- Genetics
  - Includes different quirks and modifications
- Devotion, trust, and more slave-related properties
- `.toSentence` `Array` method
- `gaussian` and `gaussianPair` `Number` methods
- More character customization options, such as genitals and past sexual experience

### Changed

- Project is now compiled in strict mode
- The sidebar can now be rendered without a link
- Replaced some stores with declared objects with references to objects
- Exported remaining enums
- Replaced pronoun enums with objects
- Reworked `.eye.both` getter and setter logic
- Replaced most `null`s with "placeholder" values
- Rearranged some files
- Updated style guide somewhat
- Minor documentation updates
- Minor bugfixes

## Removed

- Inputs for custom eye and hair colors during player customization

## 0.1.2 - 2021-01-10

### Added

- New datepicker
- More player customization options
  - Players can now choose their genitalia and the types of sex their character has or hasn't had
- New counters for characters and global totals
- New nationalities to choose from
- Trade, Difficulty, and Content customization

### Changed

- Reorganized file structure for better organization
- Reformatted most of the character customization code for cleaner and more consistent structure

### Removed

- Transitions from introduction

## 0.1.1 - 2021-01-02

### Added

- Slave class
- Favicon
- `.partners` property
- Overview of player's choices during initial customization
- Beauty marks and birthmarks as an option for players
- Dairy facility
- Basic facility and arcology classes
- Default link to use when one isn't explicitly given
- `purchased` store
- Unit tests

### Changed

- Sidebar now closes when clicked outside
- Router is now based on a single-view system
- Replace the `view` store with a more aptly-named `see` store
- General polishes
- Vague bugfixes

### Removed

- Unneeded code
- Unused wildcard route
- `.css` files

## 0.1.0 - 2020-12-01

### Added

- Intro is now finished(ish)
- Working sidebar
- Main game loop is now functional (albeit in a very, *very* primitive state)

### Changed

- Added to style guide

## 0.0.3 - 2020-11-22

### Added

- Pregnancy
- Personality
- Accessories
- Piercings
- Prototype extensions for `Number`, `String`, and `Array`

### Changed

- Rearranged files to avoid clutter
- Refactored classes and interfaces to cut down on file sizes

## 0.0.2 - 2020-11-20

### Added

- Pronouns

## 0.0.1 - 2020-11-17

### Added

- Changelog
- Birth and slave names
- Genes

### Changed

- Converted sex, name, and face sections of Intro to components
