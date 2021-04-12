<script lang="ts">
  import { onMount } from 'svelte';

  import see from '@stores/see.store';
  import { link, components, props } from '@stores/nav.store';
  import view from '@stores/view.store';

  import Router from '@routes/Router.svelte';

  import Navbar from '@components/nav/Navbar.svelte';
  import Sidebar from '@components/nav/Sidebar.svelte';

  let open: boolean = false;

  $link = {
    href: 'main',
    text: 'Main',
    handler: null,
  }

  onMount(() => {
    $view = sessionStorage.getItem('view') || 'start';
    $see.nav = sessionStorage.getItem('see.nav') === 'true' || false;
  });
</script>

{#if $see.nav}
  <Sidebar link={$link} components={$components} props={$props} bind:open/>
  <Navbar bind:sidebar={open}/>
{/if}

<Router/>

<style global lang="postcss">
  @tailwind base;

  @tailwind components;

  @tailwind utilities;

  @tailwind screens;

  .selected {
    @apply bg-gray-300 dark:bg-gray-700;
  }

  .disabled {
    @apply cursor-not-allowed;
  }

  @layer components {
    .item {
      @apply bg-gray-200 border-gray-300 dark:bg-gray-800 dark:border-gray-700;
      @apply border-2 w-full h-auto rounded-lg text-center m-2 p-2;
    }

    .hover:hover {
      @apply bg-white dark:bg-gray-600;
    }

    .bg {
      @apply bg-gray-100 border-gray-200 border-2 dark:bg-gray-900 dark:border-gray-800;
    }
  }
</style>
