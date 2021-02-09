<script lang="ts">
  import Button from '../../../components/ui/Button.svelte';
  import Header from '../../../components/ui/Header.svelte';
  import Body from '../../../components/ui/Body.svelte';

  import Age from './Age.svelte';
  import Gender from './Gender.svelte';
  import Extreme from './Extreme.svelte';
  import Other from './other/Other.svelte';

  import see from '../../../stores/see.store';
  import { minimumAge } from '../../../stores/global.store';
</script>

{#if $see.content}
  <Body>
    <Button handler={() => { $see.arcology = true }}>Skip</Button>

    <Header>Content</Header>

    <Extreme />
    {#if $see.extreme !== null}
      <Gender />
      {#if $see.dicks !== null}
        <Age />
        {#if $minimumAge}
          <Other />
          {#if $see.incest !== null}
            <div class="flex mt-8">
              <Button handler={() => { $see.arcology = true }}>Finish Content Customization</Button>
            </div>
          {/if}
        {/if}
      {/if}
    {/if}
  </Body>
{/if}
