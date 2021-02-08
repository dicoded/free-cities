<script lang="ts">
	import Main from '../../components/ui/Main.svelte';
	import Header from '../../components/ui/Header.svelte';

	import { link, defaultLink } from '../../stores/nav.store'

	$link = defaultLink;
</script>

<Main>
	<Header>Club</Header>
</Main>
