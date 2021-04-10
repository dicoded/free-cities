<script lang="ts">
  import Body from '../../components/ui/Body.svelte';
  import Link from '../../components/ui/Link.svelte';

	import arcology from '../../stores/arcology.store';
	import player from '../../stores/player.store';
</script>

<Body>
	<p class="my-4">
		You've done it.
	</p>

	<p class="my-4">
		You arrive at your new arcology, {$arcology.name}, and head straight to the penthouse to enter the access codes that
		will tell the {$arcology.name} systems to recognize you as their owner. The penthouse office is ready to receive the
		codes, and they authenticate. A voice activates in your earpiece.
	</p>

	<!-- TODO: go over this again -->
	<!-- TODO: new font? italics? -->
	<p class="my-4 italic">
		Congratulations. I am a personal assistant program, and it is my pleasure to assist you, {$player.name.full}, the new owner of {$arcology.name}. I will offer useful information whenever possible in italics. Your new arcology has some unusual equipment. The previous owner kept a small stable of sex slaves. The penthouse therefore has a body modification studio for tattooing, bleaching and piercing, and an auto salon for more prosaic things like hair care. It also has a remote surgery, a small surgical theater that can be operated remotely by a qualified surgeon if you can pay the fee. Finally, it has a slave nutrition system connected to the arcology's hydroponics bays. This system produces a tasty protein-rich drink that provides the physically active female body all its necessary nutrients while leaving the lower digestive tract extremely clean. It even causes a mild increase in sex drive.
	</p>

	<p class="my-4">
		The previous owner seems to have left in something of a hurry.
	</p>

	<Link to="main">Continue</Link>
</Body>
