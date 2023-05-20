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

export interface IOrderInputValues {
  firstname?: string | null | undefined;
  lastname?: string | null | undefined;
  email?: string | null | undefined;
  phonenumber?: string | number | null | undefined;
  ordertitle: string | null | undefined;
  orderdescription: string | null | undefined;
  price: number | string | null | undefined;
  status?: string | null | undefined;
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

export interface CustomError extends Error {
  response?: {
    status?: number;
    data?: {
      message?: string;
    };
  };
}
