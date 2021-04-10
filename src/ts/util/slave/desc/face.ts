import Actor from '../../../classes/actor/Actor';
import Slave from '../../../classes/slave/Slave';

import { FaceShape } from '../../../classes/body/face/Face';
import { Makeup } from '../../../classes/actor/Accessories';
import { Tattoo } from '../../../classes/actor/Tattoos';
import { MarkingsType } from '../../../classes/body/nonphysical/skin/Markings';

function getFaceShapeMasculine(actor: Actor): string {
  const { his, him } = actor.pronouns;

  if (actor.face.beauty < -95) return `so ugly and masculine that ${his} designation as a slave girl is a mockery.`;
  if (actor.face.beauty < -40) return `ugly and masculine, making ${him} a poor slave girl by appearance.`;
  if (actor.face.beauty < -10) return 'unattractively masculine.';
  if (actor.face.beauty <= 10) return 'masculine, but not entirely unappealing.';
  if (actor.face.beauty <= 40) return 'attractively masculine.';
  if (actor.face.beauty <= 95) return 'quite handsome in a masculine way.';

  return 'the height of masculine handsomeness.';
}

function getFaceShapeAndrogynous(actor: Actor): string {
  const { he } = actor.pronouns;

  if (actor.face.beauty < -95) return 'disturbingly androgynous and terribly ugly.';
  if (actor.face.beauty < -40) return `ugly and androgynous; ${he} has neither masculine nor feminine appeal.`;
  if (actor.face.beauty < -10) return 'strangely androgynous, and rather unattractive.';
  if (actor.face.beauty <= 10) return 'strangely androgynous.';
  if (actor.face.beauty <= 40) return 'androgynous, and attractive enough that this ambiguity is interesting.';
  if (actor.face.beauty <= 95) return 'gorgeously androgynous in a complex way that captures the eye.';

  return `so gorgeously androgynous that ${he} tends to induce sexual confusion.`;
}

function getFaceShapeCute(actor: Actor): string {
  const { he } = actor.pronouns;

  if (actor.face.beauty < -95) return `very ugly, yet somehow cute; ${he}'s so unattractive that ${he} inspires pity.`;
  if (actor.face.beauty < -40) return 'ugly, but cute, with a pitiable appeal.';
  if (actor.face.beauty < -10) return 'not attractive, but is appealingly cute.';
  if (actor.face.beauty <= 10) return 'merely average, but is appealingly cute.';
  if (actor.face.beauty <= 40) return 'both attractive and appealingly cute.';
  if (actor.face.beauty <= 95) return 'beautiful, yet somehow also approachably cute.';

  return 'an impossibly perfect combination of beauty and girl-next-door cuteness.';
}

function getFaceShapeSensual(actor: Actor): string {
  if (actor.face.beauty < -95) return 'very ugly, yet naturally slutty, promising a decent fuck despite its appearance.';
  if (actor.face.beauty < -40) return 'ugly, but also slutty, promising a good fuck despite its appearance.';
  if (actor.face.beauty < -10) return 'not attractive, but it has a certain sensual appeal.';
  if (actor.face.beauty <= 10) return 'merely average, but undeniably sensual.';
  if (actor.face.beauty <= 40) return 'both attractive and naturally sultry.';
  if (actor.face.beauty <= 95) return 'both beautiful and sultry, bringing sex to mind naturally.';

  return 'very beautiful in a consummately sexual way.';
}

function getFaceShapeExotic(actor: Actor): string {
  if (actor.face.beauty < -95) return 'very ugly and unusual, a real tragedy in flesh.';
  if (actor.face.beauty < -40) return 'ugly and unusual, a real misfortune.';
  if (actor.face.beauty < -10) return 'unattractive, and distinctive in its unattractiveness.';
  if (actor.face.beauty <= 10) return 'quite average, but not uninteresting.';
  if (actor.face.beauty <= 40) return 'attractive in an exotic and interesting way.';
  if (actor.face.beauty <= 95) return 'exotic and beautiful, capable of catching the eye and keeping its gaze.';

  return 'very beautiful and exotic, almost to the point of alien fascination.';
}

function getFaceShapeNormal(actor: Actor): string {
  if (actor.face.beauty < -95) return 'very ugly.';
  if (actor.face.beauty < -40) return 'quite ugly.';
  if (actor.face.beauty < -10) return 'unattractive.';
  if (actor.face.beauty <= 10) return 'average and conventionally feminine.';
  if (actor.face.beauty <= 40) return 'conventionally attractive.';
  if (actor.face.beauty <= 95) return 'conventionally beautiful.';

  return 'the height of conventional feminine beauty.';
}

