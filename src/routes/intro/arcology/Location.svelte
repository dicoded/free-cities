<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Choice from '../../../components/ui/Choice.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import arcology from '@stores/arcology.store';
	import { Location } from '../../../ts/classes/arcology/Arcology';

	// TODO: remove some of these locations
</script>

<Section>
	<p class="my-4">
		As the old countries crumble and technology stagnates, the gap between rich and poor increases. In order to continue
		living a good life without having their property taken by the mob, many of the wealthy and powerful come together to
		form 'Free Cities.' These are new cities on undeveloped land, in remote areas, or even afloat, fully free of any
		allegiance or law. These new cities are built on new ideas, with most buildings designed as futuristic,
		self-contained "arcologies". An arcology and everything in it is usually owned by a single person. And you're
		determined that you will soon be one of those single people.
		<Choice>
			In what part of the world is your new arcology going to be located?
		</Choice>
	</p>

	<div>
		<div class="flex">
			<Button
				selected={$arcology.location === Location.NORTH_AMERICA}
				handler={() => { $arcology.location = Location.NORTH_AMERICA }}>
				North America
			</Button>
			<Button
				selected={$arcology.location === Location.SOUTH_AMERICA}
				handler={() => { $arcology.location = Location.SOUTH_AMERICA}}>
				South America
			</Button>
			<Button
				selected={$arcology.location === Location.BRAZIL}
				handler={() => { $arcology.location = Location.BRAZIL}}>
				Brazil
			</Button>
			<Button
				selected={$arcology.location === Location.SCANDINAVIA}
				handler={() => { $arcology.location = Location.SCANDINAVIA }}>
				Scandinavia
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$arcology.location === Location.CENTRAL_EUROPE}
				handler={() => { $arcology.location = Location.CENTRAL_EUROPE }}>
				Central Europe
			</Button>
			<Button
				selected={$arcology.location === Location.WESTERN_EUROPE}
				handler={() => { $arcology.location = Location.WESTERN_EUROPE }}>
				Western Europe
			</Button>
			<Button
				selected={$arcology.location === Location.EASTERN_EUROPE}
				handler={() => { $arcology.location = Location.EASTERN_EUROPE }}>
				Eastern Europe
			</Button>
			<Button
				selected={$arcology.location === Location.SOUTHERN_EUROPE}
				handler={() => { $arcology.location = Location.SOUTHERN_EUROPE }}>
				Southern Europe
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$arcology.location === Location.NORTHERN_AFRICA}
				handler={() => { $arcology.location = Location.NORTHERN_AFRICA }}>
				Northern Africa
			</Button>
			<Button
				selected={$arcology.location === Location.CENTRAL_AFRICA}
				handler={() => { $arcology.location = Location.CENTRAL_AFRICA }}>
				Central Africa
			</Button>
			<Button
				selected={$arcology.location === Location.SOUTHERN_AFRICA}
				handler={() => { $arcology.location = Location.SOUTHERN_AFRICA }}>
				Southern Africa
			</Button>
			<Button
				selected={$arcology.location === Location.MIDDLE_EAST}
				handler={() => { $arcology.location = Location.MIDDLE_EAST }}>
				Middle East
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$arcology.location === Location.NORTHERN_ASIA}
				handler={() => { $arcology.location = Location.NORTHERN_ASIA }}>
				Northern Asia
			</Button>
			<Button
				selected={$arcology.location === Location.CENTRAL_ASIA}
				handler={() => { $arcology.location = Location.CENTRAL_ASIA }}>
				Central Asia
			</Button>
			<Button
				selected={$arcology.location === Location.SOUTHERN_ASIA}
				handler={() => { $arcology.location = Location.SOUTHERN_ASIA }}>
				Southern Asia
			</Button>
			<Button
				selected={$arcology.location === Location.AUSTRALIA}
				handler={() => { $arcology.location = Location.AUSTRALIA }}>
				Australia
			</Button>
		</div>
	</div>

	{#if $arcology.location}
		<Response>
			My arcology will be located in <span class="rb">{$arcology.location}</span>.
		</Response>
	{/if}
</Section>
