export const Router = ()=>{
    let{hash} = location;

    const divRoot = document.querySelector("#root") as HTMLElement;

    if(hash === "" || hash === "#/"){
        divRoot.innerText = "OEe"
    }
}