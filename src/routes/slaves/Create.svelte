<script lang="ts">
  import Header from '../../components/ui/Header.svelte';
  import Body from '../../components/ui/Body.svelte';
  import Button from '../../components/ui/Button.svelte';
  import Link from '../../components/ui/Link.svelte';

  import PC from '../../stores/player.store';
  import see from '../../stores/see.store';
  import { slaves } from '../../stores/actors.store';
  import { link, components } from '../../stores/nav.store';
  import { makeDicks } from '../../stores/global.store';

  import { generateSlave } from '../../ts/util/slave/generate';
  import { Career } from '../../ts/classes/player/Player';
  import Slave from '../../ts/classes/slave/Slave';

  import Cash from './Cash.svelte';
  import View from './View.svelte';
  import Edit from './Edit.svelte';

  let slave: Slave = generateSlave();

  $link = null;
  $components = [
    Cash,
  ];
</script>

<Body>
  <Header>Slave Customization</Header>

  <p class="my-4">
    You're no stranger to the Free Cities, which means you're no stranger to slavery. If you wish, you can bring slaves
    from your past life with you to your arcology. You can spend your cash reserves on slaves here, or bring it with you
    to start the game. Slaves created here will be <span class="text-green-500">much cheaper</span> than if they were
    purchased on the market.

    {#if $PC.penis && $PC.vagina && ($see.dicks || $makeDicks)}
      You've obviously had access to a source of advanced surgery and organ farming, seeing as you have both a penis and
      a vagina yourself. Slaves get a <span class="text-green-500">smaller cost increase</span> here for having both
      penises and vaginas, and for having both testicles and ovaries.
    {/if}

    {#if $PC.career === Career.SLAVING}
      Since you personally saw to the capture, breaking and/or training of these slaves, they <span
      class="text-green-500">cost half of what they normally would have</span> here.
    {/if}
  </p>

  <div class="my-4">
    <div class="flex">
      <Link to="acquisition" handler={() => { $slaves.push(slave) }}>
        <span class="font-black">Finish Customizing</span>
      </Link>
      <Button handler={() => { return }}>
        Randomize career
      </Button>
      <Button handler={() => { return }}>
        Randomize name
      </Button>
    </div>

    <div class="flex">
      <Button handler={() => { slave = generateSlave() }}>
        Start over with a random slave
      </Button>
      <Button handler={() => { return }}>
        Start over with an archetype
      </Button>
      <Button handler={() => { return }}>
        Start over with a nationality
      </Button>
    </div>
  </div>

  <View slave={slave} />
  <Edit />
</Body>
