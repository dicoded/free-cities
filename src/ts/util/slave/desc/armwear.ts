import Slave from '../../../classes/slave/Slave';

// TODO:

export default function armwear(slave: Slave): string {
  const text: string[] = [];

  if (slave.accessories.clothing?.arms) text.push('');

  return text.join(' ');
}
