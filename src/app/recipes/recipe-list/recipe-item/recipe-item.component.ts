import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeSelected:EventEmitter<void> = new EventEmitter<void>();
  @Input() recipe = new Recipe('','','');
  //ToDO @Input() recipe:Recipe; // Find out why does this not work, why do I have to inizialize it?
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipeSelected.emit();
  }

}
