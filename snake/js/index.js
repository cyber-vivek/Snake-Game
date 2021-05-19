let inputdir={x:0,y:0};
const move=new Audio("move.mp3");
const gover=new Audio("gameover.mp3");
const bgmusic = new Audio("bgm0.mp3");
const eat = new Audio("eat.mp3");
let lastpainttime =0;
let speed = 6;
let score = 0;
let snakearr = [{x:1,y:11}];
let food ={x:17,y:17};


// window.requestAnimationFrame requsts to execute the function and next function is executd when current is done.
function main(ctime){
    if((ctime-lastpainttime)/1000<1/speed){
        window.requestAnimationFrame(main)
    }
    else{
        lastpainttime =ctime;
        window.requestAnimationFrame(main);
        gameengine();
    }
}

// Displaying the snake
function dis(val){
    let snakeele = document.createElement('div');
    snakeele.style.gridRowStart =    val.y;
    snakeele.style.gridColumnStart = val.x;
    if(val.x==snakearr[0].x&&val.y==snakearr[0].y)
    snakeele.classList.add('head');
    else
    snakeele.classList.add('snake');
    board.appendChild(snakeele);
}

// Game over function 
function gameover(){
    // If snake bump on walls
    if(snakearr[0].x<1||snakearr[0].x>=22){
        return true;
    }
    if(snakearr[0].y<1||snakearr[0].y>=22){
        return true;
    }
    // If snake into himself
    for(let i=1;i<snakearr.length;i++){
        if(snakearr[0].x===snakearr[i].x&&snakearr[0].y===snakearr[i].y){
            return true;
        }
    }
    return false;
}

function gameengine(){
    // ==> Checking for game over
    if(gameover()){
        score = 0;
        gover.play();
        bgmusic.pause();
        alert("Game Over!!!!");
        dscore.innerHTML= "Score: "+score;
        snakearr = [{x:1,y:11}];
        food ={x:17,y:17};
        inputdir={x:0,y:0};
    }

    // Part 1: Updating the snake array and food
    
    // if food eaten
    if(snakearr[0].x===food.x&& snakearr[0].y===food.y){
        eat.play();
        score+=1;
        dscore.innerHTML= "Score: "+score;
        snakearr.unshift({x:snakearr[0].x+inputdir.x,y:snakearr[0].y+inputdir.y});
        let a=1;
        let b=21;
        food = { x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
    }
    else{
        // for(let i = snakearr.length-1;i>0;i++){
        //     // snakearr[i].x=snakearr[i-1].x;
        //     // snakearr[i].y=snakearr[i-1].y;
        //     snakearr[i]=snakearr[i-1];
        // }

        // the above code cannot be executed because object property (not by reference)

        snakearr.unshift({x:snakearr[0].x+inputdir.x,y:snakearr[0].y+inputdir.y})
        snakearr.pop();
        // snakearr[0].x+=inputdir.x;
        // snakearr[0].y+=inputdir.y;

    }
    // part 2: Render the snake and food
    
    //Display food and snake elements
    board.innerHTML= "";
    
    // display food element 
    let foodele = document.createElement('div');
    foodele.style.gridRowStart =    food.y;
    foodele.style.gridColumnStart = food.x;
    foodele.classList.add('food');
    board.appendChild(foodele);
    
    // display snake element
    snakearr.forEach(dis) 

}



// Main logic
window.requestAnimationFrame(main);

// arrow function
//Event listener
window.addEventListener('keydown',ev=>{  
    bgmusic.play();
    bgmusic.volume = 0.3; //value between 0-1;
    move.play();
    switch (ev.key) {
        case "ArrowDown":
            console.log("ArrowDown");
            inputdir.x = 0;
            inputdir.y = 1;
            break;
            case "ArrowUp":
            console.log("ArrowUp");
            inputdir.x = 0;
            inputdir.y =  -1;
            break;
            case "ArrowLeft":
            console.log("ArrowLeft");
            inputdir.x =  -1;
            inputdir.y =  0;
            break;
            case "ArrowRight":
            console.log("ArrowRight");
            inputdir.x =  1;
            inputdir.y =  0;
            break;
    
        default:
            break;
    }
}); 

