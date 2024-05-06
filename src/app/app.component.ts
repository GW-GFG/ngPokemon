import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})

export class AppComponent  { }

  // pokemonSelected: Pokemon | undefined;

  // ngOnInit(): void {
  //   console.table(this.pokemonList);
  // }

  // selectPokemon(pokemonSelectedId: string) {
  //   //Here + is use to convert .value into a number (Same as Number())
  //   // const index: number = +(event.target as HTMLInputElement).value;
  //   let pokemonId: number = +pokemonSelectedId;
  //   const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == pokemonId);
  //   if(pokemon) {
  //     console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  //     this.pokemonSelected = pokemon;
  //     console.log(JSON.stringify(pokemon))
  //   } else {
  //     console.log(`Oups, le pokémon n'est pas reconnu !`);
  //     this.pokemonSelected = pokemon;
  //   }


