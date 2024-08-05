import { LoginController } from '../../Controllers/Login.Controller';
import { ILogin } from '../../Models/ILogin';
import './SignUp.scss';

export const SignUp = (): HTMLElement => {
    const main = document.createElement("main") as HTMLElement;
    main.className = "signUp-main";
    const section = document.createElement("section") as HTMLElement;
    section.className = "signUp-section";

    const h1 = document.createElement("h1") as HTMLHeadElement;
    h1.innerText = "Riwi posts";
    h1.className = "signUp-title"

    const form = document.createElement("form") as HTMLFormElement;
    form.className = "signUp-form";

    const emailInput = document.createElement("input") as HTMLInputElement;
    emailInput.type = "email";
    emailInput.className = "signUp-input";
    emailInput.placeholder = "Correo electronico";

    const passwordInput = document.createElement("input") as HTMLInputElement;
    passwordInput.className = "signUp-input";
    passwordInput.placeholder = "Contraseña";
    passwordInput.type = "password";

    const button = document.createElement("button") as HTMLButtonElement;
    button.innerText = "Iniciar sesión";
    button.className = "signUp-button";
    button.type = "submit";

    form.append(emailInput, passwordInput, button);

    const a = document.createElement("a") as HTMLAnchorElement;
    a.innerText = "Crear una cuenta";
    a.href = "#/signUp";
    a.className = "signUp-a"

    section.append(h1, form, a);
    main.append(section);

    const url = "https://api-posts.codificando.xyz/";
    const loginController = new LoginController(url);

    form.addEventListener("submit",async (event:Event)=>{
        event.preventDefault();
        
        const user:ILogin = {
            email: emailInput.value,
            password: passwordInput.value
        }

        try{
            const login = await loginController.login("auth/login", user);
            console.log(login.message);
            window.location.hash = "#/home";
            sessionStorage.setItem("email", user.email);
        }
        catch(e){
            console.log(e);
        }
        
        
    })

    return main
}