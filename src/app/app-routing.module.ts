import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule ) //lazyLoad del modulo countries
  },
  {
    path: '**',
    redirectTo: 'countries' //si navega a cualquier otro lado se redirige al home.
  },
];

@NgModule({
  imports:[
    RouterModule.forRoot( routes ),
  ],
  exports:[
    RouterModule,
  ]

})
export class AppRoutingModule { }
