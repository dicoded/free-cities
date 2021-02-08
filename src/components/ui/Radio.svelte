<script lang="ts">
	export let name: string;
	export let handler: () => any;
</script>

<div class="px-6 flex-auto">
	<input type="radio" id="radio" name={name} on:click={handler}>
	<label class="pl-3" for="radio">
		<slot>
		</slot>
	</label>
</div>

