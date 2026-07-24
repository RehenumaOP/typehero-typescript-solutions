/**
 * Problem: Index Signatures
 * Difficulty: Beginner
 * Platform: TypeHero
 * Language: TypeScript
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
