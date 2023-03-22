import { Component, Input, OnInit } from '@angular/core';
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

  public editAdditionalInfo: boolean = false;
  public jobTitleList = Constant.JOB_TITLES;

  constructor(private rootFormGroup: FormGroupDirective) {
  }

  ngOnInit(): void {
    this.userDetailsForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

    // console.log("jobTitleList", this.jobTitleList);
    
  }

  clickAdditionalInfo() {
    this.editAdditionalInfo = !this.editAdditionalInfo;
  }
}
