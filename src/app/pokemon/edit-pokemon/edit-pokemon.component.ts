import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { NgIf } from '@angular/common';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
    selector: 'app-edit-pokemon',
    standalone: true,
    template: `  
    <h1 class="center" >Éditer {{ pokemon?.name }}</h1>
      <div *ngIf="pokemon" class="center">
        <img [src]="pokemon.picture">
        <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
      </div>
  `,
    imports: [NgIf, PokemonFormComponent]
})
export class EditPokemonComponent implements OnInit{

  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }
}