function getFaceShape(actor: Actor): string {
  if (actor.face.type === FaceShape.MASCULINE) return getFaceShapeMasculine(actor);
  if (actor.face.type === FaceShape.ANDROGYNOUS) return getFaceShapeAndrogynous(actor);
  if (actor.face.type === FaceShape.CUTE) return getFaceShapeCute(actor);
  if (actor.face.type === FaceShape.SENSUAL) return getFaceShapeSensual(actor);
  if (actor.face.type === FaceShape.EXOTIC) return getFaceShapeExotic(actor);

  return getFaceShapeNormal(actor);
}

function getFaceWeight(actor: Actor): string {
  const { His } = actor.pronouns;

  if (actor.isMorbidlyObese) return `${His} face is quite fat with ample excess chins.`;
  if (actor.isObese) return `${His} face is round and plump with a trio of extra chins.`;
  if (actor.isOverweight && actor.weight > 130) return `${His} face is chubby with an obvious second chin.`;
  if (actor.isOverweight) return `${His} face is soft with barely a second chin.`;

  return '';
}

function getFaceFuckdoll(actor: Actor): string {
  const { him, his } = actor.pronouns;

  if (actor.face.beauty < -40) return `However, it's hard to see this past the suit, since its face is padded to make ${him} seem less ugly.`;
  if (actor.face.beauty < -10) return `However, it's hard to see this past the suit, since its face is shaped to make ${him} seem prettier.`;

  return `However, the suit obscures all but the shape of ${his} pretty face.`;
}

function getFaceMarking(actor: Actor): string {
  const { He, his, him } = actor.pronouns;

  if (actor.face.beauty < -95) return 'It bears a severely disfiguring, discolored mark.';
  if (actor.face.beauty < -40) return 'It bears a couple of unsightly moles.';
  if (actor.face.beauty < -10) return 'It bears an ugly mole.';
  if (actor.face.beauty <= 10) return `${He} has a distinctive beauty mark.`;
  if (actor.face.beauty <= 40) return `${He} has a nice beauty mark.`;
  if (actor.face.beauty <= 95) return `${He} has a beauty mark that adds to ${his} distinctiveness.`;

  return `${He} has a beauty mark that makes ${him} really memorable.`;
}

// TODO:
// function getFaceSurgery(actor: Actor): string {
// }

function getMakeup(actor: Actor): string {
  const { He, His, his } = actor.pronouns;

  if (actor.accessories.makeup === Makeup.MINIMAL) return `${He}'s wearing minimal makeup.`;
  if (actor.accessories.makeup === Makeup.LUXURIOUS) return `${He}'s wearing expensive, luxurious makeup.`;
  if (actor.accessories.makeup === Makeup.COLOR_COORDINATED_HAIR) return `${His} makeup is color-coordinated with ${his} ${actor.hair.color} hair.`;
  if (actor.accessories.makeup === Makeup.HEAVY) return `${He}'s wearing stereotypical, garish streetwalker makeup.`;
  if (actor.accessories.makeup === Makeup.NEON) return `${He}'s wearing eye-catching neon makeup.`;
  if (actor.accessories.makeup === Makeup.COLOR_COORDINATED_NEON) return `${His} neon makeup is color-coordinated with ${his} ${actor.hair.color} hair.`;
  if (actor.accessories.makeup === Makeup.METALLIC) return `${He}'s wearing expensive, metallic makeup.`;
  if (actor.accessories.makeup === Makeup.COLOR_COORDINATED_METALLIC) return `${His} metallic makeup is color-coordinated with ${his} ${actor.hair.color} hair.`;
  if (actor.accessories.tattoos?.face === Tattoo.MAKEUP) return `${His} face appears to bear very heavy, slutty makeup, but on closer inspection, the makeup is actually tattooed on.`;

  return `${His} face is makeup-free.`;
}

export default function face(actor: Actor): string {
  const { His } = actor.pronouns;

  const text: string[] = [];

  text.push(
    `${His} face is`,
    getFaceShape(actor),
    getFaceWeight(actor),
    getMakeup(actor),
  );

  if (Actor instanceof Slave && Actor.isFuckdoll) text.push(getFaceFuckdoll(actor));
  else if (actor.markings.face === MarkingsType.BIRTHMARK) text.push(getFaceMarking(actor));

  return text.join(' ');
}
