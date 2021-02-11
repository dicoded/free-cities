<script lang="ts">
	import Datepicker from '../../../components/ui/date/Datepicker.svelte';

  import Choice from '../../../components/ui/Choice.svelte';
  import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import PC from 'stores/player.store';

	let dateChosen;

	const minYear = new Date().getFullYear() + 27;
	const maxYear = minYear + 73;

	const startYear = new Date((minYear - 18), 1, 1);
	const endYear = new Date((maxYear - 18), 1, 1);
</script>

<Section>
	<div class="my-4">
		<Choice>When is your birthday?</Choice>
	</div>

	<div class="grid grid-cols-3">
		<Datepicker bind:dateChosen />
	</div>
	<Response>
		{#if dateChosen}
			I am <span class="rb">{$PC.age.actual}</span> years old, and my birthday is on
			<span class="rb">{($PC.birthday)}</span>.
		{/if}
	</Response>
</Section>
