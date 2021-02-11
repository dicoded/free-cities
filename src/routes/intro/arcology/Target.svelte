<script lang="ts">
	import Button from 'components/ui/Button.svelte';
	import Choice from 'components/ui/Choice.svelte';
	import Note from 'components/ui/Note.svelte';
	import Response from 'components/ui/Response.svelte';
	import Section from 'components/ui/Section.svelte';

	import PC from 'stores/player.store';
	import arcology from 'stores/arcology.store';
	import { Acquisition, Career } from 'classes/player/Player';

	// TODO: fix this to update when player acquisition changes

	let plan: string;
	let takeover: string;

	switch ($PC.acquisition) {
		case Acquisition.DILIGENCE:
			plan = 'carefully constructed plan that';
			takeover = 'work to take over';
			break;
		case Acquisition.FORCE:
			// TODO: add maskirovka
			plan = 'mercenaries and cover plan that';
			takeover = 'attack';
				break;
		case Acquisition.LUCK:
			plan = 'optimistic plan you hope';
			takeover = 'aspire to take over';
			break;
		case Acquisition.SOCIAL_ENGINEERING:
			plan = 'clever social manipulation that';
			takeover = 'infiltrate';
			break;
		case Acquisition.WEALTH:
			plan = 'financial reserves that';
			takeover = 'attempt a hostile takeover of';
			break;
	}
</script>

<Section>
	<p class="my-4">
		Before you deploy the {plan} will allow you to take over an arcology, you need to select a target. There are a
		number of vulnerable arcologies that you could {takeover} with a reasonable chance of success. Free Cities are
		volatile places, even compared to the troubled state of the rest of the world. There are always arcologies whose
		owners are on the brink of failure, and you could target one of them. {$PC.career === Career.ARCOLOGY_OWNER
			? `Since you've owned an arcology before, you identify more potential target arcologies than a novice might.`
			: ''} Alternatively, arcologies are being built every day, and their owners' control is often uncertain.
		<Choice>
			Which arcology will you target?
		</Choice>
	</p>

	<Button
		handler={() => { $arcology.target = 'new' }}>
		A new arcology
	</Button>

	{#if $arcology.target !== null}
		<Response>
			I want to take control of <span class="rb">a new arcology</span>.
		</Response>
	{/if}
</Section>
