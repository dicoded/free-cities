<script lang="ts">
	import Slave from '../../../ts/classes/slave/Slave';

	import trust, { trustColor } from '../../../ts/util/slave/desc/trust';

	import activeSlave from '../../../stores/active.store';

	const slave: Slave = $activeSlave;
</script>

<div>
	<span class="font-bold">Trust:</span>
	<span class={trustColor(slave.trust)}>{trust(slave).capitalize()}</span>
</div>
