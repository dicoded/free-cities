<script lang="ts">
	export let value: string;
	export let placeholder: string;
</script>

<input
	class="item hover"
	bind:value={value}
	placeholder={placeholder}
/>
