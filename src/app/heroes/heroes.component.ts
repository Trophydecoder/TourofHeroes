import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import {NgIf, NgFor, UpperCasePipe,} from '@angular/common';

@Component({
//standalone: true,
selector: 'app-heroes',
templateUrl: './heroes.component.html',
styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
heroes = HEROES;
selectedHero?: Hero;

onSelect(hero: Hero):void {
this.selectedHero = hero;
}

}

