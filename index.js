const bar = document.getElementById("bar")
const nav = document.getElementById("navbar")
const close = document.getElementById("close")


// console.log(open)
// closeShop.addEventListener("click",function(){
// })

// open.addEventListener("click",function(){
//     navShop.style.right=0
// })
// mobile.addEventListener("click",function(){
//     nav.style.right=0
// })
if(bar){
    bar.addEventListener("click" , ()=>{
        nav.classList.add('active');
    })
}

close.addEventListener("click",()=>{
        nav.classList.remove("active")
})



