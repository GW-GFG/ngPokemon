import { Injectable } from '@angular/core';


// import { POKEMONS } from './mock-pokemon-list';
import { Pokemon, PokemonInterface } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, forkJoin, map, of, tap } from 'rxjs';
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
    if (this.pokemonList.length >= 15) return of(this.pokemonList);
    
    const pokemonFetch: Observable<any>[] = [];

    for (let i: number = offset; i < limit; i++) {
      pokemonFetch.push(this.http.get<any>(`${this.pokeApiUrl}${i}`));
    }

    //First map is associated to RxJS on the pipe and the seconde is the JavaScript map
    return forkJoin(pokemonFetch).pipe(
      map((pokemonArray) => {
        this.pokemonList = pokemonArray.map((tempPokemonData, index) => {
          const pokemonId: number = offset + index;
          return new Pokemon(this.formatPokemonData(pokemonId, tempPokemonData));
        });
        return this.pokemonList;
      }),
      tap(response => this.logPkmn(response)),
      catchError(error => this.handleError(error, []))
    )
  }
  
  updatePokemon(pokemon: Pokemon): void {
    const index = this.pokemonList.findIndex(pokemonData => pokemonData.id === pokemon.id);
    if (index !== -1) {
      this.pokemonList[index] = pokemon;
    }
  }

  //Create pokemon
  private formatPokemonData(pokemonId: number, pokemonData: any): Pokemon {
    const pokemon: PokemonInterface = {
      id: pokemonId,
      hp: pokemonData.stats[0].base_stat,
      cp: pokemonData.stats[1].base_stat,
      name: pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1),
      picture: pokemonData.sprites.front_default,
      types: pokemonData.types.map((typeData: any) => typeData.type.name[0].toUpperCase() + typeData.type.name.slice(1)),
      created: new Date()
      };
    return new Pokemon(pokemon);
  }


  // getPokemonById(pokemonId: number): Pokemon | undefined {
  //   return this.pokemonList.find(pokemon => pokemon.id == pokemonId);
  // }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    const pokemonFounded = this.pokemonList.find(pokemon => pokemon.id === pokemonId)
    if (pokemonFounded) {
    return of(this.pokemonList.find(pokemon => pokemon.id == pokemonId));
    } else {
      return this.http.get<Pokemon>(`${this.pokeApiUrl}/${pokemonId}`).pipe(
        map(tempPokemonData => {
          const pokemon = this.formatPokemonData(pokemonId, tempPokemonData);
          this.pokemonList.push(pokemon);
          return pokemon;
        }),
        catchError(error => this.handleError(error, undefined))
      )
    }
  }

  private logPkmn(response: Pokemon[] | Pokemon | undefined) {
    console.log('logPkmn : ', JSON.stringify(response))
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList(): string[] {
    const typeSet: Set<string> = new Set<string>();
    this.pokemonList.forEach(pokemon => {
      const types: string[] = pokemon.types;

      types.forEach(type => {
        typeSet.add(type);
      });
    });
      
    console.log('My array fromSet return : ', JSON.stringify(Array.from(typeSet)))
    return Array.from(typeSet);
  }

}
