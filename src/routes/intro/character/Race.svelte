<script lang="ts">
	import Button from '@components/ui/Button.svelte';
	import Choice from '@components/ui/Choice.svelte';
	import Response from '@components/ui/Response.svelte';
	import Section from '@components/ui/Section.svelte';

	import { Race } from '@classes/body/nonphysical/Nonphysical';

	import PC from '@stores/player.store';
</script>

<Section>
	<div class="my-4">
		<Choice>What race are you?</Choice>
	</div>

	<div>
		<div class="flex">
			<Button
				selected={$PC.race === Race.WHITE}
				handler={() => { $PC.race = Race.WHITE }}>
				White
			</Button>
			<Button
				selected={$PC.race === Race.ASIAN}
				handler={() => { $PC.race = Race.ASIAN }}>
				Asian
			</Button>
			<Button
				selected={$PC.race === Race.LATIN_AMERICAN}
				handler={() => { $PC.race = Race.LATIN_AMERICAN}}>
				Latin American
			</Button>
			<Button
				selected={$PC.race === Race.MIDDLE_EASTERN}
				handler={() => { $PC.race = Race.MIDDLE_EASTERN }}>
				Middle Eastern
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$PC.race === Race.BLACK}
				handler={() => { $PC.race = Race.BLACK }}>
				Black
			</Button>
			<Button
				selected={$PC.race === Race.SEMITIC}
				handler={() => { $PC.race = Race.SEMITIC }}>
				Semitic
			</Button>
			<Button
				selected={$PC.race === Race.SOUTHERN_EUROPEAN}
				handler={() => { $PC.race = Race.SOUTHERN_EUROPEAN }}>
				Southern European
			</Button>
			<Button
				selected={$PC.race === Race.INDO_ARYAN}
				handler={() => { $PC.race = Race.INDO_ARYAN }}>
				Indo-Aryan
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$PC.race === Race.AMERINDIAN}
				handler={() => { $PC.race = Race.AMERINDIAN }}>
				Amerindian
			</Button>
			<Button
				selected={$PC.race === Race.PACIFIC_ISLANDER}
				handler={() => { $PC.race = Race.PACIFIC_ISLANDER }}>
				Pacific Islander
			</Button>
			<Button
				selected={$PC.race === Race.MALAY}
				handler={() => { $PC.race = Race.MALAY }}>
				Malay
			</Button>
			<Button
				selected={$PC.race === Race.MIXED_RACE}
				handler={() => { $PC.race = Race.MIXED_RACE }}>
				Mixed Race
			</Button>
		</div>
	</div>

	{#if $PC.race}
		<Response>
			I am <span class="rb">{$PC.race}</span>.
		</Response>
	{/if}
</Section>
