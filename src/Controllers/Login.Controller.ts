import { ILogin, ILoginResponse, ISignUpResponse } from "../Models/ILogin";
import { errorAlert, successAlert } from "./Alerts";

export class LoginController{
    url: string;

    constructor(url:string){
        this.url = url;
    }

    async login(endPoint:string, user:ILogin):Promise<ILoginResponse>{
        const response = await fetch(`${this.url}${endPoint}`,{
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        console.log("Login status: "+ response.status);
        if(data.message !== "Login successful"){
            // errorAlert("Correo electronico o contraseña erroneos")
            throw new Error("Login: Correo electronico o contraseña erroneos")
        }
        return data;
    }

    async signUp(endPoint:string, newUser:ILogin):Promise<ISignUpResponse>{
        const response = await fetch(`${this.url}${endPoint}`,{
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(newUser)
        });

        const data = await response.json();

        console.log("Sign upW status: " + response.status);
        if(response.status !== 201){
            errorAlert("Correo ya se encuentra registrado");
            throw new Error("Sign Up: Correo ya se encuentra registrado");
        }
        else{
            successAlert("Se creo usuario exitosamente");
        }
        return data;
    }
}