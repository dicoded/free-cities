<script lang="ts">
	import Slave from '../../../ts/classes/slave/Slave';

	import devotion, { devotionColor } from '../../../ts/util/slave/desc/devotion';

	import activeSlave from '../../../stores/active.store';

	const slave: Slave = $activeSlave;
</script>

<div>
	<span class="font-bold">Devotion:</span>
	<span class={devotionColor(slave.devotion)}>{devotion(slave).capitalize()}</span>
</div>
