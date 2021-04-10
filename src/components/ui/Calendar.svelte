<!-- <script lang="ts">
	import { getDateRows, uuid, noop } from '@util/date';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let date: { getFullYear: () => number; getMonth: () => number; getDate: () => number; };
	export let month: number;
	export let year: number;
	export let isAllowed: (arg0: any) => any;

	const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
	let cells: { value: any; allowed: any; }[];

	const onChange = (date: number) => {
		dispatch("datechange", new Date(year, month, date));
	};

	const allow = (year: number, month: number, date: number) => {
		if (!date) return true;
		return isAllowed(new Date(year, month, date));
	};

	$: cells = getDateRows(month, year).map(c => ({
		value: c,
		allowed: allow(year, month, c)
	}));
</script>

<div class="container">
  <div class="row">
    {#each weekdays as day}
      <div class="cell">{day}</div>
    {/each}
  </div>

  <div class="row">
    {#each cells as { allowed, value } (uuid())}
      <div
        on:click={allowed && value ? onChange.bind(this, value) : noop}
        class:cell={true}
        class:highlight={allowed && value}
        class:disabled={!allowed}
        class:selected={new Date(
			date.getFullYear(), date.getMonth(), date.getDate()
			).getTime() === new Date(
				year, month, value
			).getTime()}>
        {value || ''}
      </div>
    {/each}
  </div>
</div> -->
