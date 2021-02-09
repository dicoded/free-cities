<script lang="ts">
	import { slaves } from '../../stores/actors.store';

	import { generateSlave } from '../../ts/util/slave/generate';

	import Slave from '../../ts/classes/slave/Slave';

	import Card from '../slaves/Card.svelte';
	import Button from '../../components/ui/Button.svelte';

	function addSlave(slave: Slave) {
		$slaves.push(slave);

		$slaves = $slaves;
	}
</script>

<Button handler={() => {
	const slave = generateSlave();

	addSlave(slave);
}}>New Slave</Button>

{#each $slaves as slave}
	<Card slave={slave} />
{/each}


