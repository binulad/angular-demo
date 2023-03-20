export class User {
  public jobTitle: string;
  public firstName: string;
  public lastName: string;
  public emailAddress: string;
  public phoneNumber?: number | null;
  public address?: string;
  public pinCode?: number;
  constructor(
    jobTitle: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: number | null,
    address?: string,
    pinCode?: number,
  ) {
    this.jobTitle = jobTitle;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.pinCode = pinCode;
  }
}
