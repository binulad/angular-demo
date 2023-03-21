import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.scss']
})
export class UserBioComponent implements OnInit {
  @Input() formGroupName!: string;
  @Input() formDetails!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
  }
  
  ngOnInit(): void {
    this.formDetails = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}
