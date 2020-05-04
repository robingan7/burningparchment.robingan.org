const secondsInDay = 86400;

function move() {
    let today = new Date();
    let secondsSoFar = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();

    let ratio = secondsSoFar / secondsInDay;

    let divHeight = parseInt(window.innerHeight) - 20;

    if(!isNaN(divHeight)){
        document.getElementById('timeDisplayer').innerText = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        let firesTop = 30 + (divHeight - 100 - 30) * ratio;
        let paperHeight = divHeight - firesTop - 40;

        console.log(firesTop, divHeight);

        document.getElementById('parchment').style.height = (paperHeight)+ 'px';
        document.getElementById('burningfires').style.top = (firesTop) + 'px';
    }

}

move();
window.addEventListener('resize', move);
setInterval(move, 1000);