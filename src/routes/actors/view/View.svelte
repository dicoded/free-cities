<script lang="ts">
  import Slave from '@classes/slave/Slave';

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

  export let slave: Slave;

  console.log(slave);
</script>

<Name {slave}/>
<Title {slave}/>

<div class="flex">
  <div class="m-2">
    <Devotion {slave}/>
    <Trust {slave}/>
  </div>
  <div class="m-2">
    <Age {slave}/>
    <Birthday {slave}/>
  </div>
  <div class="m-2">
    <Health {slave}/>
    <Injuries {slave}/>
  </div>
  <div class="m-2">
    <Intelligence {slave}/>
    <Education {slave}/>
  </div>
  <div class="m-2">
    <Height {slave}/>
    <Weight {slave}/>
  </div>
</div>

