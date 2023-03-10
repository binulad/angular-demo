import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() msg!: string;
  @ViewChild('inputBox') public inputBox!: ElementRef;

  constructor() {
    console.log("Load Home component");
  }
  ngAfterViewChecked(): void {
    console.log("Call ngAfterViewChecked()");
  }
  ngAfterViewInit(): void {
    console.log("Call ngAfterViewInit()");
  }
  ngAfterContentChecked(): void {
    console.log("Call ngAfterContentChecked()");
  }
  ngAfterContentInit(): void {
    console.log("Call ngAfterContentInit()");
  }

  ngOnInit(): void {
    console.log("call ngOnInit()");
  }

  ngDoCheck(): void {
    console.log("Call ngDoCheck()");
  }
}
