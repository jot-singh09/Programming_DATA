let navopen = document.querySelector(".mobilenavbutton")
let mobilenavbutton = document.querySelector(".navbutton")
let baractive=false
mobilenavbutton.addEventListener("click" , function() {
    console.log("clicked")
    if (baractive == true){
        navopen.style.display="none"
        baractive=false
    }
    else{
        navopen.style.display="flex"
        baractive=true
        
    }
})
