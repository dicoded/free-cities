import Slave from '../../../classes/slave/Slave';

export default function skills(slave: Slave): string {
  const { He, girl } = slave.pronouns;

  const text: string[] = [];

  if (slave.isFuckdoll) {
    text.push(`${He} is`);

    if (slave.fuckdoll <= 10) {
      text.push('poorly adapted to life as a living sex toy.');
    } else if (slave.fuckdoll <= 30) {
      text.push('moderately adapted to life as a living sex toy.');
    } else if (slave.fuckdoll <= 60) {
      text.push('well adapted to life as a living sex toy.');
    } else if (slave.fuckdoll < 100) {
      text.push('almost perfectly adapted to life as a living sex toy.');
    } else {
      text.push('perfectly adapted to life as a living sex toy.');
    }
    text.push('Entertainment and prostitution skills are irrelevant for a Fuckdoll.');
  } else {
    if (slave.skills.whoring <= 10) {
      if (slave.skills.entertainment <= 30) {
        text.push(`${He} is reasonably entertaining.`);
      } else if (slave.skills.entertainment <= 60) {
        text.push(`${He} is a skilled entertainer.`);
      } else if (slave.skills.entertainment < 100) {
        text.push(`${He} is an expert entertainer.`);
      } else {
        text.push(`${He} is a master of entertainment.`);
      }
    } else if (slave.skills.entertainment <= 30) {
      text.push(`${He} is reasonably entertaining and`);
    } else if (slave.skills.entertainment <= 60) {
      text.push(`${He} is a skilled entertainer and`);
    } else if (slave.skills.entertainment < 100) {
      text.push(`${He} is an expert entertainer and`);
    } else {
      text.push(`${He} is a master of entertainment and`);
    }
    if (slave.skills.whoring <= 30) {
      if (slave.skills.entertainment <= 10) {
        text.push(`${He}`);
      }

      text.push('has basic experience as a prostitute.');
    } else if (slave.skills.whoring <= 60) {
      if (slave.skills.entertainment <= 10) {
        text.push(`${He} is`);
      }

      text.push('a skilled streetwalker.');
    } else if (slave.skills.whoring < 100) {
      if (slave.skills.entertainment <= 10) {
        text.push(`${He} is`);
      }

      text.push(`an expert working ${girl}.`);
    } else {
      if (slave.skills.entertainment <= 10) {
        text.push(`${He} is`);
      }

      text.push('a masterful whore.');
    }
  }

  return text.join(' ');
}
