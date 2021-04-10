<script lang="ts">
	import Slave from '@classes/slave/Slave';

	export let slave: Slave;
</script>

<div>
	Birthday
	{#if slave.age.weeksUntilBirthday === 1}
		<span class="font-bold">next week</span>
	{:else}
		in <span class="font-bold">{slave.age.weeksUntilBirthday} weeks</span>
	{/if}
</div>
