import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Constant } from '../constant/user-data';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.scss']
})
export class UserBioComponent implements OnInit {
  @Input() formGroupName!: string;
  @Input() formDetails!: FormGroup;

  public headerShortDesc: string = Constant.SHORT_BIO_DESC;

  constructor(private rootFormGroup: FormGroupDirective) {}
  
  ngOnInit(): void {
    this.formDetails = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}
