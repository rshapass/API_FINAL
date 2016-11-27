var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var q = "&q="
var url;
var img;
var textBox;
var output;
var button;


function setup() {
  createCanvas(1000, 1000);
  background(252, 142, 172);
  textBox = createInput('');
  button = createButton('Gimme GIFs')
  output = createP('wanna see some cats?');
  button.mouseReleased(submitText);

}

function submitText() {
  output.html(textBox.value());
  canvasText = textBox.value();
}

function renderText() {
  output.html(textBox.value());
}

function gotData(giphy) {
  gif = giphy;
  url = api + apiKey + q + output;
  img = createImg(gif.data.images.original.url);
  img.position(200, 250);

}

function draw() {
  background(252, 142, 172)
  if (gif){
    loadJSON(url, gotData);
  }

}