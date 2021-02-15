import { writable } from 'svelte/store';

import Arcology from 'classes/arcology/Arcology';

const playerArcology = new Arcology('Arcology X-4');
const arcologiesList: Arcology[] = [playerArcology];

const arcology = writable(playerArcology);
export const arcologies = writable(arcologiesList);

export default arcology;
