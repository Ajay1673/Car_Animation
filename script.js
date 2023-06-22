let wheel1 = document.querySelector('.wheel1') 
let wheel2 = document.querySelector('.wheel2')
let car = document.querySelector('.Car') 

let wheelspeed = 0.8
let carspeed = 0.7
function speedUp(){
    wheelspeed -= 0.2
    carspeed -= 0.1
    move()
}
function speedDown(){
    wheelspeed +=0.2
    carspeed += 0.1
    move()
}
function move(){
    wheel1.style.setProperty("animation-duration",wheelspeed+"s")
    wheel2.style.setProperty("animation-duration",wheelspeed+"s")
    car.style.setProperty("animation-duration",carspeed+"s")
}
function stop(){
    wheel1.style.setProperty("animation-duration",0+"s")
    wheel2.style.setProperty("animation-duration",0+"s")
    car.style.setProperty("animation-duration",0+"s")
}