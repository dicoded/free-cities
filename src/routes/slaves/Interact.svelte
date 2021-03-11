<script lang="ts">
	import Slave from '../../ts/classes/slave/Slave';

	import View from './View.svelte';

	import activeSlave from '../../stores/active.store';

	const slave: Slave = $activeSlave;
</script>

<View />
