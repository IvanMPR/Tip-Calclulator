const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const split = document.getElementById("split");
const inputs = document.querySelectorAll("input");
///////////////////////////////////////////////////////////////
const calculatedTip = document.getElementById("tip-display");
const calculatedTotal = document.getElementById("total-display");
const calculatedSplit = document.getElementById("per-person-display");
///////////////////////////////////////////////////////////////
const animation = document.getElementById("animation");
const button = document.querySelector("#calc");
const resetButton = document.querySelector("#reset");
const resultsBox = document.getElementById("display-info");
//////////////////////////////////////////////////////////////////////
window.addEventListener("load", function () {
  bill.focus();
});
////////////////////////////////////////////////////////////////////
function calcTip(billAm, splitAm = 1, tipAm) {
  if (!billAm || !tipAm) {
    alert(
      "Bill amount and tip amount are mandatory fields ! Please fill them both !"
    );
    inputs.forEach((input) => (input.value = ""));
    bill.focus();

    return;
  }

  calculatedTip.textContent = ((billAm * tipAm) / 100).toFixed(2);
  calculatedTotal.textContent = (billAm + (billAm * tipAm) / 100).toFixed(2);
  calculatedSplit.textContent = (
    (billAm + (billAm * tipAm) / 100) /
    splitAm
  ).toFixed(2);

  resultsBox.classList.remove("hidden");
  resultsBox.classList.add("visible");
}

function reset() {
  resultsBox.classList.remove("visible");
  resultsBox.classList.add("hidden");
  // ////////////////////////////////
  calculatedTip.textContent = "";
  calculatedTotal.textContent = "";
  calculatedSplit.textContent = "";
  ////////////////////////////////////
  inputs.forEach((input) => (input.value = ""));
  /////////////////////////////////////////////////
  bill.focus();
}

button.addEventListener("click", function () {
  calcTip(
    parseInt(bill.value),
    parseInt(split.value) || undefined,
    parseInt(tip.value)
  );
});
resetButton.addEventListener("click", reset);
