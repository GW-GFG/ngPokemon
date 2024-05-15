import { Injectable } from '@angular/core';


import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
//Instance unique

@Injectable({
  providedIn: 'root'
})


export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    const typeSet: Set<string> = new Set<string>();
    POKEMONS.forEach(pokemon => {
      const types: string[] = pokemon.types;

      types.forEach(type => {
        typeSet.add(type);
      });
    });
      
    console.log('My array fromSet return : ', Array.from(typeSet))
    return Array.from(typeSet);
  }

}
