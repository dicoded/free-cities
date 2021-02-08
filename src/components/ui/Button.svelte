<script lang="ts">
	export let handler: () => any;
	export let selected: boolean = false;
</script>

<button on:click={handler}
	class:selected="{selected}"
	class="btn">
	<slot></slot>
</button>
