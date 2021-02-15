import type Slave from 'classes/slave/Slave';

/** Returns a string description of the slave's trust. */
export default function trust(slave: Slave): string {
  if (slave.trust < -95) return 'abjectly terrified';
  if (slave.trust < -50) return 'terrified';
  if (slave.trust < -20) return 'frightened';
  if (slave.trust <= 20) return 'fearful';
  if (slave.trust <= 50) return 'careful';
  if (slave.trust <= 95) return 'trusting';
  return 'profoundly trusting';
}

/**
 * Returns the text color for a slave's trust.
 *
 * Used as a wrapper for `trust()`.
 *
 * @example
 * <span class={trustColor(slave.trust)}>{trust(slave)}</span>
 */
export function trustColor(val: number): string {
  if (val < -95) return 'text-yellow-700';
  if (val < -50) return 'text-yellow-500';
  if (val < -20) return 'text-yellow-300';
  if (val <= 20) return 'text-gray-400';
  if (val <= 50) return 'text-green-300';
  if (val <= 95) return 'text-green-500';
  return 'text-green-700';
}
