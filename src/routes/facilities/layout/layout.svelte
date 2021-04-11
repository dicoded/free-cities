<script lang="ts">
	import Apartment from '../Apartment.svelte';
	import Arcade from '../Arcade.svelte';
	import Armory from '../Armory.svelte';
	import Brothel from '../Brothel.svelte';
	import Cellblock from '../Cellblock.svelte';
	import Club from '../Club.svelte';
	import Farmyard from '../Farmyard.svelte';
	import Incubator from '../Incubator.svelte';
	import MasterSuite from '../MasterSuite.svelte';
	import Nursery from '../Nursery.svelte';
	import Penthouse from '../Penthouse.svelte';
	import Pit from '../Pit.svelte';
	import Schoolroom from '../Schoolroom.svelte';
	import ServantsQuarters from '../ServantsQuarters.svelte';
	import Spa from '../Spa.svelte';

	import Cell from './Cell.svelte';
</script>

<div class="mt-8">
	<div class="row">
		<Cell width="1/2" facility={Penthouse}>Penthouse</Cell>
	</div>
	<div class="row">
		<Cell facility={Arcade}>Arcade</Cell>
		<Cell facility={Armory}>Armory</Cell>
	</div>
	<div class="row">
		<Cell facility={Brothel}>Brothel</Cell>
		<Cell facility={Cellblock}>Cellblock</Cell>
	</div>
	<div class="row">
		<Cell facility={Cellblock}>Cellblock</Cell>
		<Cell facility={Club}>Club</Cell>
		<Cell facility={Farmyard}>Farmyard</Cell>
	</div>
	<div class="row">
		<Cell facility={Incubator}>Incubator</Cell>
		<Cell facility={MasterSuite}>Master Suite</Cell>
		<Cell facility={Nursery}>Nursery</Cell>
		<Cell facility={Pit}>Pit</Cell>
	</div>
	<div class="row">
		<Cell facility={Schoolroom}>Schoolroom</Cell>
		<Cell facility={ServantsQuarters}>Servants' Quarters</Cell>
		<Cell facility={Spa}>Spa</Cell>
		<Cell facility={Apartment}>Apartment</Cell>
	</div>
</div>

<style>
	.row {
		@apply flex;
		@apply flex-row;
		@apply justify-center;
		@apply w-full;
	}
</style>
