<script lang="ts">
	import Header from '../../components/ui/Header.svelte';
	import Toggle from '../../components/ui/Toggle.svelte';
	import Link from '../../components/ui/Link.svelte';

	import { debug } from '../../stores/global.store';
</script>

<main class="settings flex items-center flex-col">
	<div class="settings bg-gray-900 p-8 rounded-lg border-gray-800 border-2">
		<Header>Settings</Header>

		<div class="my-4">
			<Toggle bind:checked={$debug} id="debug" text="Debug"/>
		</div>
		<div class="my-4">
			<Link to="start">Restart</Link>
		</div>
	</div>
</main>

<style>
	.settings {
		width: 100%;
		height: 100%;
	}
</style>
