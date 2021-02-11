<script lang="ts">
	import { slaves } from 'stores/actors.store';

	import { generateSlave } from 'util/slave/generate';

	import Slave from 'classes/slave/Slave';

	import Card from '../slaves/Card.svelte';
	import Button from 'components/ui/Button.svelte';

	function addSlave(slave: Slave) {
		$slaves.push(slave);

		$slaves = $slaves;
	}
</script>

<div class="flex">
	<Button handler={() => {
		const slave = generateSlave();

		addSlave(slave);
	}}>
		New Slave
	</Button>
</div>

{#each $slaves as slave}
	<Card slave={slave} />
{/each}


