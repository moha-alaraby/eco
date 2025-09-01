// serch
let serch = document.querySelector(".content-head .serch .icon")
let input = document.querySelector(".content-head .serch input")

serch.onclick = ()=>{
    input.classList.add("hidden")
    input.focus()
}

document.addEventListener("blur",(e)=>{
    if(e.target.classList.contains("inpSerch")){
        input.classList.remove("hidden")
    }
},true)

// document.addEventListener("focusout",(e)=>{
//     if(e.target.classList.contains("inpSerch")){
//         console.log("t")
//     }
// })

// frindes bage 
let remove = document.querySelectorAll(".remove");

let friend = document.querySelectorAll(".friend")
console.log(friend)

remove.forEach((e,index)=>{
    e.onclick = ()=>{
        friend[index].remove()
}    
})
