<script lang="ts">
	import Button from '@components/ui/Button.svelte';
	import Choice from '@components/ui/Choice.svelte';
	import Response from '@components/ui/Response.svelte';
	import Section from '@components/ui/Section.svelte';

	import see from '@stores/see.store';
</script>

<Section>
  <div class="my-4">
		<Choice>
			How did they react to watersports?
		</Choice>
	</div>

	<div class="flex">
		<Button
			selected={$see.watersports === true}
			handler={() => { $see.watersports = true }}>
			Accepting
		</Button>
		<Button
			selected={$see.watersports === false}
			handler={() => { $see.watersports = false }}>
			Forbidding
		</Button>
	</div>

	{#if $see.watersports !== null}
		<Response>
      {#if $see.watersports}
        They were <span class="rb">aroused</span> by the idea of toying with urine.
			{:else}
        They were <span class="rb">repulsed</span> by the idea of toying with urine.
			{/if}
		</Response>
	{/if}
</Section>
