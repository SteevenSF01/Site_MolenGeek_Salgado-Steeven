import DATA from "./../json/molengeek.json" assert { type: "json" };
console.log(DATA);

//! ********************** Menu Burger ***************************
let sidebar = document.querySelector(".sidebar");
let menuButton = document.querySelector(".menuButton");
let menuFermer = document.querySelector(".menuFermer");

function showSidebar(event) {
  event.preventDefault();
  sidebar.style.display = "flex";
  sidebar.style.padding = "0";
  setTimeout(() => {
    sidebar.style.width = "250px";
  }, 10);
}
menuButton.addEventListener("click", showSidebar);

function hideSidebar() {
    sidebar.style.width = "0px";
  setTimeout(() => {
    
    sidebar.style.display = "none"
  }, 1200);
 
}
menuFermer.addEventListener("click", hideSidebar);
//! *********************** Fin Menu Burger ************************

//? ----------------------------------------------------------------

//! ************************ DropDown Langue ***********************

document.querySelector(".dropdown").addEventListener("focusin", () =>{
  document.querySelector(".dropdown-contenue").style.display ="flex"

})
document.querySelector(".dropdown").addEventListener("focusout", () =>{
    document.querySelector(".dropdown-contenue").style.display ="none"
})

//! *********************** Fin DropDown ***************************