export class User {
  public jobTitle: string;
  public firstName: string;
  public lastName: string;
  public emailAddress: string;
  public phoneNumber?: number;
  public address?: string;
  public pinCode?: number;
  public state?: string;
  public country?: string;
  constructor(
    jobTitle: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: number,
    address?: string,
    pinCode?: number,
    state?: string,
    country?: string
  ) {
    this.jobTitle = jobTitle;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.pinCode = pinCode;
    this.state = state;
    this.country = country;
  }
}
