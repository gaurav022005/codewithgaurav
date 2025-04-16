let modal = document.getElementById("pop")
let usericon = document.getElementById("u")

usericon.onclick = function (e) {
    if (modal.style.display === "flex") {
        modal.style.display = "none"
    }
    else {
        modal.style.display = "flex"
    }
    e.stopPropagation()
}

document.body.addEventListener("click", (e) => {
    if (modal.style.display === "flex" && e.target != modal && e.target != usericon) {
        modal.style.display = "none"
    }
})

let mg = document.getElementById("mag")
let srch = document.getElementById("search")


mg.addEventListener("click", (e) => {
    if (srch.style.display === "none") {
        srch.style.display = "block"
        mg.style.color = "black"
        mg.classList.remove("fa-magnifying-glass")
        mg.classList.add("fa-xmark")
    }
    else {
        srch.style.display = "none"
        mg.style.color = "#FF6B00"
        mg.classList.remove("fa-xmark")
        mg.classList.add("fa-magnifying-glass")
    }
})


let cnc = document.querySelector(".cnc")
let cname = ["Web Development", "Python", "Java", "PHP", "C", "C++", "C#"]

let i = 0

function cn(){
    cnc.innerHTML = cname[i];
    i = (i + 1) % cname.length
}

setInterval(cn,1500)

 document.addEventListener('contextmenu', event => event.preventDefault());



