<script lang="ts">
	import Header from '@components/ui/Header.svelte';
	import Toggle from '@components/ui/Toggle.svelte';
	import Link from '@components/ui/Link.svelte';

	import { debug } from '@stores/global.store';
</script>

<main class="items-center flex-col m-2 p-2">
	<Header>Settings</Header>

	<div class="my-4">
		<Toggle bind:checked={$debug} id="debug" text="Debug"/>
	</div>
	<div class="my-4">
		<Link to="start">Restart</Link>
	</div>
</main>
