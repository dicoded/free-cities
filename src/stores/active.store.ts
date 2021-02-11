import { writable } from 'svelte/store';

import Slave from 'classes/slave/Slave';

const slave = writable(new Slave());

export default slave;
