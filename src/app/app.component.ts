import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  getFirstName(value: any) {
    console.log("Full Name", value);
  }
  getLastName(value: any) {
    console.log("Full Name", value);
  }
}
