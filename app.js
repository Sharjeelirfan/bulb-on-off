const inputCheck = document.querySelector("#check")
const bulb = document.querySelector("#bulb")
const body = document.querySelector("body") 

inputCheck.addEventListener("change", (event) => {
    if(event.target.checked){
        bulb.src = "bulb on.png"
        bulb.style.filter = "drop-shadow(7px 7px 15px rgba(253, 203, 12,0.7 ))"
    }else{
        bulb.src = "bulb off.png"
        bulb.style.filter= "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.8))";

    }
})


