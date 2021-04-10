
<script lang="ts">
  import Button from '../../../components/ui/Button.svelte';
  import Choice from '../../../components/ui/Choice.svelte';
  import Response from '../../../components/ui/Response.svelte';
  import Section from '../../../components/ui/Section.svelte';

  import Eyes from './Eyes.svelte';
  import Hair from './Hair.svelte';

  import { FaceShape } from '../../../ts/classes/body/face/Face';
  import PC from '@stores/player.store';
</script>

<Section>
  <div class="my-4">
    <Choice>How would you describe your face?</Choice>
  </div>
  <div class="flex">
    <Button
      selected={$PC.face.type === FaceShape.MASCULINE}
      handler={() => { $PC.face.type = FaceShape.MASCULINE }}>
      Masculine
    </Button>
    <Button
      selected={$PC.face.type === FaceShape.NORMAL}
      handler={() => { $PC.face.type = FaceShape.NORMAL }}>
      Normal
    </Button>
    <Button
      selected={$PC.face.type === FaceShape.ANDROGYNOUS}
      handler={() => { $PC.face.type = FaceShape.ANDROGYNOUS }}>
      Androgynous
    </Button>
    <Button
      selected={$PC.face.type === FaceShape.CUTE}
      handler={() => { $PC.face.type = FaceShape.CUTE }}>
      Cute
    </Button>
    <Button
      selected={$PC.face.type === FaceShape.SENSUAL}
      handler={() => { $PC.face.type = FaceShape.SENSUAL }}>
      Sensual
    </Button>
    <Button
      selected={$PC.face.type === FaceShape.EXOTIC}
      handler={() => { $PC.face.type = FaceShape.EXOTIC }}>
      Exotic
    </Button>
  </div>
</Section>

{#if $PC.face.type}
  {#if $PC.face.type === FaceShape.MASCULINE}
    <Response>
      My face looks <span class="rb">{$PC.face.type}</span>.
    </Response>
  {:else if $PC.face.type === FaceShape.NORMAL}
    <Response>
      My face looks <span class="rb">{$PC.face.type}</span>.
    </Response>
  {:else if $PC.face.type === FaceShape.ANDROGYNOUS}
    <Response>
      My face looks <span class="rb">{$PC.face.type}</span>.
    </Response>
  {:else if $PC.face.type === FaceShape.CUTE}
    <Response>
      My face looks <span class="rb">{$PC.face.type}</span>.
    </Response>
  {:else if $PC.face.type === FaceShape.SENSUAL}
    <Response>
      My face looks <span class="rb">{$PC.face.type}</span>.
    </Response>
  {:else if $PC.face.type === FaceShape.EXOTIC}
    <Response>
      My face looks <span class="rb">{$PC.face.type}</span>.
    </Response>
  {/if}

  <Eyes/>

  {#if $PC.face.eyes.both}
    <Hair/>
  {/if}
{/if}
