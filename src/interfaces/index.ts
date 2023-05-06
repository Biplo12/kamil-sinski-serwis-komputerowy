export interface IContactInput {
  Imię: string;
  ['E-mail']: string;
  Telefon: string;
  Temat: string;
  Wiadomość: string;
  [key: string]: string;
}

export interface ISubmitStatus {
  submitted: boolean;
  submitting: boolean;
}

export interface IInputValues {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  ordertitle: string;
  orderdescription: string;
  price: number | string;
}

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  createdAt: string;
  updatedAt: string;
  repairingAt: string;
  repairedAt: string;
  isAdmin: boolean;
  userId: number;
}
