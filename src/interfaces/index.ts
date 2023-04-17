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
