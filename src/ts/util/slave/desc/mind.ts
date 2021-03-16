/* eslint-disable max-len */
import { get } from 'svelte/store';

import eyes from './eyes';

import BehavioralQuirks from '../../../classes/actor/quirks/Behavioral';
import SexualQuirks from '../../../classes/actor/quirks/Sexual';

import BehavioralFlaws from '../../../classes/actor/flaws/Behavioral';
import SexualFlaws from '../../../classes/actor/flaws/Sexual';
import { FetishType } from '../../../classes/actor/Fetish';

import Actor from '../../../classes/actor/Actor';
import Slave from '../../../classes/slave/Slave';

import player from '../../../../stores/player.store';
import { Sex } from '../../../classes/body/nonphysical/Nonphysical';

const PC = get(player);

function behavioralQuirks(slave: Slave): string {
  const {
    He, he, his, him,
  } = slave.pronouns;

  if (slave.quirks.behavioral) {
    switch (slave.quirks.behavioral) {
      case BehavioralQuirks.ADORES_MEN:
        return `${He} adores men, and loves spending time with them.`;
      case BehavioralQuirks.ADORES_WOMEN:
        return `${He} adores women, and loves spending time with them.`;
      case BehavioralQuirks.ADVOCATE:
        return `${He}'s an advocate for slavery, and can articulate what it's done for ${him}.`;
      case BehavioralQuirks.CONFIDENT:
        return `${He}'s confident, and believes that ${he} has something of value to offer, even as a slave.`;
      case BehavioralQuirks.CUTTING:
        return `${He} often has a witty or cutting remark ready, but knows when to keep them to ${him}self.`;
      case BehavioralQuirks.FITNESS:
        return `${He}'s a fitness fanatic, and almost gets off to a hard workout.`;
      case BehavioralQuirks.FUNNY:
        return `${He}'s funny, often providing a little comic relief.`;
      case BehavioralQuirks.INSECURE:
        return `${He}'s insecure, defining ${his} self worth by how much others want to fuck ${him}.`;
      case BehavioralQuirks.SINFUL:
        // TODO: Chattel Religionism
        return `${He}'s delightfully sinful, taking real pleasure in breaking cultural mores.`;
      default:
        throw new TypeError(`Unknown .behavioralQuirk '${slave.quirks.behavioral}' found in behavioralQuirks().`);
    }
  }

  return '';
}

function sexualQuirks(slave: Slave): string {
  const {
    He, he, his, him,
  } = slave.pronouns;

  if (slave.quirks.sexual) {
    switch (slave.quirks.sexual) {
      case SexualQuirks.CARING:
        return `${He}'s caring, and enjoys bringing partners pleasure more than getting off ${him}self.`;
      case SexualQuirks.GAGFUCK_QUEEN:
        return `${He}'s a gagfuck queen: ${he}'s able to safely take a rough facefuck.`;
      case SexualQuirks.PAINAL_QUEEN:
        return `${He}'s a painal queen: ${he} knows exactly how much ${he} can take without getting hurt.`;
      case SexualQuirks.PERVERTED:
        return `${He}'s perverted, and enjoys breaking sexual boundaries.`;
      case SexualQuirks.ROMANTIC:
        return `${He}'s a romantic, and persists in innocent pleasure in the closeness of sex.`;
      case SexualQuirks.SIZE_QUEEN:
        return `${He}'s a size queen; preferring big cock is almost ${his} trademark.`;
      case SexualQuirks.STRUGGLEFUCK_QUEEN:
        return `${He}'s a strugglefuck queen: ${he} can gauge exactly how much resistance ${his} partners want.`;
      case SexualQuirks.TEASE:
        return `${He}'s a tease, and often displays a little flash of ${him}self followed by a blush.`;
      case SexualQuirks.UNFLINCHING:
        return `${He}'s unflinching, willing to do anything, even by the standards of sex slaves.`;
      default:
        throw new TypeError(`Unknown .sexualQuirk '${slave.quirks.sexual}' found in sexualQuirks().`);
    }
  }

  return '';
}

