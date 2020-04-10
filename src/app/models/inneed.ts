export class Inneed {
  firstName: string;
  lastName: string;
  numberPersons: string;
  address: string;
  complAddress: string;
  zipCode: string;
  city: string;
  country: string;
  phonePrefix: string;
  phone: string;
  email: string;
  password: string;

  public constructor(init?: Partial<Inneed>) {
     Object.assign(this, init);
  }
}
