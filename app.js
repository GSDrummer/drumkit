// Play drum by keyboard press
// Play music by mouse click


let hihat = new Audio("sounds/hihat.wav")
let kick = new Audio("sounds/kick.wav")
let openhat = new Audio("sounds/openhat.wav")
let ride = new Audio("sounds/ride.wav")
let snare = new Audio("sounds/snare.wav")
let tom = new Audio("sounds/tom.wav")
let crash = new Audio("sounds/crash.wav")


let keys = document.body

keys.addEventListener("keypress", (event) =>{
    if(event.code == "KeyH"){
      hihat.load()
      hihat.play()
  } else if(event.code == "KeyD"){
      kick.load()
      kick.play()
  } else if(event.code == "KeyJ"){
      openhat.load()
      openhat.play()
  } else if(event.code == "KeyK"){
      ride.load()
      ride.play()
  } else if(event.code == "KeyS"){
      snare.load()
      snare.play()
  } else if(event.code == "KeyP"){
      tink.load()
      tink.play()
  } else if(event.code == "KeyU"){
      tom.load()
      tom.play()
  } else if(event.code == "KeyI"){
      crash.load()
      crash.play()
  }
})


document.getElementsByClassName("hihat")[0].addEventListener("click", ()=>{
  hihat.load();
  hihat.play();
})

document.getElementsByClassName("kick")[0].addEventListener("click", ()=>{
  kick.load();
  kick.play();
})

document.getElementsByClassName("openHi")[0].addEventListener("click", ()=>{
  openhat.load();
  openhat.play();
})

document.getElementsByClassName("ride")[0].addEventListener("click", ()=>{
  ride.load();
  ride.play();
})

document.getElementsByClassName("snare")[0].addEventListener("click", ()=>{
  snare.load();
  snare.play();
})

document.getElementsByClassName("tom")[0].addEventListener("click", ()=>{
  tom.load();
  tom.play();
})

document.getElementsByClassName("crash")[0].addEventListener("click", ()=>{
  crash.load();
  crash.play();
})
