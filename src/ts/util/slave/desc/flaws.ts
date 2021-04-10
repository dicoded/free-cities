import BehavioralFlaws from '@classes/actor/flaws/Behavioral';
import SexualFlaws from '@classes/actor/flaws/Sexual';

import Slave from '@classes/slave/Slave';

function getFlawAnorexic(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He} suffers from anorexia.`;
}

function getFlawArrogant(slave: Slave): string {
  const {
    He, he, his, him,
  } = slave.pronouns;

  if (slave.devotion < -20 && slave.trust >= -20) return `${He} is arrogant and clings to ${his} dignity.`;
  if (slave.devotion < -20) return `${He} is still arrogant at heart, but does ${his} best to hide it out of fear.`;
  if (slave.devotion <= 20) return `${He} is arrogant and seems to think slavery beneath ${him}.`;

  return `Despite being well broken, ${he} seems to retain hints of arrogance.`;
}

function getFlawBitchy(slave: Slave): string {
  const { He, he, his } = slave.pronouns;

  if (slave.devotion < -20 && slave.trust >= -20) return `${He} is bitchy and insults you every chance ${he} gets.`;
  if (slave.devotion < -20) return `${He} is still bitchy at times, but does ${his} best to keep quiet out of fear.`;
  if (slave.devotion <= 20) return `${He} is bitchy and constantly tries to get a word in edgewise.`;

  return `Since ${he} is well broken, ${he} tries to confine ${his} bitchy remarks to your other slaves.`;
}

function getFlawDevout(slave: Slave): string {
  const { He, his, himself } = slave.pronouns;

  const text: string[] = [];

  text.push(`${He} is devoutly religious,`);

  if (slave.devotion < -20 && slave.trust >= -20) text.push(`and uses ${his} faith as a wellspring of resistance.`);
  else if (slave.devotion < -20) text.push(`and uses ${his} faith as a place of refuge.`);
  else if (slave.devotion <= 20) text.push(`and uses ${his} faith as a private place within ${himself}.`);
  else text.push(`but has learned to keep ${his} faith private.`);

  return text.join(' ');
}

function getFlawGluttonous(slave: Slave): string {
  const { He, he } = slave.pronouns;

  return `${He} tends to overeat whenever ${he} can, reacting to the rigors of sexual slavery with overeating.`;
}

function getFlawHatesMen(slave: Slave): string {
  const { He } = slave.pronouns;

  // TODO: expand with fetishes
  return `${He} strongly dislikes being around men.`;
}

function getFlawHatesWomen(slave: Slave): string {
  const { He } = slave.pronouns;

  // TODO: expand with fetishes
  return `${He} strongly dislikes being around women.`;
}

function getFlawLiberated(slave: Slave): string {
  const { He, he, himself } = slave.pronouns;

  if (slave.devotion < -20 && slave.trust >= -20) return `${He} strongly believes that slavery is wrong, and resists it as best ${he} can.`;
  if (slave.devotion < -20) return `${He} strongly believes that slavery is wrong, but usually keeps quiet out of fear.`;
  if (slave.devotion <= 20) return `${He} strongly believes that slavery is wrong, and rarely misses a chance to complain about it.`;

  return `${He} strongly believes that slavery is wrong, but has learned to keep it to ${himself}.`;
}

function getFlawOdd(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He} behaves oddly, saying and doing random things.`;
}

export function behavioralFlaws(slave: Slave): string {
  if (slave.flaws.behavioral === BehavioralFlaws.ANOREXIC) return getFlawAnorexic(slave);
  if (slave.flaws.behavioral === BehavioralFlaws.ARROGANT) return getFlawArrogant(slave);
  if (slave.flaws.behavioral === BehavioralFlaws.BITCHY) return getFlawBitchy(slave);
  if (slave.flaws.behavioral === BehavioralFlaws.DEVOUT) return getFlawDevout(slave);
  if (slave.flaws.behavioral === BehavioralFlaws.GLUTTONOUS) return getFlawGluttonous(slave);
  if (slave.flaws.behavioral === BehavioralFlaws.HATES_MEN) return getFlawHatesMen(slave);
  if (slave.flaws.behavioral === BehavioralFlaws.HATES_WOMEN) return getFlawHatesWomen(slave);
  if (slave.flaws.behavioral === BehavioralFlaws.LIBERATED) return getFlawLiberated(slave);
  if (slave.flaws.behavioral === BehavioralFlaws.ODD) return getFlawOdd(slave);

  return '';
}

function getFlawAbusive(slave: Slave): string {
  const { He, he, him } = slave.pronouns;

  return `${He}'s sexually abusive: ${he} prefers taking sexual pleasure by force to having it offered to ${him}.`;
}

function getFlawAnalAddict(slave: Slave): string {
  const { He, he } = slave.pronouns;

  return `${He}'s an anal addict: ${he} has a deep psychological need to be fucked in the ass and becomes anxious if ${he} goes for a few hours without anal.`;
}

