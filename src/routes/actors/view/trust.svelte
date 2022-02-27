<script lang="ts">
	import Slave from '@classes/slave/Slave';

	import trust, { trustColor } from '@util/slave/desc/trust';

	export let slave: Slave;
</script>

<div>
	<span class="font-bold">Trust:</span>
	<span class={trustColor(slave.trust)}>{trust(slave).capitalize()}</span>
</div>
