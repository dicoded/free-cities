<script lang="ts">
	import Choice from '../../../components/ui/Choice.svelte';
	import Input from '../../../components/ui/Input.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import arcology from '../../../stores/arcology.store';
</script>

<Section>
	<p class="my-4">
		People from all walks of life come to the Free Cities for all sorts of reasons, be it wanting to start a new life,
		escaping persecution, running from the law, or otherwise. Along with this diversity of people comes a diversity of
		people, but every established settlement needs a common language.
		<Choice>
			What is your arcology's lingua franca?
		</Choice>
	</p>

	<Input placeholder="Language" bind:value={ $arcology.language }/>

	<Response>
		The common tongue in my arcology is <span class="rb">{$arcology.language || 'English'}</span>.
	</Response>
</Section>
