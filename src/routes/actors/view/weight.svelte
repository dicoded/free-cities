<script lang="ts">
	import Slave from '../../../ts/classes/slave/Slave';

	import activeSlave from '../../../stores/active.store';

	const slave: Slave = $activeSlave;
</script>

<div>
	<span class="font-bold">Weight:</span>
	{slave.weight}kg
</div>
