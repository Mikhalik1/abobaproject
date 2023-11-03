let canvas = document.getElementById("gameZone");
let context = canvas.getContext("2d");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const ceil = 50;
const width = canvas.width;
const height = canvas.height;
let grass = new Image(ceil,ceil);
grass.src = "assets/img/grass.png";
let map = [];
for (let i = 0; i < width/ceil; i++){
    for(let j = 0; j < height/ceil; j++){
        map.push({
            "x":i*ceil,
            "y":j*ceil       
        });
    }
}
function editor(){
   
    for(let map_i = 0; map_i < map.length; map_i++){
        context.fillReck(map[map_i].x,map[map_i].y,ceil,ceil); 
    }
    requestAnimationFrame(editor);
}