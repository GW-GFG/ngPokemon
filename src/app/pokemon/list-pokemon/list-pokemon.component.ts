import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgIf, NgFor, DatePipe} from '@angular/common';

import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../../pokemon-type-color.pipe';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [RouterOutlet, DatePipe, NgFor, NgIf, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: './list-pokemon.component.html',
})

export class ListPokemonComponent implements OnInit {
  
  pokemonList: Pokemon[] = [];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}


  ngOnInit(): void {
    this.pokemonService.getPokemonList(1, 16).subscribe(
      (data: Pokemon[]) => {
        this.pokemonList = data;
      }
    );
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id ]);
  }

}