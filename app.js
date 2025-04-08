let btn= document.querySelector("button");
let head=document.querySelector("h1");
let box=document.querySelector("div");

btn.addEventListener("click",function(){

    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);
    
    head.innerText=(`rgb(${red},${green},${blue})`);
    box.style.backgroundColor=`rgb(${red},${green},${blue})`;
    box.style.border=`2px solid rgb(${red},${green},${blue});`

})