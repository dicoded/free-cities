<script lang="ts">
	import view from '../../stores/view.store';

	export let to: string;
	export let handler: (() => any) | null = null;
</script>

<button class="btn"
	on:click={() => {
		$view = to || $view;

		if (handler) {
			handler();
		}

		sessionStorage.setItem('view', $view);
	}}>
	<slot></slot>
</button>
