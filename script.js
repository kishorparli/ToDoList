const inputText = document.querySelector("#txt");
const myButton = document.querySelector(".btn-list");
const todos = document.querySelector("ul");


const check = () => {
  let vals =
    localStorage.getItem("todos") === null
      ? ""
      : localStorage.getItem("todos").split(",");
  if (vals != "" || vals[0] !== "")
    for (let i = 0; i < vals.length; i++) {
      if (vals[i] !== "")
        todos.innerHTML += `<li>${vals[i]}<span class="hey sp">X</span></li>`;
    }
};


check();


myButton.addEventListener("click", (e) => {
  if (inputText.value != "") {
    e.preventDefault();

    localStorage.setItem(
      "todos",
      localStorage.getItem("todos") === null
        ? inputText.value
        : localStorage.getItem("todos") + `,${inputText.value}`
    );

    todos.innerHTML += `<li>${inputText.value}<span class="hey sp">X</span></li>`;
  }
});

todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("hey")) {

    let vals =
      localStorage.getItem("todos") == null
        ? ""
        : localStorage.getItem("todos").split(",");

    let newVals = [];
    if (vals != "" || vals[0]) {
      for (let i = 0; i < vals.length; i++) {
        if (
          vals[i] !==
          e.target.parentNode.textContent.slice(
            0,
            e.target.parentNode.textContent.length - 1
          )
        ) {
          newVals.push(vals[i]);
        }
      }
    }
   
    e.target.parentNode.remove();
 
    localStorage.clear();
    localStorage.setItem("todos", newVals.join(","));

  }
});