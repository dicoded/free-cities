<script lang="ts">
	import Slave from '@classes/slave/Slave';

	import View from './view/View.svelte';

	export let slave: Slave;
</script>

<View {slave}/>
