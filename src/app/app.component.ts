import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from './user/user.model';

// Required for Download PDF
declare var require: any;

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @Input() get userData(): User {
    return this._userData;
  }

  set userData(value: User) {
    this._userData = value;
    if (this._userData.firstName && this._userData.lastName) {
      this.userName = this._userData.firstName + ' ' + this._userData.lastName;
    } else {
      this.userName = 'Your Name';
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
      firstName: 'first name',
      lastName: 'Last Name',
      emailAddress: 'abc@example.com',
      address: '123, Your street,',
      pinCode: 123456,
      phoneNumber: 4445556868,
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
    const documentDefinition = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            headerRows: 1,
            widths: [ '*' ],
            body: [
              [
                // User Name
                {
                  text: [
                    this.userName,
                    {
                      text: ` (${this.userData.jobTitle})`,
                      style: { bold: false, color: '#5F6A6A', italics: true },
                    },
                  ],
                  style: {
                    fontSize: 18,
                    bold: true,
                    color: '#1B4F72'
                  },
                  margin: [0, 0, 0, 10],
                },
              ],
              [
                // User Details
                {
                  columns: [
                    {
                      width: '50%',
                      text: [
                        'Email: ',
                        {
                          text: `${this.userData.emailAddress}`,
                          style: { bold: false },
                        },
                        '\nPhone No: ',
                        {
                          text: `${this.userData.phoneNumber}`,
                          style: { bold: false },
                        },
                      ],
                      style: { bold: true },
                      margin: [0, 20]
                    },
                    {
                      width: '50%',
                      text: `${this.userData.address} - ${this.userData.pinCode}
                    ${this.userData.state}, ${this.userData.country}`,
                      margin: [0, 20],
                    },
                  ],
                  columnGap: 10,
                },
              ],
              [
                // User Short Bio
                {margin: [0, 20]}
              ],
            ],
          },
        },
      ],
      styles: {
        dividerStyle: {
          background: '#dddddd',
        },
      },
      defaultStyle: {
        font: 'Nunito',
        color: '#666666',
      },
    };
    pdfMake
      .createPdf(documentDefinition, undefined, {
        Nunito: {
          normal: 'http://localhost:4200/assets/fonts/Nunito-Regular.ttf',
          bold: 'http://localhost:4200/assets/fonts/Nunito-Bold.ttf',
          italics: 'http://localhost:4200/assets/fonts/Nunito-Italic.ttf',
          bolditalics:
            'http://localhost:4200/assets/fonts/Nunito-BoldItalic.ttf',
        },
      })
      .open();
  }

  ngOnInit(): void {}
}
