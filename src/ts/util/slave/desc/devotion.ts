import Slave from '@classes/slave/Slave';

/** Returns a string description of the slave's devotion. */
export default function devotion(slave: Slave): string {
  if (slave.devotion < -95) return 'hate-filled';
  if (slave.devotion < -50) return 'hateful';
  if (slave.devotion < -20) return 'reluctant';
  if (slave.devotion <= 20) return 'careful';
  if (slave.devotion <= 50) return 'accepting';
  if (slave.devotion <= 95) return 'devoted';
  return 'worshipful';
}

/**
 * Returns the text color for a slave's devotion.
 *
 * Used as a wrapper for `devotion()`.
 *
 * @example
 * <span class={devotionColor(slave.devotion)}>{devotion(slave)}</span>
 */
export function devotionColor(val: number): string {
  if (val < -95) return 'text-purple-800 dark:text-purple-700';
  if (val < -50) return 'text-purple-600 dark:text-purple-500';
  if (val < -20) return 'text-purple-400 dark:text-purple-300';
  if (val <= 20) return 'text-gray-600 dark:text-gray-400';
  if (val <= 50) return 'text-pink-400 dark:text-pink-300';
  if (val <= 95) return 'text-pink-600 dark:text-pink-500';

  return 'text-pink-800 dark:text-pink-700';
}
