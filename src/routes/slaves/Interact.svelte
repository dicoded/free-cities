<script lang="ts">
	import Body from 'components/ui/Body.svelte';
	import Header from 'components/ui/Header.svelte';

	import Slave from 'classes/slave/Slave';

	import View from './View.svelte';

	import { link, defaultLink } from 'stores/nav.store'
	import activeSlave from 'stores/active.store';

	$link = defaultLink;

	const slave: Slave = $activeSlave;
</script>

<Body>
	<View slave={slave}/>
</Body>
