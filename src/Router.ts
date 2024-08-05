import { Login } from "./Views/Login/Login";
import { SignUp } from "./Views/Signup/SignUp";

export const Router = ()=>{
    let{hash} = location;

    const divRoot = document.querySelector("#root") as HTMLElement;
    divRoot.innerHTML = ``;

    if(hash === "" || hash === "#/"){
        divRoot.append(Login());
    }
    else if (hash === "#/signUp"){
        divRoot.append(SignUp())
    }
    else if (hash === "#/home"){
        
    }
}