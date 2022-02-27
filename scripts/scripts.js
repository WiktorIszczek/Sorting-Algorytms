selectorR = document.getElementsByClassName("activeselector");
selectorOFF = document.getElementsByClassName("offselector");
containerOfItems = document.getElementById("display");
amountRange = document.getElementById("amountrange");
sortButton = document.getElementById("sortButton");
resetButton = document.getElementById("resetButton");
logg = document.getElementById("logg");
headder = document.getElementById("sortingType");
speedSort = document.getElementById("speedrange").valueAsNumber;
let sortingMethod = "Bubble";

generateArrayItems(20);

for (el of selectorR) {
  el.addEventListener("click", (e) => {
    if (sortButton.disabled == false) {
      console.log(e);
      sortingMethod = e.target.innerHTML;
      headder.innerHTML = `Type: ${sortingMethod}`;
      console.log(sortingMethod);
    }
  });
}

for (el of selectorOFF) {
  el.addEventListener("click", (e) => {
    alert(`${e.target.innerHTML} has not been created yet`);
  });
}


function generateArrayItems(num) {
  containerOfItems.innerHTML = "";
  for (let x = 0; x < num; x++) {
    const ran = randomValueNum();
    let div = document.createElement("div");
    div.innerHTML = `${ran}`;
    div.className = `itemDs`;
    div.style.backgroundColor = `rgba( ${ran}, ${ran}, ${ran} , 1)`;
    div.style.height = `${18 + ran * 0.4}%`;
    div.style.fontSize = `${15 / (num / 2)}vw`;
    div.dataset.numvalue = `${ran}`;
    containerOfItems.appendChild(div);
  }
}

function randomValueNum() {
  const min = Math.ceil(10);
  const max = Math.floor(200);
  return Math.floor(Math.random() * (max - min)) + min;
}

function ressetAray() {
  logg.innerHTML = 'logic: <span class="lTrue">value</span>';
  document.getElementById("amountrange").value = 20;
  document.getElementById("speedrange").value = 500;
  speedSort = 500;
  generateArrayItems(20);
}

amountRange.addEventListener("change", function (e) {
  generateArrayItems(e.target.valueAsNumber);
});
document.getElementById("speedrange").addEventListener("change", function (e) {
  speedSort = document.getElementById("speedrange").valueAsNumber;
});

function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n);
  });
}

function startSorting() {
  switch (sortingMethod) {
    case "Bubble":
      bblSort();
      break;

    case "Inseration":
      insertionSort();
      break;

    default:
      alert(ERROR);
  }
}
