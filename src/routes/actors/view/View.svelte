<script lang="ts">
  import Slave from '../../../ts/classes/slave/Slave';

  import Name from './name.svelte';
  import Title from './title.svelte';
  import Devotion from './devotion.svelte';
  import Trust from './trust.svelte';
  import Age from './age.svelte';
  import Birthday from './birthday.svelte';

  import activeSlave from '../../../stores/active.store';

  const slave: Slave = $activeSlave;

  console.log(slave);
</script>

<Name />
<Title />

<div class="flex">
  <div class="m-2">
    <Devotion />
    <Trust />
  </div>
  <div class="m-2">
    <Age />
    <Birthday />
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

