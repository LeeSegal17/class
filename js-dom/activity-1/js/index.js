// Drawing circles in an svg with JavaSciprt 
'use strict';

// Constants / global variables
const height = 255;
const width = 255;
const fill = '#d3d3d3';
const namespace = 'http://www.w3.org/2000/svg';

// State of our application
let state = {
    circles: []
};

// Create a `p` element DOM


// Set the inner HTML of the paragraph to be some bold text


// Select the element with class `container`, and append the paragraph to it


// Select `svg` element from the DOM


// Set the width and height attributes using `setAttribute`


// Add a `rect` with the same width and height, and set the fill to `fill`
// Note, you'll have to use `createElementNS` with our namespace
// Also, set the pointerEvents to 'none'. Then, append this `rect` to the svg



// Create a button with class "btn center-align" and append it to the element with class container.
// You want to have it *inserted before* the div with class `svg-wrapper`
let button = document.createElement('button');
button.className = "btn center-align";
let svgWrapper = document.querySelector('.svg-wrapper');
document.querySelector('.container').insertBefore(button, svgWrapper);
button.textContent = 'clear';


// Function to render a circle in a parent element
function renderCircle(coord, parent) {
    // Create the circle
    let circle = document.createElementNS(namespace, 'circle');
    circle.setAttribute('cx', coord.x);
    circle.setAttribute('cy', coord.y);
    circle.setAttribute('r', 10);
    // Define styles
    circle.style.opacity = 0.3;
    circle.style.pointerEvents = 'none';
    circle.style.fill = 'rgb(0, ${coor.x"}, ${coor.y})';
    // Append
    parent.appendChild(circle);

}

// Function to draw all circles in a parent
function drawCircles(data, parent) {

}

// Function to clear circles from a parent
function clearCircles(parent) {

}

// Assign event listener - on click:
// - push a new data element into the state
// - call the `update` function
svg.addEventListner('click', function(event) {
    console.log(event); //shares all the information about the object event
    state.circles.push({x:event})
} );


// Update function: call `clearCircles`, `drawCircles`, and `updateText`
function update() {
    // Clear container

    // Update container contents

}

// Text function: change paragraph text to display the number of circles, and avg. color.
// Avg. color (in rgb) is the avg. x position (green) and avg. y position (blue)
// Set the text to be that color
function updateText(data) {
    let p = document.querySelector('p');
    // Compute average in x direction (green)
    let green = data.reduce(function(a, b) {
        console.log(a,b);
        return a + b.x;
    }, 0); 



    // Compute average in x y direction (blue)


    // Set values to 0 if there is no data


    // Set text string and the color of the element

}

// Assign an event listener for the `clear` button
// Reset state.circles to an empty array and then `update`
