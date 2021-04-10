<script lang="ts">
	import Response from '../../../components/ui/Response.svelte';
	import Choice from '../../../components/ui/Choice.svelte';
	import Section from '../../../components/ui/Section.svelte';
	import Button from '../../../components/ui/Button.svelte';

	import { trade, TradeType } from '@stores/global.store';
</script>

<Section>
	<p>
		Most of the Free Cities are run on radically libertarian or even anarcho-capitalist principles. The first Free
		Cities experimented with indentured servitude, and this rapidly developed into widespread slavery. By now, the Free
		Cities collectively are a fundamentally slaveowning society and maintain a thriving slave trade that feeds off the
		terrible conditions in parts of the old world. <Choice>What attitude have the old world countries generally taken
		towards this trade?</Choice>
	</p>

	<div class="flex">
		<Button
			selected={$trade === TradeType.GLOBAL}
			handler={() => { $trade = TradeType.GLOBAL }}>
			Accepting
		</Button>
		<Button
			selected={$trade === TradeType.LOCAL}
			handler={() => { $trade = TradeType.LOCAL }}>
			Forbidding
		</Button>
		<!-- <Button
			selected={$trade === TradeType.CUSTOM}
			handler={() => { $trade = TradeType.CUSTOM }}>
			Reactions have been mixed.
		</Button> -->
	</div>

	{#if $trade}
		<Response>
			{#if $trade === TradeType.GLOBAL}
				They've turned a blind eye, or <span class="rb">even been complicit</span>.
			{:else if $trade === TradeType.LOCAL}
				They've done <span class="rb">what little they can to stop it</span>.
			{:else}
				Reactions have been <span class="rb">mixed</span>.
			{/if}
		</Response>
	{/if}
</Section>
