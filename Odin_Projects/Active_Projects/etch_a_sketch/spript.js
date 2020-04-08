

// Javascript file for Etch a Sketch Project
//Completed by Alex Leloup for the Odin Project
// Will comment throughout file to explain what was done and 
// how code was arrived at. 

// Creat a webpage with 16x16 grid of square divs using javascript.

const container = document.getElementById("container"); // this takes the divs that were created by the below loop and stored 
// into cell variable, that were added to the container variable... and makes this information available to the ID attribute 
// in html

function makeRows(rows, cols) { //function named makeRows with variables of 'rows', 'cols' created.

 container.style.setProperty('--grid-rows', rows); //'--grid-rows' creates a css variable(custom property) named grid-rows.
  container.style.setProperty('--grid-cols', cols); //'--grid-cols' creates a css variable(custom property) named grid-cols.
  for (i = 0; i < (rows * cols); i++) { // loop will keep running as long as the total of cells is less that rows * cols.
    let cell = document.createElement("div"); //every time loop runs new div element created
    cell.innerText = (i + 1); // each variable 'cell' that contains the newly created div displays the number div it is.
    container.appendChild(cell).className = "grid-item"; // every time a new cell is added in the loop it receives class name of "grid-item"
  };
}
makeRows(16, 16); // uses the values of 16,16 within the makeRows function.

