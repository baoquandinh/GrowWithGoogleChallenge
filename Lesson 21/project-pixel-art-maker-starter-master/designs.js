// Variable declaration
let canvas = $('#pixelCanvas');
let square = $("td");
var button = $('#sizePicker input[type=submit]');
var color = $('#colorPicker');

// Creates the grid
function makeGrid(){
    var height, width, row, column;
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    row = ('<tr></tr>');
    column = ('<td></td>');
    // Crates the row
    for (var i = 1; i <= height; i++){
        canvas.append(row);
        console.log("Row: " + i);
        // Creates the column
        for (var j = 1; j <= width; j++) {
            $("tr:last").append(column);
            console.log("Column: " + j);
        }
    }
}

// Clears the grid
function clearGrid() {
    canvas.empty();
}

// Sets the color
function setColor(that) {
    // Will remove the color on the td if another color is already present
     if (($(this).css('background-color')) != 'rgba(0, 0, 0, 0)'){
        console.log("Removing color...");
        $(this).css('background-color', 'rgba(0,0,0,0)');
    }
    else {
        $(this).css('background-color', color.val());
    }
}

// Changes color of square on click
canvas.on('click', 'td', function(){
    // Will remove the color on the td if another color is already present
     if (($(this).css('background-color')) != 'rgba(0, 0, 0, 0)'){
        console.log("Removing color...");
        $(this).css('background-color', 'rgba(0,0,0,0)');
    }
    else {
        $(this).css('background-color', color.val());
    }
});

// Shows color of square on hover
canvas.on('hover', 'td', function(){
    $(this).css('background-color', color.val());
}, function(){
    $(this).css('background-color', 'rgba(0,0,0,0)');
});


// Listen to when the submit button is click
button.click(event, function(){
    console.log("Clearing the grid...");
    clearGrid();
    console.log("Making the grid...");
    makeGrid();
    event.preventDefault();
});









































