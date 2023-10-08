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

// Image Comparison Slider
function initComparisons() {
  var imageTow, movent;
  imageTow = document.getElementsByClassName("img-comp-overlay");
  for (movent = 0; movent < imageTow.length; movent++) {

    compareImages(imageTow[movent]);
  }

  function compareImages(img) {

    var slider, img, clicked = 0, moventFirst, moventSecond;

    moventFirst = img.offsetWidth;
    moventSecond = img.offsetHeight;
    img.style.width = (moventFirst / 2) + "px";

    slider = document.createElement("DIV");

    slider.setAttribute("class", "img-comp-slider");

    img.parentElement.insertBefore(slider, img);

    slider.style.top = (moventSecond / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (moventFirst / 2) - (slider.offsetWidth / 2) + "px";

    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchend", slideFinish);

    function slideReady(aMovent) {
      aMovent.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }

    function slideFinish() {
      clicked = 0;
    }

    function slideMove(aMovent) {
      var positionMovent;
      if (clicked == 0) return false;

      positionMovent = getCursorPos(aMovent)

      if (positionMovent < 0) positionMovent = 0;
      if (positionMovent > moventFirst) positionMovent = moventFirst;
      slide(positionMovent);
    }

    function getCursorPos(aMovent) {
      var after, before = 0;
      aMovent = (aMovent.changedTouches) ? aMovent.changedTouches[0] : aMovent;
      after = img.getBoundingClientRect();
      before = aMovent.pageX - after.left;
      before = before - window.pageXOffset;
      return before;
    }

    function slide(before) {
      img.style.width = before + "px";
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}
// Image Comparison Slider

function initComparisonsTow() {
  var imageTowSliderTow, moventTow;
  imageTowSliderTow = document.getElementsByClassName("img-comp-overlay-tow");
  for (moventTow = 0; moventTow < imageTowSliderTow.length; moventTow++) {

    compareImagesTow(imageTowSliderTow[moventTow]);
  }

  function compareImagesTow(imgSliderTow) {

    var sliderTow, imgSliderTow, clickedTow = 0, moventFirstSliderTow, moventSecondSliderTow;

    moventFirstSliderTow = imgSliderTow.offsetWidth;
    moventSecondSliderTow = imgSliderTow.offsetHeight;
    imgSliderTow.style.width = (moventFirstSliderTow / 4) + "px";

    sliderTow = document.createElement("DIV");

    sliderTow.setAttribute("class", "img-comp-slider-tow");

    imgSliderTow.parentElement.insertBefore(sliderTow, imgSliderTow);

    sliderTow.style.top = (moventSecondSliderTow / 4) - (sliderTow.offsetHeight / 4) + "px";
    sliderTow.style.left = (moventFirstSliderTow / 4) - (sliderTow.offsetWidth / 4) + "px";

    sliderTow.addEventListener("mousedown", slideReadyTow);
    window.addEventListener("mouseup", slideFinishTow);
    sliderTow.addEventListener("touchstart", slideReadyTow);
    window.addEventListener("touchend", slideFinishTow);

    function slideReadyTow(aMoventTow) {
      aMoventTow.preventDefault();
      clickedTow = 1;
      window.addEventListener("mousemove", slideMoveTow);
      window.addEventListener("touchmove", slideMoveTow);
    }

    function slideFinishTow() {
      clickedTow = 0;
    }

    function slideMoveTow(aMoventTow) {
      var positionMovent;
      if (clickedTow == 0) return false;

      positionMovent = getCursorPosTow(aMoventTow)

      if (positionMovent < 0) positionMovent = 0;
      if (positionMovent > moventFirstSliderTow) positionMovent = moventFirstSliderTow;
      slideTow(positionMovent);
    }

    function getCursorPosTow(aMoventTow) {
      var afterTow, beforeTow = 0;
      aMoventTow = (aMoventTow.changedTouchesTow) ? aMoventTow.changedTouchesTow[0] : aMoventTow;
      afterTow = imgSliderTow.getBoundingClientRect();
      beforeTow = aMoventTow.pageX - afterTow.left;
      beforeTow = beforeTow - window.pageXOffset;
      return beforeTow;
    }

    function slideTow(beforeTow) {
      imgSliderTow.style.width = beforeTow + "px";
      sliderTow.style.left = imgSliderTow.offsetWidth - (sliderTow.offsetWidth / 4) + "px";
    }
  }
}