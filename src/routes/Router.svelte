<script lang="ts">
	import view from '@stores/view.store';
	import see from '@stores/see.store';
	import getView from '@util/view';

	// Any scenes where the sidebar should not be visible should go here.
	if ([
		'start',
		'intro'
	].includes($view)) {
		$see.nav = false;
	} else {
		$see.nav = true;
	}
</script>

<svelte:component this={getView($view)}/>
