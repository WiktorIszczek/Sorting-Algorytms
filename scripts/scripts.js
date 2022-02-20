selectorR = document.getElementsByClassName("selectionType");
for (el of selectorR) {
  el.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
  });
}

listOfItems = document.getElementsByClassName("itemDs");
for (el of listOfItems) {
    el.setAttribute('style', `background-color:rgba(0, ${el.dataset.numvalue}, 0, 1)`);
    console.log(el.dataset.numvalue)
}
