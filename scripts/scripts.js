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

for (el of selectorR) {
  el.addEventListener("click", (e) => {
    if(sortButton.disabled==false){
      console.log(e)
      sortingMethod = e.target.innerHTML
      headder.innerHTML = `Type: ${sortingMethod}`
      console.log(sortingMethod);
    }
  });
}
for (el of selectorOFF){
  el.addEventListener("click", (e) => {
    alert(`${e.target.innerHTML} has not been created yet`)
  });
}
// for (el of listOfItems) {
//     el.setAttribute('style', `background-color:rgba(0, ${el.dataset.numvalue}, 0, 1)`);
//     console.log(el.dataset.numvalue)
// }

function generateArrayItems(num) {
  containerOfItems.innerHTML = "";
  for (let x = 0; x < num; x++) {
    const ran = randomValueNum();
    let div = document.createElement("div");
    div.innerHTML = `${ran}`;
    div.attributes.alt = "TEXT";
    div.className = `itemDs`;
    div.style.backgroundColor = `rgba( ${ran}, ${ran}, ${ran} , 1)`;
    div.style.height = `${18 + ran * 0.4}%`;
    div.style.fontSize = `${250 / (num / 2)}px`;
    div.dataset.numvalue = `${ran}`;
    containerOfItems.appendChild(div);
  }
}

function randomValueNum() {
  const min = Math.ceil(10);
  const max = Math.floor(200);
  return Math.floor(Math.random() * (max - min)) + min;
}

function ressetAray(){
  logg.innerHTML = 'logic: <span class="lTrue">value</span>'
  document.getElementById("amountrange").value  = 20
  document.getElementById("speedrange").value  = 500
  speedSort = 500;
  generateArrayItems(20);
}
generateArrayItems(20);

amountRange.addEventListener("change", function (e) {
  generateArrayItems(e.target.valueAsNumber);
});
document.getElementById("speedrange").addEventListener("change", function (e) {
  speedSort = document.getElementById("speedrange").valueAsNumber;
});

function delay(n){
  return new Promise(function(resolve){
      setTimeout(resolve,n);
  });
}

function startSorting(){
  switch (sortingMethod) {
    case "Bubble":
      bblSort()
      break;
  
    case "Inseration":
      insertionSort()
      break;
    default:
      alert(ERROR)
  }
}

async  function bblSort(){
  sortButton.disabled  = true
  amountRange.disabled  = true
  resetButton.disabled  = true
  arr = document.getElementsByClassName("itemDs")
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < ( arr.length - i -1 ); j++){
      if(parseFloat(arr[j].dataset.numvalue) > parseFloat(arr[j+1].dataset.numvalue)){
        logg.innerHTML = `${parseFloat(arr[j].dataset.numvalue)} > ${parseFloat(arr[j+1].dataset.numvalue)}: <span class="lTrue">TRUE - swap</span>`
      }else{
        logg.innerHTML = `${parseFloat(arr[j].dataset.numvalue)} > ${parseFloat(arr[j+1].dataset.numvalue)}: <span class="lFalse">FALSE - skip</span>`
      }
      arr[j].classList.toggle("selected")
      arr[j+1].classList.toggle("selected")
      await delay(1010 - speedSort);

      if(parseFloat(arr[j].dataset.numvalue) > parseFloat(arr[j+1].dataset.numvalue)){
        let temp = arr[j].outerHTML
        arr[j].outerHTML = arr[j + 1].outerHTML
        arr[j+1].outerHTML = temp   
      }
      arr[j].classList.toggle("selected")
      arr[j+1].classList.toggle("selected")
    }
  }
  logg.innerHTML = 'Sorting: <span class="lTrue">complete</span>'
  sortButton.disabled  = false
  amountRange.disabled  = false
  resetButton.disabled  = false
  headder.innerHTML = `Type: ${sortingMethod}`
}

async function insertionSort() {
  sortButton.disabled  = true
  amountRange.disabled  = true
  resetButton.disabled  = true
  arr = document.getElementsByClassName("itemDs")
  let n = arr.length;
      for (let i = 1; i < n; i++) {
          let current = arr[i];
          current.classList.toggle("pointer")
          logg.innerHTML = `current: <span class="lTrue">${current.dataset.numvalue}</span>`
          let j = i-1; 
          while ((j > -1) && ((parseFloat(current.dataset.numvalue)) < (parseFloat(arr[j].dataset.numvalue)))) {
            await delay(1010 - speedSort);
            arr[j].classList.toggle("selected")
            arr[j+1].outerHTML = arr[j].outerHTML;
            arr[j+1].classList.toggle("selected")
              j--;
          }
          current.classList.toggle("pointer")
          arr[j+1].outerHTML = current.outerHTML;
      }
      logg.innerHTML = 'Sorting: <span class="lTrue">complete</span>'
      sortButton.disabled  = false
      amountRange.disabled  = false
      resetButton.disabled  = false
}