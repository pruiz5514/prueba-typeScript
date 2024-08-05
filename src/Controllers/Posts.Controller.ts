import { IPost } from "../Models/IPost";
import { errorAlert, successAlert } from "./Alerts";

export class PostsController{
    url: string;

    constructor(url:string){
        this.url = url;
    }

    async getPost(endPoint:string):Promise<IPost[]>{        
        const response = await fetch(`${this.url}${endPoint}`)

        console.log("Get post status: " + response.status);
        
        if(response.status !== 200){
            throw new Error ("No se pueden mostrar los post")
        }
        
        const data = await response.json();

        return data;
    }

    async createPost(endPoint:string, post:IPost){
        const response = await fetch(`${this.url}${endPoint}`,{
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
                'x-user-email': `${sessionStorage.getItem("email")}`
            },
            body: JSON.stringify(post)
        });
        
        console.log("create post" + response.status);
        if(response.status !== 201){
            errorAlert("No se pudo crear post")
            throw new Error("No se pudo agregar");
        }
        else{
            successAlert("Post creado exitosamente");
        }
        

        const data = await response.json();

        return data;
    }
}