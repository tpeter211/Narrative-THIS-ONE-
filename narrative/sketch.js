let myTitle;
let myButton;
let buttonPush;
let myParagraph;
let myInput;
let myString;
let myNewParagraph;
let mySelect;
let selectVal;
let mySlider;
let sliderVal;
let myHiddenDiv;

function setup() {
  noCanvas();
  myButton = select('#myButton');
  myButton.mousePressed(buttonPressed);
  myTitle = select('#myTitle');
  myInput = select('#myInput');
  myParagraph = select('#myParagraph');
  myNewParagraph=select('#myNewParagraph');
  mySlider = select('#mySlider');

  myHiddenDiv = select('#myHiddenDiv');

  myString = '';
  buttonPush = 0;
}

function buttonPressed() {
  console.log('pressed');
  myTitle.html('___________________________');
  myButton.hide();
  showInput();
}













function showInput() {
  myInput.show();
  myParagraph.show();
}
