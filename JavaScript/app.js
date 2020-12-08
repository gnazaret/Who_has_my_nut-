
const activar_game = false;

const square_posi = ["0", "calc(100%/3)", "calc(100%*2/3)"];
function animacion(){
    empieza();
}

function empieza(){
    document.getElementById("btn");
    const activar_game = false;
    let ar_circles = document.getElementsByClassName("square");
    for (let i = 0; i < ar_circles.length; i++){
        ar_circles[i].style.background = "none";
    }
   let obj = document.getElementById("nut");
   obj.style.display = "none";
    










 
}

// const ar = document.getElementsByClassName("square");
// for(let i = 0; i < ar.length; i++){
//     ar[i].addEventListener("click", validar_punto,false);
// }

// function validar_punto(){
//     if(empezar){
//         let obj = this.getElementsByClassName("nut");
//         alert("You Found It");
//         obj[0].style.top="-30px";
//         empezar = false;
//     }else{
//         this.getElementsByClassName("square")[0].style.background = "red";
//     }
// }