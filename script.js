const container = document.querySelector(".container");
const startBtn = document.querySelector("#start-button");

startBtn.addEventListener("click", function () {
  // Get user input using prompt
  const userInput = prompt(
    "Enter a number to set the size of your grid (0 to 100)"
  );

  // Check if the user entered a value
  if (userInput !== null) {
    // Call the createGrid function with the user input
    createGrid(userInput);
  }
});

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
  container.innerHTML = "";

  for (let i = 0; i < divQtty; i++) {
    let square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");
    container.setAttribute(
      "style",
      `grid-template-columns: repeat(${toNumber}, 1fr); grid-template-rows: repeat(${toNumber}, 1fr)`
    );
  }

  const pixels = document.querySelectorAll(".square");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.classList.toggle("dark");
    });
    pixel.addEventListener("click", () => {
      pixels.forEach((pixel) => {
        pixel.classList.remove("dark");
      });
    });
  });
}

//Initialize function at 16 * 16, as per project requirement
createGrid(16);
