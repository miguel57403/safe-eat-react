export interface AuthLogin {
  username: string;
  password: string;
};

export interface AuthLoginResponse {
  access_token: string;
  token_type: string;
};


export interface IUser {
  id: string;
  name: string;
  email: string;
  cellphone: string;
}