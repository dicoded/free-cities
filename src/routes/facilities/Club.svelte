<script lang="ts">
	import Body from '../../components/ui/Body.svelte';
	import Header from '../../components/ui/Header.svelte';

	import { link, defaultLink } from '@stores.store'

	$link = defaultLink;
</script>

<Body>
	<Header>Club</Header>
</Body>
