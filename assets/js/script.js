let main_window = document.getElementById("main");
let game_window = document.getElementById("game");


function swipe_window(name){
    if(name == "main"){
        game_window.style.zIndex = "-1"
        main_window.style.zIndex = "1"
    }
    else{
        game_window.style.zIndex = "1"
        main_window.style.zIndex = "-1"
        game();
    }
}