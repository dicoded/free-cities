import Slave from '../../../classes/slave/Slave';

import { HipSize } from '../../../classes/body/lower/Hips';

const isExtremelyObese = (slave: Slave): boolean => slave.isMorbidlyObese && slave.weight > 190;
const isVeryObese = (slave: Slave): boolean => slave.isObese && slave.weight > 160;
const isObese = (slave: Slave): boolean => slave.isObese && slave.weight > 130;
const isFat = (slave: Slave): boolean => slave.isOverweight && slave.weight > 95;
const isPlush = (slave: Slave): boolean => slave.isOverweight && slave.weight > 30 && slave.hips.size > HipSize.WIDE;
const isChubby = (slave: Slave): boolean => slave.isOverweight && slave.weight > 30;
const isCurvy = (slave: Slave): boolean => slave.isOverweight && slave.weight > 10;
const isThin = (slave: Slave): boolean => slave.isUnderweight && slave.weight < -10;
const isUnderweight = (slave: Slave): boolean => slave.isUnderweight && slave.weight < -30;
const isEmaciated = (slave: Slave): boolean => slave.isUnderweight && slave.weight < -95;

export default function weight(slave: Slave): string {
  const { his, him } = slave.pronouns;

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

  if (isExtremelyObese(slave)) return extremelyObese;
  if (isVeryObese(slave)) return veryObese;
  if (isObese(slave)) return obese;
  if (isFat(slave) && slave.hips.size > HipSize.WIDE) return `${fat}, but ${his} huge hips make the extra weight attractive on ${him}.`;
  if (isFat(slave)) return fat;
  if (isPlush(slave)) return `${plush}, but ${his} motherly hips make the extra weight attractive on ${him}.`;
  if (isChubby(slave)) return chubby;
  if (isCurvy(slave)) return curvy;
  if (isThin(slave)) return thin;
  if (isUnderweight(slave) && slave.hips.size > HipSize.WIDE) return `${skinny}, and ${his} wide hips make the gap between ${his} thighs very noticeable.`;
  if (isUnderweight(slave) && slave.hips.size < HipSize.NARROW) return `${skinny}, but ${his} trim hips make ${him} look like a model.`;
  if (isUnderweight(slave)) return underweight;
  if (isEmaciated(slave)) return emaciated;

  return healthy;
}
