<script lang="ts">
	import Hamburger from './Hamburger.svelte'

	export let sidebar: boolean = false
</script>

<header class="flex justify-between p-2 items-center text-gray-300 fixed">
	<nav class="flex">
		<Hamburger bind:open={sidebar}/>
	</nav>
</header>
