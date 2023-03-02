import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  userDetailsForm: FormGroup;

  @Output() userData: EventEmitter<any> = new EventEmitter<any>();

  jobTitleList = [
    {
      id: 1,
      name: 'Service Designer',
    },
    {
      id: 2,
      name: 'UI Designer',
    },
  ];

  constructor() {
    this.userDetailsForm = new FormGroup({
      jobTitle: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      emailAddress: new FormControl(),
    });
  }

  onChangeJobTitle(value: string) {
    switch (value) {
      case "1":
        this.userDetailsForm.value.jobTitle = this.jobTitleList[0].name;
        break;
      case "2":
        this.userDetailsForm.value.jobTitle = this.jobTitleList[1].name;
        break;
      default:
        break;
    }
    this.userData.emit(this.userDetailsForm.value);
  }

  onChangeInput() {
    switch (this.userDetailsForm.value.jobTitle) {
      case "1":
        this.userDetailsForm.value.jobTitle = this.jobTitleList[0].name;
        break;
      case "2":
        this.userDetailsForm.value.jobTitle = this.jobTitleList[1].name;
        break;
      default:
        break;
    }
    this.userData.emit(this.userDetailsForm.value);
  }
}
