import { writable } from 'svelte/store';
import { generateSlave } from '../ts/util/slave/generate';

import Slave from '../ts/classes/slave/Slave';

const slave = writable<Slave>(generateSlave());

export default slave;
