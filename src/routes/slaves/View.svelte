<script lang="ts">
  import Slave from '../../ts/classes/slave/Slave';

  import Header from '../../components/ui/Header.svelte';

  import age from '../../ts/util/slave/desc/age';
  import armwear from '../../ts/util/slave/desc/armwear';
  import belly from '../../ts/util/slave/desc/belly';
  import butt from '../../ts/util/slave/desc/butt';
  import career from '../../ts/util/slave/desc/career';
  import chest from '../../ts/util/slave/desc/chest';
  import clothing from '../../ts/util/slave/desc/clothing';
  import counter from '../../ts/util/slave/desc/counter';
  import crotch from '../../ts/util/slave/desc/crotch';
  import devotion, { devotionColor } from '../../ts/util/slave/desc/devotion';
  import ears from '../../ts/util/slave/desc/ears';
  import eyes from '../../ts/util/slave/desc/eyes';
  import face from '../../ts/util/slave/desc/face';
  import family from '../../ts/util/slave/desc/family';
  import fetish from '../../ts/util/slave/desc/fetish';
  import flaws from '../../ts/util/slave/desc/flaws';
  import genes from '../../ts/util/slave/desc/genes';
  import hair from '../../ts/util/slave/desc/hair';
  import health, { healthColor } from '../../ts/util/slave/desc/health';
  import hips from '../../ts/util/slave/desc/hips';
  import intelligence from '../../ts/util/slave/desc/intelligence';
  import legs from '../../ts/util/slave/desc/legs';
  import limbs from '../../ts/util/slave/desc/limbs';
  import markings from '../../ts/util/slave/desc/markings';
  import mind from '../../ts/util/slave/desc/mind';
  import mouth from '../../ts/util/slave/desc/mouth';
  import muscles from '../../ts/util/slave/desc/muscles';
  import name from '../../ts/util/slave/desc/name';
  import nationality from '../../ts/util/slave/desc/nationality';
  import nose from '../../ts/util/slave/desc/nose';
  import personality from '../../ts/util/slave/desc/personality';
  import piercings from '../../ts/util/slave/desc/piercings';
  import pregnancy from '../../ts/util/slave/desc/pregnancy';
  import prestige from '../../ts/util/slave/desc/prestige';
  import quirks from '../../ts/util/slave/desc/quirks';
  import race from '../../ts/util/slave/desc/race';
  import relationship from '../../ts/util/slave/desc/relationship';
  import rivalry from '../../ts/util/slave/desc/rivalry';
  import scars from '../../ts/util/slave/desc/scars';
  import score from '../../ts/util/slave/desc/score';
  import sex from '../../ts/util/slave/desc/sex';
  import shoulders from '../../ts/util/slave/desc/shoulders';
  import size from '../../ts/util/slave/desc/size';
  import skills from '../../ts/util/slave/desc/skills';
  import skin from '../../ts/util/slave/desc/skin';
  import trust, { trustColor } from '../../ts/util/slave/desc/trust';
  import waist from '../../ts/util/slave/desc/waist';

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
{relationship(slave)}
{rivalry(slave)}
{career(slave)}
{prestige(slave)}
{skin(slave)}

{skills(slave)}
{family(slave)}
{ears(slave)}
{eyes(slave)}
{face(slave)}

{armwear(slave)}
{belly(slave)}
{butt(slave)}
{chest(slave)}
{clothing(slave)}
{counter(slave)}
{crotch(slave)}
{fetish(slave)}
{flaws(slave)}
{genes(slave)}
{hair(slave)}
{hips(slave)}
{intelligence(slave)}
{legs(slave)}
{limbs(slave)}
{markings(slave)}
{mouth(slave)}
{muscles(slave)}
{nationality(slave)}
{nose(slave)}
{personality(slave)}
{piercings(slave)}
{pregnancy(slave)}
{quirks(slave)}
{race(slave)}
{scars(slave)}
{score(slave)}
{sex(slave)}
{shoulders(slave)}
{size(slave)}
{waist(slave)}
