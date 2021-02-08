import { writable } from 'svelte/store';

const facilities = {
  arcade: false,
  armory: false,
  brothel: false,
  cellblock: false,
  club: false,
  dairy: false,
  farmyard: false,
  incubator: false,
  masterSuite: false,
  nursery: false,
  pit: false,
  schoolroom: false,
  servantsQuarters: false,
  spa: false,
};

const upgrades = {
  geneticMapping: 0,
};

const purchased = writable({
  facilities,
  upgrades,
});

export default purchased;
