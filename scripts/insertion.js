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