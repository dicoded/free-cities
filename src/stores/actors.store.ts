import { writable } from 'svelte/store';

import type Actor from 'classes/actor/Actor';
import type Slave from 'classes/slave/Slave';

const arrActor: Actor[] = [];
const arrSlave: Slave[] = [];

export const actors = writable(arrActor);
export const slaves = writable(arrSlave);
