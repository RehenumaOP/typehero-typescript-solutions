/**
 * Problem: Generic Type Arguments
 * Difficulty: Beginner
 * Platform: TypeHero
 * Language: TypeScript
 * Date Solved: 2026-07-24
 */

type GroceryItem<Name,Price,Instock> = {
	name: Name;
	price: Price;
	inStock: Instock;
}
type CapreseSalad = 
     GroceryItem<
		      "Caprese Salad",
					14.99,
					true
		 >;
type GroceryStore<Name, City> = {
	name: Name;
	city: City;
};
