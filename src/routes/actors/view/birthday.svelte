<script lang="ts">
	import Slave from '../../../ts/classes/slave/Slave';

	import activeSlave from '@stores/active.store';

	const slave: Slave = $activeSlave;
</script>

<div>
	Birthday
	{#if slave.age.weeksUntilBirthday === 1}
		<span class="font-bold">next week</span>
	{:else}
		in <span class="font-bold">{slave.age.weeksUntilBirthday} weeks</span>
	{/if}
</div>
