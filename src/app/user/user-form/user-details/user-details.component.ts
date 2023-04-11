import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Constant } from '../../constant/user-data';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() formGroupName!: string;
  @Input() userDetailsForm!: FormGroup;

  @Input() get userDetailsData() {
    return this._userDetailsData;
  }
  set userDetailsData(value: any) {
    this.userDetailsForm.setValue(value);
    this.getJobTitleValue(this.userDetailsForm.value.jobTitle);
  }

  @Output() userFullName: EventEmitter<string> = new EventEmitter();

  public fullName!: any;
  public firstName!: string;
  public lastName!: string;
  public _userDetailsData!: any;

  public editAdditionalInfo: boolean = false;
  public jobTitleList = Constant.JOB_TITLES;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.userDetailsForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  clickAdditionalInfo() {
    this.editAdditionalInfo = !this.editAdditionalInfo;
  }

  getJobTitleValue(jobTitleValue: any) {
    const jobTitleList = Constant.JOB_TITLES;
    const getJobTitle = jobTitleList.find(
      (element) => element.id == jobTitleValue
    );
    this.userDetailsForm.value.jobTitle = getJobTitle?.name;
  }

  onChange(event: any, inputName: string) {
    if(inputName == 'firstName') {
      this.firstName = event.target.value;
    } else if(inputName == 'lastName') {
      this.lastName = event.target.value;
    }

    if(this.firstName || this.lastName) {
      this.fullName = `${this.firstName} ${this.lastName}`
    } else {
      this.fullName = "User Name"
    }
    this.userFullName.emit(this.fullName);
  }
}
