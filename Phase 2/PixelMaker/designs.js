// Variable declaration
let button = $('#sizePicker input[type=submit]');
let rows = document.createElement('tr');
let canvas = document.getElementById('pixelCanvas');
let heightValue = document.getElementById('inputHeight');
let widthValue = document.getElementById('inputWidth');

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    let height = heightValue.value;
    let width = widthValue.value;
    console.log("Checking inputs before running function");
    if (height <= 0 || width <= 0) {
        console.log("Sorry, no input detected. Please enter an input.");
        alert.apply("Please enter an input");
    } else {
        for (let row in width) {
            console.log(row);
            console.log(width);
            canvas.appendChild(rows);
        }
    }
}

button.click(event, function() {
    makeGrid();
    event.preventDefault()
});
