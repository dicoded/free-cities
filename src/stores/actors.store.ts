import { writable } from 'svelte/store';

import Actor from '@classes/actor/Actor';
import Slave from '@classes/slave/Slave';

const arrActor: Actor[] = [];
const arrSlave: Slave[] = [];

export const actors = writable(arrActor);
export const slaves = writable(arrSlave);
