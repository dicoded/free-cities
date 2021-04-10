<script lang="ts">
	import Slave from '@classes/slave/Slave';

	import Link from '@components/ui/Link.svelte'
	import Button from '@components/ui/Button.svelte';
	import Modal from '@components/ui/Modal.svelte'

	import Interact from './Interact.svelte';

	import activeSlave from '@stores/active.store';

	export let slave: Slave;
</script>

<Modal>
	<div class="flex" slot="trigger" let:open>
		<Button handler={() => {
			$activeSlave = slave;

			open();
		}}>
			{slave.name.full}
		</Button>
	</div>

	<div slot="content" let:store={{close}}>
		<Interact />
	</div>
</Modal>
