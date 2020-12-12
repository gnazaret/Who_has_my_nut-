// alert("You are about to start this game. You'll have to find the nut in order for you to win. If you fail, you are a loser... Good luck!!!");

function myalert() { 
    alert("You are about to start this game!!\n " + 
        "You'll have to find the nut hidden behind one of the pictures in order for you to win." + " If you fail, you are a loser"); 
} 
const activar_game = false;

const square_posi = ["0", "calc(100%/3)", "calc(100%*2/3)"];
function animacion(){
    empieza();
}

function empieza(){
    // document.getElementById("btn");
    const activar_game = false;
    let ar_squares = document.getElementsByClassName("square");
    for (let i = 0; i < ar_squares.length; i++){
        ar_squares[i].style.background = "none";
    }
   let obj = document.getElementById("nut");
   obj.style.display = "none";
    
}


$(() => {
    const $btn = $("#btn");

    const $square = $(".draw-square")
    const $square1 = $(".draw-square1");
    const $square2 = $(".draw-square2");

    const $images = [
        { name: "dinosaurs", image: "Images/dinosaurs.jpg"},
        { name: "dinosaurs2", image: "Images/dinosaurs2.png" },
        { name: "Babydinos", image: "Images/Babydinos.png"}
    ];

    const $images2 = [
        { name: "friends2", image: "Images/Friends2.jpg"},
        { name: "friends", image: "Images/Friends.jpg"},
        { name: "friends3", image: "Images/Friends3.jpg"}
    ];
    const $images3 = [
        { name: "badpack", image: "Images/bad_pack.jpg"},
        { name: "badguys2", image: "Images/badguys2.jpg"},
        { name: "badguys3", image: "Images/badguys3.png"}
    ];
    
    const $random = () => {
        for(let character of $images) {
            console.log(character);
            const $square = $(".draw-square").css('background', 'url("' + $images[Math.floor(Math.random() * 3)].image + '")');
            const $square2 = $(".draw-square1").css('background', 'url("' + $images2[Math.floor(Math.random() * 3)].image + '")');
            const $square3 = $(".draw-square2").css('background', 'url("' + $images3[Math.floor(Math.random() * 3)].image + '")');
            $square.css('background-size', "cover");
            $square2.css('background-size', "cover");
            $square3.css('background-size', "cover");

        }
    }
    // $square.Math.ramdon(url(Images/dinosaurs.jpg), url(Images/Friends.jpg), url(Images/bad_pack.jpg) * 1)
    
    // const $nut = $("#nut");
    // const $container = $(".square-container");
    // const $randomNut = () => {
    //     const $nut2 = $container;
    //     for(let i = 0; i < $container.length; i++){
    //        console.log(i);
    //     }
    //     // $nut = $container[Math.floor(Math.random)() * 3];
    //     // $nut.prependTo($container);
  
    // }
    
   
    const $findNut = () => {
        const $find = Math.floor(Math.random() * (2 +1) + 1);
        console.log($find);

        const $player = prompt("Who Has The Nut?");

        if ($player < $find) {
            window.alert("Wrong Choice, Keep Trying");
        } else if ($player > $find) {
            window.alert("You Are A Loser");
        } else if ($player == $find){
            window.alert("YOU FOUND IT..... YOU ARE A WINNER!!!!");
        }


    }
    
    // $(function () {
    //     $(".square").click(function (){
    //         $(this).fadeTo(2000, Math.random() * 1);;
    //     })
    // })

    $btn.on("click", () => {
        empieza();
        $random();
        $findNut();
        // validar_punto();
        // $randomNut();

    })






});

// const ar = document.getElementsByClassName("game-container");
// for(let i = 0; i < ar.length; i++){
//     ar[i].addEventListener("click", validar_punto,false);
// }

// function validar_punto(){
//     if(empieza){
//         let obj = this.getElementsByClassName("nut");
//         alert("You Found It");
//         obj[0].style.top="-30px";
//         empieza = false;
//     }else{
//         this.getElementsByClassName("square")[0].style.background = "red";
//     }
// }