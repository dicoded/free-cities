<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Choice from '../../../components/ui/Choice.svelte';
	import Number from '../../../components/ui/Number.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import { minimumAge } from 'stores/global.store';
</script>

<Section>
	<p class="my-4">
		The Free Cities may have had libertine ideas about sex and who was or wasn't owned by another person, but most
		agreed that there were limits. There were those that still considered children innocents and off-limits, while
		others preferred a free-for-all system.
		<Choice>How did most of the Free Cities view those under the age of majority?</Choice>
	</p>

	<div class="flex">
		<Button
			selected={$minimumAge === 18}
			handler={() => { $minimumAge = 18 }}>
			Protected
		</Button>
		<Button
			selected={$minimumAge === 3}
			handler={() => { $minimumAge = 3 }}>
			Free game
		</Button>
		<Number placeholder="Minimum Slave Age" bind:value={$minimumAge} min={3} max={18} />
	</div>

	{#if $minimumAge}
		<Response>
			{#if $minimumAge >= 18}
				They viewed those under the age of <span class="rb">18</span> as those <span class="rb">not to involve</span>
				in their affairs.
			{:else if $minimumAge === 3}
				They saw <span class="rb">anyone that could walk</span> as someone that could do slave duties.
			{:else}
				They decided anyone over the age of <span class="rb">{$minimumAge}</span> could become a slave.
			{/if}
		</Response>
	{/if}
</Section>
