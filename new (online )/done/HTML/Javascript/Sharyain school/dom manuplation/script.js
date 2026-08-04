// changing text
// let abc = document.getElementById("h");
// console.dir(abc);
// abc.textContent = "Hello I am dom Maulation"

// add remove set atributes
// let a = document.querySelector("a")
// a.setAttribute("href","https://programmingwithkaran.netlify.app")
// a.setAttribute("style","color:red;")
// console.log(a.getAttribute("style"))
// a.removeAttribute("href")
// console.dir(a)

// add element
// let h1 = document.createElement("h1")
// h1.textContent = "Hello i am H1 created by js"
// document.querySelector("div").prepend(h1)

//  envent listener
// method1
// let h1 = document.querySelector("h1")
// function even(){
//     h1.style.backgroundColor="red"
// }
// h1.addEventListener("dblclick",even)
// // h1.removeEventListener("dblclick",even)
// method2

var num = 0;
let inp = document.querySelector("input");
inp = addEventListener("input", function (text) {
  if (text.data !== null) {
    num += 1;
    console.log("added");
  } else if (text.data === null) {
    num -= 1;
    console.log("removed");
  }
  let span = document.querySelectorAll("span");
  if (num == 30) {
    inp.document.type= "none"
    let alert = document.createElement("h1");
    alert.textContent = "Max Character Reacher";
    alert.style.color = "red";
    document.body.append(alert);
  } else if (num > 30) {
  
    const element = document.getElementById("h1");
    element.remove();

    
  }

  span[0].textContent = num;
});
