<script lang="ts">
	import Slave from '@classes/slave/Slave';

  export let slave: Slave;
</script>

<div class="title text-center">
	{slave.title.capitalize()}
</div>

<style>
  .title {
    @apply font-bold;
    @apply text-red-600;
  }

  @dark {
    .title {
      @apply text-red-400;
    }
  }
</style>
