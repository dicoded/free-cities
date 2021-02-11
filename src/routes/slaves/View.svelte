<script lang="ts">
  import type Slave from 'classes/slave/Slave';

  import Header from 'components/ui/Header.svelte';
  import devotion, { devotionColor } from 'util/slave/desc/devotion';
  import trust, { trustColor } from 'util/slave/desc/trust';
  import name from 'util/slave/desc/name';
  import age from 'util/slave/desc/age';
  import health, { healthColor } from 'util/slave/desc/health';
  import mind from 'util/slave/desc/mind';
  import relationRival from 'util/slave/desc/relationRival';
  import career from 'util/slave/desc/career';
  import prestige from 'util/slave/desc/prestige';
  import size from 'util/slave/desc/size';

  export let slave: Slave;
</script>

<Header>
  {slave.name.full}
</Header>

<span class="font-bold">{slave.name.full}</span> is a <span class={devotionColor(slave.devotion)}>{devotion(slave)},</span>
<span class={trustColor(slave.trust)}>{trust(slave)}</span> <span class="text-red-400 font-bold">{slave.title}.</span>
{name(slave)} {age(slave)} {health(slave)} {mind(slave)} {relationRival(slave)} {career(slave)} {prestige(slave)} {size(slave)}
