<script lang="ts">
	export let value: string;
	export let placeholder: string;
</script>

<input
	class="item"
	bind:value={value}
	placeholder={placeholder}
/>
