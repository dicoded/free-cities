<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Choice from '../../../components/ui/Choice.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import see from 'stores/see.store';
	import { makeDicks } from 'stores/global.store';
</script>

<Section>
	<p class="my-4">
		The Free Cities are sexually libertine places, and sexual slavery is ubiquitous. Some of the early Free Cities
		upheld or even strengthened traditional gender roles, expecting men to be men and women to be women. Others
		subscribed to an interesting refinement of those gender roles, considering any sex slave female, regardless of her
		biology. A small minority even went so far as to strongly favor societal feminization of slaves born male; in these,
		biologically female slaves were a rare sight.
		<Choice>Which kind of Free City came to predominate?</Choice>
	</p>

	<div>
		<div class="flex">
			<Button
				selected={$see.dicks === 25 && $makeDicks === true}
				handler={() => {
					$see.dicks = 25;
					$makeDicks = true;
			}}>
				Open-minded
			</Button>
			<Button
				selected={$see.dicks === 0 && $makeDicks === false}
				handler={() => {
					$see.dicks = 0;
					$makeDicks = false;
			}}>
				Traditional
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$see.dicks === 0 && $makeDicks === true}
				handler={() => {
					$see.dicks = 0;
					$makeDicks = true;
				}}>
				Accepting
			</Button>
			<Button
				selected={$see.dicks === 100}
				handler={() => {
					$see.dicks = 100;
					$makeDicks = false;
			}}>
				Radical
			</Button>
		</div>
	</div>

	{#if $see.dicks !== null}
		<Response>
			{#if $see.dicks === 0 && $makeDicks === false}
				Free Cities that understood <span class="rb">girls are girls</span>.
			{:else if $see.dicks === 25}
				Free Cities that were <span class="rb">open-minded</span> about who could be a slave girl.
			{:else if $see.dicks === 0 && $makeDicks === true}
				Free Cities that understood <span class="rb">there are exceptions</span>.
			{:else}
				Free Cities that <span class="rb">preferred dicks</span>.
			{/if}
		</Response>
	{/if}
</Section>
