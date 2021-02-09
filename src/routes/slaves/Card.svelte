<script lang="ts">
	import Slave from '../../ts/classes/slave/Slave';

	import Link from '../../components/ui/Link.svelte'

	export let slave: Slave;
</script>

<div class="flex">
	<div class="btn">
		<div class="text-2xl">
			{slave.name.full}
		</div>
	</div>
</div>
