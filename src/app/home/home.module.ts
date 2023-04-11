import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeFormComponent } from './home-form/home-form.component';


@NgModule({
  declarations: [
    HomeListComponent,
    HomeFormComponent
  ],
  imports: [
    CommonModule,
    // HomeRoutingModule,
  ],
  exports: [HomeListComponent, HomeFormComponent]
})
export class HomeModule { }
