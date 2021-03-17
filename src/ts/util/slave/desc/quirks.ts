import BehavioralQuirks from '../../../classes/actor/quirks/Behavioral';
import SexualQuirks from '../../../classes/actor/quirks/Sexual';

import Slave from '../../../classes/slave/Slave';

function getQuirkAdoresMen(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He} adores men, and loves spending time with them.`;
}

function getQuirkAdoresWomen(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He} adores women, and loves spending time with them.`;
}

function getQuirkAdvocate(slave: Slave): string {
  const { He, him } = slave.pronouns;

  return `${He}'s an advocate for slavery, and can articulate what it's done for ${him}.`;
}

function getQuirkConfident(slave: Slave): string {
  const { He, he } = slave.pronouns;

  return `${He}'s confident, and believes that ${he} has something of value to offer, even as a slave.`;
}

function getQuirkCutting(slave: Slave): string {
  const { He, himself } = slave.pronouns;

  return `${He} often has a witty or cutting remark ready, but knows when to keep them to ${himself}.`;
}

function getQuirkFitness(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He}'s a fitness fanatic, and almost gets off to a hard workout.`;
}

function getQuirkFunny(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He}'s funny, often providing a little comic relief.`;
}

function getQuirkInsecure(slave: Slave): string {
  const { He, his, him } = slave.pronouns;

  return `${He}'s insecure, defining ${his} self worth by how much others want to fuck ${him}.`;
}

function getQuirkSinful(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He}'s delightfully sinful, taking real pleasure in breaking cultural mores.`;
}

function behavioralQuirks(slave: Slave): string {
  if (slave.quirks.behavioral === BehavioralQuirks.ADORES_MEN) return getQuirkAdoresMen(slave);
  if (slave.quirks.behavioral === BehavioralQuirks.ADORES_WOMEN) return getQuirkAdoresWomen(slave);
  if (slave.quirks.behavioral === BehavioralQuirks.ADVOCATE) return getQuirkAdvocate(slave);
  if (slave.quirks.behavioral === BehavioralQuirks.CONFIDENT) return getQuirkConfident(slave);
  if (slave.quirks.behavioral === BehavioralQuirks.CUTTING) return getQuirkCutting(slave);
  if (slave.quirks.behavioral === BehavioralQuirks.FITNESS) return getQuirkFitness(slave);
  if (slave.quirks.behavioral === BehavioralQuirks.FUNNY) return getQuirkFunny(slave);
  if (slave.quirks.behavioral === BehavioralQuirks.INSECURE) return getQuirkInsecure(slave);
  if (slave.quirks.behavioral === BehavioralQuirks.SINFUL) return getQuirkSinful(slave);

  return '';
}

function getQuirkCaring(slave: Slave): string {
  const { He, himself } = slave.pronouns;

  return `${He}'s caring, and enjoys bringing partners pleasure more than getting off ${himself}.`;
}

function getQuirkGagfuckQueen(slave: Slave): string {
  const { He, he } = slave.pronouns;

  return `${He}'s a gagfuck queen: ${he}'s able to safely take a rough facefuck.`;
}

function getQuirkPainalQueens(slave: Slave): string {
  const { He, he } = slave.pronouns;

  return `${He}'s a painal queen: ${he} knows exactly how much ${he} can take without getting hurt.`;
}

function getQuirkPerverted(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He}'s perverted, and enjoys breaking sexual boundaries.`;
}

function getQuirkRomantic(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He}'s a romantic, and persists in innocent pleasure in the closeness of sex.`;
}

function getQuirkSizeQueens(slave: Slave): string {
  const { He, his } = slave.pronouns;

  return `${He}'s a size queen; preferring big cock is almost ${his} trademark.`;
}

function getQuirkStrugglefuckQueens(slave: Slave): string {
  const { He, he, his } = slave.pronouns;

  return `${He}'s a strugglefuck queen: ${he} can gauge exactly how much resistance ${his} partners want.`;
}

function getQuirkTease(slave: Slave): string {
  const { He, himself } = slave.pronouns;

  return `${He}'s a tease, and often displays a little flash of ${himself} followed by a blush.`;
}

function getQuirkUnflinching(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He}'s unflinching, willing to do anything, even by the standards of sex slaves.`;
}

function sexualQuirks(slave: Slave): string {
  if (slave.quirks.sexual === SexualQuirks.CARING) return getQuirkCaring(slave);
  if (slave.quirks.sexual === SexualQuirks.GAGFUCK_QUEEN) return getQuirkGagfuckQueen(slave);
  if (slave.quirks.sexual === SexualQuirks.PAINAL_QUEEN) return getQuirkPainalQueens(slave);
  if (slave.quirks.sexual === SexualQuirks.PERVERTED) return getQuirkPerverted(slave);
  if (slave.quirks.sexual === SexualQuirks.ROMANTIC) return getQuirkRomantic(slave);
  if (slave.quirks.sexual === SexualQuirks.SIZE_QUEEN) return getQuirkSizeQueens(slave);
  if (slave.quirks.sexual === SexualQuirks.STRUGGLEFUCK_QUEEN) return getQuirkStrugglefuckQueens(slave);
  if (slave.quirks.sexual === SexualQuirks.TEASE) return getQuirkTease(slave);
  if (slave.quirks.sexual === SexualQuirks.UNFLINCHING) return getQuirkUnflinching(slave);

  return '';
}

export default function quirks(slave: Slave): string {
  return [behavioralQuirks(slave), sexualQuirks(slave)].join(' ');
}
