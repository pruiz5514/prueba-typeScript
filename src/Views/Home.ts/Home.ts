import { PostsController } from '../../Controllers/Posts.Controller';
import { QualityController } from '../../Controllers/Quality.Controller';
import { IPost } from '../../Models/IPost';
import { Card } from '../Card/Card';
import { Spinner } from '../Spinner/Spinner';
import './Home.scss'

export const Home = ():HTMLElement => {

    const main = document.createElement("main") as HTMLElement;
    main.className = "home-main";

    const spinner = document.createElement("div") as HTMLElement;
    spinner.append(Spinner())

    const h1 = document.createElement("h1") as HTMLHeadElement;
    h1.className = "home-tilte";
    h1.innerText = "Posts";

    const cardsContainer = document.createElement("section") as HTMLElement;
    cardsContainer.className = "cardsContainer-home";

    
    showPosts(cardsContainer);
    setTimeout(() => {
        spinner.style.display = "none";
    }, 500)

    main.append(spinner, h1, cardsContainer);

    return main;
}

async function showPosts(container:HTMLElement) {
    const url = "https://api-posts.codificando.xyz/";
    const postController = new PostsController(url);
    const qualityController = new QualityController("https://api.languagetoolplus.com/v2/check");
    try{
        const posts = await postController.getPost("posts");
        posts.forEach(async(post:IPost)=>{
            const text = (post.body).split(" ");
            const wordQuantity = text.length;

            const quality = await qualityController.postQuality(`?text=${post.body}&language=es`);
            const wrongWords = (quality.matches).length;

            const qualityPercentage = (100*wrongWords)/wordQuantity;

            container.append(Card(post,qualityPercentage));
        })
    }catch(e){
        console.log(e);
        
    }
    
}