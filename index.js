// @Elisandro This variable{object} contains the actual html element with the id of jsContainer
const jsContainer = document.getElementById('jsContainer'); // const just means that the base value cannot change.
//@Elisandro const a = 12; a = 13 will throw an error

// @Elisandro Variables don't need to be created with values
let inputElement;
let inputButton;

// @Elisandro Calling this function with a string will add a string to our container!
function addTextToContainer(textAsParameter) {
	let newTextElement = document.createElement('p');

	// @Elisandro We have created the new element. If we don't do anything with it, it will be "Garbage Collected"
	// So this doesn't happen, we are going to apply the textAsParameter to it and then append it to our container element
	newTextElement.innerText = textAsParameter;

	jsContainer.appendChild(newTextElement);
}

// @Elisandro functions don't always have to have a direct action. They can be used to clean up your code
(function setUpInput() {
	inputElement = document.getElementById('testInput');
	inputButton = document.getElementById('testButton');

	inputButton.onclick = onButtonClick;
})(); //@elisandro wrapping a function in ('function goes here')() will automatically run that function

function onButtonClick() {
	//  @Elisandro console logs are useful for testing
	console.log('poop');
	addTextToContainer(inputElement.value);
}

addTextToContainer('poop');
