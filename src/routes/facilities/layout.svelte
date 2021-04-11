<script lang="ts">
	import Link from '@components/ui/Link.svelte';
</script>

<div class="mt-8">
	<div class="row">
		<div class="cell penthouse">
			<Link to="">
				Penthouse
			</Link>
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

	.cell {
		@apply flex;
		@apply h-16;
		@apply w-1/4;
	}

	.penthouse {
		@apply w-1/2;
	}
</style>
