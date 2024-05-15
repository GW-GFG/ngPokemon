import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'pokemon', pathMatch: 'full'},
    { path: '', loadChildren: () => import('./pokemon/pokemon.routes').then(module => module.pokemonRoutes)},
    { path: '**', title: 'Page inexistante', loadComponent: () => import('./page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent) }
];

//loadComponent: () => import('./login/login.component').then(module => module.LoginComponent) <======== Here module are ts module (!= ng module)