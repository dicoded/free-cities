<script lang="ts">
	import Button from 'components/ui/Button.svelte';
	import Choice from 'components/ui/Choice.svelte';
	import Response from 'components/ui/Response.svelte';
	import Section from 'components/ui/Section.svelte';

	import PC from 'stores/player.store';
	import Markings, { MarkingsType } from 'classes/body/nonphysical/skin/Markings';

	// TODO: expand this
</script>

<Section>
	<div class="my-4">
		Some people have freckles. <Choice>Do you have any distinctive features?</Choice>
	</div>

	<div class="flex">
		<Button
			selected={$PC.markings.face === null}
			handler={() => { $PC.abstract.skin.markings.face = null }}>
			None
		</Button>
		<Button
			selected={$PC.markings.face === MarkingsType.FRECKLED}
			handler={() => { $PC.abstract.skin.markings.face = MarkingsType.FRECKLED }}>
			Light Freckles
		</Button>
		<Button
			selected={$PC.markings.face === MarkingsType.HEAVILY_FRECKLED}
			handler={() => { $PC.markings.face = MarkingsType.HEAVILY_FRECKLED }}>
			Heavy Freckles
		</Button>
		<Button
			selected={$PC.markings.face === MarkingsType.BEAUTY_MARK}
			handler={() => { $PC.markings.face = MarkingsType.BEAUTY_MARK }}>
			Beauty Mark
		</Button>
		<Button
			selected={$PC.markings.face === MarkingsType.BIRTHMARK}
			handler={() => { $PC.markings.face = MarkingsType.BIRTHMARK }}>
			Birthmark
		</Button>
	</div>

	{#if $PC.markings}
		{#if $PC.markings === null}
			<Response>
				I have <span class="rb">no</span> distinctive features.
			</Response>
		{:else if $PC.markings.face === MarkingsType.FRECKLED}
			<Response>
				I have <span class="rb">a light spattering of freckles</span>.
			</Response>
		{:else if $PC.markings.face === MarkingsType.HEAVILY_FRECKLED}
			<Response>
				I have <span class="rb">a thick coat of freckles</span>.
			</Response>
		{:else if $PC.markings.face === MarkingsType.BEAUTY_MARK}
			<Response>
				I have <span class="rb">a beauty mark on my cheek</span>.
			</Response>
		{:else if $PC.markings.face === MarkingsType.BIRTHMARK}
			<Response>
				I have <span class="rb">a prominant birthmark on my face</span>.
			</Response>
		{/if}
	{/if}
</Section>
