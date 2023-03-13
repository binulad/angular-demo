import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from './user/user.model';

// Required for Download PDF
declare var require: any;

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
const htmlToPdfMake = require('html-to-pdfmake');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('pdfWrapper') public pdfWrapper!: ElementRef;

  @Input() get userData(): User {
    return this._userData;
  }
  set userData(value: User) {
    this._userData = value;
    if(this._userData.firstName && this._userData.lastName) {
      this.userName = this._userData.firstName+" "+this._userData.lastName;
    } else {
      this.userName = "Your Name";
    }
  }

  public firstName!: string;
  public userName!: string;
  public jobTitle!: string;
  public address!: string;
  public pinCode!: number;
  public _userData!: User;

  title = 'angular-demo';
  // userData!: User;

  constructor() {
    this.userData = {
      jobTitle: 'Job Title',
      firstName: 'First Name',
      lastName: 'Last Name',
      emailAddress: 'abc@example.com',
      address: '123, Your street,',
      pinCode: 123456,
    };
  }

  getUserData(userData: User) {
    this.userData = userData;
    // this.firstName = this.userData.firstName
    //   ? this.userData.firstName
    //   : 'Untitled';
    // this.userName =
    //   this.userData.firstName && this.userData.lastName
    //     ? this.userData.firstName + ' ' + this.userData.lastName
    //     : 'Your Name';
    // this.jobTitle = this.userData.jobTitle
    //   ? this.userData.jobTitle
    //   : 'Job Title';
    // this.address = this.userData.address
    //   ? this.userData.address
    //   : '123, Your street';
    // this.pinCode = this.userData.pinCode ? this.userData.pinCode : 123456;
  }

  downloadPdf() {
    console.log('Download pdf');

    const pagePdfWrapper = this.pdfWrapper.nativeElement;
    var html = htmlToPdfMake(pagePdfWrapper.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();
  }

  ngOnInit(): void {}
}
