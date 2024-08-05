import { IPost } from "../Models/IPost";

export class PostsController{
    url: string;

    constructor(url:string){
        this.url = url;
    }

    async getPost(endPoint:string,email:string):Promise<IPost>{
        console.log();
        
        const response = await fetch(`${this.url}${endPoint}`,{
            mode: 'no-cors',
            method: 'GET',
            headers: {
                'x-user-email': email
            }
        })

        console.log(response.status);
        
        const data = await response.json();

        return data;
    }
}