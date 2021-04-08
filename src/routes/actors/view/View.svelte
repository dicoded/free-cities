<script lang="ts">
  import Slave from '../../../ts/classes/slave/Slave';

  import Name from './name.svelte';
  import Title from './title.svelte';

  // import age from '../../ts/util/slave/desc/age';
  // import armwear from '../../ts/util/slave/desc/armwear';
  // import belly from '../../ts/util/slave/desc/belly';
  // import butt from '../../ts/util/slave/desc/butt';
  // import career from '../../ts/util/slave/desc/career';
  // import chest from '../../ts/util/slave/desc/chest';
  // import clothing from '../../ts/util/slave/desc/clothing';
  // import counter from '../../ts/util/slave/desc/counter';
  // import crotch from '../../ts/util/slave/desc/crotch';
  import devotion, { devotionColor } from '../../../ts/util/slave/desc/devotion';
  // import ears from '../../ts/util/slave/desc/ears';
  // import eyes from '../../ts/util/slave/desc/eyes';
  // import face from '../../ts/util/slave/desc/face';
  // import family from '../../ts/util/slave/desc/family';
  // import fetish from '../../ts/util/slave/desc/fetish';
  // import flaws from '../../ts/util/slave/desc/flaws';
  // import genes from '../../ts/util/slave/desc/genes';
  // import hair from '../../ts/util/slave/desc/hair';
  // import health, { healthColor } from '../../ts/util/slave/desc/health';
  // import hips from '../../ts/util/slave/desc/hips';
  // import intelligence from '../../ts/util/slave/desc/intelligence';
  // import legs from '../../ts/util/slave/desc/legs';
  // import limbs from '../../ts/util/slave/desc/limbs';
  // import markings from '../../ts/util/slave/desc/markings';
  // import mind from '../../ts/util/slave/desc/mind';
  // import mouth from '../../ts/util/slave/desc/mouth';
  // import muscles from '../../ts/util/slave/desc/muscles';
  // import name from '../../ts/util/slave/desc/name';
  // import nationality from '../../ts/util/slave/desc/nationality';
  // import nose from '../../ts/util/slave/desc/nose';
  // import personality from '../../ts/util/slave/desc/personality';
  // import piercings from '../../ts/util/slave/desc/piercings';
  // import pregnancy from '../../ts/util/slave/desc/pregnancy';
  // import prestige from '../../ts/util/slave/desc/prestige';
  // import quirks from '../../ts/util/slave/desc/quirks';
  // import race from '../../ts/util/slave/desc/race';
  // import relationship from '../../ts/util/slave/desc/relationship';
  // import rivalry from '../../ts/util/slave/desc/rivalry';
  // import scars from '../../ts/util/slave/desc/scars';
  // import score from '../../ts/util/slave/desc/score';
  // import sex from '../../ts/util/slave/desc/sex';
  // import shoulders from '../../ts/util/slave/desc/shoulders';
  // import size from '../../ts/util/slave/desc/size';
  // import skills from '../../ts/util/slave/desc/skills';
  // import skin from '../../ts/util/slave/desc/skin';
  import trust, { trustColor } from '../../../ts/util/slave/desc/trust';
  // import waist from '../../ts/util/slave/desc/waist';

  import activeSlave from '../../../stores/active.store';

  const slave: Slave = $activeSlave;

  console.log(slave);
</script>

<Name />
<Title />

<div class="flex">
  <div class="m-2">
    <div>
      Devotion:
      <span class={devotionColor(slave.devotion)}>{devotion(slave).capitalize()}</span>
    </div>
    <div>
      Trust:
      <span class={trustColor(slave.trust)}>{trust(slave).capitalize()}</span>
    </div>
  </div>
  <div class="m-2">
    <div>
      Age:
      {slave.age.actual} years
    </div>
    <div>
      Birthday {slave.age.birthWeek === 51 ? 'next week' : `in ${52 - slave.age.birthWeek} weeks`}
    </div>
  </div>
  <div class="m-2">
    <div>
      Health:
      {slave.health.overall}
    </div>
    <div>
      Injuries:
      {slave.health.injury.major ?? 'none'}
      {slave.health.injury.minor ?? ''}
    </div>
  </div>
  <div class="m-2">
    <div>
      Intelligence:
      {slave.intelligence}
    </div>
    <div>
      Education:
      {slave.education}
    </div>
  </div>
  <div class="m-2">
    <div>
      Height:
      {slave.height}cm ({slave.height.toInches().toFeet()})
    </div>
    <div>
      Weight:
      {slave.weight}kg
    </div>
  </div>
</div>

<!-- {name(slave)}
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
{face(slave)}
{nose(slave)}
{size(slave)}
{fetish(slave)}
{mouth(slave)}

{belly(slave)}
{butt(slave)}
{chest(slave)}
{clothing(slave)}
{counter(slave)}
{crotch(slave)}
{flaws(slave)}
{genes(slave)}
{hair(slave)}
{hips(slave)}
{intelligence(slave)}
{legs(slave)}
{limbs(slave)}
{markings(slave)}
{muscles(slave)}
{personality(slave)}
{piercings(slave)}
{pregnancy(slave)}
{quirks(slave)}
{race(slave)}
{scars(slave)}
{score(slave)}
{sex(slave)}
{shoulders(slave)}
{waist(slave)} -->

<style lang="postcss">
  .title {
    @apply font-bold;
    @apply text-red-600;
  }

  @screen dark {
    .title {
      @apply text-red-400;
    }
  }
</style>
