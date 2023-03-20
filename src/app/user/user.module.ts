import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserResumeComponent } from './user-resume/user-resume.component';



@NgModule({
  declarations: [
    UserDetailsComponent,
    UserBioComponent,
    UserResumeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [UserDetailsComponent, UserBioComponent, UserResumeComponent],
})
export class UserModule { }
