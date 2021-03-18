import Slave from '../../../classes/slave/Slave';

import { HipSize } from '../../../classes/body/lower/Hips';

// TODO: rework to take BMI into account
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

  // if (slave.isMorbidlyObese) return;

  // TODO: add in FS effects
  if (slave.weight > 190) return extremelyObese.random();
  if (slave.weight > 160) return veryObese.random();
  if (slave.weight > 130) return obese.random();
  if (slave.weight > 95) {
    if (slave.hips.size > HipSize.WIDE) {
      return `${fat.random()}, but ${his} huge hips make the extra weight attractive on ${him}.`;
    }

    return fat.random();
  }

  if (slave.weight > 30) {
    if (slave.hips.size > HipSize.WIDE) {
      return `${plush.random()}, but ${his} motherly hips make the extra weight attractive on ${him}.`;
    }

    return chubby.random();
  }

  if (slave.weight > 10) return curvy.random();
  if (slave.weight < -10) return thin.random();
  if (slave.weight < -30) {
    if (slave.hips.size > HipSize.WIDE) {
      return `${skinny.random()}, and ${his} wide hips make the gap between ${his} thighs very
      noticeable.`;
    }

    if (slave.hips.size < HipSize.NARROW) {
      return `${skinny.random()}, but ${his} trim hips make ${him} look like a model.`;
    }

    return underweight.random();
  }

  if (slave.weight < -95) return emaciated.random();

  return healthy.random();
}
