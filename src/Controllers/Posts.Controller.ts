import { IPost } from "../Models/IPost";

export class PostsController{
    url: string;

    constructor(url:string){
        this.url = url;
    }

    async getPost(endPoint:string):Promise<IPost[]>{
        console.log();
        
        const response = await fetch(`${this.url}${endPoint}`)

        console.log("Get post status: " + response.status);
        
        if(response.status !== 200){
            throw new Error ("No se pueden mostrar los post")
        }
        
        const data = await response.json();

        return data;
    }
}