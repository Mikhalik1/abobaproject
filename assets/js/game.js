let canvas = document.getElementById("gameZone");
let context = canvas.getContext("2d");
var i = 0;
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const ceil = 50;
const width = canvas.width;
const height = canvas.height;
let map = [];
for (let i = 0; i < width/ceil; i++){
    for(let j = 0; j < height/ceil; j++){
        map.push({
            "x":i*ceil,
            "y":j*ceil       
        });
    }
}

function game(){
    context.clearRect(0,0,width,height);
    for(let map_i = 0; map_i < map.length; map_i++){
        context.strokeRect(map[map_i].x,map[map_i].y,ceil,ceil);
        
    }
    requestAnimationFrame(game);
    
}