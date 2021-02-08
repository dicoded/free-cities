import { writable } from 'svelte/store';

export enum NumberFormat {
  NUMBER = 'number',
  WORD = 'word',
}

const userSettings = {
  numberFormat: NumberFormat.NUMBER,
};

const settings = writable(userSettings);

export default settings;
