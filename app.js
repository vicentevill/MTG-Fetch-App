//Fetch Land DB and FetcherOR
const fetchLands = [
  { Name: "Flooded Strand ", Color1: "White", Color2: "Blue" },
  { Name: "Polluted Delta ", Color1: "Blue", Color2: "Black" },
  { Name: "Bloodstained Mire ", Color1: "Black", Color2: "Red" },
  { Name: "Wooded Foothills", Color1: "Red", Color2: "Green" },
  { Name: "Windswept Heath ", Color1: "Green", Color2: "White" },
  { Name: "Marsh Flats ", Color1: "White", Color2: "Black" },
  { Name: "Scalding Tarn", Color1: "Blue", Color2: "Red" },
  { Name: "Verdant Catacombs", Color1: "Black", Color2: "Green" },
  { Name: "Arid Mesa", Color1: "Red", Color2: "White" },
  { Name: "Misty Rainforest ", Color1: "Green", Color2: "Blue" },
];

function fetcherOR(array) {
  for (let i = 0; i < array.length; i++) {
    if (
      [
        colorInput.Color1,
        colorInput.Color2,
        colorInput.Color3,
        colorInput.Color4,
        colorInput.Color5,
      ].includes(array[i].Color1) ||
      [
        colorInput.Color1,
        colorInput.Color2,
        colorInput.Color3,
        colorInput.Color4,
        colorInput.Color5,
      ].includes(array[i].Color2)
    ) {
      fetched.push(array[i].Name);
    }
  }
}
//Dual Land DB and FetcherAND
const shock = [
  { Name: "Blood Crypt", Color1: "Black", Color2: "Red" },
  { Name: "Breeding Pool", Color1: "Green", Color2: "Blue" },
  { Name: "Godless Shrine", Color1: "White", Color2: "Black" },
  { Name: "Hallowed Fountain", Color1: "White", Color2: "Blue" },
  { Name: "Overgrown Tomb", Color1: "Black", Color2: "Green" },
  { Name: "Sacred Foundry", Color1: "Red", Color2: "White" },
  { Name: "Steam Vents", Color1: "Blue", Color2: "Red" },
  { Name: "Stomping Ground", Color1: "Red", Color2: "Green" },
  { Name: "Temple Garden", Color1: "Green", Color2: "White" },
  { Name: "Watery Grave", Color1: "Blue", Color2: "Black" },
];

function fetcherAND(array) {
  for (let i = 0; i < array.length; i++) {
    if (
      [
        colorInput.Color1,
        colorInput.Color2,
        colorInput.Color3,
        colorInput.Color4,
        colorInput.Color5,
      ].includes(array[i].Color1) &&
      [
        colorInput.Color1,
        colorInput.Color2,
        colorInput.Color3,
        colorInput.Color4,
        colorInput.Color5,
      ].includes(array[i].Color2)
    ) {
      fetched.push(array[i].Name);
    }
  }
}
//Fethced
let fetched = [];
//Seletors
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const checkbox = document.querySelectorAll("input#checkbox");
const colors = document.querySelectorAll("img.color");
const colorsOutline = document.querySelectorAll("div.colorSelection");
const next = document.querySelector("div#next");
const back = document.querySelector("div#back");
const gap = document.querySelector("div#colors");
const infoButton = document.querySelector("#info");
const toolTip = document.querySelector("#toolTip");
const cycles = document.querySelector("#cycles");
const andOrText = document.querySelector("#andOr");
//For more options these will have to switch to querySelectorAll
const fetchable = document.querySelector(".fetchable");
const dual = document.querySelector(".dual");
const landList = document.querySelector("#landList");
const landListArea = document.querySelector("#listArea");
const copied = document.querySelector("#copied");
const copyButton = document.querySelector("#copyButton");
//
let toolTipCounter = 0;
let nextCounter = 0;
let bgColors = ["#9bd3ae", "#f9aa8f", "#b5aafa", "#aae0fa", "#fffbd5"];
let colorSwitches = [0, 0, 0, 0, 0];
let colorInput = {
  Color1: "",
  Color2: "",
  Color3: "",
  Color4: "",
  Color5: "",
};
let = nextSwitch = 0;
let fetchSwitch = 0;
let dualSwitch = 0;

//Functions
function trueCheck(int) {
  checkbox[int].checked = true;
  addColor();
  showNext();
  if (checkbox[int].checked === true) {
    colorsOutline[int].style.visibility = "unset";
  }
}

function falseCheck(int) {
  checkbox[int].checked = false;
  removeColor();
  showNext();
  if (checkbox[int].checked === false) {
    colorsOutline[int].style.visibility = "hidden";
  }
}

function addColor() {
  if (checkbox[0].checked === true) {
    colorInput.Color1 = "White";
  }
  if (checkbox[1].checked === true) {
    colorInput.Color2 = "Blue";
  }
  if (checkbox[2].checked === true) {
    colorInput.Color3 = "Black";
  }
  if (checkbox[3].checked === true) {
    colorInput.Color4 = "Red";
  }
  if (checkbox[4].checked === true) {
    colorInput.Color5 = "Green";
  }
}

function removeColor() {
  if (checkbox[0].checked === false) {
    colorInput.Color1 = "";
  }
  if (checkbox[1].checked === false) {
    colorInput.Color2 = "";
  }
  if (checkbox[2].checked === false) {
    colorInput.Color3 = "";
  }
  if (checkbox[3].checked === false) {
    colorInput.Color4 = "";
  }
  if (checkbox[4].checked === false) {
    colorInput.Color5 = "";
  }
}

