const container = document.querySelector(".container");
let divString = prompt("Please enter a number between 0 and 100");

//Initialize function at 16 * 16
//Create function that takes user input and converts it to div grid
function createGrid(string) {
  //Convert user input to number and make it square
  let toNumber = Number(string);
  //Error if number is higher that 100
  if (toNumber > 100 || toNumber < 0) {
    //Add error if NaN
    alert("Wrong value!");
    return;
  }
  let divQtty = toNumber * toNumber;

  for (let i = 0; i < divQtty; i++) {
    let square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");
    container.setAttribute(
      "style",
      `grid-template-columns: repeat(${toNumber}, 1fr); grid-template-rows: repeat(${toNumber}, 1fr)`
    );
  }
}
createGrid(divString);
