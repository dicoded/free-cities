<script lang="ts">
	import Button from '@components/ui/Button.svelte';
	import Choice from '@components/ui/Choice.svelte';
	import Response from '@components/ui/Response.svelte';
	import Section from '@components/ui/Section.svelte';

	import arcology from '@stores/arcology.store';
	import { Terrain } from '../../../ts/classes/arcology/Arcology';
</script>

<Section>
	<p class="my-4">
		The Free Cities are located wherever the rule of law is weak enough or permissive enough to allow a small area to
		secede, and where founders can afford to buy an area on which to build.
	</p>
	<p class="my-4">
		Many Free Cities are therefore located in marginal, rural terrain. Founding a Free City in such an area is easy, and
		can usually be accomplished with the indifference or even connivance of the old country from which it secedes. After
		all, the potential commercial benefits are great, and the loss of underused land is only significant in the moral
		sense.
	</p>
	<p class="my-4">
		Some Free Cities are located on water. Though some areas of shallow sea over the continental shelves hide valuable
		resources, others are neglected. Arcologies are such massive structures that it is very possible to design them to
		float anchored to the seabed.
	</p>
	<p class="my-4">
		Finally, a few Free Cities have been carved out from old world cities. Urban decay has left the hearts of many
		cities ripe for this. Many old world countries resist this kind of secession, but this rarest, smallest, and densest
		kind of Free City can offer its surrounding nation a great deal of economic advantage.
		<Choice>
			What kind of Free City hosts your arcology?
		</Choice>
	</p>

	<div class="flex">
		<Button
			selected={$arcology.terrain === Terrain.URBAN}
			handler={() => { $arcology.terrain = Terrain.URBAN }}>
			Urban
		</Button>
		<Button
			selected={$arcology.terrain === Terrain.RURAL}
			handler={() => { $arcology.terrain = Terrain.RURAL }}>
			Rural
		</Button>
		<Button
			selected={$arcology.terrain === Terrain.RAVINE}
			handler={() => { $arcology.terrain = Terrain.RAVINE }}>
			Ravine
		</Button>
		<Button
			selected={$arcology.terrain === Terrain.MARINE}
			handler={() => { $arcology.terrain = Terrain.MARINE }}>
			Marine
		</Button>
		<Button
			selected={$arcology.terrain === Terrain.OCEANIC}
			handler={() => { $arcology.terrain = Terrain.OCEANIC }}>
			Oceanic
		</Button>
	</div>

	{#if $arcology.terrain !== null}
		<Response>
			My arcology will be in
			{#if $arcology.terrain === Terrain.RAVINE}
				<span class="rb">a ravine</span>.
			{:else if [Terrain.RURAL, Terrain.MARINE].includes($arcology.terrain)}
				<span class="rb">a {$arcology.terrain}</span> environment.
			{:else}
				<span class="rb">an {$arcology.terrain}</span> environment.
			{/if}
		</Response>
	{/if}
</Section>
