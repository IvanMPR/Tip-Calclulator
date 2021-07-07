const billInput = document.getElementById("bill").value;
const splitInput = document.getElementById("split").value;
const tipInput = document.getElementById("tip").value;
const animationBox = document.getElementById("display-info");
const tipDisplayContent = document.getElementById("tip-display");
const totalDisplayContent = document.getElementById("total-display");
const personDisplayContent = document.getElementById("per-person-display");
const animation = document.getElementById("animation");

document.getElementById("btn").addEventListener("click", function () {
  //   var delay = Math.floor(Math.random() * 2 + 1) * 1000;
  if (!billInput && !tipInput)
    alert("Please enter bill amount and tipping percentage amount !");
  if (!billInput) alert("Please type in the bill amount !");
  if (!tipInput) alert("Please type in your tipping percentage !");

  const calculateTip = function (bill, split = 1, tipPercentage) {
    const tipDisplay = (bill * tipPercentage) / 100;
    const totalDisplay = bill + tipDisplay;
    const perPersonDisplay = totalDisplay / split;

    tipDisplayContent.innerText = tipDisplay;
    totalDisplayContent.innerText = totalDisplay;
    personDisplayContent.innerText = perPersonDisplay;
  };

  animationBox.classList.remove("hidden");
  animationBox.classList.add("visible");

  //   setTimeout(() => {
  //   var billInput = document.getElementById("bill");
  //   var bill = parseInt(billInput.value);
  //   var splitInput = document.getElementById("split");
  //   var split = parseInt(splitInput.value);
  //   var tipInput = document.getElementById("tip");
  //   var tip = parseInt(tipInput.value);
  //   var tipDisplay = (bill * tip) / 100;
  //   var totalDisplay = bill + tipDisplay;
  //   var perPersonDisplay = totalDisplay / split;
  //   document.getElementById("animation").classList.remove("visible");
  //   document.getElementById("animation").classList.add("hidden");
  //   document.getElementById("tip-display").innerHTML = tipDisplay;
  //   document.getElementById("total-display").innerHTML = totalDisplay;
  //   document.getElementById("per-person-display").innerHTML = perPersonDisplay;
  document.getElementById("display-info").classList.remove("hidden");
  document.getElementById("display-info").classList.add("visible");
  //   }, delay);
});
