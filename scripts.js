const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let position = 0;
let isJumpying = false;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumpying){
            jump();
        }
    }
}

function jump() {
    
    isJumpying = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumpying = false;
                } else {
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            })
        } else {
        position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;



    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval( () => {

        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';

          } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

function playGame() {
    let div1 = document.getElementsByClassName('background')[0];
    div1.classList.add('frameBackground');
    let div2 = document.getElementsByClassName('dino')[0];
    div2.classList.add('dinoAction');
    createCactus();
    
}

document.addEventListener('keyup', handleKeyUp);