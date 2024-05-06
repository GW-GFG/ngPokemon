import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgIf, NgFor, DatePipe} from '@angular/common';

import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [RouterOutlet, DatePipe, NgFor, NgIf, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: './list-pokemon.component.html',
})

export class ListPokemonComponent {
  
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id ]);
  }

}