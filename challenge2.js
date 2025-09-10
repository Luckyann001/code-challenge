

getspeed(speed)

function getspeed(speed){

if (speed <= 70) {
    console.log ('ok');
}else {
    dempoint = Math.floor((speed - 70) / 5);
    if (dempoint >= 12) {
        console.log ('License suspended');
    }else {
        console.log ('Demerit points: ' + dempoint);
    }
}
}

function runChallenge2() {
    const speed = Number(document.getElementById('challenge2Input').value);
    let result = '';
    if (speed < 70) {
        result = 'Ok';
    } else {
        let points = Math.floor((speed - 70) / 5);
        if (points > 12) {
            result = 'License suspended';
        } else {
            result = 'Points: ' + points;
        }
    }
    document.getElementById('result').textContent = 'Speed: ' + speed + ' | ' + result;
}