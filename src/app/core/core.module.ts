import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SectionHeaderComponent]
})
export class CoreModule { }
