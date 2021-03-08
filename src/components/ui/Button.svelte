<script lang="ts">
	export let handler: () => any;
	export let selected: boolean = false;
	export let disabled: boolean = false;
</script>

<button on:click={handler}
	class:selected="{selected}"
	class:disabled="{disabled}"
	class="item">
	<slot></slot>
</button>