function getFlawApathetic(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He} is sexually apathetic, often slipping into inertness during sex.`;
}

function getFlawAttentionWhore(slave: Slave): string {
  const { He, him } = slave.pronouns;

  return `${He}'s an attention whore: shocking and titillating spectators is more important to ${him} than the actual pleasure of sex.`;
}

function getFlawBreastGrowth(slave: Slave): string {
  const { He, he, his } = slave.pronouns;

  return `${He} has a breast growth obsession: ${he}'s nearly incapable of believing that ${his} breasts are big enough.`;
}

function getFlawBreeder(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He}'s obsessed with being bred to the point of fetishizing pregnancy itself as much as any act that leads to it.`;
}

function getFlawCrude(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He} is sexually crude, and has little sense of what partners find disgusting during sex.`;
}

function getFlawCumAddict(slave: Slave): string {
  const { He, he } = slave.pronouns;

  return `${He}'s a cum addict: ${he} has a deep psychological addiction to semen.`;
}

function getFlawHatesAnal(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He} hates anal sex and tries to avoid it.`;
}

function getFlawHatesOral(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He} hates oral sex and tries to avoid it.`;
}

function getFlawHatesPenetration(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He} hates penetration and tries to avoid it.`;
}

function getFlawIdealistic(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He} is sexually idealistic, retaining a belief that sex should be based on love and consent.`;
}

function getFlawJudgemental(slave: Slave): string {
  const { He, his } = slave.pronouns;

  return `${He} is sexually judgemental, and often denigrates ${his} sexual partners' performance.`;
}

function getFlawMalicious(slave: Slave): string {
  const { He, he } = slave.pronouns;

  return `${He}'s sexually malicious: ${he} gets off on others' anguish.`;
}

function getFlawNeglectful(slave: Slave): string {
  const { He, him } = slave.pronouns;

  return `${He}'s sexually self neglectful, and often shows no interest in getting off ${him}self.`;
}

function getFlawRepressed(slave: Slave): string {
  const { He, his } = slave.pronouns;

  return `${He} is sexually repressed, retaining a fundamental distaste for sex from ${his} upbringing.`;
}

function getFlawSelfHating(slave: Slave): string {
  const { He, him } = slave.pronouns;

  return `${He}'s filled with self hatred, and is disturbingly willing to comply with things that might hurt ${him}.`;
}

function getFlawShamefast(slave: Slave): string {
  const { He } = slave.pronouns;

  return `${He} is shamefast, suffering crippling anxiety when naked.`;
}

export function sexualFlaws(slave: Slave): string {
  if (slave.flaws.sexual === SexualFlaws.ABUSIVE) return getFlawAbusive(slave);
  if (slave.flaws.sexual === SexualFlaws.ANAL_ADDICT) return getFlawAnalAddict(slave);
  if (slave.flaws.sexual === SexualFlaws.APATHETIC) return getFlawApathetic(slave);
  if (slave.flaws.sexual === SexualFlaws.ATTENTION_WHORE) return getFlawAttentionWhore(slave);
  if (slave.flaws.sexual === SexualFlaws.BREAST_GROWTH) return getFlawBreastGrowth(slave);
  if (slave.flaws.sexual === SexualFlaws.BREEDER) return getFlawBreeder(slave);
  if (slave.flaws.sexual === SexualFlaws.CRUDE) return getFlawCrude(slave);
  if (slave.flaws.sexual === SexualFlaws.CUM_ADDICT) return getFlawCumAddict(slave);
  if (slave.flaws.sexual === SexualFlaws.HATES_ANAL) return getFlawHatesAnal(slave);
  if (slave.flaws.sexual === SexualFlaws.HATES_ORAL) return getFlawHatesOral(slave);
  if (slave.flaws.sexual === SexualFlaws.HATES_PENETRATION) return getFlawHatesPenetration(slave);
  if (slave.flaws.sexual === SexualFlaws.IDEALISTIC) return getFlawIdealistic(slave);
  if (slave.flaws.sexual === SexualFlaws.JUDGEMENTAL) return getFlawJudgemental(slave);
  if (slave.flaws.sexual === SexualFlaws.MALICIOUS) return getFlawMalicious(slave);
  if (slave.flaws.sexual === SexualFlaws.NEGLECTFUL) return getFlawNeglectful(slave);
  if (slave.flaws.sexual === SexualFlaws.REPRESSED) return getFlawRepressed(slave);
  if (slave.flaws.sexual === SexualFlaws.SELF_HATING) return getFlawSelfHating(slave);
  if (slave.flaws.sexual === SexualFlaws.SHAMEFAST) return getFlawShamefast(slave);

  return '';
}

export default function flaws(slave: Slave) {
  return [behavioralFlaws(slave), sexualFlaws(slave)].join(' ');
}
