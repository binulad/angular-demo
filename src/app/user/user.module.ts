import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserExperienceComponent } from './user-experience/user-experience.component';



@NgModule({
  declarations: [
    UserDetailsComponent,
    UserBioComponent,
    UserExperienceComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [UserDetailsComponent, UserBioComponent, UserExperienceComponent],
})
export class UserModule { }
