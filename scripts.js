let display = document.querySelector(".display span");
let botoes = document.querySelectorAll("button");
let btnRemover = document.querySelector(".remover");

for(let i = 0;i < botoes.length - 2;i++){
    botoes[i].addEventListener('click',(e)=>{
        display.innerHTML += e.target.innerHTML;
    })
}

const verificarDisplay = ()=>{
    if(display.innerHTML != ""){
        btnRemover.innerHTML = "AC";
    }else{
        btnRemover.innerHTML = "C";
    }
}



document.querySelector(".remover").addEventListener('click',(e)=>{
    if(btnRemover.innerHTML == "C")
        display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length-1);
    else{
        display.innerHTML = "";
        btnRemover.innerHTML = "C";
    }
});

document.querySelector(".igualdade").addEventListener('click',()=>{
    display.innerHTML = eval(display.innerHTML);
    verificarDisplay();
});
