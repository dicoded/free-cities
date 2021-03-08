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
    @apply bg-gray-400;
  }

  .disabled {
    @apply cursor-not-allowed;
  }

  @screen dark {
    .selected {
      @apply bg-gray-700;
    }
  }

  @layer components {
    .item {
      @apply bg-gray-300 border-gray-400;
      @apply border-2 w-full h-auto rounded-lg text-center m-2 p-2;
    }

    .item:hover {
        @apply bg-gray-100;
      }

    .bg {
      @apply bg-gray-200 border-gray-300;
    }

    .rounded {
      @apply rounded-lg;
    }

    .bordered {
      @apply border-2;
    }

    @screen dark {
      .item {
          @apply bg-gray-800 border-gray-700;
      }

      .item:hover {
        @apply bg-gray-600;
      }

      .bg {
        @apply bg-gray-900 border-gray-800;
      }
    }
  }
</style>
