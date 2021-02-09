<script lang="ts">
  import Button from '../../../components/ui/Button.svelte';
	import Header from '../../../components/ui/Header.svelte';
  import Body from '../../../components/ui/Body.svelte';

  import Level from './Level.svelte';
  import Rate from './Rate.svelte';
  import Income from './Income.svelte';

  import see from '../../../stores/see.store';
</script>

{#if $see.difficulty}
  <Body>
    <Header>Difficulty</Header>

    <Level />
    <Rate />
    <Income />

    <div class="flex mt-8">
      <Button handler={() => { $see.trade = true }}>Finish Difficulty Customization</Button>
    </div>
  </Body>
{/if}
