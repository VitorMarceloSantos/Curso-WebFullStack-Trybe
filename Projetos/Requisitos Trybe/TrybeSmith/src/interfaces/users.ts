export interface IUser {
  username: string,
  vocation: string,
  level: number,
  password: string
}

export interface ReturnToken {
  status: number,
  message?: string,
  token?: string,
}
