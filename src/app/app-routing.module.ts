
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './home/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {

    path: 'signIn',

    loadChildren: () => import('./home/sign-in/sign-in-routing.module').then( m => m.SignInPageRoutingModule)

  },
  {

    path: 'homepage',

    loadChildren: () => import('./homepage/homepage-routing.module').then( m => m.HomepagePageRoutingModule)

  },

  {

    path: 'favourites',

    loadChildren: () => import('./homepage/favourites/favourites-routing.module').then( m => m.FavouritesPageRoutingModule)

  },

  {

    path: 'history',

    loadChildren: () => import('./homepage/history/history-routing.module').then( m => m.HistoryPageRoutingModule)

  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
