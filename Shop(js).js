// shop Page
const navShop = document.getElementById("nav-shop")
const openShop = document.getElementById("open-shop")
const closeShop = document.getElementById("close-shop")
console.log(openShop)
openShop.addEventListener("click",function(){
    navShop.style.right=0
})
closeShop.addEventListener("click",function(){
    navShop.style.right="-300px"
})
// shop Page