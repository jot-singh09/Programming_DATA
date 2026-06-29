let navmenu = document.querySelector('#navmenu');  
let nav1 = document.querySelector('#navopen1');  
let nav = document.querySelector('.opennav');
let ji = document.querySelector('#ji');
let isactive=false;
navmenu.addEventListener('click',function(){

    if (isactive == false) {
    nav.style.width = '180px';  // Show
    nav.style.opacity = '100';
    nav1.style.width = '180px';  // Show
    nav1.style.opacity = '100';
    ji.style.display = 'flex';
    isactive=true
} else if (isactive==true) {
    nav.style.width = '0px';    // Hide
    nav.style.opacity = '0';
    nav1.style.width = '0px';    // Hide
    nav1.style.opacity = '0';
    isactive=false
  }

})