const inputCheck = document.querySelector("#check")
const bulb = document.querySelector("#bulb")
const body = document.querySelector("body") 

inputCheck.addEventListener("change", (event) => {
    if(event.target.checked){
        bulb.src = "bulb on.png"
    }else{
        bulb.src = "bulb off.png"
    }
})


