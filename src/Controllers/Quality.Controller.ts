import { IQuality } from "../Models/IQuality";

export class QualityController{
    url: string;

    constructor(url:string){
        this.url = url;
    }

    async postQuality(params:string):Promise<IQuality>{
        const response = await fetch(`${this.url}${params}`,{
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });

        const data = await response.json();

        return data
    }
}