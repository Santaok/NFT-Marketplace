function startCountdown(hours) {
    let seconds = hours * 3600

    const countdownElement = document.getElementById('timeHours')

    const interval = setInterval(() => {
        const hoursLeft = Math.floor(seconds / 3600)

        countdownElement.innerHTML = 
            `${String(hoursLeft).padStart(2, '0')}`

        seconds--

        if (seconds < 0) {
            clearInterval(interval)
            countdownElement.innerHTML = "Время вышло!"
        }
    }, 1000)
}


startCountdown(60);

function countdownMinutes(hours) {
    let seconds = hours * 3600

    const minuteElement = document.getElementById('timeMinute')

    const interval = setInterval(() => {
        const minutesLeft = Math.floor((seconds % 3600) / 60)

        minuteElement.innerHTML = 
            `${String(minutesLeft).padStart(2, '0')}`

        seconds--
        if (seconds < 0) {
            clearInterval(interval);
            minuteElement.innerHTML = "Время вышло!"
        }
    }, 1000)
}


countdownMinutes(1)

function countdownSeconds(hours) {
    let seconds = hours * 3600
    const secondElement = document.getElementById('timeSecond')

    const interval = setInterval(() => {
        const secondsLeft = seconds % 60

        secondElement.innerHTML = 
            `${String(secondsLeft).padStart(2, '0')}`

        seconds--

        if (seconds < 0) {
            clearInterval(interval)
            secondElement.innerHTML = "Время вышло!"
        }
    }, 1000)
}


countdownSeconds(1)

const aziz = document.getElementById('azizbek')
const azizbek = document.querySelector(".notActive")

aziz.addEventListener('click', () => {
azizbek.classList.toggle("Active")
})
const audio = document.getElementById("zod")
const zod = document.getElementById("stop")
aziz.addEventListener("click", () => {
    
    audio.play();
   
    
})
zod.addEventListener("click", () => {
    azizbek.classList.toggle("Active")
    audio.pause();
})
const china = document.getElementById("china")
const sherbtn = document.getElementById("sherOne")
const stopchina = document.getElementById("stopOne")
const sherimg = document.querySelector(".sher")

sherbtn.addEventListener("click", () => {
    sherimg.classList.toggle("SherActive")

    
    

})
sherbtn.addEventListener("click", () => {
    china.play()
})

stopchina.addEventListener("click", () => {
    sherimg.classList.toggle("SherActive")
    china.pause()
})

var bee = document.getElementById("sher")
document.addEventListener("mousemove", getMouse)

bee.style.position = "absolute"
var beepos = {
 x: 0,
 y: 0
};

var mouse = {
 x: 0,
 y: 0
}; 

var dir = "right"

function getMouse(e) {
 mouse.x = e.pageX;
 mouse.y = e.pageY;
 if (mouse.x > beepos.x) {
  dir = "right"
 } else {
  dir = "left"
 }
}

function followMouse() {
 var distX = mouse.x - beepos.x
 var distY = mouse.y - beepos.y


 beepos.x += distX / 10
 beepos.y += distY / 10

 bee.style.left = beepos.x + "px"
 bee.style.top = beepos.y + "px"
 
 if (dir == "right") {
  bee.setAttribute("class", "right")
 } else {
  bee.setAttribute("class", "left")
 }

 requestAnimationFrame(followMouse)
}


followMouse()
