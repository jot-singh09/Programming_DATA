let submitbtn = document.querySelector(`#addbtn`);
let input = document.querySelector(`input`);
let conformbox = document.querySelector(`#conform`);
let cancelbtn = document.querySelector(`#cancelbtn`);
let conformbtn = document.querySelector(`#conformbtn`);
let changeheading = document.querySelector(`#showtasks`);
let addh1 = document.querySelector(`#previewtask`);
let texterror = document.querySelector(`#showtexterror`);
let buttons = document.querySelectorAll(`button`);
let taskbox= document.querySelector(`#taskbox`);
let showtext = localStorage.getItem("sno");
console.log(localStorage.getItem("sno"));
console.log(showtext);
if (localStorage.getItem("sno") == null) {
  console.log("no sno detected");
  localStorage.setItem("sno", 0);
}
if (showtext == "0") {
  changeheading.textContent = "Add The Task First ";
  changeheading.style.color = "red";
} else if (showtext > "0") {
  console.log("ok");
  changeheading.textContent = "Your Tasks";
  changeheading.classList.add = "bg-green-800";
}

const openpopup = () => {
  conformbox.classList.remove("absolute");
  conformbox.style.opacity = "100";
};
const closepopup = () => {
  conformbox.style.opacity = "0";
  conformbox.classList.add("absolute");
};
const textcounterror = () => {
  console.log("texterror");
  texterror.classList.remove("absolute");
  texterror.style.opacity = "100";
};
const hideerror = () => {
  texterror.classList.add("absolute");
  texterror.style.opacity = "0";
};
submitbtn.addEventListener(`click`, function (event) {
  event.preventDefault();
  let countext = input.selectionStart;
  console.dir(input);
  if (countext < 5) {
    closepopup();
    textcounterror();
  } else if (countext >= 5) {
    openpopup();
    hideerror();
  }

  cancelbtn.addEventListener("click", closepopup);
  conformbtn.addEventListener("click", () => {
    closepopup();

    localStorage.setItem(
      "sno",
      JSON.stringify(Number(localStorage.getItem("sno")) + 1),
    );

    let usertext = input.value;
    console.log(usertext);
    localStorage.setItem(
      `text${localStorage.getItem("sno")}`,
      JSON.stringify(usertext),
    );
    window.location.reload();
  });
});
let sno = localStorage.getItem("sno");
if (sno > 0) {

  taskbox.style.opacity=(`100`)
  
  for (let i = 1; i <= Number(sno); i++) {
    // console.log(localStorage.getItem(JSON.parse('text1')))
    console.log("loop run");
    let crtdiv = document.createElement(`div`)
    crtdiv.classList.add('flex')
    crtdiv.classList.add('gap-2')
    crtdiv.classList.add('justify-between')
    crtdiv.classList.add('px-4')

    // h1
     let showh1 = document.createElement("h1");
    let taskText = localStorage.getItem(`text${i}`);
    let cleanedName = taskText.replace(/^"|"$/g, "");
    showh1.textContent = cleanedName;
    showh1.classList.add("px-10");
    showh1.classList.add("text-xl");
    showh1.classList.add("font-black");
    showh1.classList.add("capitalize");
    crtdiv.appendChild(showh1);

    // button done
    let donebtn = document.createElement(`button`)
    donebtn.textContent = `Done`

    donebtn.classList.add("bg-green-700");
    donebtn.classList.add("px-3");
    donebtn.classList.add("py-0.5");
    donebtn.classList.add("rounded-md");
    donebtn.classList.add("p-1");
    donebtn.classList.add("hover:scale-110");
    donebtn.classList.add("transition-all");
    donebtn.classList.add("duration-700");
    crtdiv.appendChild(donebtn);

    let hr = document.createElement(`hr`) 
    addh1.append(crtdiv)
    addh1.append(hr)
   
    
  }
}

// Function to add event listeners to ALL buttons
function attachButtonListeners() {
    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        // Skip if already has listener (use a flag or check)
        if (!buttons[i].hasAttribute('data-listener')) {
            buttons[i].addEventListener('click', function(eve) {
                console.log(buttons[i]);
            });
            buttons[i].setAttribute('data-listener', 'true'); // Mark as processed
        }
let checkdonebtn = buttons[i];
if (checkdonebtn) {
    checkdonebtn.addEventListener('click', function() {
        showh1.style.textDecoration = 'line-through';
    });
}

// Run on page load
attachButtonListeners();

// When creating new button
function createNewButton() {
    let newBtn = document.createElement('button');
    newBtn.textContent = 'New Button';
    addh1.appendChild(newBtn);
    
    // ✅ Re-run to attach listener to new button
    attachButtonListeners();
}