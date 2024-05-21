import { Injectable } from '@angular/core';


import { POKEMONS } from './mock-pokemon-list';
import { Pokemon, PokemonInterface } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
//Instance unique

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private pokeApiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private pokemonList: Pokemon[] = [];

  constructor(private http: HttpClient ) {}

  getPokemonList(offset: number, limit: number): Observable<Pokemon[]> {
    // return POKEMONS;
    const pokemonFetch: Observable<any>[] = [];

    for (let i: number = offset; i < limit; i++) {
      pokemonFetch.push(this.http.get<any>(`${this.pokeApiUrl}${i}`))
    }

    //First map is associated to RxJS on the pipe and the seconde is the JavaScript map
    return forkJoin(pokemonFetch).pipe(
      map((pokemonArray) => {
        return pokemonArray.map((tempPokemonData, index) => {
          const pokemonId: number = offset + index;
          const pokemon: PokemonInterface = {
            id: pokemonId,
            hp: tempPokemonData.stats[0].base_stat,
            cp: tempPokemonData.stats[1].base_stat,
            name: tempPokemonData.name[0].toUpperCase() + tempPokemonData.name.slice(1),
            picture: tempPokemonData.sprites.front_default,
            types: tempPokemonData.types.map((typeData: any) => typeData.type.name[0].toUpperCase() + typeData.type.name.slice(1)),
            created: new Date()
          };
          console.log('My interface contains : ' + pokemon)
          return new Pokemon(pokemon);
        })
      })
      
    )
    //   const pokemon: Pokemon = {
    //     id: number = i,
    //     hp: number = tempPokemonData.stats[0].base_stat,
    //     cp: number = tempPokemonData.stats[1].base_stat,
    //     name: string = tempPokemonData.name,
    //     picture: string = tempPokemonData.sprite.front_default,
    //     types: Array<string> = tempPokemonData.map((typeData: string) => typeData.type.name),
    //     created: Date = new Date
    // }

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
