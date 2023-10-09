// button over top
var myButton = document.getElementById("gototop");
window.onscroll = function () { scrollFunction(); };
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  myButton.style.transition = '3s';
}
// button over top

// change backgrond-color in navbar with down
document.addEventListener('scroll', () => {
  const header = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    header.classList.add('stickyTop');
  } else {
    header.classList.remove('stickyTop');
  }
});
// change backgrond-color in navbar with down

// click to change status page from light to dark
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
// click to change status page from light to dark

// hover and click on image to show box data
var data = [
  { text: 'Model-Car: Hello from El-Trip ,This is models cars one', variable: 'text', id: 'typeOne' },
  { text: 'Model-Car: Hello from El-Trip This is models cars tow', variable: 'textOne', id: 'typeTow' },
  { text: 'Model-Car: Hello from El-Trip This is models cars three', variable: 'textTow', id: 'typeThree' },
  { text: 'Model-Car: Hello from El-Trip This is models cars four', variable: 'textThree', id: 'typeFour' },
  { text: 'Model-Car: Hello from El-Trip This is models cars five', variable: 'textFour', id: 'typeFive' },
  { text: 'Model-Car: Hello from El-Trip This is models cars sex', variable: 'textFive', id: 'typeSex' },
  { text: 'Model-Car: Hello from El-Trip This is models cars seven', variable: 'textSex', id: 'typeEight' },
];
// mouseover
function startTypewriter(button, text, variable, id) {
  var buttonElement = document.getElementById(button);
  if (buttonElement) {
    buttonElement.addEventListener('click', function () {
      'use strict';
      var textIndex = 0;
      var typeWriter = setInterval(function () {
        document.getElementById(id).textContent += text[textIndex];
        textIndex = textIndex + 1;

        if (textIndex > text.length - 1) {
          clearInterval(typeWriter);
          setTimeout(function () {
            document.getElementById(id).textContent = 'El-Trip ';
          }, 10000);
        }

      }, 50);
    })
  };
  function haltFunction() {
    clearInterval(typeWriter);
  }
}

startTypewriter('buttonOne', data[0].text, data[0].variable, data[0].id);
startTypewriter('buttonTow', data[1].text, data[1].variable, data[1].id);
startTypewriter('buttonThree', data[2].text, data[2].variable, data[2].id);
startTypewriter('buttonFour', data[3].text, data[3].variable, data[3].id);
startTypewriter('buttonFive', data[4].text, data[4].variable, data[4].id);
startTypewriter('buttonSex', data[5].text, data[5].variable, data[5].id);
startTypewriter('buttonEight', data[6].text, data[6].variable, data[6].id);
// hover and click on image to show box data

// multi steps form data
let multiStepFrom = document.querySelector("[data-multi-step]");
if (multiStepFrom != null) {
  var formSteps = [...multiStepFrom.querySelectorAll("[data-step]")]


  let NextStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
  })

  if (NextStep < 0) {
    NextStep = 0;
    showNextStep();
  }

  multiStepFrom.addEventListener("click", go => {
    let checkValio;
    if (go.target.matches("[data-next]")) {
      checkValio = 1;
    } else if (go.target.matches("[data-Previous]")) {
      checkValio = -1;
    }

    if (checkValio == null) return

    let inputs = [...formSteps[NextStep].querySelectorAll("input")];
    console.log("this-step")
    let allValio = inputs.every(input => input.checkValidity());
    if (allValio) {
      NextStep += checkValio;
      showNextStep();
    }
  })

  function showNextStep() {
    formSteps.forEach((step, index) => {
      step.classList.toggle("active", index === NextStep)
    })
  }
};
// multi steps form data

