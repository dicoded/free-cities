<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';
	import Input from '../../../components/ui/Input.svelte';
	import Choice from '../../../components/ui/Choice.svelte';

	import PC from '../../../stores/player.store';
	import { Career } from '../../../ts/classes/player/Player';
</script>

<Section>
	<div class="my-4">
		You're a relative unknown in the Free Cities, but it's clear you're already accomplished. The meek and average
		cannot aspire to acquire arcologies. You've got all the necessary skills to take over an arcology and succeed as its
		owner, but you should be able to leverage the skills and experience you retain from your past, too.
		<Choice>What career brought you to the Free Cities?</Choice>
	</div>

	<div>
		<div class="flex">
			<Button
				selected={$PC.career === Career.WEALTH}
				handler={() => { $PC.career = Career.WEALTH }}>
				Idle Wealth
			</Button>
			<Button
				selected={$PC.career === Career.VENTURE_CAPITALIST}
				handler={() => { $PC.career = Career.VENTURE_CAPITALIST }}>
				Venture Capitalism
			</Button>
			<Button
				selected={$PC.career === Career.PRIVATE_MILITARY}
				handler={() => { $PC.career = Career.PRIVATE_MILITARY }}>
				Private Military Work
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$PC.career === Career.SLAVING}
				handler={() => { $PC.career = Career.SLAVING }}>
				Slaving
			</Button>
			<Button
				selected={$PC.career === Career.ENGINEERING}
				handler={() => { $PC.career = Career.ENGINEERING }}>
				Arcology Engineering
			</Button>
			<Button
				selected={$PC.career === Career.SURGERY}
				handler={() => { $PC.career = Career.SURGERY }}>
				Slave Surgery
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$PC.career === Career.CELEBRITY}
				handler={() => { $PC.career = Career.CELEBRITY }}>
				Minor Celebrity
			</Button>
			<Button
				selected={$PC.career === Career.ESCORT}
				handler={() => { $PC.career = Career.ESCORT }}>
				High-Class Escort
			</Button>
			<Button
				selected={$PC.career === Career.SERVANT}
				handler={() => { $PC.career = Career.SERVANT }}>
				Servant
			</Button>
		</div>

		<div class="flex">
			<Button
				selected={$PC.career === Career.GANG_LEADER}
				handler={() => { $PC.career = Career.GANG_LEADER }}>
				Gang Leader
			</Button>
			<Button
				selected={$PC.career === Career.HACKER}
				handler={() => { $PC.career = Career.HACKER }}>
				Black Hat Hacker
			</Button>
			<Input placeholder="Career" bind:value={$PC.career}/>
		</div>
	</div>

	{#if $PC.career}
			{#if $PC.career === Career.WEALTH}
				<Response>
					I was once <span class="rb">a member of the idly wealthy</span>.
				</Response>
			{:else if $PC.career === Career.VENTURE_CAPITALIST}
				<Response>
					I was once <span class="rb">a venture capitalist</span>.
				</Response>
			{:else if $PC.career === Career.PRIVATE_MILITARY}
				<Response>
					I was once <span class="rb">in the private military industry</span>.
				</Response>
			{:else if $PC.career === Career.SLAVING}
				<Response>
					I was once <span class="rb">a slave trader</span>.
				</Response>
			{:else if $PC.career === Career.ENGINEERING}
				<Response>
					I was once <span class="rb">an engineer</span>.
				</Response>
			{:else if $PC.career === Career.SURGERY}
				<Response>
					I was once <span class="rb">a surgeon</span>.
				</Response>
			{:else if $PC.career === Career.CELEBRITY}
				<Response>
					I was once <span class="rb">a C-list celebrity</span>.
				</Response>
			{:else if $PC.career === Career.ESCORT}
				<Response>
					I was once <span class="rb">a high-class escort</span>.
				</Response>
			{:else if $PC.career === Career.SERVANT}
				<Response>
					I was once <span class="rb">a humble servant</span>.
				</Response>
			{:else if $PC.career === Career.GANG_LEADER}
				<Response>
					I was once <span class="rb">the leader of a ruthless gang</span>.
				</Response>
			{:else if $PC.career === Career.HACKER}
				<Response>
					I was once <span class="rb">a master hacker</span>.
				</Response>
			{:else}
				<Response>
					I was once <span class="rb">{$PC.career}</span>.
				</Response>
			{/if}
	{/if}
</Section>
