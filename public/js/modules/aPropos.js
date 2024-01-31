import DATA from "../../json/molengeek.json" assert { type: "json" };
console.log(DATA.reseauxSociaux);


let liResaux = document.querySelector(".resauxSoc").querySelectorAll("a")

Object.values(DATA.reseauxSociaux).forEach((element,index) => {
	liResaux[index].href = element
	console.log(element);
})