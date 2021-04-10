<script lang="ts">
	import Slave from '@classes/slave/Slave';

	export let slave: Slave;
</script>

<div>
	<span class="font-bold">Age:</span>
	{slave.age.actual} years
</div>
