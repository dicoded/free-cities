<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Choice from '../../../components/ui/Choice.svelte';
	import Input from '../../../components/ui/Input.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import { HairColor } from '../../../ts/util/color';
	import PC from '@stores/player.store';

	// TODO: add beards, mustaches
</script>

<Section>
	<div class="my-4">
		<Choice>What color is your hair?</Choice>
	</div>

	<div class="flex">
			<Button
				selected={$PC.hair.color === HairColor.BROWN}
				handler={() => { $PC.hair.color = HairColor.BROWN }}>
				Brown
			</Button>
			<Button
				selected={$PC.hair.color === HairColor.BLACK}
				handler={() => { $PC.hair.color = HairColor.BLACK }}>
				Black
			</Button>
			<Button
				selected={$PC.hair.color === HairColor.BLOND}
				handler={() => { $PC.hair.color = HairColor.BLOND }}>
				Blond
			</Button>
			<Button
				selected={$PC.hair.color === HairColor.RED}
				handler={() => { $PC.hair.color = HairColor.RED }}>
				Red
			</Button>
			<Button
				selected={$PC.hair.color === HairColor.WHITE}
				handler={() => { $PC.hair.color = HairColor.WHITE }}>
				White
			</Button>

			<Input placeholder="Hair Color" bind:value={$PC.hair.color}/>
	</div>

	{#if $PC.hair.color}
		<Response>
			I have <span class="rb">{$PC.hair.color}</span> hair.
		</Response>
	{/if}
</Section>
