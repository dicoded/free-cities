import Slave from '@classes/slave/Slave';

import height from './height';
import weight from './weight';

export default function size(slave: Slave): string {
  const { He } = slave.pronouns;

  const text: string[] = [];

  text.push(
    `${He} is`,
    height(slave),
    'and',
    weight(slave),
  );

  return text.join(' ');
}
