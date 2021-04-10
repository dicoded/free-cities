<script lang="ts">
	import Slave from '@classes/slave/Slave';

	import activeSlave from '@stores/active.store';

	const slave: Slave = $activeSlave;
</script>

<div>
	<span class="font-bold">Intelligence:</span>
	{slave.intelligence}
</div>
