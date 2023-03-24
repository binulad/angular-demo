import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Constant } from './constant/user-data';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Output() firstName: EventEmitter<string> = new EventEmitter();
  @Output() lastName: EventEmitter<string> = new EventEmitter();

  sectionTitle: string = 'Your Details';

  public formData!: FormGroup;
  public getUserDetails!: any;
  public getUserBio!: any;
  public jobTitle!: any;
  public userFullName!: string;

  constructor(private fb: FormBuilder) {
    console.log("Constructor call");
  }

  ngOnInit(): void {
    this.formData = this.fb.group({
      userDetails: this.fb.group({
        jobTitle: [null, Validators.required],
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        emailAddress: [null, Validators.required],
        address: [null, Validators.required],
        pinCode: [null, Validators.required],
        phoneNumber: [null, Validators.required],
      }),
      userBio: this.fb.group({
        userDesc: [null, Validators.required],
      }),
      userExperiences: this.fb.group({
        experiences: this.fb.array([
          this.fb.group({
            jobTitle: [null, Validators.required],
            company: [null, Validators.required],
            location: [null, Validators.required],
            jobDesc: [null, Validators.required],
          }),
        ]),
      }),
    });

    const getUserDetails = this.formData.get("userDetails");

    getUserDetails?.get("firstName")?.valueChanges.subscribe((data: any) => {
      console.log("Emit");
      
      this.firstName.emit(data);
    });
    getUserDetails?.get("lastName")?.valueChanges.subscribe((data: any) => {
      this.lastName.emit(data);
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

    const jobTitleList = Constant.JOB_TITLES;
    const getJobTitle = jobTitleList.find(
      (element) => element.id == this.getUserDetails.jobTitle
    );
    this.jobTitle = getJobTitle?.name;

    const documentDefinition = {
      content: [
        {
          // layout: 'lightHorizontalLines', // optional
          layout: {
            defaultBorder: false,
          }, // optional
          table: {
            headerRows: 1,
            widths: ['*'],
            body: [
              this.getUserName(userName),
              this.getUserDetail(this.getUserDetails),
              this.getUserBioData(this.getUserBio),
              this.getUserExperience(this.formData.value.userExperiences),
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

  // This method is called Print the User Name in the Resume
  getUserName(userName: string) {
    return [
      {
        text: [
          userName,
          {
            text: ` (${this.jobTitle})`,
            style: { bold: false, color: '#5F6A6A', italics: true },
          },
        ],
        style: {
          fontSize: 18,
          bold: true,
          color: '#1B4F72',
        },
        border: [false, false, false, true],
        borderColor: ['', '', '', '#333333'],
        margin: [0, 0, 0, 10],
      },
    ];
  }

  // This method is called to print the User Details in resume
  getUserDetail(userData: any) {
    return [
      // User Details
      {
        columns: [
          {
            width: '50%',
            text: [
              'Email: ',
              {
                text: `${userData.emailAddress}`,
                style: { bold: false },
              },
              '\nPhone No: ',
              {
                text: `${userData.phoneNumber}`,
                style: { bold: false },
              },
            ],
            style: { bold: true },
            margin: [0, 10],
          },
          {
            width: '50%',
            text: [
              'Address: ',
              {
                text: `${userData.address} - ${userData.pinCode}`,
                style: { bold: false },
              },
            ],
            style: { bold: true },
            margin: [0, 10],
          },
        ],
        columnGap: 10,
      },
    ];
  }

  // This method is called to print the User Short Bio in resume
  getUserBioData(data: any) {
    // Trim the Short Bio
    const userDesc = data.userDesc ? data.userDesc.trim() : null;
    if (userDesc == null || userDesc == '') {
      return [{ text: '', border: [false, false, false, false] }];
    } else {
      return [
        {
          text: [
            {
              text: 'Short Bio: \n',
              style: { bold: true, fontSize: 14, color: '#333333' },
            },
            {
              text: `\n${userDesc}`,
            },
          ],
          border: [false, true, false, false],
          borderColor: ['', '#dddddd', '', ''],
          margin: [0, 10],
        },
      ];
    }
  }

  // This method is called to print the User Experience in resume
  getUserExperience(data: any) {
    const userExpArr = data.experiences;
    if (userExpArr.length) {
      return [
        {
          text: this.getUserExpData(userExpArr),
          border: [false, true, false, false],
          borderColor: ['', '#dddddd', '', ''],
          margin: [0, 10],
        },
      ];
    } else {
      return [{ text: '', border: [false, false, false, false] }];
    }
  }
  // This method is called to print the User Experience in resume
  getUserExpData(expArr: any) {
    let text: any = [
      {
        text: 'User Experience: \n',
        style: { bold: true, fontSize: 14, color: '#333333' },
      },
    ];
    expArr.forEach((element: any) => {
      text.push({
        text: `\n${element.company}`,
        style: { bold: true, color: '#333333' },
      }, {
        text: ` - ${element.jobTitle}\n`,
        style: { bold: true },
      }, {
        text: `${element.location}\n`,
        style: { italics: true },
      }, {
        text: `${element.jobDesc}\n`,
      }
      );
    });
    return text;
  }
}
