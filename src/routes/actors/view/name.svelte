<script lang="ts">
	import Slave from '@classes/slave/Slave';

	import Header from '@components/ui/Header.svelte';

	export let slave: Slave;
</script>

<Header>
	{slave.name.full}
</Header>
