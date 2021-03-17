import { FetishType } from '../../../classes/actor/Fetish';
import BehavioralFlaws from '../../../classes/actor/flaws/Behavioral';
import SexualFlaws from '../../../classes/actor/flaws/Sexual';

import Slave from '../../../classes/slave/Slave';

export default function fetish(slave: Slave): string {
  const {
    His, He, he, his, him, hers,
  } = slave.pronouns;

  if (slave.fetish?.known) {
    switch (slave.fetish.type) {
      case FetishType.BOOBS:
        if (slave.fetish?.strength > 95) return `${He} prefers mammary intercourse to any other kind of sex, and readily climaxes to nipple stimulation.`;
        if (slave.fetish?.strength > 60) return `${He} enjoys breast play, and is rapidly aroused by nipple stimulation.`;
        return `${He} really likes boobs, ${hers} and others.`;
      case FetishType.BUTTSLUT:
        if (slave.flaws.sexual === SexualFlaws.HATES_ANAL) return `${His} hatred is just pretense to cover ${his} shame about how much ${he} really loves getting fucked in the butt.`;
        if (slave.fetish?.strength > 95) return `${He}'s a buttslut, happy to have anyone put anything up ${his} ass.`;
        if (slave.fetish?.strength > 60) return `${He} prefers anal.`;
        return `${He} has an anal fixation.`;
      case FetishType.CUMSLUT:
        if (slave.flaws.sexual === SexualFlaws.HATES_ORAL) return `${He}'s torn between ${his} love of semen and ${his} dislike of having cocks in ${his} mouth.`;
        if (slave.fetish?.strength > 95) return `${He}'s a cumslut, and loves giving blowjobs and receiving facials.`;
        if (slave.fetish?.strength > 60) return `${He} prefers giving oral, and enjoys sucking dick and receiving facials.`;
        return `${He} has an oral fixation, and likes giving blowjobs and receiving facials.`;
      case FetishType.DOM:
        if (slave.flaws.sexual === SexualFlaws.APATHETIC) return `${He} is at war with ${him}self, since ${his} habitual apathy during sex barely masks a desire to dominate.`;
        if (slave.fetish?.strength > 95) return `${He} is a complete dom; with other slaves this is expressed as a strong preference to top, and with ${his} betters ${he}'s an almost competitive lover.`;
        if (slave.fetish?.strength > 60) return `${He} likes to take an active, powerful role in sex; with other slaves this is expressed as dominance, and with ${his} betters ${he}'s a very energetic lover.`;
        return `${He} prefers to take a dominant sexual role.`;
      case FetishType.HUMILIATION:
        if (slave.flaws.behavioral === BehavioralFlaws.BITCHY) return `${His} bitchiness is really just an expression of ${his} deep need to be humiliated ${him}self.`;
        if (slave.flaws.sexual === SexualFlaws.SHAMEFAST) return `${His} shame is genuine, and it is with real self-loathing that ${he} gets off on humiliation.`;
        if (slave.fetish?.strength > 95) return `${He}'s a slut for humiliation, and gets off on having others see ${his} enslavement.`;
        if (slave.fetish?.strength > 60) return `${He} enjoys humiliating sex.`;
        return `${He} likes embarrassing sex.`;
      case FetishType.MASOCHIST:
        if (slave.fetish?.strength > 95) return `${He} is a pain slut.`;
        if (slave.fetish?.strength > 60) return `${He} gets off on pain, showing strong masochistic tendencies.`;
        return `${He} doesn't mind pain, and shows some masochistic tendencies.`;
      case FetishType.PREGNANCY:
        if (slave.fetish?.strength > 95) return `${He} has a pregnancy fetish, and finds anything related to reproduction sexy.`;
        if (slave.fetish?.strength > 60) return `${He} has an impregnation fantasy, and enjoys bareback sex.`;
        return `${He} has a recurring impregnation fantasy.`;
      case FetishType.SADIST:
        if (slave.fetish?.strength > 95) return `${He} is an aggressive sadist; ${he}'s constantly plotting to control, abuse, and hurt other slaves.`;
        if (slave.fetish?.strength > 60) return `${He} has sadistic tendencies; ${he} enjoys watching other slaves in pain, but truly loves causing pain ${him}self.`;
        return `${He} gets off on the suffering of others; ${he} enjoys watching other slaves in pain.`;
      case FetishType.SUBMISSIVE:
        if (slave.flaws.sexual === SexualFlaws.APATHETIC) return `This sexual apathy plays into ${his} preference for submission.`;
        if (slave.flaws.behavioral === BehavioralFlaws.BITCHY) return `${His} arrogance is really just a thin shell to protect ${his} true need to submit.`;
        if (slave.fetish?.strength > 95) return `${He}'s an extreme submissive, and relishes the strictures of slavery.`;
        if (slave.fetish?.strength > 60) return `${He}'s a confirmed submissive, and enjoys the strictures of slavery.`;
        return `${He} has submissive tendencies, and likes the strictures of slavery.`;
      default:
        return `${His} sexual tastes are quite normal.`;
    }
  }

  return `${His} fetishes, if any, are not known to you.`;
}
