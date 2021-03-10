<script lang="ts">
  import Slave from '../../ts/classes/slave/Slave';

  import Header from '../../components/ui/Header.svelte';
  import devotion, { devotionColor } from '../../ts/util/slave/desc/devotion';
  import trust, { trustColor } from '../../ts/util/slave/desc/trust';
  import name from '../../ts/util/slave/desc/name';
  import age from '../../ts/util/slave/desc/age';
  import health, { healthColor } from '../../ts/util/slave/desc/health';
  import mind from '../../ts/util/slave/desc/mind';
  import relationRival from '../../ts/util/slave/desc/relationRival';
  import career from '../../ts/util/slave/desc/career';
  import prestige from '../../ts/util/slave/desc/prestige';
  import size from '../../ts/util/slave/desc/size';
  import skin from '../../ts/util/slave/desc/skin';

  export let slave: Slave;
</script>

<Header>
  {slave.name.full}
</Header>

<span class="font-bold">{slave.name.full}</span> is a <span class={devotionColor(slave.devotion)}>{devotion(slave)},</span>
<span class={trustColor(slave.trust)}>{trust(slave)}</span>
<span class="font-bold text-red-600 dark:text-red-400">{slave.title}.</span>

{name(slave)}
{age(slave)}
{health(slave)}
{mind(slave)}
{relationRival(slave)}
{career(slave)}
{prestige(slave)}
{size(slave)}
{skin(slave)}
