let playGame = true;
const move = function () {
    const randomValueTop = Math.floor(Math.random() * 500);
    const randomValueLeft = Math.floor(Math.random() * 500);
    const position = document.getElementById('no')
    position.style.position = 'absolute';
    position.style.top = randomValueTop + 'px';
    position.style.left = randomValueLeft + 'px';
}
document.querySelector('#no').addEventListener('click', move)
document.querySelector('#yes').addEventListener('click', function () {
    const show = document.getElementById('show')
    show.innerHTML = "Yes! I know"
    // document.body.style.backgroundColor = 'rgb(220 3 252)'
     document.body.style.backgroundImage='url("cracker.gif")'
     document.body.style.color='rgb(220 3 252)'
    const image = document.createElement('img')
    image.src = 'iloveyou.gif'
    image.alt = 'placeholder';
    image.width = 200 ;
    image.height = 200;
    image.style.borderRadius = 5 + 'px'
    const btn=document.getElementById('image')
    btn.appendChild(image)
    endGame();
})
function endGame() {
    playGame = false;
    const hidden = document.getElementById("no")
    hidden.style.display = 'none'
}
