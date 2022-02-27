<script lang="ts">
	import Slave from '@classes/slave/Slave';

	import Button from '@components/ui/Button.svelte';
	import Modal from '@components/ui/Modal.svelte'

	import Interact from './Interact.svelte';

	export let slave: Slave;
</script>

<Modal>
	<div class="flex" slot="trigger" let:open>
		<Button handler={() => {
			open();
		}}>
			{slave.name.full}
		</Button>
	</div>

	<div slot="content" let:store={{close}}>
		<Interact {slave}/>
	</div>
</Modal>
