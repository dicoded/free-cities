<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Choice from '../../../components/ui/Choice.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import { difficulty } from '../../../stores/global.store';
</script>

<Section>
	<div class="my-4">
		<Choice>How fast is it crumbling?</Choice>
	</div>

	<div class="flex">
		<Button
			selected={ $difficulty.rate === 1 }
			disabled={ $difficulty.rate === 1 }
			handler={() => {
				$difficulty.rate -= 1;
				$difficulty.rate = $difficulty.rate.clamp(1, 4);
			}}>
			Easier
		</Button>
		<Button
			selected={ $difficulty.rate === 4 }
			disabled={ $difficulty.rate === 4 }
			handler={() => {
				$difficulty.rate += 1;
				$difficulty.rate = $difficulty.rate.clamp(1, 4);
			}}>
			Harder
		</Button>
	</div>

	<Response>
		{#if $difficulty.rate === 1}
			<span class="rb">Barely noticeable</span>, for now.
		{:else if $difficulty.rate === 2}
			<span class="rb">A slow decline</span>.
		{:else if $difficulty.rate === 3}
			It's <span class="rb">visibly deteriorating before my eyes</span>.
		{:else}
			It's <span class="rb">going to hell in a handbasket</span>.
		{/if}
	</Response>
</Section>
