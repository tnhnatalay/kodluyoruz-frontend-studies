let counter = JSON.parse(localStorage.getItem("counter"));
let counterDom = document.querySelector("#counter");
let increasDom = document.querySelector("#increase");
let decreaseDom = document.querySelector("#decrease");
let resetDom = document.querySelector("#reset");

counterDom.innerHTML = counter;
decreaseDom.addEventListener("click", clickEvent);
increasDom.addEventListener("click", clickEvent);
resetDom.addEventListener("click", resetEvent);

function clickEvent() {
  console.log(this.id);
  this.id == "increase" ? (counter += 1) : (counter -= 1);
  localStorage.setItem("counter", counter);
  counterDom.innerHTML = counter;
}

function resetEvent() {
  console.log("sıfırla");
  counter = 0;
  counterDom.innerHTML = counter;
  localStorage.setItem("counter", counter);
}
