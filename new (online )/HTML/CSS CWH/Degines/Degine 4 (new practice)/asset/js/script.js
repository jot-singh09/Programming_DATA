
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
let vwork = document.querySelector("#mobilestartbtn");  
vwork.addEventListener('click',function(){
    console.log("hello");
    link.href = ".//asset/image//logo.png"; // file path
    link.download = "logo.png";
    // window.location.href = "/asset/image/logo.png";
})