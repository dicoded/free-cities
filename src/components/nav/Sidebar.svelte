<script lang="ts">
	import Link from '../ui/Link.svelte';

	import type { ILink } from '../../stores/nav.store';
	import { defaultLink } from '../../stores/nav.store';

	interface IProp {
		key: string;
		value: any;
	}

	export let open: boolean = false;
	export let link: ILink = defaultLink;
	export let components: any = [];
	export let props: IProp[] = [];

	const handleOuterClick = () => open = false;
</script>

<aside id="aside" class="fixed h-screen p-8 w-1/5 bg-gray-800 bg-opacity-75 border-gray-700 border-r-2 shadow-lg" class:open>
	{#if link !== null}
		<nav class="py-8 text-xl flex">
			<Link to={link.href} handler={link.handler}>{link.text}</Link>
		</nav>
	{/if}
	{#each components as component}
	<svelte:component this={component} {...props[component]} />
	{/each}
</aside>
{#if open}
	<div class="bg" on:click={handleOuterClick}>
	</div>
{/if}

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		backdrop-filter: blur(10px);
	}

	.bg {
		position: fixed;
		z-index: 1000;
		width: 80%;
		height: 100vh;
		top: 0;
		right: 0;
	}

	.open {
		left: 0;
	}
</style>
