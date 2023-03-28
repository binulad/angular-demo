import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public userName!: string;  

  constructor() {}

  ngOnInit(): void {
  }
  
  getUserName(name: string) {
    this.userName = name;
  }

}
