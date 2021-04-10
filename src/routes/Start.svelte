<script lang="ts">
  import see from '@stores/see.store';

  import Link from '@components/ui/Link.svelte';
</script>

<main class="flex items-center flex-col h-screen">
  <div class="w-3/5 h-full items-center bg rounded-lg my-32 m-auto">
    <header class="text-center text-5xl font-title mt-20">
      Free Cities
    </header>
    <div class="h-1/3 grid-rows-3 justify-center text-xl mt-20">
      <div class="w-1/2 m-auto my-4">
        <Link to="intro" handler={() => { $see.character = true; }}>New Game</Link>
      </div>
      <div class="w-1/2 m-auto my-4">
        <Link to="load">Load Game</Link>
      </div>
      <div class="w-1/2 m-auto my-4">
        <Link to="settings">Settings</Link>
      </div>
    </div>
  </div>
</main>
