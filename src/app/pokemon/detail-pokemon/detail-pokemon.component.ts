import { Component, OnInit } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [ DatePipe, NgFor, NgIf, PokemonTypeColorPipe ],
  templateUrl: './detail-pokemon.component.html',
})

export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined ;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private title: Title, 
    private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
  console.log(this.route.snapshot.paramMap.get('id'))
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if(pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => {
      this.pokemon = pokemon
      console.log(this.pokemonService.getPokemonTypeList())
      })
    } 
  }


  goToPokemonList() {
    this.router.navigate(['/pokemon']);
  }

  goToEditPokemon(pokemonId: string) {
    this.router.navigate(['/pokemon/edit/', pokemonId]);
  }

}
