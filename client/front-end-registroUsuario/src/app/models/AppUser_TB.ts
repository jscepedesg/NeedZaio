export class AppUser_TB
{
  public id: number;
  public lastName: string;
  public name: string;
  public isMilitar: boolean;
  public TimeCreate: Date;
  public isTemporal: boolean;
  public username: string;
  public password: string;
  public email: string;
  public emailVerified: boolean;

  constructor(id, lastName, name, isMilitar, TimeCreate, isTemporal, username, password, email, emailVerified)
  {
    this.id=id;
    this.lastName=lastName;
    this.name=name;
    this.isMilitar=isMilitar;
    this.TimeCreate=TimeCreate;
    this.isTemporal=isTemporal;
    this.username=username;
    this.password=password;
    this.email=email;
    this.emailVerified=emailVerified;
  }
}
