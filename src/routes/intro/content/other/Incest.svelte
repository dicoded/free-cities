<script lang="ts">
	import Button from '../../../../components/ui/Button.svelte';
	import Choice from '../../../../components/ui/Choice.svelte';
	import Response from '../../../../components/ui/Response.svelte';
	import Section from '../../../../components/ui/Section.svelte';

	import see from '@stores/see.store';
</script>

<Section>
  <div class="my-4">
		<Choice>
			What was their opinion on incest?
		</Choice>
	</div>

	<div class="flex">
		<Button
			selected={$see.incest === true}
			handler={() => { $see.incest = true }}>
			Accepting
		</Button>
		<Button
			selected={$see.incest === false}
			handler={() => { $see.incest = false }}>
			Forbidding
		</Button>
	</div>

	{#if $see.incest !== null}
		<Response>
      {#if $see.incest}
        The idea of two family members getting intimate <span class="rb">titillated</span> them.
			{:else}
        The idea of two family members getting intimate <span class="rb">sickened</span> them.
			{/if}
		</Response>
	{/if}
</Section>
