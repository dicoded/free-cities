<script lang="ts">
  import Modal from '../../components/ui/Modal.svelte'
	import Button from '../../components/ui/Button.svelte';

	import Settings from '../settings/SettingsModal.svelte';
</script>

<Modal>
  <div slot="trigger" let:open>
    <Button handler={() => open()}>Open Modal</Button>
  </div>
  <div slot="header">
    <h1>First Modal</h1>
  </div>
  <div slot="content">
    <!-- Modal within a Modal -->
		<!-- <Settings /> -->

    <Modal>
      <div slot="trigger" let:open>
        <Button handler={() => open()}>Open Second Modal</Button>
      </div>
      <div slot="header">
        <h1>Second Modal</h1>
      </div>
      <div slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex
            totam corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores,
            provident error vel veritatis itaque nemo commodi.
          </p>
      </div>
    </Modal>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex
        totam corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident
        error vel veritatis itaque nemo commodi.
      </p>
  </div>

  <div slot="footer" let:store={{close}}>
    <button on:click={close}>Close First Modal</button>
  </div>
</Modal>
