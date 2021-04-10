<script lang="ts">
	import Main from '../../components/ui/Main.svelte';
	import Header from '../../components/ui/Header.svelte';

	import { link, defaultLink } from '@stores'

	$link = defaultLink;
</script>

<Main>
	<Header>Dairy</Header>
</Main>
