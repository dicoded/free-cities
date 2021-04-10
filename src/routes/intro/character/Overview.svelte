<script lang="ts">
	import Response from '../../../components/ui/Response.svelte';
	import Section from '../../../components/ui/Section.svelte';

	import PC from '@stores/player.store';

	let acquisition: string;
	let age: number;
	let birthday: string;
	let career: string;
	let eyes: string;
	let face: string;
	let name: string;
	let hair: string;
	let markings: string;
	let nationality: string;
	let race: string;
	let sex: string;
	let skin: string;

	PC.subscribe((player) => {
		acquisition = player.acquisition;
		age = player.age.actual;
		birthday = player.birthday;
		career = player.career;
		eyes = player.face.eyes.both;
		face = player.face.type;
		name = player.name.full;
		hair = player.hair.color;
		markings = player.markings;
		nationality = player.nationality;
		race = player.race;
		sex = player.sex;
		skin = player.skin.color;
	});
</script>

<Section>
	<Response>
		My name is <span class="rb">{name}</span>. I'm a <span class="rb">{age}</span>-year-old <span class="rb">{race} {nationality} {sex}</span> with a <span class="rb">{skin}</span> complexion, and I was born on <span class="rb">{birthday}</span>. I was once <span class="rb">{career}</span>, and I acquired my arcology through <span class="rb">{acquisition}</span>. I have <span class="rb">{eyes}</span> eyes and <span class="rb">{hair}</span> hair, and my face is <span class="rb">{face}</span> in shape. <span class="rb">{markings}</span>.
	</Response>
</Section>
