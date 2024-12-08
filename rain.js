function randomtext(){
    const text=("SANJEEV");
    latters=text[Math.floor(Math.random() * text.length)];
    
    return latters;
}



function rain(){
    let cloud=document.querySelector(".cloud");
    // cloud.addEventListener("click",()=>{
            let p = document.querySelector("#para");
            setTimeout(()=>{
                p.innerText="BALRAM RAWAT";
                p.style.color='red';
            },4000)
       


        let e = document.createElement("div");
        e.classList.add("drop");
        cloud.appendChild(e);
    
        let left=Math.floor(Math.random() * 300);
        let size=Math.random() * 1.5;
        let duration = Math.random() *1;
    
        e.innerText = randomtext();
        e.style.left = left+ 'px';
        e.style.fontSize = 1.5 + size + 'em';
        e.style.animationDuration = 3+duration+'s';
    
        setTimeout(function(){
            cloud.removeChild(e);
        },10000);
    
    // })
}
setInterval(function(){
    rain()
},200)