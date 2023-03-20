import { Component, Input } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-user-resume',
  templateUrl: './user-resume.component.html',
  styleUrls: ['./user-resume.component.scss']
})
export class UserResumeComponent {
  @Input() userData: any = {};

  constructor() {}

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
                    this.userData.firstName + ' ' + this.userData.lastName,
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
                      text: [
                        'Address: ',
                        {
                          text: `${this.userData.address} - ${this.userData.pinCode}`,
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
