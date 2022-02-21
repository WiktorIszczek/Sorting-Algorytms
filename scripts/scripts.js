selectorR = document.getElementsByClassName("selectionType");
containerOfItems = document.getElementById("display");
amountRange = document.getElementById('amountrange');

for (el of selectorR) {
  el.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
  });
}

// for (el of listOfItems) {
//     el.setAttribute('style', `background-color:rgba(0, ${el.dataset.numvalue}, 0, 1)`);
//     console.log(el.dataset.numvalue)
// }

function generateArrayItems(num) {
  containerOfItems.innerHTML = "";
  for (let x=0; x < num; x++) {
    const ran = randomValueNum();
    let div = document.createElement("div");
    div.innerHTML = `${ran}`
    div.className = `itemDs`
    div.style.backgroundColor = `rgba( ${ran}, ${ran}, ${ran} , 1)`
    div.style.height = `${100 - (ran * 0.3)}%`
    div.style.fontSize = `${250 / (num/2)}px`
    div.dataset.numvalue =`${ran}`
    containerOfItems.appendChild(div);
  }
}

function randomValueNum() {
  const min = Math.ceil(10);
  const max = Math.floor(200);
  return Math.floor(Math.random() * (max - min)) + min;
}
generateArrayItems(10);


amountRange.addEventListener("change", function(e) {
  generateArrayItems(e.target.valueAsNumber);
});