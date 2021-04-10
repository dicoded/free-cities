<script lang="ts">
	import Slave from '../../../ts/classes/slave/Slave';

	import activeSlave from '../../../stores/active.store';

	const slave: Slave = $activeSlave;
</script>

<div>
	<span class="font-bold">Injuries:</span>
	{slave.health.injury.major ?? ''}
	{slave.health.injury.minor ?? ''}
	{#if !slave.health.injury.major && !slave.health.injury.minor}
		None
	{/if}
</div>
