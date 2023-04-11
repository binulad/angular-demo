import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFormComponent } from './home-form/home-form.component';
import { HomeListComponent } from './home-list/home-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: HomeListComponent
  },
  {
    path: 'home/form',
    component: HomeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
