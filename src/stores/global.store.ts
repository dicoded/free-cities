import { writable } from 'svelte/store';

import { formatDate } from '../ts/util/date';
import '../ts/util/extensions/number.extension';

export enum TradeType {
  GLOBAL = 'global',
  LOCAL = 'local',
  CUSTOM = 'custom',
}

export const debug = writable(false);

export const entityID = writable(1);

export const week = writable(1);

export const month = writable(1);

export const year = writable(new Date().getFullYear() + 27);

export const date = writable(formatDate(new Date(new Date().getFullYear() + 27, 1, 1)));

export const cash = writable(20_000);

export const upkeep = writable(0);

export const reputation = writable(0);

export const difficulty = writable({
  level: 1,
  rate: 1,
  income: 1,
});

export const trade = writable(TradeType.GLOBAL);

export const minimumAge = writable(18);

export const makeDicks = writable(false);

export const max = writable({
  age: 75,
});

export const min = writable({
  age: 18,
});
