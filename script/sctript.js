let button=document.querySelector(".btnJoin");
let card=document.querySelector(".card");
let i=document.querySelector("i")
let container=document.querySelector(".container-fluid")

button.addEventListener("click",()=>{    
    card.classList.add("gonder")
    card.style.opacity=1;
     container.classList.add("blur")
})

i.addEventListener("click",()=>{
    card.classList.remove("gonder")  ;
    card.style.opacity=0;
    container.classList.remove("blur")
})