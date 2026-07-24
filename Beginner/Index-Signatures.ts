/**
 * Problem: Index Signatures
 * Difficulty: Beginner
 * Platform: TypeHero
 * Language: TypeScript
 * Date Solved: 2026-07-24
 */

type GroceryList = {
	[productlist:string]:number;
};

type InappropriateActionBySituation = {
	[situationdetails:string]: string[];
};

type Character = {
	id: number;
	name: string;
	status: string;
	species: string;
};

type CharactersById = {
	[id:number]: Character;
};
