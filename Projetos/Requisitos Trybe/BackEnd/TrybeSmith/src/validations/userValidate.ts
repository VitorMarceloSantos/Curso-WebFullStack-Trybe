import * as userSchema from './userSchema';

export function validadeSchemaUser(
  username: string,
  vocation: string, 
  level: number, 
  password: string,
): { status: number | null, message: string } {
  const { error } = userSchema.userSchema.validate({ username, vocation, level, password });
  if (error) return { status: 422, message: error.message };
  return { status: null, message: '' };
}

export function validadeSchemaUserExist(
  username: string,
  vocation: string, 
  level: number, 
  password: string,
): { status: number | null, message: string } {
  const { error } = userSchema.userSchemaExist.validate({ username, vocation, level, password });
  if (error) return { status: 400, message: error.message };
  return { status: null, message: '' };
}