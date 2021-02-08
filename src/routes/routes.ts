// TODO: figure out some way of dynamically getting route from file name

import Intro from './intro/Intro.svelte';
import Main from './Main.svelte';
import Start from './Start.svelte';
import Event from './events/Event.svelte';
import NewSlave from './slave/NewSlave.svelte';
import Acquisition from './slave/Acquisition.svelte';

import Arcade from './facilities/Arcade.svelte';
import Armory from './facilities/Armory.svelte';
import Brothel from './facilities/Brothel.svelte';
import Cellblock from './facilities/Cellblock.svelte';
import Club from './facilities/Club.svelte';
import Farmyard from './facilities/Farmyard.svelte';
import Incubator from './facilities/Incubator.svelte';
import MasterSuite from './facilities/MasterSuite.svelte';
import Nursery from './facilities/Nursery.svelte';
import Pit from './facilities/Pit.svelte';
import Schoolroom from './facilities/Schoolroom.svelte';
import ServantsQuarters from './facilities/ServantsQuarters.svelte';
import Spa from './facilities/Spa.svelte';

const views = [
  ['start', Start],
  ['intro', Intro],
  ['main', Main],
  ['event', Event],
  ['new-slave', NewSlave],
  ['acquisition', Acquisition],

  ['arcade', Arcade],
  ['armory', Armory],
  ['brothel', Brothel],
  ['cellblock', Cellblock],
  ['club', Club],
  ['farmyard', Farmyard],
  ['incubator', Incubator],
  ['master-suite', MasterSuite],
  ['nursery', Nursery],
  ['pit', Pit],
  ['schoolroom', Schoolroom],
  ['servants-quarters', ServantsQuarters],
  ['spa', Spa],
];
const routes = new Map();

views.forEach((i) => {
  routes.set(i[0], i[1]);
});

export default routes;
