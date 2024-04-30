import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Ma mini liste de Pokémon avec Angular !</h1>

    <router-outlet />
  `,
  styles: [],
})

export class AppComponent implements OnInit {
  // title = 'ng-pokemon-app';
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonList)
    this.selectPokemon(this.pokemonList[5])
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  
  }


}

