import Slave from '../../../classes/slave/Slave';

function fuckdoll(slave: Slave): string {
  const { She } = slave.pronouns;

  const text: string[] = [];

  text.push(`${She} is`);

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

  return text.join(' ');
}

function entertainment(slave: Slave): string {
  const { She } = slave.pronouns;

  if (slave.skills.whoring <= 10) {
    if (slave.skills.entertainment <= 10) return `${She} is not entertaining whatsoever.`;
    if (slave.skills.entertainment <= 30) return `${She} is reasonably entertaining.`;
    if (slave.skills.entertainment <= 60) return `${She} is a skilled entertainer.`;
    if (slave.skills.entertainment < 100) return `${She} is an expert entertainer.`;

    return `${She} is a master of entertainment.`;
  }

  if (slave.skills.entertainment <= 10) return `${She} is not entertaining whatsoever, and`;
  if (slave.skills.entertainment <= 30) return `${She} is reasonably entertaining and`;
  if (slave.skills.entertainment <= 60) return `${She} is a skilled entertainer and`;
  if (slave.skills.entertainment < 100) return `${She} is an expert entertainer and`;

  return `${She} is a master of entertainment and`;
}

function whoring(slave: Slave): string {
  const { She, girl } = slave.pronouns;

  const notEntertaining = slave.skills.entertainment <= 10;

  if (slave.skills.whoring > 10) {
    if (slave.skills.whoring <= 30) return `${notEntertaining ? `${She}` : ''}has basic experience as a prostitute.`;
    if (slave.skills.whoring <= 60) return `${notEntertaining ? `${She} is` : ''}a skilled streetwalker.`;
    if (slave.skills.whoring < 100) return `${notEntertaining ? `${She} is` : ''}an expert working ${girl}.`;

    return `${notEntertaining ? `${She} is` : ''}a masterful whore.`;
  }

  return '';
}

export default function skills(slave: Slave): string {
  const text: string[] = [];

  if (slave.isFuckdoll) return fuckdoll(slave);

  text.push(entertainment(slave), whoring(slave));

  return text.join(' ');
}
