<script lang="ts">
	import Slave from '../../../ts/classes/slave/Slave';

	import activeSlave from '../../../stores/active.store';

	const slave: Slave = $activeSlave;
</script>

<div>
	Birthday
	{#if slave.age.birthWeek === 51}
		<span class="font-bold">next week</span>
	{:else}
		in <span class="font-bold">{52 - slave.age.birthWeek} weeks</span>
	{/if}
</div>
