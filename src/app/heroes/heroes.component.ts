import { Component } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RemoveSpacesPipe } from '../remove-spaces.pipe';
import {HEROES} from '../mock-heroes';
import { Hero } from '../hero';
import { InputFormatDirective } from '../input-format.directive';

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [UpperCasePipe, 
    FormsModule,
    NgIf, 
    NgFor, 
    RemoveSpacesPipe, 
    InputFormatDirective
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
