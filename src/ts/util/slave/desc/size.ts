import Slave from '../../../classes/slave/Slave';

import weight from './weight';

// TODO:
// function height(slave: Slave): string {
// }

export default function size(slave: Slave): string {
  const text: string[] = [];

  text.push(weight(slave));

  return text.join(' ');
}
