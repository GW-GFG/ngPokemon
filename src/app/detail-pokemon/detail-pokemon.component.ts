import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [ CommonModule, PokemonTypeColorPipe ],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})

export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined ;

  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {

    this.pokemonList = POKEMONS;
    
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if(pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    } 
    // else {
    //   this.pokemon = undefined;
    // }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemon']);
  }

}
