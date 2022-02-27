<script lang="ts">
	import Slave from '@classes/slave/Slave';

	export let slave: Slave;
</script>

<div>
	<span class="font-bold">Injuries:</span>
	{slave.health.injury.major ?? ''}
	{slave.health.injury.minor ?? ''}
	{#if !slave.health.injury.major && !slave.health.injury.minor}
		None
	{/if}
</div>
