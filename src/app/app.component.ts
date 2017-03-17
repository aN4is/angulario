import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Viper', ability: 'Viper Strike'},
  { id: 12, name: 'Rexxar', ability: 'Roar'},
  { id: 13, name: 'Omniknight', ability: 'Purification'},
  { id: 14, name: 'Abaddon', ability: 'Death Coil'},
  { id: 15, name: 'Jakiro', ability: 'Ice Path'},
  { id: 16, name: 'Dazzle', ability: 'Shallow Grave'},
  { id: 17, name: 'Legion Commander', ability: 'Duel'},
  { id: 18, name: 'Bounty Hunter', ability: 'Track'},
  { id: 19, name: 'Wraith King', ability: 'Reincarnation'},
  { id: 20, name: 'Enigma', ability: 'Black Hole'},
  { id: 21, name: 'Magnus', ability: 'Reverse Polarity'}
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
        <!-- each hero goes here -->
        <span class="badge">{{hero.id}}</span>
        {{hero.name}}
      </li>
    <ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
  styles: [`
    .selected {
        background-color: #CFD8DC !important;
        color: white;
    }
    .heroes {
      margin: 0 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 25em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.35em 0.6em 0 0.7em;
      background-color: #607D8B;
      line-height: 0.9em;
      position: relative;
      left: -1px;
      top: -5px;
      height: 2em;
      margin-right: .8em;
      border-radius: 4px 4px 4px 4px;
    }
  `],
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
