import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Constant } from '../constant/user-data';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() formGroupName!: string;
  @Input() userDetailsForm!: FormGroup;

  @Output() userFullName: EventEmitter<string> = new EventEmitter();

  private _userDetailsForm!: any;
  public fullName!: any;

  public editAdditionalInfo: boolean = false;
  public jobTitleList = Constant.JOB_TITLES;

  // @Input() get userDetailsForm(): FormGroup {
  //   return this._userDetailsForm;
  // }

  // public set userDetailsForm(formObj) {
  //   this._userDetailsForm = formObj;
  //   this.getFullName(this._userDetailsForm.value);
  // }

  // getFullName(obj: any) {
  //   this.fullName = `${obj.firstName} ${obj.lastName}`;
  //   console.log("Full Name", this.fullName);
  //   this.userFullName.emit(this.fullName);
  // }

  constructor(private rootFormGroup: FormGroupDirective) {
  }

  ngOnInit(): void {
    this.userDetailsForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  clickAdditionalInfo() {
    this.editAdditionalInfo = !this.editAdditionalInfo;
  }

  onChange(updatedValue: string) {
    console.log("updatedValue", updatedValue);
  }
}
