<script lang="ts">
	export let value: number;
	export let placeholder: string;
	export let min: number = 1;
	export let max: number = 10;
</script>

<input
	class="item hover"
	type="number"
	bind:value={value}
	{placeholder}
	{min}
	{max}
/>
