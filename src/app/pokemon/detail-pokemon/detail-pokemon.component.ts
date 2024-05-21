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
  styles: ``
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

      this.pokemonService.getPokemonList(1, 16).subscribe(
        (data: Pokemon[]) => {
          this.pokemonList = data;
        }
      );
    
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if(pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      console.log(this.pokemonService.getPokemonTypeList());
    } 
    // else {
    //   this.pokemon = undefined;
    // }
  }


  goToPokemonList() {
    this.router.navigate(['/pokemon']);
  }

  goToEditPokemon(pokemonId: string) {
    this.router.navigate(['/pokemon/edit/', pokemonId]);
  }

}
