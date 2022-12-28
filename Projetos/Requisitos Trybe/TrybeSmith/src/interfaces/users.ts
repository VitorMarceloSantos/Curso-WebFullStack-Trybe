export interface LoginUser {
  username: string,
  password: string
}

export interface IUser extends LoginUser {
  vocation: string,
  level: number,
}

export interface ReturnToken {
  status: number,
  message?: string,
  token?: string,
}
