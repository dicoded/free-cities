<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Choice from '../../../components/ui/Choice.svelte';
	import Input from '../../../components/ui/Input.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import PC from '@stores/player.store';

	// TODO: add more (potentially a list of all nationalities)
</script>

<Section>
	<div class="my-4">
		<Choice>What nationality are you?</Choice>
	</div>

	<div class="flex">
		<Button
			selected={$PC.nationality && $PC.nationality.toLowerCase() === 'american'}
			handler={() => { $PC.nationality = 'American'}}>
			American
		</Button>
		<Button
			selected={$PC.nationality && $PC.nationality.toLowerCase() === 'german'}
			handler={() => { $PC.nationality = 'German'}}>
			German
		</Button>
		<Button
			selected={$PC.nationality && $PC.nationality.toLowerCase() === 'french'}
			handler={() => { $PC.nationality = 'French'}}>
			French
		</Button>
		<Button
			selected={$PC.nationality && $PC.nationality.toLowerCase() === 'italian'}
			handler={() => { $PC.nationality = 'Italian'}}>
			Italian
		</Button>
		<Button
			selected={$PC.nationality && $PC.nationality.toLowerCase() === 'chinese'}
			handler={() => { $PC.nationality = 'Chinese'}}>
			Chinese
		</Button>

		<Input placeholder="Other" bind:value={$PC.nationality}/>
	</div>

	{#if $PC.nationality}
		<Response>
			My nationality is <span class="rb">{$PC.nationality}</span>.
		</Response>
	{/if}
</Section>
