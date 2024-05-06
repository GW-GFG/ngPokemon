import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: 'pokemon', loadComponent: () => import('./list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent) },
    { path: 'pokemon/:id', loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent)  },
    { path: '', redirectTo: 'pokemon', pathMatch: 'full'},
    { path: '**', loadComponent: () => import('./page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent) }
];

//loadComponent: () => import('./login/login.component').then(module => module.LoginComponent) <======== Here module are ts module (!= ng module)