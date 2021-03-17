import BehavioralQuirks from '../../../classes/actor/quirks/Behavioral';
import SexualQuirks from '../../../classes/actor/quirks/Sexual';

import Slave from '../../../classes/slave/Slave';

function behavioralQuirks(slave: Slave): string {
  const {
    He, he, his, him,
  } = slave.pronouns;

  if (slave.quirks.behavioral === BehavioralQuirks.ADORES_MEN) return `${He} adores men, and loves spending time with them.`;
  if (slave.quirks.behavioral === BehavioralQuirks.ADORES_WOMEN) return `${He} adores women, and loves spending time with them.`;
  if (slave.quirks.behavioral === BehavioralQuirks.ADVOCATE) return `${He}'s an advocate for slavery, and can articulate what it's done for ${him}.`;
  if (slave.quirks.behavioral === BehavioralQuirks.CONFIDENT) return `${He}'s confident, and believes that ${he} has something of value to offer, even as a slave.`;
  if (slave.quirks.behavioral === BehavioralQuirks.CUTTING) return `${He} often has a witty or cutting remark ready, but knows when to keep them to ${him}self.`;
  if (slave.quirks.behavioral === BehavioralQuirks.FITNESS) return `${He}'s a fitness fanatic, and almost gets off to a hard workout.`;
  if (slave.quirks.behavioral === BehavioralQuirks.FUNNY) return `${He}'s funny, often providing a little comic relief.`;
  if (slave.quirks.behavioral === BehavioralQuirks.INSECURE) return `${He}'s insecure, defining ${his} self worth by how much others want to fuck ${him}.`;
  if (slave.quirks.behavioral === BehavioralQuirks.SINFUL) return `${He}'s delightfully sinful, taking real pleasure in breaking cultural mores.`;

  return '';
}

function sexualQuirks(slave: Slave): string {
  const {
    He, he, his, him,
  } = slave.pronouns;

  if (slave.quirks.sexual === SexualQuirks.CARING) return `${He}'s caring, and enjoys bringing partners pleasure more than getting off ${him}self.`;
  if (slave.quirks.sexual === SexualQuirks.GAGFUCK_QUEEN) return `${He}'s a gagfuck queen: ${he}'s able to safely take a rough facefuck.`;
  if (slave.quirks.sexual === SexualQuirks.PAINAL_QUEEN) return `${He}'s a painal queen: ${he} knows exactly how much ${he} can take without getting hurt.`;
  if (slave.quirks.sexual === SexualQuirks.PERVERTED) return `${He}'s perverted, and enjoys breaking sexual boundaries.`;
  if (slave.quirks.sexual === SexualQuirks.ROMANTIC) return `${He}'s a romantic, and persists in innocent pleasure in the closeness of sex.`;
  if (slave.quirks.sexual === SexualQuirks.SIZE_QUEEN) return `${He}'s a size queen; preferring big cock is almost ${his} trademark.`;
  if (slave.quirks.sexual === SexualQuirks.STRUGGLEFUCK_QUEEN) return `${He}'s a strugglefuck queen: ${he} can gauge exactly how much resistance ${his} partners want.`;
  if (slave.quirks.sexual === SexualQuirks.TEASE) return `${He}'s a tease, and often displays a little flash of ${him}self followed by a blush.`;
  if (slave.quirks.sexual === SexualQuirks.UNFLINCHING) return `${He}'s unflinching, willing to do anything, even by the standards of sex slaves.`;

  return '';
}

export default function quirks(slave: Slave): string {
  return [behavioralQuirks(slave), sexualQuirks(slave)].join(' ');
}
