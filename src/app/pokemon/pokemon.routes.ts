import { Routes } from '@angular/router';


export const pokemonRoutes: Routes = [
    { path: 'pokemon', title: 'PokeListe', loadComponent: () => import('./list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent) },
    { path: 'pokemon/:id', title: 'Details', loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent)  }
];

//loadComponent: () => import('./login/login.component').then(module => module.LoginComponent) <======== Here module are ts module (!= ng module)