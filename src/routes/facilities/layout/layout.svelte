<script lang="ts">
	import Arcade from '../Arcade.svelte';
	import Penthouse from '../Penthouse.svelte';

	import Link from '@components/ui/Link.svelte';
	import Cell from './Cell.svelte';
</script>

<div class="mt-8">
	<div class="row">
		<Cell width="1/2" facility={Penthouse}>Penthouse</Cell>
	</div>
	<div class="row">
		<Cell facility={Arcade}>Arcade</Cell>
		<div class="cell">
			<Link to=""/>
		</div>
	</div>
	<div class="row">
		<div class="cell">
			<Link to=""/>
		</div>
		<div class="cell">
			<Link to=""/>
		</div>
	</div>
	<div class="row">
		<div class="cell">
			<Link to=""/>
		</div>
		<div class="cell">
			<Link to=""/>
		</div>
		<div class="cell">
			<Link to=""/>
		</div>
	</div>
	<div class="row">
		<div class="cell">
			<Link to=""/>
		</div>
		<div class="cell">
			<Link to=""/>
		</div>
		<div class="cell">
			<Link to=""/>
		</div>
		<div class="cell">
			<Link to=""/>
		</div>
	</div>
	<div class="row">
		<div class="cell">
			<Link to=""/>
		</div>
		<div class="cell">
			<Link to=""/>
		</div>
		<div class="cell">
			<Link to=""/>
		</div>
		<div class="cell">
			<Link to=""/>
		</div>
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