function reduceAdd(total, num) {
  return total + num;
}

function showNext() {
  if (colorSwitches.reduce(reduceAdd) !== 0) {
    next.style.visibility = "unset";
  } else {
    next.style.visibility = "hidden";
  }
}

function nextPage1() {
  h1.innerHTML = "Which land cycles do you want?";
  infoButton.style.display = "none";
  cycles.style.display = "flex";
  back.style.visibility = "unset";
  for (let i = 0; i < 5; i++) {
    colorsOutline[i].style.display = "none";
    colors[i].style.display = "none";
  }
}

function backPage() {
  h1.innerHTML = "Choose your commander's color identity";
  infoButton.style.display = "block";
  cycles.style.display = "none";
  back.style.visibility = "hidden";
  for (let i = 0; i < 5; i++) {
    colorsOutline[i].style.display = "flex";
    colors[i].style.display = "flex";
  }
}

function clearCheckboxes() {
  for (let i = 0; i < 5; i++) {
    checkbox[i].checked = false;
  }
}

function singleSelection() {
  if (colorSwitches.reduce(reduceAdd) === 1) {
    dual.style.display = "none";
    andOrText.style.display = "none";
    back.style.top = "125px";
    next.style.top = "45px";
  } else {
    dual.style.display = "block";
    andOrText.style.display = "block";
    back.style.top = "64px";
    next.style.top = "-16px";
  }
}
function resetDual() {
  dualSwitch = 0;
  dual.style.color = "#d9d9d9";
  dual.style.backgroundColor = "#202020";
}

function resetFetch() {
  fetchSwitch = 0;
  fetchable.style.color = "#d9d9d9";
  fetchable.style.backgroundColor = "#202020";
}
function processSelections() {
  if (fetchSwitch === 1) {
    fetcherOR(fetchLands);
  }
  if (dualSwitch === 1) {
    fetcherAND(shock);
  }
  for (let i = 0; i < fetched.length; i++) {
    landList.innerHTML += `<li>1 ${fetched[i]}</li>`;
  }
  console.log(fetched);
}

function showLoadingPage() {
  next.style.visibility = "unset";
  h1.innerHTML = "One moment...";
  h1.style.top = "-75px";
  cycles.style.display = "none";
  back.style.display = "none";
  next.style.visibility = "hidden";
  document.querySelector(".lds-dual-ring").style.display = "inline-block";
}

function nextPage2() {
  document.querySelector(".lds-dual-ring").style.display = "none";
  h1.innerHTML = "All done! We're back with your list!";
  h1.style.top = "0px";
  landListArea.style.display = "flex";
  next.style.top = "-16px";
  next.style.visibility = "unset";
  next.innerHTML = `<h2>Restart</h2><img id="arrows" src="arrows.svg" alt="arrows" />`;
}
//Testing

copyButton.addEventListener("click", () => {
  let fetchedCopy = fetched.map((item) => "1 " + item);
  navigator.clipboard.writeText(fetchedCopy.join(" "));
  copyButton.style.top = "160px";
  copyButton.style.backgroundColor = "white";
  copyButton.innerHTML = `<img src="copyClick.svg" alt="copy to clipboard" />`;
  setTimeout(() => {
    copyButton.style.backgroundColor = "#2d2d2d";
    copyButton.innerHTML = `<img src="copy.svg" alt="copy to clipboard" />`;
  }, 100);
  copied.style.display = "block";
  setTimeout(() => {
    copied.style.display = "none";
    copyButton.style.top = "170px";
  }, 2000);
});

//Run
checkbox.onload = clearCheckboxes();
//^Clear checkboxes

body.style.backgroundColor = bgColors[Math.floor(Math.random() * 5)];
//^Background color changer

for (let i = 0; i < checkbox.length; i++) {
  colors[i].addEventListener("click", () => {
    if (colorSwitches[i] === 0) {
      colorSwitches[i] = 1;
      trueCheck(i);
    } else {
      colorSwitches[i] = 0;
      falseCheck(i);
    }
  });
}
//^Color button click events

infoButton.addEventListener("click", () => {
  if (toolTipCounter === 0) {
    toolTipCounter = 1;
    toolTip.style.display = "block";
  } else {
    toolTipCounter = 0;
    toolTip.style.display = "none";
  }
});

next.addEventListener("click", () => {
  nextCounter += 1;
  if (nextCounter === 1) {
    nextPage1();
    singleSelection();
  }
  if (nextCounter === 3) {
    location.reload();
  } else {
    if (fetchSwitch === 1 || dualSwitch === 1) {
      nextCounter = 2;
      processSelections();
      showLoadingPage();
      setTimeout(() => {
        nextPage2();
      }, 500);
    }
  }
});

back.addEventListener("click", () => {
  nextCounter = 0;
  resetDual();
  resetFetch();
  backPage();
  back.style.top = "";
  next.style.top = "";
});

fetchable.addEventListener("click", () => {
  if (fetchSwitch === 0) {
    fetchSwitch = 1;
    fetchable.style.color = "#202020";
    fetchable.style.backgroundColor = "#d9d9d9";
  } else {
    fetchSwitch = 0;
    fetchable.style.color = "#d9d9d9";
    fetchable.style.backgroundColor = "#202020";
  }
});

dual.addEventListener("click", () => {
  if (dualSwitch === 0) {
    dualSwitch = 1;
    dual.style.color = "#202020";
    dual.style.backgroundColor = "#d9d9d9";
  } else {
    dualSwitch = 0;
    dual.style.color = "#d9d9d9";
    dual.style.backgroundColor = "#202020";
  }
});
