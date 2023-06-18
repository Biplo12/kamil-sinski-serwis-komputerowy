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

export default interface IUserSlice {
  users: IUser[] | null;
  userDetails: IUser | null;
  isUserAuthenticated: boolean;
}
