import { AddPost } from "./Views/AddPost/AddPost";
import { Header } from "./Views/Header/Header";
import { Home } from "./Views/Home.ts/Home";
import { Login } from "./Views/Login/Login";
import { SignUp } from "./Views/SignUp/SignUp";
import { viewMore } from "./Views/ViewMore/ViewMore";

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
        divRoot.append(Header(),Home())
    }
    else if (hash === "#/agregar-post"){
        divRoot.append(Header(),AddPost())
    }
    else{
        divRoot.append(Header(),viewMore())
    }
}