window.addEventListener('keydown',checkKeyPress,false);
let score = 0;
let cross = true;
console.log(cross)
function checkKeyPress(vari){
    if(vari.key == 'w'){
        console.log("hii")
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
   if(vari.key == 'd'){
        dino = document.querySelector('.dino');
        dinoXL = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoXL + 52 + "px";
    }
    if(vari.key == 'a'){
        dino = document.querySelector('.dino');
        dinoXL = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoXL - 52 + "px";
    }
    if(vari.key == 'Space'){
        location.reload(); 
    }
};
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log(offsetX , offsetY)
    if(offsetX<90 && offsetY<52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove ("animateObs");
    }
    else if (offsetX<90 && cross==true){
        score+=1;
        update_score(score);
        cross = false;
         console.log(cross)
        setTimeout(() => {
            cross = true;
            console.log(cross)

        }, 1000);
        Animation_duration = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        setTimeout(() => {
        new_Animation_duration = Animation_duration-0.1;
        console.log(new_Animation_duration)
        obstacle.style.animationDuration = new_Animation_duration + "s"
        }, 1000);

    }
    
    
    function update_score(score) {
        scoreCount.innerHTML = "Your Score : "+ score;
    }
}, 100);