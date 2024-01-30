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

//? ---------------------------------------------------------------

//! ********************** Section 2 Partenaires *******************

// I will be creating a different pen with touch support but right // now I have no time for it due to school

		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");

		let current = 0;
		let prev = 7;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 7 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");

			}

			if (next == 8) {
				next = 0;
			}

			if (prev == -1) {
				prev = 7;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}

    let imageSection2 = document.querySelector(".items").querySelectorAll("img")
    console.log(imageSection2);
    Object.values(DATA.partenaires).forEach((element, index) => {
      imageSection2[index].src = `${element.logo}`
    });
