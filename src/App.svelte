<script lang="ts">
  import { onMount } from 'svelte';

  import see from './stores/see.store';
  import { link, components, props } from './stores/nav.store';
  import view from './stores/view.store';

  import Router from './routes/Router.svelte';

  import Navbar from './components/nav/Navbar.svelte';
  import Sidebar from './components/nav/Sidebar.svelte';

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

  .selected {
    @apply bg-gray-700;
  }

  @layer components {
    .btn {
      @apply bg-gray-800 border-2 border-gray-700 w-full h-auto m-2 p-2 rounded-lg text-center;
    }

    .btn:hover {
      @apply bg-gray-600;
    }
  }
</style>
