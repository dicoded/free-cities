import { writable } from 'svelte/store';
import { generateSlave } from '@util/slave/generate';

import Slave from '@classes/slave/Slave';

const slave = writable<Slave>(generateSlave());

export default slave;
