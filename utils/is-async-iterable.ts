/**
 * Returns `true` if the provided object implements the AsyncIterator protocol via
 * implementing a `Symbol.asyncIterator` method.
 *
 * @example
 * isAsyncIterable({}); // → false
 *
 * @example
 * async function* asyncGeneratorFunc() {
 *   // do nothing
 * }
 * isAsyncIterable(asyncGeneratorFunc()); // → true
 */
export function isAsyncIterable<R = unknown>(
  value: any,
): value is AsyncIterable<R> {
  return typeof Object(value)[Symbol.asyncIterator] === 'function';
}
