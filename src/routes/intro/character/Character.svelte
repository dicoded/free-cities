<script lang="ts">
  import Button from '../../../components/ui/Button.svelte';
  import Header from '../../../components/ui/Header.svelte';
  import Main from '../../../components/ui/Main.svelte';
  import Link from '../../../components/ui/Link.svelte'

  import Acquisition from './Acquisition.svelte';
  import Birthday from './Birthday.svelte';
  import Career from './Career.svelte';
  import Face from './Face.svelte';
  import Name from './Name.svelte';
  import Nationality from './Nationality.svelte';
  import Race from './Race.svelte';
  import Sex from './Sex.svelte';
  import Skin from './Skin.svelte';
  import Overview from './Overview.svelte';

  import PC from '../../../stores/player.store';
  import see from '../../../stores/see.store';

  // TODO: add scrolling effects
  // TODO: add sections
  // TODO: figure out birthday section
  // TODO: add more customization options
  // TODO: save on set to allow for reloading with losing progress
</script>

{#if $see.character}
  <Main>
    <Button handler={() => { $see.difficulty = true }}>Skip</Button>

    <Link to="main" handler={() => {
      $see.nav = true;
      sessionStorage.setItem('see.nav', 'true');
    }}>
      Main
    </Link>

    <Header>Character Customization</Header>

    <Sex />
    {#if $PC.sex && $see.sex}
      <Name />
      {#if $PC.name.full}
        <!-- <Birthday /> -->
        <!-- {#if $PC.age.actual} -->
          <Face />
          {#if $PC.hair.color}
            <Nationality />
            {#if $PC.nationality}
              <Race />
              {#if $PC.race}
                <Skin />
                {#if $PC.markings}
                  <Career />
                  {#if $PC.career}
                    <Acquisition />
                    {#if $PC.acquisition}
                      <Overview />
                      <div class="mx-4 flex mt-8">
                        <Button handler={() => { $see.difficulty = true }}>Finish Player Customization</Button>
                      </div>
                    {/if}
                  {/if}
                {/if}
              {/if}
            {/if}
          {/if}
        <!-- {/if} -->
      {/if}
    {/if}
  </Main>
{/if}
