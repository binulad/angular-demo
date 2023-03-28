import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  private firstName!: string;
  private lastName!: string;

   

  constructor() {}

  ngOnInit(): void {
  }
  
  getFirstName(value: any) {
    this.firstName = value;
  }
  getLastName(value: any) {
    this.lastName = value;
  }

}
