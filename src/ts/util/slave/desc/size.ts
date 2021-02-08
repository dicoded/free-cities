import { HipSize } from '../../../classes/body/lower/Hips';

import Slave from '../../../classes/slave/Slave';

// TODO:
// function height(slave: Slave): string {
// }

// TODO: rework to take BMI into account
function weight(slave: Slave): string {
  const { his, him } = slave.pronouns;

  // TODO: add in FS effects
  if (slave.weight > 190) return ['dangerously fat', 'dangerously overweight', 'extremely obese'].random();
  if (slave.weight > 160) return ['extremely fat', 'extremely overweight', 'very obese'].random();
  if (slave.weight > 130) return ['obese', 'very fat', 'very overweight'].random();
  if (slave.weight > 95) {
    if (slave.hips.size > HipSize.WIDE) {
      return `${['carrying a lot of extra weight', 'fat', 'overweight'].random()}, but ${his} huge hips make the extra
      weight attractive on ${him}.`;
    }

    return ['carrying a lot of extra weight', 'fat', 'overweight'].random();
  }
  if (slave.weight > 30) {
    if (slave.hips.size > HipSize.WIDE) {
      return `${['quite curvy', 'very plush'].random()}, but ${his} motherly hips make the extra weight attractive on
      ${him}.`;
    }

    return ['carrying extra weight', 'chubby'].random();
  }
  if (slave.weight > 10) return ['nicely plush.', 'pleasingly curvy.'].random();
  if (slave.weight < -10) return ['appealingly skinny.', 'pleasingly thin.'].random();
  if (slave.weight < -30) {
    if (slave.hips.size > HipSize.WIDE) {
      return `${['quite skinny', 'very thin'].random()}, and ${his} wide hips make the gap between ${his} thighs very
      noticeable.`;
    }
    if (slave.hips.size < HipSize.NARROW) {
      return `${['quite skinny', 'very thin'].random()}, but ${his} trim hips make ${him} look like a model.`;
    }

    return ['rail thin', 'too skinny', 'underweight'].random();
  }
  if (slave.weight < -95) return ['`dangerously skinny`, `emaciated`'].random();

  return ['a healthy weight', `an attractive weight for ${his} frame`, 'neither too fat nor too skinny'].random();
}

export default function size(slave: Slave): string {
  const text: string[] = [];

  text.push(weight(slave));

  return text.join(' ');
}
