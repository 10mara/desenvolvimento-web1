//capturar os elementos
const menuIcon= document.querySelector("#menuIcon")
const closeIcon= document.querySelector("#closeIcon")
const sidebar= document.querySelector("#sidebar")

//definir a interação(evento)
menuIcon.addEventListener("click",menu)
closeIcon.addEventListener("click",closeMenu)
//oq sera feito
function menu() {
    
    //sidebar.style.display = "flex"
    sidebar.style.right = "0"
    
}
function closeMenu() {
    
    //sidebar.style.display = "none"
    sidebar.style.right = "-100%"
}