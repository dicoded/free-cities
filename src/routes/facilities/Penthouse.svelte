<script lang="ts">
	import Header from '@components/ui/Header.svelte';

	import { link, defaultLink } from '@stores/nav.store'

	$link = defaultLink;
</script>

<Header>Penthouse</Header>
