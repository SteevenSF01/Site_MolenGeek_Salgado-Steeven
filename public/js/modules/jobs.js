import DATA from "./../../json/molengeek.json" assert { type: "json" };
console.log(DATA.jobs);


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


let liResaux = document.querySelector(".resauxSoc").querySelectorAll("a")

Object.values(DATA.reseauxSociaux).forEach((element,index) => {
	liResaux[index].href = element
})


//! ************************ Jobs ***************************

let lesPostes = document.querySelectorAll(".postesJobs")
let descriptionJobs = document.querySelectorAll(".descriptionJobs")

descriptionJobs.forEach(element => {
  console.log(element.innerText);
});

DATA.jobs.forEach((element,index) => {
	lesPostes[index].innerText = element.poste
})
Object.values(DATA.jobs).forEach((element,index) => {
	descriptionJobs[index].innerText = element.description
})
