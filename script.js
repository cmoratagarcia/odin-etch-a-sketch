const container = document.querySelector(".container");
let divString = prompt("Please enter a number between 0 and 100");
//Create function that takes user input and converts it to div grid
//Convert user input to number Number(quantity)
//Initialize function at 16 * 16
function createGrid(string) {
  let divQtty = Number(string);
  for (let i = 0; i < divQtty; i++) {
    let square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");
  }
}
createGrid(divString);
