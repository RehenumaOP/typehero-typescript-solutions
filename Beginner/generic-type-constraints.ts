/**
 * Problem: Generic Type Constraints
 * Difficulty: Beginner
 * Platform: TypeHero
 * Language: TypeScript
 * Date Solved: 2026-07-24
 */
type AllowString<T extends string> = T;
type AllowNumber<T extends number> = T;

type Logger = (a: number) => void;
type CreateLogger< T extends Logger> = {
	log: T;
	exit: () => void;
};