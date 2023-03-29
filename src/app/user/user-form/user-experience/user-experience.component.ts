import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Constant } from '../../constant/user-data';

@Component({
  selector: 'app-user-experience',
  templateUrl: './user-experience.component.html',
  styleUrls: ['./user-experience.component.scss'],
})
export class UserExperienceComponent implements OnInit {
  @Input() formGroupName!: string;
  @Input() formDetails!: FormGroup;

  get experiences(): FormArray {
    return this.formDetails.get('experiences') as FormArray;
  }

  public sectionTitle: string = 'Your Experience';
  public headerShortDesc: string = Constant.EXPERIENCE_SHORT_DESC;
  public isAccordionCollapse: boolean = false;
  public activeIndex: number = 0;

  constructor(
    private rootFormGroup: FormGroupDirective,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formDetails = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
  }

  onClickAccordion(event: any, index: number) {
    event.target.classList.toggle('collapsed');
    event.target.parentNode.nextElementSibling.classList.toggle('collapse');
    this.activeIndex = index;
  }

  newExperience(): FormGroup {
    return this.fb.group({
      jobTitle: [null, Validators.required],
      company: [null, Validators.required],
      location: [null, Validators.required],
      jobDesc: [null, Validators.required],
    });
  }

  addExperience() {
    this.experiences.push(this.newExperience());
  }

  removeExperience(index: number) {
    this.experiences.removeAt(index);
  }
}
