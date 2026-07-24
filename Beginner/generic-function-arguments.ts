/**
 * Problem: Generic Function Arguments
 * Difficulty: Beginner
 * Platform: TypeHero
 * Language: TypeScript
 */

const identity = <T>(value: T): T => value;

const mapArray = <T, U>(
  arr: T[],
  fn: (item: T) => U
): U[] => {
  return arr.map(fn);
};