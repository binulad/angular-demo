import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Constant } from '../constant/user-data';

@Component({
  selector: 'app-user-experience',
  templateUrl: './user-experience.component.html',
  styleUrls: ['./user-experience.component.scss']
})
export class UserExperienceComponent {
  @Input() formGroupName!: string;
  @Input() formDetails!: FormGroup;

  get experiences(): FormArray {
    return this.formDetails.get('experiences') as FormArray;
  }
  
  public sectionTitle: string = "Your Experience";
  public headerShortDesc: string = Constant.EXPERIENCE_SHORT_DESC;
  public isAccordionCollapse: boolean = false;

  constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.formDetails = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  onClickAccordion() {
    this.isAccordionCollapse = !this.isAccordionCollapse;
  }

  newExperience(): FormGroup {
    return this.fb.group({
      jobTitle: null,
      company: null,
      location: null,
      jobDesc: null
    })
  }

  addExperience() {
    this.experiences.push(this.newExperience());
  }

  removeExperience(index: number) {
    this.experiences.removeAt(index);
  }
}
