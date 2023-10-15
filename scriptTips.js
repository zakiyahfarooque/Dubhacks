var factList = [
"Black and indigenous women in the U.S. are roughly three and half times more likely to die from pregnancy-related complications than white women", /*0*/
"Criminalising abortion doesn’t stop abortions, it only makes it unsafe", /*1*/
"Around 9 in 10 abortions occur during the first trimester", /*2*/
"Almost every death and injury from unsafe abortion can be prevented", /*3*/
"Only about half of immigrant women at risk for unintended pregnancy received contraceptive care in the last year. In contrast, two-thirds of U.S. born women received contraceptive care", /*4*/
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