// control form data especially contact us
function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["message"].value;
  var error = "";

  if (name == "") {
    error += "Please enter your name.\n";
  }

  if (email == "") {
    error += "Please enter your email address.\n";
  } else if (!validateEmail(email)) {
    error += "Please enter a valid email address.\n";
  }

  if (message == "") {
    error += "Please enter a message.\n";
  }

  if (error != "") {
    alert(error);
    return false;
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
// control form data priveat contact us

// select especially downlist
let customSelects = document.getElementsByClassName("custom-select");
let totalCustomSelects = customSelects.length;
for (let i = 0; i < totalCustomSelects; i++) {
  let selectElement = customSelects[i].getElementsByTagName("select")[0];
  let options = selectElement.getElementsByTagName("option");
  let totalOptions = options.length;

  let selectedDiv = document.createElement("DIV");
  selectedDiv.setAttribute("class", "select-selected");
  selectedDiv.innerHTML = options[selectElement.selectedIndex].innerHTML;
  customSelects[i].appendChild(selectedDiv);

  let optionsDiv = document.createElement("DIV");
  optionsDiv.setAttribute("class", "select-items select-hide");

  for (let j = 1; j < totalOptions; j++) {
    let optionDiv = document.createElement("DIV");
    optionDiv.innerHTML = options[j].innerHTML;
    optionDiv.addEventListener("click", function (e) {
      let s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      let sl = s.length;

      for (let k = 0; k < sl; k++) {
        if (s.options[k].innerHTML === this.innerHTML) {
          s.selectedIndex = k;
          selectedDiv.innerHTML = this.innerHTML;

          let selectedItems = this.parentNode.getElementsByClassName("same-as-selected");
          let totalSelectedItems = selectedItems.length;

          for (let m = 0; m < totalSelectedItems; m++) {
            selectedItems[m].removeAttribute("class");
          }

          this.setAttribute("class", "same-as-selected");
          break;
        }
      }

      selectedDiv.click();
    });

    optionsDiv.appendChild(optionDiv);
  }

  customSelects[i].appendChild(optionsDiv);

  selectedDiv.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  let x = document.getElementsByClassName("select-items");
  let y = document.getElementsByClassName("select-selected");
  let xl = x.length;
  let yl = y.length;
  let arrNo = [];

  for (let i = 0; i < yl; i++) {
    if (elmnt === y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }

  for (let i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);
// select especially downlist



// search from hayper cars 
function myFunction() {
  var inputSerch, filterOfHeberCars, ulOfHeberCars, liOfHeberCars, aOfHeberCars, anItem, textValue;

  inputSerch = document.getElementById("myInput");

  filterOfHeberCars = inputSerch.value.toUpperCase();

  ulOfHeberCars = document.getElementById("myUL");

  liOfHeberCars = ulOfHeberCars.getElementsByTagName("li");

  for (anItem = 0; anItem < liOfHeberCars.length; anItem++) {

    aOfHeberCars = liOfHeberCars[anItem].getElementsByTagName("a")[0];

    textValue = aOfHeberCars.textContent || aOfHeberCars.innerText;

    if (textValue.toUpperCase().indexOf(filterOfHeberCars) > -1) {

      liOfHeberCars[anItem].style.display = "";

    } else {

      liOfHeberCars[anItem].style.display = "none";
    }
  }

}
// search from hayper cars 

// image comparison slider
const slider = document.querySelector(".slider input");

const img = document.querySelector(".images .img-2");

const dragLine = document.querySelector(".slider .drag-line");

slider.oninput = () => {
  let sliderVal = slider.value;
  dragLine.style.left = sliderVal + "%";
  img.style.width = sliderVal + "%";
};

const slider1 = document.querySelector(".slider-1 input");

const img1 = document.querySelector(".images-1 .img-4");

const dragLine1 = document.querySelector(".slider-1 .drag-line-1");

slider1.oninput = () => {
  let sliderVal1 = slider1.value;
  dragLine1.style.left = sliderVal1 + "%";
  img1.style.width = sliderVal1 + "%";
};

const slider2 = document.querySelector(".slider-2 input");

const img2 = document.querySelector(".images-2 .img-6");

const dragLine2 = document.querySelector(".slider-2 .drag-line-2");

slider2.oninput = () => {
  let sliderVal2 = slider2.value;
  dragLine2.style.left = sliderVal2 + "%";
  img2.style.width = sliderVal2 + "%";
}

const slider3 = document.querySelector(".slider-3 input");

const img3 = document.querySelector(".images-3 .img-8");

const dragLine3 = document.querySelector(".slider-3 .drag-line-3");

slider3.oninput = () => {
  let sliderVal3 = slider3.value;
  dragLine3.style.left = sliderVal3 + "%";
  img3.style.width = sliderVal3 + "%";
};

const slider4 = document.querySelector(".slider-4 input");

const img4 = document.querySelector(".images-4 .img-10");

const dragLine4 = document.querySelector(".slider-4 .drag-line-4");

slider4.oninput = () => {
  let sliderVal4 = slider4.value;
  dragLine4.style.left = sliderVal4 + "%";
  img4.style.width = sliderVal4 + "%";
}

// image comparison slider
