<script lang="ts">
	import arcology from '../stores/arcology.store';
	import { link, components } from '../stores/nav.store';
	import { week } from '../stores/global.store';

	import Facilities from './facilities/Facilities.svelte';

	import Header from '../components/ui/Header.svelte';
	import Body from '../components/ui/Body.svelte';
	import Sidebar from '../components/arcology/Sidebar.svelte';
	import Settings from './settings/SettingsLink.svelte';

	$link = {
		href: 'event',
		text: 'End Week',
		handler: () => {
			week.update((n) => n + 1);
		},
	};
	$components = [
		Sidebar,
		Settings,
	];
</script>

<Body>
	<Header>{$arcology.name}</Header>
	<Facilities />
</Body>
