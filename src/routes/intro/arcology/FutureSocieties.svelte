<script lang="ts">
	import Choice from '@components/ui/Choice.svelte';
	import Number from '@components/ui/Number.svelte';
	import Response from '@components/ui/Response.svelte';
	import Section from '@components/ui/Section.svelte';

	import arcology from '@stores/arcology.store';
</script>

<Section>
	<p class="my-4">
		Many Free Cities have changed their way of life to reflect their newfound freedoms, some so drastically that they
		could be considered to have their own cultures.
		<Choice>
			How many of these "future societies" can your arcology reflect?
		</Choice>
	</p>

	<Number placeholder="Future Societies" bind:value={ $arcology.futureSocieties }/>

	<Response>
		My arcology can have as many as <span class="rb">{$arcology.futureSocieties ?? 1}</span> future
		{$arcology.futureSocieties === 1 ? 'society' : 'societies'}.
	</Response>
</Section>
