import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  sectionTitle: string = "Your Details";

  @Output() userData: EventEmitter<any> = new EventEmitter<any>();

  userDetails: User = {
    jobTitle: '',
    firstName: '',
    lastName: '',
    emailAddress: ''
  };

  getUserData(userData: User) {
    console.log("User Data", userData);
    this.userDetails = userData;

    this.userData.emit(userData);
  }
}
