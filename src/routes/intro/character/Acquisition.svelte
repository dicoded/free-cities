<script lang="ts">
	import Button from 'components/ui/Button.svelte';
	import Response from 'components/ui/Response.svelte';
	import Section from 'components/ui/Section.svelte';

	import PC from 'stores/player.store';
	import { Acquisition } from 'classes/player/Player';
</script>

<Section>
	<div class="my-4">
		Who you are is something that you will have to define for yourself through your actions. Once you own an arcology,
		no one will be in a position to apply moral scorekeeping to you. In the brave new world of the Free Cities, you will
		be free to define yourself as the sum of your actions, rather than as the product of your past. The first decision
		that will define who you are as an arcology owner is your choice of method in acquiring one.
		<span class="font-bold text-gray-400">What approach will you take?</span>
	</div>

	<div class="flex">
		<Button
			selected={$PC.acquisition === Acquisition.WEALTH}
			handler={() => { $PC.acquisition = Acquisition.WEALTH }}>
			Wealth
		</Button>
		<Button
			selected={$PC.acquisition === Acquisition.DILIGENCE}
			handler={() => { $PC.acquisition = Acquisition.DILIGENCE }}>
			Diligence
		</Button>
		<Button
			selected={$PC.acquisition === Acquisition.FORCE}
			handler={() => { $PC.acquisition = Acquisition.FORCE }}>
			Force
		</Button>
		<Button
			selected={$PC.acquisition === Acquisition.SOCIAL_ENGINEERING}
			handler={() => { $PC.acquisition = Acquisition.SOCIAL_ENGINEERING }}>
			Social Engineering
		</Button>
		<Button
			selected={$PC.acquisition === Acquisition.LUCK}
			handler={() => { $PC.acquisition = Acquisition.LUCK }}>
			Luck
		</Button>
	</div>

	{#if $PC.acquisition}
		{#if $PC.acquisition === Acquisition.WEALTH}
			<Response>
				I acquired my arcology through <span class="rb">sheer wealth</span>.
			</Response>
		{:else if $PC.acquisition === Acquisition.DILIGENCE}
				<Response>
				I acquired my arcology through <span class="rb">diligence and hard work</span>.
			</Response>
		{:else if $PC.acquisition === Acquisition.FORCE}
				<Response>
				I acquired my arcology through <span class="rb">military force</span>.
			</Response>
		{:else if $PC.acquisition === Acquisition.SOCIAL_ENGINEERING}
				<Response>
				I acquired my arcology through <span class="rb">social influence</span>.
			</Response>
		{:else if $PC.acquisition === Acquisition.LUCK}
			<Response>
				I acquired my arcology through <span class="rb">just plain good luck</span>.
			</Response>
		{/if}
	{/if}
</Section>
