import { PostsController } from '../../Controllers/Posts.Controller';
import './Home.scss'

export const Home = ():HTMLElement => {

    const main = document.createElement("main") as HTMLElement;
    main.className = "home-main";

    const h1 = document.createElement("h1") as HTMLHeadElement;
    h1.className = "home-tilte";
    h1.innerText = "Posts";

    const cardsContainer = document.createElement("section") as HTMLElement;
    cardsContainer.className = "cardsContainer-home";

    const url = "https://api-posts.codificando.xyz/";
    const email = sessionStorage.getItem("email") as string;
    console.log(email);
    

    const postController = new PostsController(url);
    const posts = postController.getPost("posts", email);
    console.log(posts);

    main.append(h1, cardsContainer);

    return main;
}