let boxTop = 200;
let boxLeft = 200;

// evento
document.addEventListener("keydown", (evt) => {
    // variável guardando evento
    let keytop = evt.key

    if(keytop==="ArrowDown"){
      boxTop+=10  
    }
    
    if(keytop==="ArrowUp"){
      boxTop-=10
    }
    
    document.getElementById("box").style.top = boxTop + "px"
});
document.addEventListener("keydown",(evt)=>{
    
    //variável guardando evento
    let keyleft=evt.key
    
    if(keyleft==="ArrowLeft"){
        boxLeft-=10
    }
    if(keyleft==="ArrowRight"){
        boxLeft+=10
    }
    document.getElementById("box").style.left = boxLeft+"px";
})

 