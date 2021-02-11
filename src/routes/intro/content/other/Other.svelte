<script lang="ts">
	import Section from '../../../../components/ui/Section.svelte';

	import Broodmothers from './Broodmothers.svelte';
	import Animals from './Animals.svelte';
	import Watersports from './Watersports.svelte';
	import Incest from './Incest.svelte';

	import see from 'stores/see.store';
</script>

<Section>
	<Broodmothers />
		{#if $see.broodmothers !== null}
			<Animals />
			{#if $see.bestiality !== null}
				<Watersports />
				{#if $see.watersports !== null}
					<Incest />
				{/if}
			{/if}
		{/if}
</Section>
