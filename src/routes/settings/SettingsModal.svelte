<script lang="ts">
	import { getContext } from 'svelte';
	import see from '../../stores/see.store';


	import Button from '../../components/ui/Button.svelte';
	import Settings from './Settings.svelte';

	const { open } = getContext('modal');

	const showSettings = () => {
		open(Settings);
		$see.nav = false;
	}
</script>

<div class="flex pt-6">
	<Button handler={() => {
			showSettings();
		}
	}>Settings</Button>
</div>
