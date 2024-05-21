import { Pipe, PipeTransform } from '@angular/core';

/*To display the color relative to the type of the pokémon*/

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'Feu':
      case 'Fire':
        color = 'red lighten-1';
        break;
      case 'Eau':
      case 'Water':
        color = 'blue lighten-1';
        break;
      case 'Plante':
      case 'Grass':
        color = 'green lighten-1';
        break;
      case 'Insecte':
      case 'Bug':
        color = 'brown lighten-1';
        break;
      case 'Normal':
        color = 'grey lighten-3';
        break;
      case 'Vol':
      case 'Flying':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'Fée':
      case 'Fairy':
        color = 'pink lighten-4';
        break;
      case 'Psy':
      case 'Psychic':
        color = 'deep-purple darken-2';
        break;
      case 'Electrik':
      case 'Electric':
        color = 'lime accent-1';
        break;
      case 'Combat':
      case 'Fighting':
        color = 'deep-orange';
        break;
      case 'Rock':
        color='#d5d5d4';
        break;
      case 'Dragon':
        color='#97b3e6';
        break;
      default:
        color = 'grey';
      break;
    }
//chip is a materialize circle
  return `chip ${color}`;

  }
}
