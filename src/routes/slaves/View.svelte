<script lang="ts">
  import Slave from '../../ts/classes/slave/Slave';

  import Header from '../../components/ui/Header.svelte';

  import age from '../../ts/util/slave/desc/age';
  import armwear from '../../ts/util/slave/desc/armwear';
  import career from '../../ts/util/slave/desc/career';
  import clothing from '../../ts/util/slave/desc/clothing';
  import devotion, { devotionColor } from '../../ts/util/slave/desc/devotion';
  import eyes from '../../ts/util/slave/desc/eyes';
  import family from '../../ts/util/slave/desc/family';
  import health, { healthColor } from '../../ts/util/slave/desc/health';
  import legs from '../../ts/util/slave/desc/legs';
  import limbs from '../../ts/util/slave/desc/limbs';
  import mind from '../../ts/util/slave/desc/mind';
  import name from '../../ts/util/slave/desc/name';
  import nationality from '../../ts/util/slave/desc/nationality';
  import piercings from '../../ts/util/slave/desc/piercings';
  import pregnancy from '../../ts/util/slave/desc/pregnancy';
  import prestige from '../../ts/util/slave/desc/prestige';
  import relationRival from '../../ts/util/slave/desc/relationRival';
  import score from '../../ts/util/slave/desc/score';
  import size from '../../ts/util/slave/desc/size';
  import skills from '../../ts/util/slave/desc/skills';
  import skin from '../../ts/util/slave/desc/skin';
  import trust, { trustColor } from '../../ts/util/slave/desc/trust';

  import activeSlave from '../../stores/active.store';

  const slave: Slave = $activeSlave;
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
