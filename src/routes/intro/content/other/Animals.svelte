<script lang="ts">
	import Button from '../../../../components/ui/Button.svelte';
	import Choice from '../../../../components/ui/Choice.svelte';
	import Response from '../../../../components/ui/Response.svelte';
	import Section from '../../../../components/ui/Section.svelte';

	import see from '../../../../stores/see.store';
</script>

<Section>
  <div class="my-4">
		<Choice>
			What did they think of using animals as more than just pets and attractions?
		</Choice>
	</div>

	<div class="flex">
		<Button
			selected={$see.bestiality === true}
			handler={() => { $see.bestiality = true }}>
			Accepting
		</Button>
		<Button
			selected={$see.bestiality === false}
			handler={() => { $see.bestiality = false }}>
			Forbidding
		</Button>
	</div>

	{#if $see.bestiality !== null}
		<Response>
      {#if $see.bestiality}
        They enjoyed <span class="rb">using animals</span> as a <span class="rb">perverse form of entertainment</span>.
			{:else}
        They agreed animals were <span class="rb">just animals</span>.
			{/if}
		</Response>
	{/if}
</Section>
