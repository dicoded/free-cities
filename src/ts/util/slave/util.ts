import { get } from 'svelte/store';

import Actor from '@classes/actor/Actor';
import Slave from '@classes/slave/Slave';

import { actors, slaves } from '@stores/actors.store';

export function getActor(ID: number): Actor | undefined {
  return get(actors).find((a) => a.ID === ID);
}

export function getSlave(ID: number): Slave | undefined {
  return get(slaves).find((s) => s.ID === ID);
}
