selectorR = document.getElementsByClassName("selectionType");
containerOfItems = document.getElementById("display");
amountRange = document.getElementById('amountrange');
speedSort = document.getElementById('speedrange').valueAsNumber;

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
    div.style.height = `${18 + (ran * 0.4)}%`
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
generateArrayItems(20);


amountRange.addEventListener("change", function(e) {
  generateArrayItems(e.target.valueAsNumber);
});



function bblSort(){
  arr = document.getElementsByClassName("itemDs")
  let i = 0;
  setInterval(function(){
    if(i < arr.length){
      for(let j = 0; j < ( arr.length - i -1 ); j++){
        if(parseFloat(arr[j].dataset.numvalue) >parseFloat( arr[j+1].dataset.numvalue)){
          let temp = arr[j].outerHTML
          arr[j].outerHTML = arr[j + 1].outerHTML
          arr[j+1].outerHTML = temp
        }
      }
      i++;
    }
  },speedSort)
  for(x of arr){
    console.log(x.dataset.numvalue)
  } 
 }
 

//  function switchPos(){
//    console.log("x")
//   arr = document.getElementsByClassName("itemDs")
//         var temp = arr[0].outerHTML 
//         arr[0].outerHTML  = arr[1].outerHTML 
//         arr[1].outerHTML  = temp

//   }
// setInterval(switchPos,500)