function fetish(slave: Slave): string {
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

function attraction(slave: Slave): string {
  const { He, he, his } = slave.pronouns;

  const text: string[] = [];

  if (slave.attraction.known) {
    if (slave.drive > 95) text.push(`${He}'s a nymphomaniac.`);
    else if (slave.drive > 80) text.push(`${He}'s a sex addict.`);
    else if (slave.drive > 60) text.push(`${He} has a powerful appetite for sex.`);
    else if (slave.drive > 40) text.push(`${He} has a healthy sex drive.`);
    else if (slave.drive > 20) text.push(`${He} has a weak sex drive.`);
    else text.push(`${He}'s frigid, with little interest in sex.`);

    if (slave.attraction.male > 95) {
      if (slave.attraction.female > 95) {
        text.push(`${He}'s omnisexual, and is passionately attracted to nearly everyone.`);
      } else {
        text.push(`${He}'s passionate about men,`);

        if (slave.attraction.female > 85) text.push('but also thinks most women are hot, too.');
        else if (slave.attraction.female > 65) text.push('but also likes women, too.');
        else if (slave.attraction.female > 35) text.push('but is indifferent to women.');
        else if (slave.attraction.female > 15) text.push('but is unenthusiastic about women.');
        else if (slave.attraction.female > 5) text.push('but is turned off by women.');
        else text.push('but is disgusted by the idea of intimacy with a woman.');
      }
    } else if (slave.attraction.male > 85) {
      text.push(`${He} is aroused by most men,`);

      if (slave.attraction.female > 95) text.push('but is most passionate about women.');
      else if (slave.attraction.female > 85) text.push('and thinks most women are hot, too.');
      else if (slave.attraction.female > 65) text.push('but is indifferent to women.');
      else if (slave.attraction.female > 35) text.push('but is unenthusiastic about women.');
      else if (slave.attraction.female > 15) text.push('and likes women too.');
      else if (slave.attraction.female > 5) text.push('but is turned off by women.');
      else text.push('but is disgusted by the idea of intimacy with a woman.');
    } else if (slave.attraction.male > 65) {
      text.push(`${He} finds men attractive,`);

      if (slave.attraction.female > 95) text.push('but is really passionate about women.');
      else if (slave.attraction.female > 85) text.push('but likes women even more.');
      else if (slave.attraction.female > 65) text.push('and likes women too.');
      else if (slave.attraction.female > 35) text.push('but is indifferent to women.');
      else if (slave.attraction.female > 15) text.push('but is unenthusiastic about women.');
      else if (slave.attraction.female > 5) text.push('but is turned off by women.');
      else text.push('but is disgusted by the idea of intimacy with a woman.');
    } else if (slave.attraction.male > 35) {
      text.push(`${He}'s indifferent to sex with men,`);

      if (slave.attraction.female > 95) text.push('but is passionate about women.');
      else if (slave.attraction.female > 85) text.push('strongly preferring women.');
      else if (slave.attraction.female > 65) text.push('but is attracted to women.');
      else if (slave.attraction.female > 35) text.push('and feels the same about women, too.');
      else if (slave.attraction.female > 15) text.push('but is actually unenthusiastic about women.');
      else if (slave.attraction.female > 5) text.push('but is turned off by women.');
      else text.push('but is disgusted by the idea of intimacy with a woman.');
    } else if (slave.attraction.male > 15) {
      text.push(`${He} considers men's bodies a turnoff,`);

      if (slave.attraction.female > 95) text.push('but is passionate about women.');
      else if (slave.attraction.female > 85) text.push('strongly preferring women.');
      else if (slave.attraction.female > 65) text.push('but is attracted to women.');
      else if (slave.attraction.female > 35) text.push(`and ${he} is indifferent to women.`);
      else if (slave.attraction.female > 15) text.push('and is unenthusiastic about women.');
      else text.push('and is actually disgusted by women\'s.');
    } else {
      text.push(`${He} finds men sexually disgusting,`);

      if (slave.attraction.female > 95) text.push('but is passionate about women.');
      else if (slave.attraction.female > 85) text.push('strongly preferring women.');
      else if (slave.attraction.female > 65) text.push('but is attracted to women.');
      else if (slave.attraction.female > 35) text.push(`and ${he} is indifferent to women.`);
      else if (slave.attraction.female > 15) text.push('and is unenthusiastic about women.');
      else if (slave.attraction.female > 5) text.push('and has almost as much trouble with women.');
      else text.push(`${He} finds both men's and women's intimate areas quite repulsive, an unfortunate state of affairs!`);
    }

    return text.join(' ');
  }

  return `You do not understand ${his} sexuality very well.`;
}

export default function mind(actor: Actor): string {
  const { His, he, his } = actor.pronouns;

  const text: string[] = [];

  text.push(eyes(actor));

  if (actor instanceof Slave && actor.isMindbroken) {
    text.push(`However, ${his} mind is fundamentally broken; everything ${he} experiences will quickly be forgotten.`);
  }

  if (actor instanceof Slave) {
    text.push(
      behavioralQuirks(actor),
      sexualQuirks(actor),
      fetish(actor),
      attraction(actor),
    );
  }

  if (actor.canSee && actor.attraction.known) {
    if (actor.attraction.female > 85 && PC.chest.size >= 400) text.push(`${His} attraction to women is obvious: ${he} can't seem to stop staring at your breasts.`);
    else if (actor.attraction.male > 85 && PC.penis !== null) text.push(`${His} attraction to men is obvious: ${he} can't seem to stop glancing down at your package.`);
    else if (actor.attraction.male > 85 && PC.sex === Sex.MALE && PC.chest.size < 300) text.push(`${His} attraction to men is obvious: ${he} can't seem to stop checking out your broad chest.`);
  }

  return text.join(' ');
}
