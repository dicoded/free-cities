<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Choice from '../../../components/ui/Choice.svelte';
	import Input from '../../../components/ui/Input.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import PC from '@stores/player';

	// TODO: all of this
</script>

<Section>
	<div class="my-4">
		<Choice>What type of refreshment do you prefer?</Choice>
	</div>

	<div class="flex">
		<Button
			selected={null}
			handler={() => { null }}>
			Whiskey
		</Button>
		<Button
			selected={null}
			handler={() => { null }}>
			Cigars
		</Button>
		<Button
			selected={null}
			handler={() => { null }}>
			Cocaine
		</Button>
		<Input placeholder="Other" value=""/>
		<Button handler={() => { return }}>Randomize</Button>
	</div>

	{#if $PC.hair.color}
		<Response>
			I like to <span class="rb">drink whiskey</span>.
		</Response>
	{/if}
</Section>
