import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  sectionTitle: string = 'Your Details';

  public formData!: FormGroup;
  public getUserDetails!: any;
  public getUserBio!: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formData = this.fb.group({
      userDetails: this.fb.group({
        jobTitle: null,
        firstName: null,
        lastName: null,
        emailAddress: null,
        address: null,
        pinCode: null,
        phoneNumber: null,
      }),
      userBio: this.fb.group({
        firstName: null,
      }),
    });
  }
  
  downloadPdf() {
    this.getUserDetails = this.formData.value.userDetails;
    this.getUserBio = this.formData.value.userBio;

    let userName = '';
    if (this.getUserDetails.firstName && this.getUserDetails.lastName) {
      userName =
        this.getUserDetails.firstName + ' ' + this.getUserDetails.lastName;
    } else {
      userName = '-';
    }

    const documentDefinition = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            headerRows: 1,
            widths: ['*'],
            body: [
              [
                // User Name
                {
                  text: [
                    userName,
                    {
                      text: ` (${this.getUserDetails.jobTitle})`,
                      style: { bold: false, color: '#5F6A6A', italics: true },
                    },
                  ],
                  style: {
                    fontSize: 18,
                    bold: true,
                    color: '#1B4F72',
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
                          text: `${this.getUserDetails.emailAddress}`,
                          style: { bold: false },
                        },
                        '\nPhone No: ',
                        {
                          text: `${this.getUserDetails.phoneNumber}`,
                          style: { bold: false },
                        },
                      ],
                      style: { bold: true },
                      margin: [0, 20],
                    },
                    {
                      width: '50%',
                      text: [
                        'Address: ',
                        {
                          text: `${this.getUserDetails.address} - ${this.getUserDetails.pinCode}`,
                          style: { bold: false },
                        },
                      ],
                      style: { bold: true },
                      margin: [0, 20],
                    },
                  ],
                  columnGap: 10,
                },
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
}
