import Slave from '../../../classes/slave/Slave';

import height from './height';
import weight from './weight';

export default function size(slave: Slave): string {
  const text: string[] = [];

  text.push(
    height(slave),
    weight(slave),
  );

  return text.join(' ');
}
