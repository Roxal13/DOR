const bolas = document.querySelectorAll(".bola");
bolas.forEach(bola => {
    move(bola);
})
let dx = 2;
let dy = 2;
const bola1 = document.getElementById("bola1");
const bola2 = document.getElementById("bola2");
const bola3 = document.getElementById("bola3");
const bola4 = document.getElementById("bola4");
bola1.style.top = "0px";
bola1.style.left = "0px";
bola2.style.top = "0px";
bola2.style.left = "0px";
bola2.style.top = "0px";
bola2.style.left = "0px";
bola2.style.top = "0px";
bola2.style.left = "0px";
setInterval(move, 10);

function move(e){
    let x = parseInt(e.style.left);
    let y = parseInt(e.style.top);
    if(x >= window.innerWidth - 55){
        dx = -2;
    }else if(x == 0){
        dx = +2;
    }
    if(y >= window.innerHeight - 55 ){
        dy = -2;
    }else if(y == 0){
        dy = +2;
    }
    e.style.left = x + dx + "px";
    e.style.top = y + dy + "px";
}