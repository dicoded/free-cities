<script lang="ts">
	export let value: string;
	export let placeholder: string;
</script>

<input
	class="btn"
	bind:value={value}
	placeholder={placeholder}
/>
