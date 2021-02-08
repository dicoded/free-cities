<script lang="ts">
	export let options: Array<string|number>;
	export let id: string;
	export let value: any;
</script>

<select id={id} class="flex-auto p-5 m-2 my-4 bg-gray-800 rounded-lg h-8 border-gray-700 border-2" bind:value={value}>
	{#each options as option}
		<option>{option}</option>
	{/each}
</select>
