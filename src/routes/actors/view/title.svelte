<script lang="ts">
	import Slave from '../../../ts/classes/slave/Slave';

	import activeSlave from '../../../stores/active.store';

	const slave: Slave = $activeSlave;
</script>

<div class="title text-center">
	{slave.title.capitalize()}
</div>

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
