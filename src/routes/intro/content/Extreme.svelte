<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Choice from '../../../components/ui/Choice.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import see from 'stores/see.store';
</script>

<Section>
	<p class="my-4">
		The early Free Cities were wild places where the writ of law did not run. In some of the most depraved, slaves'
		bodies, minds and even lives were playthings of the wealthy and powerful. Though modern Free Cities are tremendously
		varied, a majority of the new communities made a choice about whether extreme practices were a flaw in a lawless
		society or one of its benefits. <Choice>How did most Free Cities react to the excesses of the early days?</Choice>
	</p>

	<div>
		<div class="flex">
			<Button
				selected={$see.extreme === true && $see.hyperpreg === false}
				handler={() => {
					$see.extreme = true;
					$see.hyperpreg = false;
			}}>
				Accepting
			</Button>
			<Button
				selected={$see.extreme === false && $see.hyperpreg === false}
				handler={() => {
					$see.extreme = false;
					$see.hyperpreg = false;
			}}>
				Forbidding
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$see.extreme === true && $see.hyperpreg === true}
				handler={() => {
					$see.extreme = true;
					$see.hyperpreg = true;
			}}>
				Accepting and creative
			</Button>
			<Button
				selected={$see.extreme === false && $see.hyperpreg === true}
				handler={() => {
					$see.extreme = false;
					$see.hyperpreg = true;
			}}>
				Forbidding but creative
			</Button>
		</div>
	</div>

	{#if $see.extreme !== null || $see.hyperpreg !== null}
		<Response>
			{#if $see.extreme === false && $see.hyperpreg === false}
				They <span class="rb">drew back from them</span>.
			{:else if $see.extreme === false && $see.hyperpreg === true}
				They <span class="rb">drew back</span> from them, but <span class="rb">remained creative</span>.
			{:else if $see.extreme === true && $see.hyperpreg === false}
				They <span class="rb">reveled in them</span>.
			{:else}
				They <span class="rb">reveled in them</span> and were <span class="rb">particularly inventive</span>.
			{/if}
		</Response>
	{/if}
</Section>
