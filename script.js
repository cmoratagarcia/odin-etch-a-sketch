const container = document.querySelector(".container");
const sizeBtn = document.querySelector("#size-button");

sizeBtn.addEventListener("click", function () {
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
  let toNumber = Number(string);
  //Error if number is higher that 100/lower than 0 or is NaN
  if (toNumber > 100 || toNumber < 0 || isNaN(toNumber)) {
    alert("Wrong value!");
    return;
  }
  //Make the number square
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
      pixel.classList.add("dark");
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
