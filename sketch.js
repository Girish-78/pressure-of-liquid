 let tankHeight = 300; // Height of the tank in pixels
let liquidHeight = 0; // Current height of the liquid in the tank (in meters)
let maxHeight = 10; // Maximum height of the liquid in meters
let density = 1000; // Density of the liquid in kg/m^3
let gravity = 9.8; // Gravity on Earth in m/s^2
let pressure = 0; // Pressure at the bottom of the tank

let heightSlider, densitySlider, gravitySelect;
let heightDisplay, densityDisplay, pressureDisplay;

function setup() {
  createCanvas(600, 600);

  // Sliders and dropdowns
  heightSlider = createSlider(0, maxHeight, 0, 0.1);
  heightSlider.position(20, 20);
  heightSlider.style('width', '150px');

  densitySlider = createSlider(1000, 14000, 1000, 100);
  densitySlider.position(20, 60);
  densitySlider.style('width', '150px');

  gravitySelect = createSelect();
  gravitySelect.position(20, 100);
  gravitySelect.option('Earth (9.8 m/s²)', 9.8);
  gravitySelect.option('Moon (1.62 m/s²)', 1.62);
  gravitySelect.option('Mars (3.71 m/s²)', 3.71);
  gravitySelect.option('Jupiter (24.79 m/s²)', 24.79);

  // Displays
  heightDisplay = createP('Height of liquid: 0 m');
  heightDisplay.position(200, 5);
  densityDisplay = createP('Density: 1000 kg/m³');
  densityDisplay.position(200, 45);
  pressureDisplay = createP('Pressure at bottom: 0 Pa');
  pressureDisplay.position(200, 85);
}

function draw() {
  background(255);

  // Get values from sliders and dropdown
  liquidHeight = heightSlider.value();
  density = densitySlider.value();
  gravity = float(gravitySelect.value());

  // Update displays
  heightDisplay.html(`Height of liquid: ${liquidHeight.toFixed(2)} m`);
  densityDisplay.html(`Density: ${density.toFixed(0)} kg/m³`);
  pressure = liquidHeight * density * gravity;
  pressureDisplay.html(`Pressure at bottom: ${pressure.toFixed(2)} Pa`);

  // Draw the tank (moved downwards)
  fill(200);
  rect(100, heightSlider.y + 300, 200, tankHeight);

  // Draw the liquid inside the tank
  let liquidPixels = map(liquidHeight, 0, maxHeight, 0, tankHeight);
  fill(100, 150, 255);
  rect(100, heightSlider.y + 300 + tankHeight - liquidPixels, 200, liquidPixels);
}
