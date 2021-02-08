<script lang="ts">
	import Link from '../../../components/ui/Link.svelte';
	import Header from '../../../components/ui/Header.svelte';
	import Main from '../../../components/ui/Main.svelte';

	import FutureSocieties from './FutureSocieties.svelte';
	import Language from './Language.svelte';
	import Location from './Location.svelte';
	import Neighbors from './Neighbors.svelte';
	import Target from './Target.svelte';
	import Terrain from './Terrain.svelte';

	import see from '../../../stores/see.store';
	import arcology from '../../../stores/arcology.store';

	$see.nav = false;
</script>

{#if $see.arcology}
		<Main>
			<Header>Arcology</Header>

			<Target />
			{#if $arcology.target}
				<Terrain />
				{#if $arcology.terrain}
					<Location />
						{#if $arcology.location}
						<Neighbors />
						{#if $arcology.neighbors}
							<FutureSocieties />
							<Language />

							<div class="flex mt-8 text-lg">
								<Link to="new-slave" handler={() => {
									$see.nav = true;
									sessionStorage.setItem('see.nav', 'true');
								}}>
									Finish Arcology Customization
								</Link>
							</div>
						{/if}
					{/if}
				{/if}
			{/if}
		</Main>
{/if}
