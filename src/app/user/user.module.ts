import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-form/user-details/user-details.component';
import { UserBioComponent } from './user-form/user-bio/user-bio.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserExperienceComponent } from './user-form/user-experience/user-experience.component';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [
    UserDetailsComponent,
    UserBioComponent,
    UserExperienceComponent,
    UserListComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [UserService],
  exports: [UserDetailsComponent, UserBioComponent, UserExperienceComponent, UserListComponent],
})
export class UserModule { }
