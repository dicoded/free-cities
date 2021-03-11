import { writable } from 'svelte/store';

const items = {
  nav: true,

  modal: true,

  character: true,
  sex: false,
  difficulty: false,
  trade: false,
  content: false,
  arcology: false,

  extreme: false,
  hyperpreg: false,
  dicks: 50,
  broodmothers: false,
  bestiality: false,
  watersports: false,
  incest: false,
};

const see = writable(items);

export default see;
