/**
 * Problem: Generic Type Arguments
 * Difficulty: Beginner
 * Platform: TypeHero
 * Language: TypeScript
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
