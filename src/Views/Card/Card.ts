import './Card.scss'

import { IPost } from "../../Models/IPost";

export const Card = (props:IPost) => {
    let { id, postByUser, title, platform, approvalPercentage, multimediaUrl, body } = props;

    const article = document.createElement("article") as HTMLElement;
    const image = document.createElement("img") as HTMLImageElement;
    const infoContainer = document.createElement("div") as HTMLDivElement;
    const h3 = document.createElement("h3") as HTMLHeadElement;
    const aprovalP = document.createElement("p") as HTMLParagraphElement;
    const plataformP = document.createElement("p") as HTMLParagraphElement;
    const bodyP = document.createElement("p") as HTMLParagraphElement;


    const viewMoreContainer = document.createElement("div") as HTMLDivElement;
    viewMoreContainer.className = "viewMore-container";
    const viewMore = document.createElement("button") as HTMLButtonElement;
    viewMore.className = "viewMore-button"

    const deleteButton = document.createElement("span") as HTMLSpanElement;
    deleteButton.innerHTML = `<i card-delete = ${id} class="bi bi-x-circle-fill"></i>`
    deleteButton.className = "deleteCard-button"

    article.className = "card-container";

    image.className = "card-img";
    image.src = multimediaUrl;

    infoContainer.className = "infoContainer-card";
    h3.innerText = title;

    plataformP.innerText = `Plataforma: ${platform}`;
    aprovalP.innerText = `Apobacion: ${approvalPercentage} %`

    bodyP.innerText = body

    viewMore.innerText = "Ver más";
    viewMore.setAttribute("viewMore-id", String(id));


    viewMoreContainer.append(viewMore)
    infoContainer.append(h3,plataformP, aprovalP, body);
    article.append(image, infoContainer, viewMoreContainer, deleteButton);
    return article;
}