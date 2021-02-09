import { writable } from 'svelte/store';

import Slave from '../ts/classes/slave/Slave';

const slave = writable(new Slave());

export default slave;
