let nobilebtn = document.querySelector('.mobilebtn')
let active=false
let nav = document.querySelector('.mobilenav')
nobilebtn.addEventListener('click',function(){
    if (active==true){
        nav.style.display='none'
        console.log('nav opened')
        active=false
    }
    else if (active==false){
        nav.style.display='flex'
        nav.style.transition='20s'
        console.log('nav Closed')
        active=true
    }
})