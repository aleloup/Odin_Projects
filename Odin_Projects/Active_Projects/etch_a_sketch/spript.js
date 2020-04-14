

// Javascript file for Etch a Sketch Project
//Completed by Alex Leloup for the Odin Project
// Will comment throughout file to explain what was done and 
// how code was arrived at. 

// Creat a webpage with 16x16 grid of square divs using javascript.

const gridContainer = document.getElementById("gridContainer"); // this takes the divs that were created by the below loop and stored 
// into cell variable, that were added to the container variable... and makes this information available to the ID attribute 
// in html
const newGridBtn = document.getElementById('newGridBtn'); 
const greenButton = document.getElementById('greenButton'); 

function makeRows(rows, cols) { //function named makeRows with variables of 'rows', 'cols' created.

gridContainer.style.setProperty('--grid-rows', rows); //'--grid-rows' creates a css variable(custom property) named grid-rows.
gridContainer.style.setProperty('--grid-cols', cols); //'--grid-cols' creates a css variable(custom property) named grid-cols.
  for (i = 0; i < (rows * cols); i++) { // loop will keep running as long as the total of cells is less that rows * cols.
   let cell = document.createElement("div"); //every time loop runs new div element created
    cell.innerText = (i + 1); // each variable 'cell' that contains the newly created div displays the number div it is.
    cell.onmouseover = function() {
      cell.style.backgroundColor = 'black';
      cell.style.color = 'white';
    };
    gridContainer.appendChild(cell).className = "grid-item"; // every time a new cell is added in the loop it receives class name of "grid-item"
}
}
 function turnGreen (){
      cell.onmouseover = function() {
      cell.style.backgroundColor = 'green';
      cell.style.color = 'white';
    };
 };


 function clearGrid (){
  let cell = document.getElementsByClassName("grid-item");
  for (i = 0; i < cell.length; i++){
    cell[i].style.backgroundColor = "white";
    cell[i].style.color = "black";
  }
 
 };


makeRows(16, 16); // uses the values of 16,16 within the makeRows function.

newGridBtn.addEventListener("click", function() {
  clearGrid();
}
);

greenButton.addEventListener("click", function() {
  turnGreen();
}
);
