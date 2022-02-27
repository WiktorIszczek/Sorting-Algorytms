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