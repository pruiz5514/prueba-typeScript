import './AddPost.scss';

export const AddPost = () => {

    const main = document.createElement("main") as HTMLElement;
    main.className = "addPost-main";
    const section = document.createElement("section") as HTMLElement;
    section.className = "addPost-section";

    const h1 = document.createElement("h1") as HTMLHeadElement;
    h1.innerText = "Agregar un post";
    h1.className = "addPost-title"

    const form = document.createElement("form") as HTMLFormElement;
    form.className = "addPost-form";

    const titleInput = document.createElement("input") as HTMLInputElement;
    titleInput.type = "text";
    titleInput.className = "addPost-input";
    titleInput.placeholder = "Titulo";
    titleInput.required = true;

    const plataformInput = document.createElement("input") as HTMLInputElement;
    plataformInput.className = "addPost-input";
    plataformInput.placeholder = "Red social";
    plataformInput.type = "text";
    plataformInput.required = true;

    const message = document.createElement("textarea") as HTMLTextAreaElement;
    message.className = "addPost-textarea";
    message.placeholder = "Ingrese el mensaje";
    message.required = true;
    
    const postUrlInput = document.createElement("input") as HTMLInputElement;
    postUrlInput.className = "addPost-input";
    postUrlInput.placeholder = "Url del post";
    postUrlInput.type = "url";
    postUrlInput.required = true;

    const imgUrlInput = document.createElement("input") as HTMLInputElement;
    imgUrlInput.className = "addPost-input";
    imgUrlInput.placeholder = "Url de la imagen";
    imgUrlInput.type = "url";

    const button = document.createElement("button") as HTMLButtonElement;
    button.innerText = "Crear cuenta";
    button.className = "addPost-button";
    button.type = "submit";

    form.append(titleInput,plataformInput, message, postUrlInput, imgUrlInput, button);

    section.append(h1, form);



    main.append(section);

    const url = "https://api-posts.codificando.xyz/";

    return main
}