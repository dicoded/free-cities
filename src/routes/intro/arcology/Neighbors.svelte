<script lang="ts">
	import Choice from '@components/ui/Choice.svelte';
	import Number from '@components/ui/Number.svelte';
	import Response from '@components/ui/Response.svelte';
	import Section from '@components/ui/Section.svelte';

	import arcology from '@stores/arcology.store';
</script>

<Section>
	<p class="my-4">
		You are not the only one who has had the idea of starting a new settlement in the new world.
		<Choice>
			What kind of Free City hosts your arcology?
		</Choice>
	</p>

	<Number placeholder="Neighbors" bind:value={ $arcology.neighbors }/>

	<Response>
		There are <span class="rb">{$arcology.neighbors ?? 0}</span> {$arcology.neighbors === 1 ? 'arcology' : 'arcologies'}
		in addition to mine.
	</Response>
</Section>
