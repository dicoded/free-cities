<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	import Modal from '@components/ui/Modal.svelte';
	import Button from '@components/ui/Button.svelte';

	export let facility: typeof SvelteComponent;
	export let width: string = '1/4';
</script>

<div class="flex h-16 w-{width}">
	<Modal>
		<div slot="trigger" let:open>
			<Button handler={() => {
				open();
			}}>
			<slot></slot>
			</Button>
		</div>

		<div slot="content" let:store={{close}}>
			<svelte:component this={facility} />
		</div>
	</Modal>
</div>
