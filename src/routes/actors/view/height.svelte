<script lang="ts">
	import Slave from '@classes/slave/Slave';

	import activeSlave from '@stores/active.store';

	const slave: Slave = $activeSlave;
</script>

<div>
	<span class="font-bold">Height:</span>
	{slave.height}cm ({slave.height.toInches().toFeet()})
</div>
