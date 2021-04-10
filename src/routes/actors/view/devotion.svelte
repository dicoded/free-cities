<script lang="ts">
	import Slave from '@classes/slave/Slave';

	import devotion, { devotionColor } from '@util/slave/desc/devotion';

	export let slave: Slave;
</script>

<div>
	<span class="font-bold">Devotion:</span>
	<span class={devotionColor(slave.devotion)}>{devotion(slave).capitalize()}</span>
</div>
