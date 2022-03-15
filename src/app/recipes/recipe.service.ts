import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROoFCvaFJ9YLX3X-FYI8_C82FLQ_HuSoAPEA&usqp=CAU'),
    new Recipe('A Test Recipe 2', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROoFCvaFJ9YLX3X-FYI8_C82FLQ_HuSoAPEA&usqp=CAU')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
