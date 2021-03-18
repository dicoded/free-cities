import Slave from '../../../classes/slave/Slave';

import { HipSize } from '../../../classes/body/lower/Hips';

function isExtremelyObese(slave: Slave): boolean {
  return slave.isMorbidlyObese && slave.weight > 190;
}

function isVeryObese(slave: Slave): boolean {
  return slave.isObese && slave.weight > 160;
}

function isObese(slave: Slave): boolean {
  return slave.isObese && slave.weight > 130;
}

function isFat(slave: Slave): boolean {
  return slave.isOverweight && slave.weight > 95;
}

function isPlush(slave: Slave): boolean {
  return slave.isOverweight && slave.weight > 30 && slave.hips.size > HipSize.WIDE;
}

function isChubby(slave: Slave): boolean {
  return slave.isOverweight && slave.weight > 30;
}

function isCurvy(slave: Slave): boolean {
  return slave.isOverweight && slave.weight > 10;
}

function isThin(slave: Slave): boolean {
  return slave.isUnderweight && slave.weight < -10;
}

function isUnderweight(slave: Slave): boolean {
  return slave.isUnderweight && slave.weight < -30;
}

function isEmaciated(slave: Slave): boolean {
  return slave.isUnderweight && slave.weight < -95;
}

export default function weight(slave: Slave): string {
  const { his, him } = slave.pronouns;

  const extremelyObese: string[] = ['dangerously fat', 'dangerously overweight', 'extremely obese'];
  const veryObese: string[] = ['extremely fat', 'extremely overweight', 'very obese'];
  const obese: string[] = ['obese', 'very fat', 'very overweight'];
  const fat: string[] = ['carrying a lot of extra weight', 'fat', 'overweight'];
  const plush: string[] = ['quite curvy', 'very plush'];
  const chubby: string[] = ['carrying extra weight', 'chubby'];
  const curvy: string[] = ['nicely plush.', 'pleasingly curvy.'];
  const healthy: string[] = ['a healthy weight', `an attractive weight for ${his} frame`, 'neither too fat nor too skinny'];
  const thin: string[] = ['appealingly skinny.', 'pleasingly thin.'];
  const skinny: string[] = ['quite skinny', 'very thin'];
  const underweight: string[] = ['rail thin', 'too skinny', 'underweight'];
  const emaciated: string[] = ['dangerously skinny, emaciated'];

  if (isExtremelyObese(slave)) return extremelyObese.random();
  if (isVeryObese(slave)) return veryObese.random();
  if (isObese(slave)) return obese.random();
  if (isFat(slave) && slave.hips.size > HipSize.WIDE) return `${fat.random()}, but ${his} huge hips make the extra weight attractive on ${him}.`;
  if (isFat(slave)) return fat.random();
  if (isPlush(slave)) return `${plush.random()}, but ${his} motherly hips make the extra weight attractive on ${him}.`;
  if (isChubby(slave)) return chubby.random();
  if (isCurvy(slave)) return curvy.random();
  if (isThin(slave)) return thin.random();
  if (isUnderweight(slave) && slave.hips.size > HipSize.WIDE) return `${skinny.random()}, and ${his} wide hips make the gap between ${his} thighs very noticeable.`;
  if (isUnderweight(slave) && slave.hips.size < HipSize.NARROW) return `${skinny.random()}, but ${his} trim hips make ${him} look like a model.`;
  if (isUnderweight(slave)) return underweight.random();
  if (isEmaciated(slave)) return emaciated.random();

  return healthy.random();
}
