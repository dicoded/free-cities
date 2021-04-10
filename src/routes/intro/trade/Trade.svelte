<script lang="ts">
  import Button from '@components/ui/Button.svelte';
  import Header from '@components/ui/Header.svelte';
  import Body from '@components/ui/Body.svelte';

  import Attitude from './Attitude.svelte';

	import see from '@stores/see.store';
</script>

{#if $see.trade}
    <Body>
      <Header>Trade</Header>

      <Attitude/>

      <div class="flex mt-8">
        <Button handler={() => { $see.content = true }}>Finish Trade Customization</Button>
      </div>
    </Body>
{/if}
