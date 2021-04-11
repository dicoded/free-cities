// TODO: figure out some way of dynamically getting route from file name

import Intro from './intro/Intro.svelte';
import Main from './Main.svelte';
import Start from './Start.svelte';
import Event from './events/Event.svelte';
import Create from './actors/Create.svelte';
import Acquisition from './actors/Acquisition.svelte';
import Interact from './actors/Interact.svelte';

const views = [
  ['start', Start],
  ['intro', Intro],
  ['main', Main],
  ['event', Event],
  ['new-slave', Create],
  ['acquisition', Acquisition],
  ['slave-interact', Interact],
];

const routes = new Map();

views.forEach((i) => {
  routes.set(i[0], i[1]);
});

export default routes;
