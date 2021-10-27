// let dirction={x:0,y:0};
// const eatsound=new Audio("eat.ogg");
const gover=new Audio("end1.mp3");
// let lastpainttime =0 ;
// let speed = 2;
// let snakearr = [{x:1,y:11}];
// let food ={x:17,y:17};
// // window.requestAnimationFrame requsts to execute the function and next function is executd when current is done.
// function main(ctime){
//     if((ctime-lastpainttime)/1000<1/speed){
//         window.requestAnimationFrame(main)
//     }
//     else{
//         lastpainttime =ctime;
//         window.requestAnimationFrame(main);
//         gameengine();
//     }
// }


// function dis(val){
//     let snakeele = document.createElement('div');
//     snakeele.style.gridRowStart =    val.y;
//     snakeele.style.gridColumnStart = val.x;
//     snakeele.classList.add('head');
//     board.appendChild(snakeele);
// }

// function gameengine(){
//     // Part 1: Updating the snake array and food
    
//     // part 2: Render the snake and food
    
    
//     // display snake element
//     board.innerHTML= "";
//     snakearr.forEach(dis) 
    
//     // display food element 
//     let foodele = document.createElement('div');
//     foodele.style.gridRowStart =    food.y;
//     foodele.style.gridColumnStart = food.x;
//     foodele.classList.add('food');
//     board.appendChild(foodele);
    
// }



// // Main logic
// window.requestAnimationFrame(main);
let x=2;
function f1(){
    x=3;
    f2();
}
function f2(){
    x=4;
    f1();
}
// f1();
// arrow function
window.addEventListener('keydown',ev=>{  
    inputdir = {x:0,y:1};
    gover.play()
    gover.volume = 0.5; //value between 0-1;
    switch (ev.key) {
        case "ArrowDown":
            inputdir.x = 1;
            inputdir.y = 0;
            break;
        case "ArrowUp":
            inputdir.x = -1;
            inputdir.y =  0;
            break;
        case "ArrowLeft":
            inputdir.x =  -1;
            inputdir.y =  0;
            break;
        case "ArrowRight":
            inputdir.x =  1;
            inputdir.y =  0;
            break;
    
        default:
            break;
    }
}); 

