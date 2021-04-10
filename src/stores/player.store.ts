import { writable } from 'svelte/store';
import Player from '@classes/player/Player';

const PC = writable(new Player());

export default PC;
