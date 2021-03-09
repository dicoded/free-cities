<script lang="ts">
	import '../../ts/util/extensions/number.extension';

	import { slaves } from '../../stores/actors.store';
	import { week, cash, upkeep, reputation } from '../../stores/global.store';

	import Item from './SidebarItem.svelte';
</script>

<div class="flex">
	<div class="w-full p-2 item">
		<p class="text-center p-6 text-lg font-bold">
			Week {$week}
		</p>
		<div class="text-base">
			<div class="m-4">
				<Item left="Cash" right={$cash.toCash()}/>
				<Item left="Upkeep" right={$upkeep.toCash()}/>
			</div>
			<div class="m-4">
				<Item left="Reputation" right={$reputation.toString()} cols={3}/>
			</div>
			<div class="m-4">
				<Item left="Total Slaves" right={$slaves.length.toString()} cols={6}/>
				<Item left="Penthouse Beds" right="0" cols={6}/>
				<Item left="Dormitory Beds" right="0" cols={6}/>
				<Item left="Luxury Rooms" right="0" cols={6}/>
			</div>
		</div>
	</div>
</div>
