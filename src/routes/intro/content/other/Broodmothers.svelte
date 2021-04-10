<script lang="ts">
	import Button from '../../../../components/ui/Button.svelte';
	import Choice from '../../../../components/ui/Choice.svelte';
	import Response from '../../../../components/ui/Response.svelte';
	import Section from '../../../../components/ui/Section.svelte';

	import see from '@stores/see.store';
</script>

<Section>
  <div class="my-4">
		Many Free Cities had different ideas about what types of other novel excesses were and weren't okay.
		<Choice>
			How did they feel about broodmothers?
		</Choice>
	</div>

	<div class="flex">
		<Button
			selected={$see.broodmothers === true}
			handler={() => { $see.broodmothers = true }}>
			Accepting
		</Button>
		<Button
			selected={$see.broodmothers === false}
			handler={() => { $see.broodmothers = false }}>
			Forbidding
		</Button>
	</div>

	{#if $see.broodmothers !== null}
		<Response>
			{#if $see.broodmothers}
				They decided that <span class="rb">the more children</span> a woman carried, <span class="rb">the better</span>.
			{:else}
				They decided that <span class="rb">women should not bear unnaturally large amounts of children</span> at once.
			{/if}
		</Response>
	{/if}
</Section>
