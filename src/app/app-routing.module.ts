import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CvComponentComponent} from './ex-cv/cv-component/cv-component.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'cv',
    component: CvComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
