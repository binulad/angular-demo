import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserExperienceComponent } from './user-experience/user-experience.component';
import { SharedModule } from '../shared/shared.module';



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
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [UserDetailsComponent, UserBioComponent, UserExperienceComponent],
})
export class UserModule { }
