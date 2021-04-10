<script lang="ts">
	import Response from '@components/ui/Response.svelte';
	import Choice from '@components/ui/Choice.svelte';
	import Section from '@components/ui/Section.svelte';
	import Button from '@components/ui/Button.svelte';

	import { difficulty } from '@stores/global.store';
</script>

<Section>
	<p class="my-4">
		It is the year {new Date().getFullYear() + 27}, and the past 27 years have not been kind. The world is starting to
		fall apart. The climate is deteriorating, resources are being exhausted, and there are more people to feed every
		year. Technology is advancing, but not fast enough to save everyone.
		<Choice>Exactly how bad is the situation?</Choice>
	</p>

	<div class="flex">
		<Button
			selected={ $difficulty.level === 1 }
			handler={() => {
				$difficulty.level -= 1;
				$difficulty.level = $difficulty.level.clamp(1, 5);
			}}>
			Easier
		</Button>
		<Button
			selected={ $difficulty.level === 5 }
			handler={() => {
				$difficulty.level += 1;
				$difficulty.level = $difficulty.level.clamp(1, 5);
			}}>
			Harder
		</Button>
	</div>

	<Response>
		{#if $difficulty.level === 1}
			<span class="rb">Not trule dire</span>. Not yet.
		{:else if $difficulty.level === 2}
			Getting <span class="rb">a touch dire</span>.
		{:else if $difficulty.level === 3}
			<span class="rb">Very serious</span>.
		{:else if $difficulty.level === 4}
			It <span class="rb">won't be pretty</span>.
		{:else}
			This is <span class="rb">the last dance</span>.
		{/if}
	</Response>
</Section>
