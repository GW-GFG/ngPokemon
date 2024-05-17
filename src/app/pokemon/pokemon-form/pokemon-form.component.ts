import { Component, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from "../../pokemon-type-color.pipe";

@Component({
    selector: 'app-pokemon-form',
    standalone: true,
    templateUrl: './pokemon-form.component.html',
    imports: [NgIf, NgFor, FormsModule, PokemonTypeColorPipe],
    styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {
  @Input() pokemon: Pokemon;
  types: string[];


  constructor(private pokemonService: PokemonService, private router: Router) {  }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.pokemon.types.push(type);
    } else {
      const typeIndex = this.pokemon.types.indexOf(type);
      typeIndex > -1 && this.pokemon.types.splice(typeIndex, 1);
    }
  }

  isTypeValid(type: string): boolean {
    if(this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    } else if(this.pokemon.types.length == 3 && !this.hasType(type)) {
      return false;
    } else {
      return true;
    }
  }

  onSubmit() {
    console.log('Submited');
    this.router.navigate(['/pokemon', this.pokemon.id])
  }

}
