import { writable } from 'svelte/store';
import Player from '../ts/classes/player/Player';

const PC = writable(new Player());

export default PC;
