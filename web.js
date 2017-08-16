let tool = require('./index.js');

let greeting = ocument.getElementById(greeting).value;
let showProductButtonTitle = document.getElementById(showProductButtonTitle).value;
let websiteButtonTitle = document.getElementById(websiteButtonTitle).value;
let websiteButtonUrl = document.getElementById(websiteButtonUrl).value;
let customButtonTitle = document.getElementById(customButtonTitle).value;
let customButtonText = document.getElementById(customButtonText).value;

function changeConfig () {
	tool.changeConfig(greeting, showProductButtonTitle, websiteButtonTitle, websiteButtonUrl, customButtonTitle, customButtonText);
}