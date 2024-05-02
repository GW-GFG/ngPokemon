import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})

export class AppComponent implements OnInit {
  // title = 'ng-pokemon-app';
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonSelectedId: string) {
    //Here + is use to convert .value into a number (Same as Number())
    // const index: number = +(event.target as HTMLInputElement).value;
    let pokemonId: number = +pokemonSelectedId;
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == pokemonId);
    if(pokemon) {
      console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;;
    } else {
      console.log(`Oups, le pokémon n'est pas reconnu !`);
      this.pokemonSelected = pokemon;
    }


    
  
  }


}

