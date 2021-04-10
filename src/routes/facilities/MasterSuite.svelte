<script lang="ts">
	import Body from '../../components/ui/Body.svelte';
	import Header from '../../components/ui/Header.svelte';

	import { link, defaultLink } from '@stores/nav.store'

	$link = defaultLink;
</script>

<Body>
	<Header>Master Suite</Header>
</Body>
