<script lang="ts">
  import Slave from '../../../ts/classes/slave/Slave';

  import Name from './name.svelte';
  import Title from './title.svelte';
  import Devotion from './devotion.svelte';
  import Trust from './trust.svelte';
  import Age from './age.svelte';
  import Birthday from './birthday.svelte';
  import Health from './health.svelte';
  import Injuries from './injuries.svelte';
  import Intelligence from './intelligence.svelte';
  import Education from './education.svelte';
  import Height from './height.svelte';
  import Weight from './weight.svelte';

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
    <Health />
    <Injuries />
  </div>
  <div class="m-2">
    <Intelligence />
    <Education />
  </div>
  <div class="m-2">
    <Height />
    <Weight />
  </div>
</div>

