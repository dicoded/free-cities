<script lang="ts">
	import Slave from 'classes/slave/Slave';

	import Link from 'components/ui/Link.svelte'

	import { link, defaultLink } from 'stores/nav.store'
	import activeSlave from 'stores/active.store';

	$link = defaultLink;

	export let slave: Slave;
</script>

<div class="flex">
	<Link to="slave-interact" handler={() => { $activeSlave = slave }}>
		{slave.name.full}
	</Link>
</div>
