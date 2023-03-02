export class User {
  public jobTitle: string;
  public firstName: string;
  public lastName: string;
  public emailAddress: string;
  constructor(
    jobTitle: string,
    firstName: string,
    lastName: string,
    emailAddress: string
  ) {
    this.jobTitle = jobTitle;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
  }
}
