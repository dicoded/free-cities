<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Choice from '../../../components/ui/Choice.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import Markings from './Markings.svelte';
	import { SkinColor } from '../../../ts/util/color';

	import PC from 'stores/player.store';
</script>

<Section>
	<div class="my-4">
		<Choice>What is your skin tone?</Choice>
	</div>

	<div>
		<div class="flex">
			<Button
				selected={$PC.skin.color === SkinColor.PURE_WHITE}
				handler={() => { $PC.skin.color = SkinColor.PURE_WHITE }}>
				Pure White
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.WHITE}
				handler={() => { $PC.skin.color = SkinColor.WHITE }}>
				White
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.IVORY}
				handler={() => { $PC.skin.color = SkinColor.IVORY }}>
				Ivory
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.EXTREMELY_PALE}
				handler={() => { $PC.skin.color = SkinColor.EXTREMELY_PALE }}>
				Extremely Pale
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.VERY_PALE}
				handler={() => { $PC.skin.color = SkinColor.VERY_PALE }}>
				Very Pale
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$PC.skin.color === SkinColor.PALE}
				handler={() => { $PC.skin.color = SkinColor.PALE }}>				Pale
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.EXTREMELY_FAIR}
				handler={() => { $PC.skin.color = SkinColor.EXTREMELY_FAIR }}>
				Extremely Fair
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.VERY_FAIR}
				handler={() => { $PC.skin.color = SkinColor.VERY_FAIR }}>
				Very Fair
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.FAIR}
				handler={() => { $PC.skin.color = SkinColor.FAIR }}>
				Fair
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.LIGHT}
				handler={() => { $PC.skin.color = SkinColor.LIGHT }}>
				Light
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$PC.skin.color === SkinColor.LIGHT_OLIVE}
				handler={() => { $PC.skin.color = SkinColor.LIGHT_OLIVE }}>
				Light Olive
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.TAN}
				handler={() => { $PC.skin.color = SkinColor.TAN }}>
				Tan
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.OLIVE}
				handler={() => { $PC.skin.color = SkinColor.OLIVE }}>
				Olive
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.BRONZE}
				handler={() => { $PC.skin.color = SkinColor.BRONZE }}>
				Bronze
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.DARK}
				handler={() => { $PC.skin.color = SkinColor.DARK }}>
				Dark
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$PC.skin.color === SkinColor.DARK}
				handler={() => { $PC.skin.color = SkinColor.DARK }}>
				Dark
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.LIGHT_BEIGE}
				handler={() => { $PC.skin.color = SkinColor.LIGHT_BEIGE }}>
				Light Beige
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.BEIGE}
				handler={() => { $PC.skin.color = SkinColor.BEIGE }}>
				Beige
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.DARK_BEIGE}
				handler={() => { $PC.skin.color = SkinColor.DARK_BEIGE }}>
				Dark Beige
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.LIGHT_BROWN}
				handler={() => { $PC.skin.color = SkinColor.LIGHT_BROWN }}>
				Light Brown
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$PC.skin.color === SkinColor.BROWN}
				handler={() => { $PC.skin.color = SkinColor.BROWN }}>
				Brown
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.DARK_BROWN}
				handler={() => { $PC.skin.color = SkinColor.DARK_BROWN }}>
				Dark Brown
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.BLACK}
				handler={() => { $PC.skin.color = SkinColor.BLACK }}>
				Black
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.EBONY}
				handler={() => { $PC.skin.color = SkinColor.EBONY }}>
				Ebony
			</Button>
			<Button
				selected={$PC.skin.color === SkinColor.PURE_BLACK}
				handler={() => { $PC.skin.color = SkinColor.PURE_BLACK }}>
				Pure Black
			</Button>
		</div>
	</div>

	{#if $PC.skin.color}
		<Response>
			My skin is <span class="rb">{$PC.skin.color}</span>.
		</Response>
	{/if}
</Section>

<!-- outside of Section above for formatting -->
{#if $PC.skin.color}
	<Markings />
{/if}
