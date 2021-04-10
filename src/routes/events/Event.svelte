<script lang="ts">
	import { link, components, props} from '@stores.store';
	import see from '@stores.store';

	import Body from '../../components/ui/Body.svelte';
	import Header from '../../components/ui/Header.svelte';

	$see.nav = true;

	$link = {
		href: 'main',
		text: 'Continue',
		handler: null,
	};
	$components = [];
	$props = [];
</script>

<Body>
	<Header>
		This is a test event.
	</Header>
</Body>
