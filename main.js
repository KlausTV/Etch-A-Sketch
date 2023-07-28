console.log("Script executed");
// Variables
const container = document.querySelector(".container");
const cells = document.getElementsByClassName("cell");

function makeRows(numRows) {
  // Calculate the total number of cells needed
  const totalCells = numRows * numRows;

  // Set the CSS style for the container to create a grid layout
  container.style.gridTemplateColumns = `repeat(${numRows}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

  // Create and append cells to the container
  for (let i = 0; i < totalCells; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}

makeRows(16);
