<script context="module" lang="ts">
	// From https://rb.gy/ldlme5

	const modalList: HTMLElement[] = [];
</script>

<script lang="ts">
	import modalStore from '../../stores/modal.store';

	import Button from './Button.svelte';

	const store = modalStore(false);
	const { isOpen, open, close } = store;

	function keydown(e: KeyboardEvent) {
		e.stopPropagation();
		if (e.key === 'Escape') {
			close();
		}
	}

	function transitionend(e: TransitionEvent) {
		const node = e.target as HTMLElement;
		node.focus();
	}

	function modalAction(node: HTMLElement) {
		const returnFn: { (): void; (): void; }[] = [];

		// for accessibility
		if (document.body.style.overflow !== 'hidden') {
			const original = document.body.style.overflow;

			document.body.style.overflow = 'hidden';

			returnFn.push(() => {
				document.body.style.overflow = original;
			});
		}

		node.addEventListener('keydown', keydown);
		node.addEventListener('transitionend', transitionend);
		node.focus();

		modalList.push(node);

		returnFn.push(() => {
			node.removeEventListener('keydown', keydown);
			node.removeEventListener('transitionend', transitionend);
			modalList.pop();

			// optional chaining to guard against empty array
			modalList[modalList.length - 1]?.focus();
		});

		return {
			destroy: () => returnFn.forEach((fn) => fn()),
		};
	}
</script>

<slot name="trigger" {open}>
	<!-- fallback trigger to open the modal -->
	<Button handler={() => open()}>Open</Button>
</slot>

{#if $isOpen}
	<div class="modal" use:modalAction tabindex="0">
		<div class="backdrop" on:click={close} />

		<div class="content-wrapper">
			<div class="items-center bg-gray-900 border-gray-800 p-8 rounded-lg border-2">
				<slot name="content" {store} />

				<slot name="footer" {store}>
				<!-- fallback -->
				<Button handler={() => close()}>Close</Button>
			</slot>
			</div>
		</div>
	</div>
{/if}

<style>
	div.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 1;
	}

	div.modal:not(:focus-within) {
		transition: opacity 0.1ms;
		opacity: 0.99;
	}

	div.backdrop {
		background-color: rgba(0, 0, 0, 0.4);
		position: absolute;
		width: 100%;
		height: 100%;
	}

	div.content-wrapper {
		z-index: 10;
		max-width: 70vw;
		border-radius: 0.3rem;
		background-color: black;
		overflow: hidden;
	}

	@media (max-width: 767px) {
		div.content-wrapper {
			max-width: 100vw;
		}
	}
</style>
