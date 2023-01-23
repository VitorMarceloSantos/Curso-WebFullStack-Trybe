export interface IUser {
  id: number,
  username: string;
  role: string;
  email: string;
  password: string;
}

export interface IUserStatus {
  status: number,
  message: string,
}