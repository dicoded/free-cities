<script lang="ts">
	import Slave from '@classes/slave/Slave';

	export let slave: Slave;
</script>

<div>
	<span class="font-bold">Health:</span>
	{slave.health.overall}
</div>
