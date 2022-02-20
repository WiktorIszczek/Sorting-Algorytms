selectorR = document.getElementsByClassName("selectionType");
      for(el of selectorR){
        el.addEventListener("click",(e)=>{
            console.log(e.target.innerHTML );
        })
      }