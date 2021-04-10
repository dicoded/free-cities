<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Choice from '../../../components/ui/Choice.svelte';
	import Input from '../../../components/ui/Input.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import { EyeColor } from '../../../ts/util/color';
	import PC from '@stores/player.store';
</script>

<Section>
	<div class="my-4">
		<Choice>What color are your eyes?</Choice>
	</div>

	<div class="flex">
		<Button
			selected={$PC.eyes === EyeColor.BLUE}
			handler={() => { $PC.eyes = EyeColor.BLUE }}>
			Blue
		</Button>
		<Button
			selected={$PC.eyes === EyeColor.GREEN}
			handler={() => { $PC.eyes = EyeColor.GREEN }}>
			Green
		</Button>
		<Button
			selected={$PC.eyes === EyeColor.BROWN}
			handler={() => { $PC.eyes = EyeColor.BROWN }}>
			Brown
		</Button>
		<Button
			selected={$PC.eyes === EyeColor.AMBER}
			handler={() => { $PC.eyes = EyeColor.AMBER }}>
			Amber
		</Button>
		<Button
			selected={$PC.eyes === EyeColor.GRAY}
			handler={() => { $PC.eyes = EyeColor.GRAY }}>
			Gray
		</Button>
</div>

	{#if $PC.eyes}
		<Response>
			My eyes are <span class="rb">{$PC.eyes}</span>.
		</Response>
	{/if}
</Section>
