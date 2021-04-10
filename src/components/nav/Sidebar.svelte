<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	import Link from '../ui/Link.svelte';

	import type { ILink } from '@stores/nav.store';
	import { defaultLink } from '@stores/nav.store';

	interface IProp {
		key: string;
		value: any;
	}

	export let open: boolean = false;
	export let link: ILink | null = defaultLink;
	export let components: SvelteComponent[] = [];
	export let props: IProp[] = [];

	const handleOuterClick = () => open = !open;
</script>

<aside id="aside" class="transition-all ease-in-out duration-500 fixed h-screen p-8 w-1/5 dark:bg-gray-800 dark:border-gray-700 border-r-2 shadow-lg" class:open>
	{#if link}
		<nav class="my-8 text-xl flex">
			<Link to={link.href} handler={link.handler}>{link.text}</Link>
		</nav>
	{/if}

	{#each components as component}
		<div class="my-4">
			<svelte:component this={component} {...props[component]} />
		</div>
	{/each}
</aside>

{#if open}
	<div class="outer fixed z-50 w-4/5 h-screen top-0 right-0" on:click={handleOuterClick}>
	</div>
{/if}

<style>
	aside {
		left: -100%;
		backdrop-filter: blur(16px);
		@apply bg-opacity-75;
	}

	.open {
		left: 0;
	}
</style>
