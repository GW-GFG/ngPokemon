import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: 'pokemon', title: 'PokeListe', loadComponent: () => import('./pokemon/list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent) },
    { path: 'pokemon/:id', title: 'Details', loadComponent: () => import('./pokemon/detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent)  },
    { path: '', redirectTo: 'pokemon', pathMatch: 'full'},
    { path: '**', title: 'Page inexistante', loadComponent: () => import('./page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent) }
];

//loadComponent: () => import('./login/login.component').then(module => module.LoginComponent) <======== Here module are ts module (!= ng module)