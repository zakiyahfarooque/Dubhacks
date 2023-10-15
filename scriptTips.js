var factList = [
"The average college student produces 640 pounds of solid waste each year, including 500 disposable cups and 320 pounds of paper.", /*0*/
"The US makes up only 5% of the world population, but it throws away enough plastic bottles in a week to encircle the Earth 5 times!", /*1*/
"We toss out two billion plastic razors, a million and a half tons of paper towels, and 12 billion disposable diapers annually.", /*2*/
"On average, ONE supermarket goes through 60,500,000 paper bags per year! Bring a reusable bag instead!", /*3*/
"25% of the bottled water you buy is really municipal tap water, so you might as well pass on the plastic bottle", /*4*/  
]

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact () {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

