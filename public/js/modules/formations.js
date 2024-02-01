import DATA from "./../../json/molengeek.json" assert { type: "json" };
// console.log(DATA.reseauxSociaux);

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
    sidebar.style.display = "none";
  }, 1200);
}
menuFermer.addEventListener("click", hideSidebar);
//! *********************** Fin Menu Burger ************************

//? ----------------------------------------------------------------

//! ************************ DropDown Langue ***********************

document.querySelector(".dropdown").addEventListener("focusin", () => {
  document.querySelector(".dropdown-contenue").style.display = "flex";
});
document.querySelector(".dropdown").addEventListener("focusout", () => {
  document.querySelector(".dropdown-contenue").style.display = "none";
});

//! *********************** Fin DropDown ***************************

let liResaux = document.querySelector(".resauxSoc").querySelectorAll("a");

Object.values(DATA.reseauxSociaux).forEach((element, index) => {
  liResaux[index].href = element;
});

//! ************************** Acrodeon ***************************

let bntLongues = document.querySelector(".btnfl");
let bntCourtes = document.querySelector(".btnfc");

bntLongues.addEventListener("click", () => {
  document.querySelector(".formationsLongues").style.display = "block";
  document.querySelector(".formationsCourtes").style.display = "none";
});
bntCourtes.addEventListener("click", () => {
  document.querySelector(".formationsLongues").style.display = "none";
  document.querySelector(".formationsCourtes").style.display = "flex";
});

//! *********************** Card Formations ***********************

//? *********************** Formation longues **********************

let nomFormation = document.querySelectorAll(".fNom");
let durForm = document.querySelectorAll(".fDuree");

//? les conditions
let condingCondition = document.querySelectorAll(".condingCondition");
let mkcondition = document.querySelectorAll(".mkCondition");
let wbCondition = document.querySelectorAll(".wbCondition");
let awscondition = document.querySelectorAll(".awsCondition");
let sfacondition = document.querySelectorAll(".sfaCondition");

Object.keys(DATA.formations.formationsLongues).forEach((element, index) => {
  nomFormation[index].innerText = element;
});

function inserer(DATA, cible) {
  let formationsLongues = DATA.formations.formationsLongues;
  Object.keys(formationsLongues).forEach((key, index) => {
    let formation = formationsLongues[key];
    cible[
      index
    ].innerText = `Nom : ${formation.Nom} \n Durée : ${formation.Duree}\n Descriptif : ${formation.Descriptif} `;
  });
}
inserer(DATA, durForm);

function lesConditions(formation, cible) {
  Object.keys(formation).forEach((key, index) => {
    let conditionValue = formation[key];

    if (conditionValue === null) {
      conditionValue = "Pas d'âge requis";
    }
    cible[index].innerText += ` ${conditionValue}`;
  });
}

lesConditions(
  DATA.formations.formationsLongues.codingSchool.condition,
  condingCondition
);
lesConditions(
  DATA.formations.formationsLongues.marketingDigital.condition,
  mkcondition
);
lesConditions(
  DATA.formations.formationsLongues.webmaster360.condition,
  wbCondition
);
lesConditions(DATA.formations.formationsLongues.aws.condition, awscondition);
lesConditions(
  DATA.formations.formationsLongues.salesforceAdmin.condition,
  sfacondition
);
//? ************************** Fin Formations longues ******************

//? *************************  Fomations Courtes ********************

let forCourtes = document
  .querySelector(".formationsCourtes")
  .querySelectorAll("p");

Object.values(DATA.formations.formationsCourtes).forEach((element, index) => {
  forCourtes[index].innerText = ` ${element.Nom} \n ${element.pack}`;
});

//! ******************************* Fin Cards **************************

//! ****************************** Temoignage ***************************

let lesIframe = document.querySelectorAll("iframe");

lesIframe[0].src = DATA.videosTemoignage.videoI;
lesIframe[1].src = DATA.videosTemoignage.videoII;

//! ******************************* Fin Temoignage ************************



//! ******************************* FAQ ******************************

let question = document.querySelectorAll(".questionFaq");
let reponse = document.querySelectorAll(".reponseFaq");

let arrayReponse = [];
let arrayQuestion = [];

for (let key in DATA.FAQ) {
  if (key.startsWith("question")) {
    arrayQuestion.push(DATA.FAQ[key]);
  } else if (key.startsWith("reponse")) {
    arrayReponse.push(DATA.FAQ[key]);
  }
}

function faq(array, cible) {
  array.forEach((element, index) => {
    cible[index].innerText = element;
  });
}
faq(arrayQuestion, question);
faq(arrayReponse, reponse);

//! ******************************** Fin FAQ **************************

