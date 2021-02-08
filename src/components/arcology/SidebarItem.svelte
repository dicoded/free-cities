<script lang="ts">
	export let left: string;
	export let right: string;
	export let cols: number = 2;
</script>

<div class="grid grid-cols-{cols}">
	<p class="col-span-{Math.abs(cols - 1) || 1} text-right mr-2">
		{left}
	</p>
	<p class="ml-2">
		{right}
	</p>
</div>
