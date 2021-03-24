import Actor from '../../../classes/actor/Actor';

import { HipSize } from '../../../classes/body/lower/Hips';

const isExtremelyObese = (actor: Actor): boolean => actor.isMorbidlyObese && actor.weight > 190;
const isVeryObese = (actor: Actor): boolean => actor.isObese && actor.weight > 160;
const isObese = (actor: Actor): boolean => actor.isObese && actor.weight > 130;
const isFat = (actor: Actor): boolean => actor.isOverweight && actor.weight > 95;
const isPlush = (actor: Actor): boolean => actor.isOverweight && actor.weight > 30 && actor.hips.size > HipSize.WIDE;
const isChubby = (actor: Actor): boolean => actor.isOverweight && actor.weight > 30;
const isCurvy = (actor: Actor): boolean => actor.isOverweight && actor.weight > 10;
const isThin = (actor: Actor): boolean => actor.isUnderweight && actor.weight < -10;
const isUnderweight = (actor: Actor): boolean => actor.isUnderweight && actor.weight < -30;
const isEmaciated = (actor: Actor): boolean => actor.isUnderweight && actor.weight < -95;

export default function weight(actor: Actor): string {
  const { his, him } = actor.pronouns;

  const extremelyObese: string = ['dangerously fat', 'dangerously overweight', 'extremely obese'].random();
  const veryObese: string = ['extremely fat', 'extremely overweight', 'very obese'].random();
  const obese: string = ['obese', 'very fat', 'very overweight'].random();
  const fat: string = ['carrying a lot of extra weight', 'fat', 'overweight'].random();
  const plush: string = ['quite curvy', 'very plush'].random();
  const chubby: string = ['carrying extra weight', 'chubby'].random();
  const curvy: string = ['nicely plush.', 'pleasingly curvy.'].random();
  const healthy: string = ['a healthy weight', `an attractive weight for ${his} frame`, 'neither too fat nor too skinny'].random();
  const thin: string = ['appealingly skinny.', 'pleasingly thin.'].random();
  const skinny: string = ['quite skinny', 'very thin'].random();
  const underweight: string = ['rail thin', 'too skinny', 'underweight'].random();
  const emaciated: string = ['dangerously skinny, emaciated'].random();

  if (isExtremelyObese(actor)) return extremelyObese;
  if (isVeryObese(actor)) return veryObese;
  if (isObese(actor)) return obese;
  if (isFat(actor) && actor.hips.size > HipSize.WIDE) return `${fat}, but ${his} huge hips make the extra weight attractive on ${him}.`;
  if (isFat(actor)) return fat;
  if (isPlush(actor)) return `${plush}, but ${his} motherly hips make the extra weight attractive on ${him}.`;
  if (isChubby(actor)) return chubby;
  if (isCurvy(actor)) return curvy;
  if (isThin(actor)) return thin;
  if (isUnderweight(actor) && actor.hips.size > HipSize.WIDE) return `${skinny}, and ${his} wide hips make the gap between ${his} thighs very noticeable.`;
  if (isUnderweight(actor) && actor.hips.size < HipSize.NARROW) return `${skinny}, but ${his} trim hips make ${him} look like a model.`;
  if (isUnderweight(actor)) return underweight;
  if (isEmaciated(actor)) return emaciated;

  return healthy;
}
