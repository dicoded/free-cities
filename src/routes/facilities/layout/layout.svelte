<script lang="ts">
	import Apartments from '../apartments.svelte';
	import Arcade from '../Arcade.svelte';
	import Armory from '../Armory.svelte';
	import Brothel from '../Brothel.svelte';
	import Cellblock from '../Cellblock.svelte';
	import Club from '../Club.svelte';
	import Farmyard from '../Farmyard.svelte';
	import Incubator from '../Incubator.svelte';
	import MasterSuite from '../MasterSuite.svelte';
	import Manufacturing from '../manufacturing.svelte';
	import Nursery from '../Nursery.svelte';
	import Penthouse from '../Penthouse.svelte';
	import Pit from '../Pit.svelte';
	import Schoolroom from '../Schoolroom.svelte';
	import ServantsQuarters from '../ServantsQuarters.svelte';
	import Shops from '../shops.svelte';
	import Spa from '../Spa.svelte';

	import Cell from './cell.svelte';
</script>

<div class="mt-8">
	<div class="row" id="penthouse">
		<Cell width="1/2" facility={Penthouse}>Penthouse</Cell>
	</div>
	<div class="hidden">
	<div class="row" id="spire">
		<Cell facility={Apartments}>Apartments</Cell>
		<Cell facility={Apartments}>Apartments</Cell>
	</div>
		<div class="row" id="spire">
			<Cell facility={Apartments}>Apartments</Cell>
			<Cell facility={Apartments}>Apartments}></Cell>
		</div>
	</div>
	<div class="row" id="shops">
		<Cell facility={Shops}>Shops</Cell>
		<Cell facility={Shops}>Shops</Cell>
		<Cell facility={Shops}>Shops</Cell>
	</div>
	<div class="row" id="markets">
		<Cell facility={Apartments}>Apartments</Cell>
		<Cell facility={MasterSuite}>Apartments</Cell>
		<Cell facility={Apartments}>Apartments</Cell>
		<Cell facility={Apartments}>Apartments</Cell>
	</div>
	<div class="row" id="apartments">
		<Cell facility={Apartments}>Apartments</Cell>
		<Cell facility={Apartments}>Apartments</Cell>
		<Cell facility={Apartments}>Apartments</Cell>
		<Cell facility={Apartments}>Apartments</Cell>
	</div>
	<div class="row" id="manufacturing">
		<Cell facility={Manufacturing}>Manufacturing</Cell>
		<Cell facility={Manufacturing}>Manufacturing</Cell>
		<Cell facility={Manufacturing}>Manufacturing</Cell>
		<Cell facility={Manufacturing}>Manufacturing</Cell>
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
