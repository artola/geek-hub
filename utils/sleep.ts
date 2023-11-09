/**
 * Delays the execution for a specified duration.
 *
 * @example
 * await sleep(1000); // → sleeps for 1 second
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
