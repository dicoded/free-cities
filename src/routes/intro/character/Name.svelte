<script lang="ts">
  import Choice from '../../../components/ui/Choice.svelte';
  import Input from '../../../components/ui/Input.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

  import PC from 'stores/player.store';
</script>

<Section>
  <div class="my-4">
    <Choice>What is your name?</Choice>
  </div>

  <div class="flex">
    <Input placeholder="First name" bind:value={$PC.name.birth.first}/>

    {#if $PC.name.birth.first}
      {#if $PC.name.birth.last || $PC.name.birth.middle}
        <Input placeholder="Middle name" bind:value={$PC.name.birth.middle}/>
      {/if}

      <Input placeholder="Last name" bind:value={$PC.name.birth.last}/>
    {/if}
  </div>

  {#if $PC.name.birth.first}
    <Response>
      My name is <span class="rb">{$PC.name.full}</span>.
    </Response>
  {/if}
</Section>
