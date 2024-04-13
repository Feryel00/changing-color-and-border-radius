let area=document.querySelector("div"),
    input=document.querySelector("input");

    input.addEventListener("input",() =>{
      area.style.borderRadius=input.value;
      area.style.background=input.value;
    })