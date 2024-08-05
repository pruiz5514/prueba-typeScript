export interface ILogin{
    email: string,
    password: string
}

export interface ILoginResponse{
    message: string;
}

export interface ISignUpResponse{
    email:    string;
    password: string;
    id:       number;
}