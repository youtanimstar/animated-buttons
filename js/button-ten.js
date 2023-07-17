const buttonTen = document.querySelector(".button-ten");

buttonTen.addEventListener('mouseover', ()=>{
    buttonTen.innerHTML = "hovering"
})
buttonTen.addEventListener('mouseout', ()=>{
    buttonTen.innerHTML = "hover me"
})
