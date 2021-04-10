<script lang="ts">
	import view from '@storesw.store';

	export let to: string;
	export let handler: (() => any) | null = null;
</script>

<button class="item hover"
	on:click={() => {
		$view = to || $view;

		if (handler) {
			handler();
		}

		sessionStorage.setItem('view', $view);
	}}>
	<slot></slot>
</button>
