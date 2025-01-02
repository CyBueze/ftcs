document.addEventListener("DOMContentLoaded",()=>{
  const menu = document.getElementById("menu")
  const dropDownMenu = document.getElementById("dropDownMenu")
  
  menu.addEventListener("click",()=>{
    dropDownMenu.classList.toggle("hidden")
  } )
})