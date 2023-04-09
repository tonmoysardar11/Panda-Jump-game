let bgm = new Audio('bgm.mp3');
let gamestart = new Audio('gamestart.mp3');
let jump = new Audio('Skadoosh.mp3');
let panda = document.getElementById('panda');
let score = 0;
let cross = true;
let diff=3000;
// bgm.play();
// gamestart.play();
// jump.play();
// const jumpPanda=(e,jump)=>{
// }
document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        panda.classList.add('jumpPanda');
        jump.play();
        setTimeout(() => {
            panda.classList.remove('jumpPanda');
        }, 1500);
    }
    if (e.keyCode == 39) {
        px = parseInt(window.getComputedStyle(panda, null).getPropertyValue('left'));
        panda.style.left = (px + 100) + 'px';
    }
    if (e.keyCode == 37) {
        px = parseInt(window.getComputedStyle(panda, null).getPropertyValue('left'));
        panda.style.left = (px - 100) + 'px';
    }
}
let tai = document.getElementById('tai');
let shien = document.getElementById('shien');
let kai = document.getElementById('kai');
let obs = [tai, shien, kai];
let speed1 = 3000;
let speed2 = 2900;





const walk = () => {

    setInterval(() => {
        let randomElem = obs[Math.floor(Math.random() * obs.length)];
        randomElem.classList.add('walk');
        setInterval(() => {
            let px = parseInt(window.getComputedStyle(panda, null).getPropertyValue('left'));
            let py = parseInt(window.getComputedStyle(panda, null).getPropertyValue('bottom'));

            let rx = parseInt(window.getComputedStyle(randomElem, null).getPropertyValue('left'));
            let ry = parseInt(window.getComputedStyle(randomElem, null).getPropertyValue('bottom'));

            offsetX = Math.abs(px - rx);
            offsetY = Math.abs(py - ry);
            // console.log(offsetX,offsetY);
            if (offsetX < 113 && offsetY < 50) {
                // console.log('game over');
                tai.style.display = 'none';
                shien.style.display = 'none';
                kai.style.display = 'none';
                tai.classList.remove('walk');
                kai.classList.remove('walk');
                shien.classList.remove('walk');
                document.getElementById('gobanner').style.opacity = 1;
                document.getElementById('gopanda').style.opacity = 1;
                document.getElementById('panda').style.opacity = 0;
                setTimeout(() => {
                    document.getElementById('reset').style.opacity = 1;

                }, 1500);
            }
            else if (offsetX<100  && cross) {
                score += 1;
                updateScore(score);
                cross = false;
                setInterval(() => {
                    cross = true;
                }, 1000);
                // setInterval(() => {
                //     diff-=50;
                // }, 9000);
                // document.querySelector('.walk').style.animationDuration=diff+'ms';
            }

        }, 10);


        setTimeout(() => {
            randomElem.classList.remove('walk');
        }, speed2);

    }, speed1);
};
// walk();
let updateScore = (score) => {

    document.getElementById('score').innerHTML = `${score}`;

}
const reset = () => {
    document.location.reload();
}
const play = (score) => {
    document.getElementById('play').style.display = 'none';
    walk(score);
}

