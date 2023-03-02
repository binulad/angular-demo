import { Component } from '@angular/core';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-demo';
  userName: string = 'Untitled';
  userData: User = {
    jobTitle: '',
    firstName: '',
    lastName: '',
    emailAddress: ''
  };

  getUserData(userData: User) {
    this.userData = userData;
    this.userName = userData.firstName;
  }
}
