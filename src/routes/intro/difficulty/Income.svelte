<script lang="ts">
  import Button from '../../../components/ui/Button.svelte';
	import Choice from '../../../components/ui/Choice.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import { difficulty } from 'stores/global.store';
</script>

<Section>
  <p class="my-4">
    The global market has always been a volatile place, but with the global situation being what it is, prices have
    continued to steadily rise, while income hasn't always been quick to follow.
    <Choice>What is the income situation like?</Choice>
  </p>

  <div class="flex">
    <Button
      selected={ $difficulty.income === 1 }
      handler={() => {
        $difficulty.income -= 1;
        $difficulty.income = $difficulty.income.clamp(1, 3);
      }}>
      Easier
    </Button>
    <Button
      selected={ $difficulty.income === 3 }
      handler={() => {
        $difficulty.income += 1;
        $difficulty.income = $difficulty.income.clamp(1, 3);
      }}>
      Harder
    </Button>
  </div>

  <Response>
    {#if $difficulty.income === 1}
      Luckily all forms of income <span class="rb">have continued to rise in lockstep</span>.
    {:else if $difficulty.income === 2}
      Incomes are <span class="rb">rising but cannot keep pace</span>.
    {:else}
      Incomes have remained <span class="rb">completely static</span>.
    {/if}
  </Response>
</Section>
