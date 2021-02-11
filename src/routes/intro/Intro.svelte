<script lang="ts">
  import Arcology from './arcology/Arcology.svelte';
  import Character from './character/Character.svelte';
  import Content from './content/Content.svelte';
  import Difficulty from './difficulty/Difficulty.svelte';
  import Trade from './trade/Trade.svelte';

  import see from 'stores/see.store';
</script>

{#if $see.character}
  <Character />
{/if}
{#if $see.difficulty}
  <Difficulty />
{/if}
{#if $see.trade}
  <Trade />
{/if}
{#if $see.content}
  <Content />
{/if}
{#if $see.arcology}
  <Arcology />
{/if}
