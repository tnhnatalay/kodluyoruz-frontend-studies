let taskDOM = document.querySelector("#task");
let listDOM = document.querySelector("#list");
let allLiDOM = document.querySelectorAll("li");

function removeElement(erase) {
  erase.remove();
  eraseStorage(erase);
}

function markElement() {
  this.classList.toggle("checked");
}


const closeButton = `<button onclick="removeElement(parentNode)" style="padding: 13px;" type="button" class="close" data-dismiss="toast" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>`;

allLiDOM.forEach((e) => {
  e.addEventListener("click", markElement);
  e.innerHTML += `${closeButton}`;
});

function newElement() {
  if (taskDOM.value && taskDOM.value.trim()) {
    let liDOM = document.createElement("li");

    listDOM.append(liDOM);

    $(".success").toast("show");
    console.log(`Listeye eklendi. Girilen değer: ${taskDOM.value}`)

    liDOM.innerHTML = `${taskDOM.value}${closeButton}`;

    liDOM.addEventListener("click", markElement);

    setStorage();
  } else {
    $(".error").toast("show");
    console.log("Listeye boş ekleme yapamazsınız!");

    taskDOM.value = "";
  }
  taskDOM.value = "";
}


function localSelf() {
    let toDoList = JSON.parse(localStorage.getItem("toDoList"))   

    if (!toDoList) {toDoList = []}

    localStorage.setItem("toDoList", JSON.stringify(toDoList))
}

function setStorage() {
  let toDoList = JSON.parse(localStorage.getItem("toDoList"));

  toDoList.push(`${taskDOM.value}`);

  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

function eraseStorage(erase) {
  let toDoList = JSON.parse(localStorage.getItem("toDoList"));

  if (toDoList.includes(erase.firstChild.textContent) === true) {
    let indexbul = toDoList.findIndex((e) => e == erase.firstChild.textContent);

    toDoList.splice(indexbul, 1);

    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }
}

function localDOM() {
  let toDoList = JSON.parse(localStorage.getItem("toDoList"));

  toDoList.forEach((e, index) => {
    let liDOM = document.createElement("li");
    listDOM.append(liDOM);
    liDOM.innerHTML = toDoList[index];
    liDOM.innerHTML += closeButton;
    listDOM.addEventListener("click", markElement);

    liDOM.addEventListener("click", markElement);
  });
}

localSelf();

localDOM();
