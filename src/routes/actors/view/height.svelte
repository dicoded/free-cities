<script lang="ts">
	import Slave from '@classes/slave/Slave';

	export let slave: Slave;
</script>

<div>
	<span class="font-bold">Height:</span>
	{slave.height}cm ({slave.height.toInches().toFeet()})
</div>
