<script lang="ts">
	import Slave from '@classes/slave/Slave';

	import Header from '@components/ui/Header.svelte';

	import activeSlave from '@stores/active.store';

	const slave: Slave = $activeSlave;
</script>

<Header>
	{slave.name.full}
</Header>
