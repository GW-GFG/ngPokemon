import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'page-404',
  standalone: true,
  imports: [ RouterModule ],
  template: `
    <div class="center">
    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h2>404 Oups, apparemment cette page n'existe pas...</h2>
      <a routerLink='/pokemon' class="waves-effect waves-pink btn-flat">Clique ici pour retourner à la liste des pokémon</a>
    </div>
  `
})

export class PageNotFoundComponent {

}
