<script lang="ts">
  import Modal from '@components/ui/Modal.svelte'
	import Button from '@components/ui/Button.svelte';

	import Settings from '../settings/Settings.svelte';
</script>

<Modal>
  <div class="flex my-8" slot="trigger" let:open>
    <Button handler={() => open()}>Settings</Button>
  </div>

  <div slot="content" let:store={{close}}>
		<Settings />
  </div>
</Modal>
