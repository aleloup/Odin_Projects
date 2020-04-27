//Etch-a-Sketch Program
//Created for Odin Project


// element with container ID is accessed using the 'cont' javascript variable.
const cont=document.getElementById("container");


let n = Number(window.prompt('Enter a number for your grid size', "16"));

//giving the a variable a value of black.
let a="black";

//code for blue color
let blue=document.querySelector('#blue');
blue.addEventListener('click',function(e){a="blue";
}
)
blue.style.backgroundColor="blue";

//code for red color
let red=document.querySelector('#red');
red.addEventListener('click',function(e){a="red";
})
red.style.backgroundColor="red";

//code for green color
let green=document.querySelector('#green');
green.addEventListener('click',function(e){a="green";
})
green.style.backgroundColor="green";

//code for black color
let black=document.querySelector('#black');
black.addEventListener('click',function(e){a="black";
})
black.style.backgroundColor="black";

//code for yellow color
let yellow=document.querySelector('#yellow');
yellow.addEventListener('click',function(e){a="yellow";
})
yellow.style.backgroundColor="yellow";
yellow.style.color="black";

//code for random color
/* ---- old code
let rnd=document.querySelector('#random');
rnd.addEventListener('click',function(e){a='#'+Math.floor(Math.random()*16777215).toString(16);
})
*/

//new code for random color.

let random =document.querySelector('#random');

function generateRandomColor(){
  document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseover', colorfulColors))
}
function colorfulColors(){
   const colors = ['red','green','blue','yellow','orange','brown','pink','darkred','purple','grey','cyan','lightblue','lightgreen','darkbrown',];
   this.style.backgroundColor = `${colors[Math.floor(Math.random() * colors.length)]}`;
}
random.addEventListener('click',generateRandomColor)

//code for erase - returns color to initial color website started with.
let erase=document.querySelector('#erase');
erase.addEventListener('click',function(e){a="#53A0AC";
  document.body.style.cursor = "url('eraser.png',auto)";
})

//----------------------------------------------------------------------------------------------------
//Function to make grid
function grid(n){
//giving values to const container variable defined above
  cont.style.gridTemplateColumns= `repeat(${n},1fr)`;
  cont.style.gridTemplateRows= `repeat(${n},1fr)`;

  // Create array to make grids
  // Loop will run the outer loop and the inner loop as long as both i & j stay less than n. Inner loop executes inside
    // the outer loop each time the outer loop executes once.
  for(let i=0;i<n;i++){ 
    for(let j=0;j<n;j++){
      let div=document.createElement('div'); //everytime i & j are less than n, new div created with classname of 'box', new background color
    div.className='box';
    div.style.backgroundColor="#53A0AC";
    cont.appendChild(div); //added to the newly created dix to the container div.
}}
  //change the color of boxes when hovered upon
  let boxes=document.querySelectorAll("div.box"); //creates variable that selects all divs with a classname of 'box'
  boxes.forEach(square=>{square.addEventListener('mouseover',function(e){e.target.style.backgroundColor=a;})}) ; //event listener for whenever the square v
  //variable is hovered over that it will fire the event and change the background color to a, which is defined above.

}
//--------------------------------------------------------------------------------------------------

//function to clear the grid
function clear(){
  let last=cont.lastElementChild; //defines the variable 'last' as the last child element in the container ID.
  while(last){
    cont.removeChild(last);
    last=cont.lastElementChild;
  }
}

//code for resize button
let resize=document.querySelector('#reset'); //reset variable is defined as the button in index.html with the reset ID.
resize.addEventListener('click',function(e){ //when this button is clicked it will fire an event.
  n=prompt("Enter grid size"); //which prompts user to input what size they want their grid.
  clear(); //clear function is run 
  grid(n); // new grid is created. 
})

//code for clear button
let clr=document.querySelector('#clear');
clr.addEventListener('click',function(e){
  clear();
  grid(n);
})

grid(n);