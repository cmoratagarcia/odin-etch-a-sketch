const container = document.querySelector(".container");
let divString = prompt("Please enter a number between 0 and 100");
//Create function that takes user input and converts it to div grid

//Initialize function at 16 * 16
function createGrid(string) {
  //Convert user input to number and make it square
  let divQtty = Number(string) * Number(string);

  for (let i = 0; i < divQtty; i++) {
    let square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");
  }
}
createGrid(divString);
