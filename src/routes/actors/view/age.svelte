<script lang="ts">
	import Slave from '../../../ts/classes/slave/Slave';

	import activeSlave from '@stores/active.store';

	const slave: Slave = $activeSlave;
</script>

<div>
	<span class="font-bold">Age:</span>
	{slave.age.actual} years
</div>
