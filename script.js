let data;
let values = {}

function preload() {
  data = loadJSON("data.json");
}

let colors = {}
const grades = ["A","B","C","D"]

function setup() {
  data = Object.values(data);
  colors.A = color("#76a865");
  colors.B = color('#7bb1b9');
  colors.C = color('#fcfc04');
  colors.D = color('#d7848b');
  
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(2);
  noLoop();
}

function draw() {
  let sortedValues;
  let decorations;
  let drawingData;
  drawGeoIDs() // eventually you'll delete this line
  drawHBarChart(10,10,width-20,height-20,drawingData,decorations);
}

function drawGeoIDs() {
  let x = 10;
  let y = 10;
  let dy = 3;
  let dx = 18;
  for( const tract of data ) {
    fill(colors[tract.class1]);
    if( y < height ) {
      text(tract.geoid20, x, y );
      y += dy;
    } else {
      x += dx;
      y = 10;
    }
    
  }  
}

function drawHBarChart(x,y,w,h,data,decorations,bounds={min:0,max:450}) {

}