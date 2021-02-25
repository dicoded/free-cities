<script lang="ts">
  import Modal from '../../components/ui/Modal.svelte'
	import Button from '../../components/ui/Button.svelte';

	import Settings from '../settings/Settings.svelte';
</script>

<Modal>
  <div slot="trigger" let:open>
    <Button handler={() => open()}>Open Modal</Button>
  </div>
  <div slot="content">
		<Settings />
  </div>

  <div slot="footer" let:store={{close}}>
    <button on:click={close}>Close First Modal</button>
  </div>
</Modal>
