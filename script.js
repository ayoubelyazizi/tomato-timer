let start = document.getElementById('start_btn');
let reset = document.getElementById('reset_btn');

let workMinutes = document.getElementById('work_min');
let workSeconds = document.getElementById('work_sec');

let pauseMinutes = document.getElementById('pause_min');
let pauseSeconds = document.getElementById('pause_sec');

let startTimer = false;

start.addEventListener('click', function(){
    if(startTimer === false){
        startTimer = setInterval(timer, 1000)
    } 
    else {
        alert("Stop fucking around and work !")
    }
})

reset.addEventListener('click', function(){
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";

    pauseMinutes.innerText = 5;
    pauseSeconds.innerText = "00";

    stopInterval()
    startTimer = false
})

function timer(){

    // =====TRAVAIL======//
    if(workSeconds.innerText != 0){
        workSeconds.innerText --;
    }
    else if (workMinutes.innerText != 0 && workSeconds.innerText == 0){
        workSeconds.innerText = 59;
        workMinutes.innerText --;
    }

    // ===== PAUSE ======//

    if (workMinutes.innerText == 0 && workSeconds.innerText == 0){
        if(pauseSeconds.innerText != 0){
            pauseSeconds.innerText --
        }
        else if(pauseMinutes.innerText != 0 && pauseSeconds.innerText == 0){
            pauseSeconds.innerText = 59;
            pauseMinutes.innerText --
        }
    }
}

function stopInterval(){
    clearInterval(startTimer)
}