let layerList = ["Education Facilities 3d", "Education Facilities Polygon", "Education Facilities Dots", "Primary Education Polygon", "Primary Education 3d", "Primary Education Dots", "Health Facilities Polygon", "Health Facilities 3d", "Health Facilities Dots", "Health Centers Polygon", "Health Facilities 3d", "Health Facilities Dots"]

// // add the html <h1>hello</h1> to the layer id "layer-radios"

// var layer = document.getElementById('layer-radios');
// let divElement = document.createElement('div').setAttribute('class', 'form-check').innerHTML;


// // Set the innerHTML of the div element to the HTML code you provided
// divElement.innerHTML = '<input class="form-check-input" type="radio" name="optionsRadios" id="all-radio" value="option1" checked="" /><label class="form-check-label" for="all-radio"> All bridge requests </label>';

// // Append the div element to the layer
// layer.appendChild(divElement);



// // Loop through each layer in the list
// var domID = document.getElementById('layer-radios');

// for (var i = 0; i < layerList.children.length; i++) {
//   // Get the current layer
//   var layer = layerList.children[i];

//   // Create a new div element
//   var divElement = document.createElement('div');

//   // Set the class attribute of the div element
//   divElement.setAttribute('class', 'form-check');

//   // Set the innerHTML of the div element to the corresponding text for the layer
//   divElement.innerHTML = '<input class="form-check-input" type="radio" name="optionsRadios" id="' + layer.id + '-radio" value="option' + (i+1) + '" checked="" /><label class="form-check-label" for="' + layer.id + '-radio"> ' + layerTexts[i] + ' </label>';

//   // Append the div element to the layer
//   layer.appendChild(divElement);
// }




// Get the layer with layerid1
var layer = document.getElementById('layer-radios');

// Create a new div element
var divElement = document.createElement('div');

// Set the class attribute of the div element
divElement.setAttribute('class', 'form-check');

// Set the innerHTML of the div element to the HTML code you provided
divElement.innerHTML = '<input class="form-check-input" type="radio" name="optionsRadios" id="all-radio" value="option1" checked="" /><label class="form-check-label" for="all-radio"> All bridge requests </label>';

// Append the div element to the layer
console.log(divElement)
layer.appendChild(divElement);