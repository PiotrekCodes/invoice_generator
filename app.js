const gigBtns = [
  document.querySelector(".gig-1"),
  document.querySelector(".gig-2"),
  document.querySelector(".gig-3"),
];
const taskUl = document.querySelector(".task-container");
const totalServiceCost = document.querySelector(".total-amount");
const sendBtn = document.querySelector(".send-btn");
let totalCost = 0;

let services = [
  { name: "Wash Car", cost: 15 },
  { name: "Mow lawn", cost: 20 },
  { name: "Pull Weeds", cost: 30 },
];

function renderButtons() {
  for (let i = 0; i < gigBtns.length; i++) {
    gigBtns[i].textContent = `${services[i].name}: $${services[i].cost}`;
  }
}

function renderCost() {
  totalServiceCost.textContent = `$ ${totalCost}`;
}

if (services) {
  renderButtons();
}

for (let i = 0; i < gigBtns.length; i++) {
  gigBtns[i].addEventListener("click", function () {
    taskUl.innerHTML += `<li class=" list li-${i}">
      <span>
        <span class="task-name"> ${services[i].name} </span>
      </span>
      <span class="task-cost">$ ${services[i].cost} </span>
    </li>`;
    gigBtns[i].disabled = true;
    totalCost += services[i].cost;
    renderCost();
  });
}

sendBtn.addEventListener("click", function () {
  taskUl.innerHTML = "";
  totalCost = 0;
  renderCost();
  for (let i = 0; i < gigBtns.length; i++) {
    gigBtns[i].textContent = `${services[i].name}: $${services[i].cost}`;
    gigBtns[i].disabled = false;
  }
});
